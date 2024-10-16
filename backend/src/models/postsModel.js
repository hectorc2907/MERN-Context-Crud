// Importa el módulo mongoose para interactuar con MongoDB
import mongoose from "mongoose";

// Define un esquema para los documentos de la colección "post"
const postsSchema = new mongoose.Schema(
  {
    // Campo 'title' que es obligatorio y debe ser una cadena de texto
    title: {
      type: String, // Tipo de dato: String
      required: true, // Este campo es obligatorio
      trim: true, // Elimina espacios en blanco al inicio y al final
    },
    // Campo 'description' que es obligatorio y debe ser una cadena de texto
    description: {
      type: String, // Tipo de dato: String
      required: true, // Este campo es obligatorio
      trim: true, // Elimina espacios en blanco al inicio y al final
    },
    // Campo 'image' que contiene información sobre la imagen asociada al post
    image: {
      public_id: String, // Identificador público de la imagen
      url: String, // URL donde está almacenada la imagen
    },
  },
  {
    // Opciones del esquema
    timestamps: true, // Agrega automáticamente los campos 'createdAt' y 'updatedAt'
    versionKey: false, // Elimina el campo '__v' que Mongoose agrega por defecto
  }
);

// Exporta el modelo 'post' basado en el esquema definido, permitiendo su uso en otras partes de la aplicación
export default mongoose.model("posts", postsSchema);
