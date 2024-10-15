// Importa los componentes necesarios desde react-router-dom para gestionar las rutas de la aplicación
import { Route, Routes } from "react-router-dom";

// Importa las diferentes páginas que compondrán las rutas
import HomePage from "./pages/HomePage"; // Página de inicio
import PostForm from "./pages/PostForm"; // Formulario para crear o editar posts
import NotFoundPage from "./pages/NotFoundPage"; // Página de error para rutas no encontradas (404)

// Importa Toaster desde react-hot-toast para manejar notificaciones emergentes
import { Toaster } from "react-hot-toast";

// Importa el proveedor del contexto para los posts, lo que permite compartir el estado entre componentes
import { PostsProvider } from "./context/postsContext";

// Componente principal de la aplicación
const App = () => {
  return (
    <div className="bg-neutral-900 min-h-screen flex items-center">
      <div className="px-10 container m-auto py-4">
        {/* Envuelve las rutas dentro del proveedor de contexto para que los componentes tengan acceso al estado global de los posts */}
        <PostsProvider>
          {/* Componente que contiene todas las rutas de la aplicación */}
          <Routes>
            {/* Define la ruta principal, que renderiza HomePage */}
            <Route path="/" element={<HomePage />} />

            {/* Ruta para crear un nuevo post, que renderiza PostForm */}
            <Route path="/new" element={<PostForm />} />

            {/* Ruta dinámica para editar un post según su ID, usando el mismo componente PostForm */}
            <Route path="/:id" element={<PostForm />} />

            {/* Ruta que captura cualquier ruta no definida o id de post no registrado, mostrando NotFoundPage */}
            <Route path="/error" element={<NotFoundPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </PostsProvider>

        {/* Componente para mostrar notificaciones emergentes globalmente */}
        <Toaster />
      </div>
    </div>
  );
};

// Exporta el componente App como el punto de entrada principal de la aplicación
export default App;
