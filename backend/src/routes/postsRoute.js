// Importamos el Router de Express para manejar las rutas
import { Router } from "express";

// Importamos los controladores de posts para definir las acciones de cada ruta
import {
  getPost, // Obtener un post específico
  createPost, // Crear un nuevo post
  updatePost, // Actualizar un post existente
  deletePost, // Eliminar un post
  getPosts, // Obtener todos los posts
} from "../controllers/postsController.js";

// Creamos una instancia del enrutador de Express
const router = Router();

// Definimos las rutas para cada operación relacionada con los posts

// Ruta para obtener todos los posts
router.get("/posts", getPosts);

// Ruta para obtener un post específico mediante su ID
router.get("/posts/:id", getPost);

// Ruta para crear un nuevo post
router.post("/posts", createPost);

// Ruta para actualizar un post existente mediante su ID
router.put("/posts/:id", updatePost);

// Ruta para eliminar un post mediante su ID
router.delete("/posts/:id", deletePost);

// Exportamos el enrutador para que pueda ser usado en la aplicación principal
export default router;
