﻿# 📄 MERN-Context-Crud

Este proyecto es una aplicación diseñada para probar la **creación de posts**, permitiendo a los usuarios publicar tanto **imágenes como texto**. Se desarrolló utilizando el stack **MERN** (MongoDB, Express, React y Node.js) y servicios adicionales como **Cloudinary** para manejar imágenes.

## 🛠️ Tecnologías Utilizadas

### **Backend**
- **Express**: Framework minimalista para construir el backend.
- **MongoDB**: Base de datos NoSQL utilizada para almacenar los posts.
- **Mongoose**: ODM para modelar datos en MongoDB.
- **Cloudinary**: Plataforma de gestión de imágenes en la nube.
- **dotenv**: Para manejar variables de entorno.
- **cors**: Middleware para habilitar el CORS.
- **express-fileupload**: Manejo de archivos enviados desde formularios.
- **fs-extra**: Módulo para operaciones del sistema de archivos.
- **http-errors**: Manejo de errores HTTP.
- **morgan**: Middleware para registrar las solicitudes HTTP.
- **nodemon**: Herramienta para recargar el servidor durante el desarrollo.

### **Frontend**
- **React**: Librería de JavaScript para construir interfaces de usuario.
- **Vite**: Herramienta rápida de desarrollo frontend.
- **axios**: Cliente HTTP para hacer peticiones al backend.
- **Formik**: Para el manejo de formularios.
- **Yup**: Validación de formularios.
- **React Router DOM**: Para gestionar rutas en la aplicación.
- **React Icons**: Biblioteca de iconos.
- **React Hot Toast**: Notificaciones y alertas interactivas.
- **Tailwind CSS**: Framework de estilos CSS.
- **ESLint**: Herramienta de linting para mantener la calidad del código.

## 🖼️ Capturas de Pantalla

![Home](https://github.com/hectorc2907/MERN-Context-Crud/blob/dev/frontend/public/muestra.PNG)

## 🔧 Instalación

Si deseas clonar este repositorio y ejecutarlo en tu máquina local, sigue estos pasos:

1. Clona el repositorio:

   ```bash
   git clone https://github.com/hectorc2907/mern-context-crud.git

   ```

2. Ve al directorio del proyecto:

   ```bash
   cd mern-context-crud

   ```

3. Instala las dependencias Frontend:

   ```bash
   cd ../frontend
   npm install
   npm run dev

   ```

4. Instala las dependencias Backend:

   ```bash
   cd ../backend
   npm install

   ```

5. Configura tus Variables de Entorno
   ```bash
   # Backend:
   PORT=<tu_puerto_deseado>
   MONGO_URI=<tu_mongo_uri>
   FRONTEND_URL=<la_direccion_frontend>
   CLOUD_NAME=<el_cloud_name_cloudinary>
   API_KEY=<api_key_cloudinary>
   API_SECRET=<api_secret_cloudinay>
   # Frontend:
   VITE_BACKEND_URL=<la_direccion_backend>
   ```

## 🎨 Personalización

Puedes modificar el estilo o agregar nuevas funcionalidades ajustando los siguientes archivos:

- Tailwind CSS: Cambia colores o fuentes en el archivo tailwind.config.js.
- Formik y Yup: Añade validaciones más complejas en los formularios.
- Componentes React: Personaliza los componentes según tus necesidades.

## ✨ Características

- Creación de posts con imágenes y texto.
- Subida de imágenes a través de Cloudinary.
- Gestión de rutas utilizando React Router DOM.
- Validación de formularios con Formik y Yup.
- Notificaciones interactivas con React Hot Toast.
- Estilización utilizando Tailwind CSS para un diseño atractivo.
- Registro detallado de solicitudes con Morgan para debugging.

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Si encuentras algún error o deseas mejorar la aplicación, haz un fork del proyecto, realiza tus cambios y envía un pull request.
