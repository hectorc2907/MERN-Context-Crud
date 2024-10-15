// Importa la instancia de la aplicación Express desde el archivo 'app.js'
import { app } from "./app.js";
// Importa la función de conexión a la base de datos desde el archivo 'db.js'
import { connectDB } from "./utils/db.js";
// Importa el puerto de configuración desde el archivo 'config.js'
import { PORT } from "./config.js";

// Llama a la función connectDB para establecer la conexión con la base de datos
connectDB();

// Inicia el servidor Express, escuchando en el puerto especificado
app.listen(PORT);

// Imprime un mensaje en la consola indicando que el servidor está en funcionamiento y en qué puerto
console.log("Server on port:", PORT);
