// Importamos el hook usePosts del contexto y los componentes necesarios de React Router y react-icons.
import { usePosts } from "../context/postsContext";
import { Link } from "react-router-dom";
import PostCard from "../components/PostCard";
import { VscEmptyWindow } from "react-icons/vsc"; // Icono que muestra una ventana vacía.

const HomePage = () => {
  // Obtenemos la lista de posts desde el contexto mediante el hook usePosts.
  const { posts } = usePosts();

  // Definimos una función para renderizar los posts o un mensaje de "sin posts" si no hay ninguno.
  const renderPost = () => {
    // Si no hay posts, mostramos un ícono y un mensaje indicando que no hay publicaciones.
    if (posts.length === 0) {
      return (
        <div className="flex flex-col justify-center items-center">
          <VscEmptyWindow className="w-48 h-48 text-white" />{" "}
          {/* Ícono grande en color blanco */}
          <h1 className="text-white text-2xl">There are no posts</h1>{" "}
          {/* Mensaje */}
        </div>
      );
    }

    // Si hay posts, los mostramos en un grid adaptable según el tamaño de la pantalla.
    return (
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {posts.map((post) => (
          <PostCard key={post._id} post={post} /> // Renderizamos cada PostCard con su post correspondiente.
        ))}
      </div>
    );
  };

  // Retornamos el componente principal de la página.
  return (
    <main>
      {/* Header con el título y el enlace para crear un nuevo post */}
      <header className="flex justify-between items-center">
        <h1 className="text-2xl text-gray-300 font-bold">
          Posts ({posts.length}){" "}
          {/* Mostramos la cantidad de posts disponibles */}
        </h1>
        {/* Botón que redirige a la página para crear un nuevo post */}
        <Link
          to="/new"
          className="bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-500"
        >
          Create Post
        </Link>
      </header>
      {/* Llamamos a la función renderPost para mostrar los posts o el mensaje de vacío */}
      {renderPost()}
    </main>
  );
};

// Exportamos el componente para que pueda ser utilizado en otras partes de la aplicación.
export default HomePage;
