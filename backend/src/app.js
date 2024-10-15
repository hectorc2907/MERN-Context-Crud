// Importa el módulo express para crear aplicaciones web
import express from "express";

// Importa el middleware morgan para registrar las solicitudes HTTP en la consola
import morgan from "morgan";

// Importa las rutas relacionadas con los posts desde el archivo correspondiente
import postsRoutes from "./routes/postsRoute.js";

// Crea una nueva instancia de una aplicación Express
const app = express();

// Configuración de middlewares:

// Middleware para parsear el cuerpo de las solicitudes en formato JSON
app.use(express.json());

// Middleware para parsear datos en formato URL-encoded (por ejemplo, formularios HTML)
app.use(express.urlencoded({ extended: false }));

// Middleware para registrar las solicitudes HTTP en la consola en formato 'dev'
app.use(morgan("dev"));

// Definimos las rutas de la aplicación:

// Ruta directa de prueba para verificar que el backend está funcionando correctamente
app.get("/", (req, res) => res.send("test"));

// Usamos las rutas relacionadas con los posts, bajo el prefijo '/api'
app.use("/api", postsRoutes);

// Exporta la instancia de la aplicación Express para que pueda ser utilizada en otros archivos
export { app };
