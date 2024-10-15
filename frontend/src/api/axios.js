// Importamos axios para la creación de instancias que facilitan las solicitudes HTTP
import axios from "axios";

// Crea una instancia de Axios para manejar las solicitudes al backend con configuración por defecto
export const instance = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL, // URL base del backend
  headers: {
    "Content-Type": "application/json", // Tipo de contenido para solicitudes JSON
  },
});

// Crea una instancia de Axios para manejar los formularios y subir archivos (puedes agregar configuraciones específicas si es necesario)
export const formInstance = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL, // URL base del backend
  headers: {
    "Content-Type": "multipart/form-data", // Tipo de contenido para formularios que incluyen archivos
  },
});
