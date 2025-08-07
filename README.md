# 10-calendar-backend

Este proyecto es el backend de una aplicación de calendario, desarrollado con **Node.js**, **Express** y **MongoDB**. Permite la autenticación de usuarios y la gestión de eventos de calendario mediante una API REST.

## Características

- **API RESTful** para autenticación y gestión de eventos.
- **Conexión a MongoDB** usando Mongoose.
- **CORS** habilitado para permitir peticiones desde el frontend.
- **Servir archivos estáticos** desde la carpeta `public` (por ejemplo, un `index.html`).
- **Variables de entorno** para configuración segura.
- **Estructura modular** para escalabilidad.

## Dependencias principales

- [express](https://www.npmjs.com/package/express): Framework para servidor HTTP.
- [mongoose](https://www.npmjs.com/package/mongoose): ODM para MongoDB.
- [dotenv](https://www.npmjs.com/package/dotenv): Manejo de variables de entorno.
- [cors](https://www.npmjs.com/package/cors): Middleware para habilitar CORS.

## Instalación

1. **Clona el repositorio**  
   ```
   git clone <url-del-repositorio>
   cd 10-calendar-backend
   ```

2. **Instala las dependencias**  
   ```
   npm install
   ```

3. **Configura las variables de entorno**  
   Crea un archivo `.env` en la raíz del proyecto con el siguiente contenido:
   ```
   PORT=4000
   DB_CNN=<cadena-de-conexion-de-mongodb>
   ```

4. **Inicia el servidor**  
   ```
   node index.js
   ```
   O si tienes nodemon instalado:
   ```
   npx nodemon index.js
   ```

## Endpoints principales

- `POST /api/auth` - Autenticación de usuarios (login, registro, etc.)
- `GET /api/events` - Obtener eventos del calendario
- `POST /api/events` - Crear un nuevo evento
- `PUT /api/events/:id` - Actualizar un evento
- `DELETE /api/events/:id` - Eliminar un evento

## Notas

- El servidor sirve archivos estáticos desde la carpeta `public`. Si accedes a la raíz (`/`), verás el archivo `index.html`.
- Asegúrate de tener una instancia de MongoDB corriendo y la cadena de conexión correcta en tu `.env`.

---
