// Importa StrictMode desde React para habilitar comprobaciones adicionales en desarrollo
import { StrictMode } from "react";

// Importa createRoot para inicializar la renderización de React en el DOM
import { createRoot } from "react-dom/client";

// Importa BrowserRouter para manejar la navegación en la aplicación con React Router
import { BrowserRouter } from "react-router-dom";

// Importa el componente principal de la aplicación
import App from "./App.jsx";

// Importa los estilos CSS globales
import "./index.css";

// Crea la raíz del DOM usando el ID 'root' del archivo HTML y renderiza la aplicación
createRoot(document.getElementById("root")).render(
  // StrictMode envuelve la aplicación para detectar errores y advertencias en el modo de desarrollo
  <StrictMode>
    {/* BrowserRouter habilita la navegación basada en rutas */}
    <BrowserRouter>
      {/* Renderiza el componente principal de la aplicación */}
      <App />
    </BrowserRouter>
  </StrictMode>
);
