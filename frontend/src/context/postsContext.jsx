// Importa las funciones necesarias desde React
import { createContext, useContext, useEffect, useState } from "react";

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
  const [posts, setPosts] = useState([]);

  return (
    // Provee el estado 'posts' a través del contexto para que los componentes hijos puedan acceder a él
    <postsContext.Provider value={posts}>{children}</postsContext.Provider>
  );
};
