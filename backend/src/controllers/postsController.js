// Importa el modelo de posts desde la capa de modelos
import Posts from "../models/postsModel.js";

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
  // Intenta ejecutar el bloque de código para crear un nuevo post
  try {
    // Desestructura el título y la descripción del cuerpo de la solicitud
    const { title, description } = req.body;

    // Inicializa la variable image como null (se puede modificar según la lógica de la aplicación)
    let image = null;

    // Crea una nueva instancia del modelo Posts con los datos obtenidos
    const newPost = new Posts({ title, description, image });

    // Guarda el nuevo post en la base de datos
    await newPost.save();

    // Responde con un estado 200 (OK) y un objeto JSON indicando éxito
    return res
      .status(200)
      .json({ success: true, message: "Post Created", newPost });
  } catch (error) {
    // Si ocurre un error, responde con un estado 500 (Error Interno del Servidor) y el mensaje de error
    return res.status(500).json({ success: false, message: error.message });
  }
};

// Obtener un post específico por su ID
export const getPost = async (req, res) => {
  // Intenta ejecutar el bloque de código para recuperar un post
  try {
    // Desestructura el ID del post desde los parámetros de la solicitud
    const { id } = req.params;

    // Busca el post en la base de datos utilizando el ID proporcionado
    const post = await Posts.findById(id);

    // Si el post no se encuentra, responde con un estado 404 (No Encontrado)
    if (!post) {
      return res
        .status(404)
        .json({ success: false, message: "Post not found" });
    }

    // Si el post se encuentra, responde con un estado 200 (OK) y el post en el cuerpo de la respuesta
    return res.status(200).json({ success: true, post });
  } catch (error) {
    // Si ocurre un error, responde con un estado 500 (Error Interno del Servidor) y el mensaje de error
    return res.status(500).json({ success: false, message: error.message });
  }
};

// Actualizar un post existente
export const updatePost = async (req, res) => {
  // Intenta ejecutar el bloque de código para actualizar un post
  try {
    // Desestructura el ID del post desde los parámetros de la solicitud
    const { id } = req.params;

    // Busca y actualiza el post en la base de datos utilizando el ID proporcionado
    const updatedPost = await Posts.findByIdAndUpdate(
      id,
      {
        $set: req.body, // Establece los nuevos datos del cuerpo de la solicitud
      },
      { new: true } // Devuelve el documento actualizado
    );

    // Si no se encuentra el post, responde con un estado 404 (No Encontrado)
    if (!updatedPost) {
      return res
        .status(404)
        .json({ success: false, message: "Post not found" });
    }

    // Responde con un estado 200 (OK) y un mensaje de éxito junto con el post actualizado
    return res
      .status(200)
      .json({ success: true, message: "Post Updated", updatedPost });
  } catch (error) {
    // Si ocurre un error, responde con un estado 500 (Error Interno del Servidor) y el mensaje de error
    return res.status(500).json({ success: false, message: error.message });
  }
};

// Eliminar un post
export const deletePost = async (req, res) => {
  // Intenta ejecutar el bloque de código para eliminar un post
  try {
    // Desestructura el ID del post desde los parámetros de la solicitud
    const { id } = req.params;

    // Busca y elimina el post en la base de datos utilizando el ID proporcionado
    const post = await Posts.findByIdAndDelete(id);

    // Si el post no se encuentra, responde con un estado 404 (No Encontrado)
    if (!post) {
      return res
        .status(404)
        .json({ success: false, message: "Post not found" });
    }

    // Responde con un estado 200 (OK) y un mensaje de éxito junto con el post eliminado
    return res
      .status(200)
      .json({ success: true, message: "Post Deleted", post });
  } catch (error) {
    // Si ocurre un error, responde con un estado 500 (Error Interno del Servidor) y el mensaje de error
    return res.status(500).json({ success: false, message: error.message });
  }
};
