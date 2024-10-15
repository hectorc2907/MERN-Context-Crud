import { Formik, Form, Field, ErrorMessage } from "formik"; // Importación de Formik para manejo de formularios
import { Link, useNavigate, useParams } from "react-router-dom"; // Rutas y navegación
import * as Yup from "yup"; // Librería para validaciones
import { usePosts } from "../context/postsContext"; // Hook para acceder al contexto de posts
import { useEffect, useState } from "react"; // Hooks para estado y efectos
import { AiOutlineLoading3Quarters } from "react-icons/ai"; // Icono de carga animado

const PostForm = () => {
  // Estado inicial del formulario
  const [post, setPost] = useState({
    title: "",
    description: "",
    image: null,
  });

  // Acceso a las funciones del contexto para crear, obtener y actualizar posts
  const { createPost, getPost, updatePost } = usePosts();

  const navigate = useNavigate(); // Hook para redireccionar entre rutas
  const params = useParams(); // Obtiene parámetros de la URL (como el id del post)

  useEffect(() => {
    // Función autoejecutable para cargar los datos si existe un ID en los parámetros
    (async () => {
      if (params.id) {
        // Verifica si se está editando un post
        const post = await getPost(params.id); // Obtiene el post por ID
        if (!post) {
          // Si no existe el post, redirigir a la página de NotFound
          navigate("/error");
          return;
        }
        setPost({
          title: post.title, // Actualiza los valores en el estado
          description: post.description,
        });
      }
    })();
  }, [params.id, getPost]); // Dependencias del efecto para actualizar si cambian

  return (
    <div className="flex items-center justify-center">
      <div className="bg-zinc-800 p-10 shadow-md shadow-black">
        <header className="flex justify-between items-center py-4 text-white">
          <h3 className="text-xl">New Post</h3>
          <Link to="/" className="text-gray-400 text-sm hover:text-gray-300">
            Go Back
          </Link>{" "}
          {/* Enlace para regresar a la página principal */}
        </header>

        {/* Configuración del formulario con Formik */}
        <Formik
          initialValues={post} // Valores iniciales del formulario
          enableReinitialize // Permite recargar los valores si cambian
          validationSchema={Yup.object({
            title: Yup.string().required("Title is Required"), // Validación del título
            description: Yup.string().required("Description is Required"), // Validación de la descripción
          })}
          onSubmit={async (values, actions) => {
            // Lógica de envío del formulario
            if (params.id) {
              // Si existe un ID, actualiza el post
              await updatePost(params.id, values);
            } else {
              // Si no, crea uno nuevo
              await createPost(values);
            }
            actions.resetForm(); // Reinicia el formulario
            actions.setSubmitting(false); // Finaliza el estado de carga
            navigate("/"); // Redirige a la página principal
          }}
        >
          {(
            { setFieldValue, isSubmitting, handleSubmit } // Props proporcionadas por Formik
          ) => (
            <Form onSubmit={handleSubmit}>
              {" "}
              {/* Formulario controlado por Formik */}
              <label
                htmlFor="title"
                className="text-sm block font-bold mb-2 text-gray-400"
              >
                Title
              </label>
              <Field
                className="px-3 py-2 focus:outline-none rounded bg-gray-600 text-white w-full"
                placeholder="Post title"
                name="title" // Asocia este campo al valor "title" del estado
                id="title"
              />
              <ErrorMessage
                component="p" // Muestra errores en un párrafo
                name="title"
                className="text-red-400 text-sm"
              />
              <label
                htmlFor="description"
                className="text-sm block font-bold mb-2 text-gray-400"
              >
                Description
              </label>
              <Field
                className="px-3 py-2 focus:outline-none rounded bg-gray-600 text-white w-full"
                placeholder="Post description"
                name="description" // Asocia este campo al valor "description"
                id="description"
              />
              <ErrorMessage
                component="p"
                name="description"
                className="text-red-400 text-sm"
              />
              <label
                htmlFor="image"
                className="text-sm block font-bold mb-2 text-gray-400"
              >
                Image
              </label>
              <input
                type="file" // Campo para cargar archivos
                name="image"
                id="image"
                className="px-3 py-2 focus:outline-none rounded bg-gray-600 text-white w-full"
                onChange={(e) => setFieldValue("image", e.target.files[0])} // Asigna el archivo seleccionado al estado
              />
              <ErrorMessage
                component="p"
                name="image"
                className="text-red-400 text-sm"
              />
              <button
                type="submit" // Botón para enviar el formulario
                className="bg-indigo-600 hover:bg-indigo-500 px-4 py-2 rounded mt-2 text-white focus:outline-none disabled:bg-indigo-400"
                disabled={isSubmitting} // Deshabilita el botón durante la carga
              >
                {isSubmitting ? ( // Muestra un ícono de carga mientras se envía
                  <AiOutlineLoading3Quarters className="animate-spin h-5 w-5" />
                ) : (
                  "Save" // Texto del botón
                )}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default PostForm;
