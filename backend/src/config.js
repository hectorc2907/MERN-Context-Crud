// Importa el paquete 'dotenv' para poder cargar variables de entorno desde un archivo .env
import { config } from "dotenv";

// Llama a la función 'config' de dotenv para inicializar las variables de entorno
config();

// Define el puerto en el que se ejecutará el servidor.
// Toma el valor de la variable de entorno 'PORT' o usa 3000 como valor por defecto si no está definida.
export const PORT = process.env.PORT || 3000;

// Exporta la URI de conexión a MongoDB desde las variables de entorno,
// asegurando que la aplicación pueda conectarse a la base de datos.
export const MONGODB_URI = process.env.MONGODB_URI;

// Exporta el nombre de la nube (Cloudinary) desde las variables de entorno,
// utilizado para configurar la carga de archivos o imágenes.
export const CLOUD_NAME = process.env.CLOUD_NAME;

// Exporta la clave de API desde las variables de entorno, necesaria para la autenticación con servicios externos.
export const API_KEY = process.env.API_KEY;

// Exporta el secreto de API desde las variables de entorno, utilizado junto con la clave para firmar solicitudes.
export const API_SECRET = process.env.API_SECRET;
