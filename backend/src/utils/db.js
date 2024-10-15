// Importa el módulo mongoose para interactuar con MongoDB
import mongoose from "mongoose";
// Importa la URI de conexión a MongoDB desde el archivo de configuración
import { MONGODB_URI } from "../config.js";

// Función asíncrona para conectar a la base de datos MongoDB
export const connectDB = async () => {
  try {
    // Intenta conectarse a MongoDB usando la URI importada
    await mongoose.connect(MONGODB_URI);
  } catch (error) {
    // Si hay un error durante la conexión, imprímelo en la consola
    console.error(error);
  }
};

// Escucha el evento 'connected' en la conexión de Mongoose
mongoose.connection.on("connected", () => {
  // Cuando se establece la conexión, imprime un mensaje en la consola con el nombre de la base de datos
  console.log("Mongodb is connected to", mongoose.connection.db.databaseName);
});
