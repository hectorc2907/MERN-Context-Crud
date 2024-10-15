// Importa el paquete 'dotenv' para poder cargar variables de entorno desde un archivo .env
import { config } from "dotenv";

// Llama a la función 'config' de dotenv para inicializar las variables de entorno
config();

// Define el puerto en el que se ejecutará el servidor.
// Toma el valor de la variable de entorno 'PORT' o usa 3000 como valor por defecto.
export const PORT = process.env.PORT || 3000;
// Exporta la URI de conexión a MongoDB, que se toma de las variables de entorno
export const MONGODB_URI = process.env.MONGODB_URI;
