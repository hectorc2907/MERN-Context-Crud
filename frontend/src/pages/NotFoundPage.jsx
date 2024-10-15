// Importamos el componente Link desde react-router-dom para manejar la navegación interna.
import { Link } from "react-router-dom";

// Definimos el componente NotFoundPage que será mostrado cuando no se encuentre una ruta válida.
const NotFoundPage = () => {
  return (
    // Contenedor principal con estilos flexbox para centrar su contenido vertical y horizontalmente.
    <div className="flex flex-col items-center">
      {/* Mensaje de error centrado con estilo de texto blanco */}
      <div className="text-white text-center">Error 404</div>

      {/* Enlace que redirige a la página principal ("/"). Cambia de color al pasar el mouse. */}
      <Link
        to="/" // Navega a la ruta principal.
        className="bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-500"
      >
        Home {/* Texto del botón que indica que lleva al inicio */}
      </Link>
    </div>
  );
};

// Exportamos el componente para que pueda ser utilizado en otras partes de la aplicación.
export default NotFoundPage;
