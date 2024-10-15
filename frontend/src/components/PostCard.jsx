import toast from "react-hot-toast"; // Importa la librería para mostrar notificaciones
import { usePosts } from "../context/postsContext"; // Importa el contexto para acceder a las funciones de posts
import { useNavigate } from "react-router-dom"; // Importa el hook para navegar entre rutas

// Componente para mostrar la información de un post específico
const PostCard = ({ post }) => {
  const { deletePost } = usePosts(); // Obtiene la función deletePost del contexto
  const navigate = useNavigate(); // Hook para redirigir a otras rutas

  // Maneja la eliminación de un post con confirmación de usuario
  const handleDelete = (id) => {
    toast(
      (t) => (
        <div>
          <p className="text-white">
            Do you want to delete <strong>{id}</strong>
          </p>
          <div>
            <button
              className="bg-red-500 hover:bg-red-400 px-3 py-2 text-sm text-white rounded-sm mx-2"
              onClick={(e) => {
                deletePost(id); // Llama a la función para eliminar el post
                toast.dismiss(t.id); // Cierra la notificación al eliminar
              }}
            >
              Delete
            </button>
            <button
              className="bg-slate-400 hover:bg-slate-500 px-3 py-2 text-white rounded-sm mx-2"
              onClick={() => toast.dismiss(t.id)} // Cierra la notificación sin eliminar
            >
              Cancel
            </button>
          </div>
        </div>
      ),
      {
        duration: "4000", // Tiempo de duración de la notificación
        style: {
          background: "#202020", // Estilo de fondo de la notificación
        },
      }
    );
  };

  // Renderiza la tarjeta del post
  return (
    <div
      className="bg-zinc-800 text-white rounded-md shadow-md shadow-black hover:bg-zinc-700 hover:cursor-pointer"
      onClick={() => navigate(`/${post._id}`)} // Navega a la página del post al hacer clic en la tarjeta
    >
      <div className="px-4 py-7">
        <div className="flex justify-between items-center">
          <h3 className="text-md font-semibold">{post.title}</h3>
          <button
            className="bg-red-600 text-sm px-2 py-1 rounded-sm"
            onClick={(e) => {
              e.stopPropagation(); // Evita que el evento clic afecte al contenedor padre
              handleDelete(post._id); // Llama a la función para manejar la eliminación del post
            }}
          >
            Delete
          </button>
        </div>
        <p className="text-gray-400">{post.description}</p> {/* Muestra la descripción del post */}
      </div>
      {post.image && ( // Renderiza la imagen del post si está disponible
        <img src={post.image.url} alt={post.title} />
      )}
    </div>
  );
};

export default PostCard; // Exporta el componente PostCard para ser utilizado en otros lugares

