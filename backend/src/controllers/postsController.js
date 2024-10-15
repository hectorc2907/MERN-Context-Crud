// Importa el modelo de posts desde la capa de modelos
import Posts from "../models/postsModel.js";

// Importa las funciones para subir y eliminar imágenes de Cloudinary
import { uploadImage, deleteImage } from "../libs/cloudinary.js";

// Importa el módulo 'fs-extra' para manejar operaciones de archivos (como eliminar archivos)
import fs from "fs-extra";

// Obtener todos los posts
export const getPosts = async (req, res) => {
  try {
    // Busca todos los posts en la base de datos
    const posts = await Posts.find({});
    // Devuelve la lista de posts en formato JSON con un estado 200 (OK)
    return res.status(200).json({ success: true, posts });
  } catch (error) {
    // Devuelve un estado 500 (Error interno) con el mensaje de error
    return res.status(500).json({ success: false, message: error.message });
  }
};

// Crear un nuevo post
export const createPost = async (req, res) => {
  try {
    // Desestructura el título y la descripción del cuerpo de la solicitud
    const { title, description } = req.body;

    // Inicializa la variable 'image' como null (se actualizará si hay imagen en la solicitud)
    let image = null;

    // Verifica si se ha enviado un archivo de imagen
    if (req.files?.image) {
      // Sube la imagen a Cloudinary y obtiene los detalles del archivo subido
      const result = await uploadImage(req.files.image.tempFilePath);
      // Elimina el archivo temporal una vez subido
      await fs.remove(req.files.image.tempFilePath);
      // Almacena la URL y el ID público de la imagen para asociarlo al post
      image = {
        url: result.secure_url,
        public_id: result.public_id,
      };
    }

    // Crea una nueva instancia del modelo Posts con los datos recibidos
    const newPost = new Posts({ title, description, image });

    // Guarda el nuevo post en la base de datos
    await newPost.save();

    // Responde con un estado 200 (OK) y un mensaje indicando éxito
    return res
      .status(200)
      .json({ success: true, message: "Post Created", newPost });
  } catch (error) {
    // Devuelve un estado 500 con el mensaje de error en caso de fallo
    return res.status(500).json({ success: false, message: error.message });
  }
};

// Obtener un post específico por su ID
export const getPost = async (req, res) => {
  try {
    // Extrae el ID del post desde los parámetros de la solicitud
    const { id } = req.params;

    // Busca el post en la base de datos utilizando el ID proporcionado
    const post = await Posts.findById(id);

    // Si no se encuentra el post, responde con un estado 404 (No Encontrado)
    if (!post) {
      return res
        .status(404)
        .json({ success: false, message: "Post not found" });
    }

    // Si el post existe, lo devuelve con un estado 200 (OK)
    return res.status(200).json({ success: true, post });
  } catch (error) {
    // Devuelve un estado 500 en caso de error se comenta para evitar mensajes de error en produccion
    // return res.status(500).json({ success: false, message: error.message });
    return res.json({ success: false });
  }
};

// Actualizar un post existente
export const updatePost = async (req, res) => {
  try {
    // Extrae el ID del post desde los parámetros de la solicitud
    const { id } = req.params;

    // Busca el post en la base de datos utilizando el ID proporcionado
    const post = await Posts.findById(id);

    // Si no se encuentra el post, responde con un estado 404 (No Encontrado)
    if (!post) {
      return res
        .status(404)
        .json({ success: false, message: "Post not found" });
    }

    // Verifica si se ha enviado una nueva imagen en la solicitud
    if (req.files?.image) {
      // Si el post tiene una imagen anterior, la eliminamos de Cloudinary
      if (post.image?.public_id) {
        await deleteImage(post.image.public_id);
      }

      // Sube la nueva imagen a Cloudinary y guarda su información
      const result = await uploadImage(req.files.image.tempFilePath);
      // Elimina la imagen temporal del sistema de archivos local
      await fs.remove(req.files.image.tempFilePath);
      // Actualiza el cuerpo de la solicitud con la nueva imagen
      req.body.image = {
        url: result.secure_url,
        public_id: result.public_id,
      };
    }

    // Busca y actualiza el post con los nuevos datos proporcionados en el cuerpo de la solicitud
    const updatedPost = await Posts.findByIdAndUpdate(
      id,
      {
        $set: req.body, // Reemplaza los datos actuales con los nuevos datos
      },
      { new: true } // Devuelve el post actualizado
    );

    // Si no se encuentra el post, responde con un estado 404 (No Encontrado)
    if (!updatedPost) {
      return res
        .status(404)
        .json({ success: false, message: "Post not found" });
    }

    // Devuelve el post actualizado con un estado 200 (OK)
    return res
      .status(200)
      .json({ success: true, message: "Post Updated", updatedPost });
  } catch (error) {
    // Devuelve un estado 500 en caso de error
    return res.status(500).json({ success: false, message: error.message });
  }
};

// Eliminar un post
export const deletePost = async (req, res) => {
  try {
    // Extrae el ID del post desde los parámetros de la solicitud
    const { id } = req.params;

    // Busca y elimina el post de la base de datos
    const post = await Posts.findByIdAndDelete(id);

    // Si el post tiene una imagen asociada, elimina la imagen de Cloudinary
    if (post && post.image.public_id) {
      await deleteImage(post.image.public_id);
    }

    // Si no se encuentra el post, responde con un estado 404 (No Encontrado)
    if (!post) {
      return res
        .status(404)
        .json({ success: false, message: "Post not found" });
    }

    // Devuelve un estado 200 (OK) indicando que el post fue eliminado con éxito
    return res
      .status(200)
      .json({ success: true, message: "Post Deleted", post });
  } catch (error) {
    // Devuelve un estado 500 en caso de error
    return res.status(500).json({ success: false, message: error.message });
  }
};
