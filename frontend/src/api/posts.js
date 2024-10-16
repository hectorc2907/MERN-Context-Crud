// Importamos las instancias de Axios que hemos creado para manejar solicitudes HTTP
import { instance, formInstance } from "./axios.js";

// Función para obtener todos los posts mediante una solicitud GET
export const getPostsRequest = async () => await instance.get("/api/posts");

// Función para obtener un post específico por su ID mediante una solicitud GET
export const getPostRequest = async (id) =>
  await instance.get(`/api/posts/${id}`);

// Función para eliminar un post específico por su ID mediante una solicitud DELETE
export const deletePostRequest = async (id) =>
  await instance.delete(`/api/posts/${id}`);

// Función para crear un nuevo post mediante una solicitud POST
export const createPostRequest = async (post) => {
  const form = new FormData(); // Creamos un objeto FormData para manejar datos de formularios
  for (let key in post) {
    form.append(key, post[key]); // Añadimos cada campo del post al FormData
  }
  return await formInstance.post("/api/posts", form); // Enviamos el FormData con la solicitud POST
};

// Función para actualizar un post existente mediante una solicitud PUT
export const updatePostRequest = async (id, newPostFields) => {
  const form = new FormData(); // Creamos un objeto FormData para manejar datos de formularios
  for (let key in newPostFields) {
    form.append(key, newPostFields[key]); // Añadimos cada campo del post a actualizar al FormData
  }
  return await formInstance.put(`/api/posts/${id}`, form); // Enviamos el FormData con la solicitud PUT
};

// Interceptor de solicitud: Se ejecuta antes de enviar cualquier petición.
instance.interceptors.request.use(
  function (config) {
    // Si la solicitud es válida, la retorna para continuar.
    return config;
  },
  function (error) {
    // Si ocurre un error, lo rechaza para manejarlo en otro lugar.
    return Promise.reject(error);
  }
);

// Interceptor de respuesta: Se ejecuta al recibir una respuesta del servidor.
instance.interceptors.response.use(
  function (response) {
    // Retorna la respuesta para que pueda ser usada por el llamante.
    return response;
  },
  function (error) {
    // Rechaza el error para que pueda ser manejado en otro lugar.
    return Promise.reject(error);
  }
);
