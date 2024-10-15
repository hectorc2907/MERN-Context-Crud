// Importa los componentes necesarios desde react-router-dom
import { Route, Routes } from "react-router-dom";

// Importa las páginas que se usarán como rutas en la aplicación
import HomePage from "./pages/HomePage";
import PostForm from "./pages/PostForm";
import NotFoundPage from "./pages/NotFoundPage";

// Importa Toaster de react-hot-toast para mostrar notificaciones
import { Toaster } from "react-hot-toast";

// Componente principal de la aplicación
const App = () => {
  return (
    // Define un contenedor principal con estilos Tailwind CSS
    <div className="bg-neutral-900 min-h-screen flex items-center">
      {/* Contenedor interno centrado con padding */}
      <div className="px-10 container m-auto py-4">
        {/* Definición de las rutas principales de la aplicación */}
        <Routes>
          {/* Ruta principal que renderiza la HomePage */}
          <Route path="/" element={<HomePage />} />

          {/* Ruta para crear un nuevo post que renderiza PostForm */}
          <Route path="/new" element={<PostForm />} />

          {/* Ruta dinámica para editar un post basado en su ID */}
          <Route path="/:id" element={<PostForm />} />

          {/* Ruta para manejar rutas no encontradas, renderiza NotFoundPage */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>

        {/* Componente Toaster que muestra notificaciones globales */}
        <Toaster />
      </div>
    </div>
  );
};

// Exporta el componente App como el componente principal del proyecto
export default App;
