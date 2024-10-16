// Importa el módulo 'cloudinary' (versión 2) para manejar la carga y gestión de archivos en la nube.
import { v2 as cloudinary } from "cloudinary";

// Importa las credenciales de configuración desde el archivo 'config.js'.
import { API_KEY, API_SECRET, CLOUD_NAME } from "../config.js";

// Configura Cloudinary utilizando las credenciales definidas en las variables de entorno.
cloudinary.config({
  cloud_name: CLOUD_NAME, // Nombre de la nube proporcionado por Cloudinary.
  api_key: API_KEY, // Clave de API para autenticación de solicitudes.
  api_secret: API_SECRET, // Secreto de API utilizado para firmar las solicitudes.
});

// Define una función asíncrona para subir imágenes a Cloudinary.
export const uploadImage = async (filePath) => {
  // Utiliza el método 'upload' de Cloudinary para subir un archivo.
  // Especifica la carpeta 'posts' como destino dentro de Cloudinary.
  return await cloudinary.uploader.upload(filePath, {
    folder: "posts",
  });
};

// Define una función asíncrona para eliminar imágenes de Cloudinary.
export const deleteImage = async (id) => {
  // Utiliza el método 'destroy' de Cloudinary para eliminar la imagen por su ID.
  return await cloudinary.uploader.destroy(id);
};
