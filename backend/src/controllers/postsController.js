// Importa el modelo de posts desde la capa de modelos
import Posts from "../models/postsModel.js";

// Obtener todos los posts
export const getPosts = async (req, res) => {
  try {
    // Busca todos los posts en la base de datos
    const posts = await Posts.find({});
    // Devuelve la lista de posts en formato JSON con un estado 200 (OK)
    return res.status(200).json({ posts });
  } catch (error) {
    // Devuelve un estado 500 (Error interno) con el mensaje de error
    return res.status(500).json({ message: error.message });
  }
};

// Crear un nuevo post
export const createPost = (req, res) => {
  // Aún no implementado: debería crear un nuevo post usando los datos del cuerpo de la solicitud
  res.send("new post created");
};

// Obtener un post específico por su ID
export const getPost = (req, res) => {
  // Aún no implementado: debería recuperar y devolver un post basado en su ID
  res.send("getting a post");
};

// Actualizar un post existente
export const updatePost = (req, res) => {
  // Aún no implementado: debería actualizar un post específico con los datos proporcionados
  res.send("updating a post");
};

// Eliminar un post
export const deletePost = (req, res) => {
  // Aún no implementado: debería eliminar un post específico basado en su ID
  res.send("deleting a post");
};
