// Importa las funciones necesarias desde React
import { createContext, useContext, useEffect, useState } from "react";
// Importamos las peticiones de la API relacionadas con los posts
import { deletePostRequest, getPostsRequest } from "../api/posts";

// Crea un contexto para gestionar el estado de los posts en la aplicación
const postsContext = createContext();

// Custom hook para acceder al contexto de posts desde cualquier componente
export const usePosts = () => {
  // Obtiene el contexto usando useContext
  const context = useContext(postsContext);

  // Verifica si el contexto existe; si no, lanza un error indicando que falta el proveedor del contexto
  if (!context) {
    throw new Error("Post Provider is missing");
  }

  // Devuelve el contexto si está disponible
  return context;
};

// Componente proveedor del contexto que envuelve a los hijos y provee el estado de posts
export const PostsProvider = ({ children }) => {
  // Declara el estado 'posts' y la función para actualizarlo
  const [posts, setPosts] = useState([]); // Estado para almacenar los posts
  const [error, setError] = useState(null); // Estado para manejar errores
  const [loading, setLoading] = useState(true); // Estado para manejar la carga

  // Efecto secundario que se ejecuta una vez al montar el componente
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await getPostsRequest(); // Llama a la función para obtener los posts
        setPosts(response.data.posts); // Actualiza el estado 'posts' con los datos obtenidos
      } catch (err) {
        setError(err.message); // Maneja el error y actualiza el estado de error
      } finally {
        setLoading(false); // Cambia el estado de carga a falso, ya sea que la solicitud haya sido exitosa o no
      }
    };

    fetchPosts(); // Llama a la función para obtener los posts
  }, []); // Dependencias vacías indican que solo se ejecuta al montar el componente

  // Función para eliminar un post por ID
  const deletePost = async (id) => {
    const response = await deletePostRequest(id); // Llama a la función para eliminar el post
    if (response.status === 200) {
      // Verifica si la respuesta fue exitosa
      // Actualiza el estado 'posts' excluyendo el post eliminado
      setPosts(posts.filter((post) => post._id !== id));
    }
  };

  // Opcional: Renderiza un mensaje de error o de carga si es necesario
  if (loading) return <div>Loading...</div>; // Puedes personalizar el mensaje de carga
  if (error) return <div>Error: {error}</div>; // Muestra el mensaje de error si existe

  return (
    // Provee el estado 'posts' y la función 'deletePost' a través del contexto
    // para que los componentes hijos puedan acceder a él
    <postsContext.Provider value={{ posts, deletePost }}>
      {children} // Renderiza los componentes hijos
    </postsContext.Provider>
  );
};
