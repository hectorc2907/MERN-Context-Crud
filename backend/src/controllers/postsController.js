// Controladores de posts para gestionar las operaciones CRUD

// Obtener todos los posts
export const getPosts = (req, res) => {
  // Envía una respuesta con un array vacío, simulando la lista de posts
  res.send([]);
};

// Crear un nuevo post
export const createPost = (req, res) => {
  // Envía un mensaje confirmando que se ha creado un nuevo post
  res.send("new post created");
};

// Obtener un post específico por su ID o criterio
export const getPost = (req, res) => {
  // Envía un mensaje simulando la recuperación de un post
  res.send("getting a post");
};

// Actualizar un post existente
export const updatePost = (req, res) => {
  // Envía un mensaje confirmando que se ha actualizado un post
  res.send("updating a post");
};

// Eliminar un post
export const deletePost = (req, res) => {
  // Envía un mensaje confirmando que se ha eliminado un post
  res.send("deleting a post");
};
