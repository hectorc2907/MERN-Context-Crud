// Importa el módulo express para crear aplicaciones web
import express from "express";
// Importa el middleware morgan para registrar las solicitudes HTTP
import morgan from "morgan";

// Crea una nueva instancia de una aplicación Express
const app = express();

// Middleware para parsear el cuerpo de las solicitudes en formato JSON
app.use(express.json());
// Middleware para parsear el cuerpo de las solicitudes con datos URL-encoded
app.use(express.urlencoded({ extended: false }));
// Middleware para registrar las solicitudes HTTP en la consola con formato 'dev'
app.use(morgan("dev"));

// Definimos las rutas.

// Ruta directa de prueba para verificar el estado del backend.
app.get("/", (req, res) => res.send("test"));

// Exporta la instancia de la aplicación Express para usarla en otros archivos
export { app };
