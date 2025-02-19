# E-Commerce App

Este proyecto es una aplicación de comercio electrónico construida con React y React Router. La aplicación incluye un sistema de enrutamiento para navegar entre diferentes páginas, un diseño común (Layout) que se aplica a todas las páginas, y un sistema de autenticación para proteger rutas privadas.

El objetivo de la aplicación es permitir a los usuarios registrarse, iniciar sesión y gestionar artículos (agregar, modificar o borrar) que son mostrados en la página principal para que cualquier visitante pueda ver los productos ofrecidos por la tienda. Las credenciales y los artículos son gestionados a través de Firebase.

## Estructura del Proyecto

### 🌟 Árbol del Proyecto

```
src/
├── components/
│   ├── AppRouter.js       # Configuración de rutas principales
│   ├── Layout.js          # Estructura común de la aplicación
│   ├── PrivateRoute.js    # Componente para proteger rutas privadas
│   ├── Home.js            # Página de inicio
│   ├── Dashboard.js       # Página de dashboard (protegida)
│   ├── Register.js        # Página de registro
│   ├── Login.js           # Página de inicio de sesión
│   ├── NotFound.js        # Página 404 (no encontrada)
├── context/
│   ├── UserContext.js     # Contexto para gestionar el estado del usuario
├── config/
│   ├── auth.js            # Configuración de autenticación (Firebase, login, logout, registerUser)
│   ├── firebase.js        # Configuración de Firebase (inicialización y servicios)
├── assets/
│   ├── FONDO.png          # Imagen de fondo para el encabezado
│   ├── MAIN.png           # Imagen de fondo para el contenido principal
├── App.js                 # Punto de entrada de la aplicación
├── index.js               # Renderizado de la aplicación en el DOM
```

## ✨ AppRouter

El componente **AppRouter** es el núcleo del enrutamiento de la aplicación. Utiliza `react-router-dom` para definir las rutas y los componentes que se renderizan en cada una de ellas. Las rutas se ocultan según si el usuario está autenticado o no.

Las rutas incluyen:

- **Página de inicio (`/`)**: Muestra la página principal de la aplicación.
- **Dashboard (`/dashboard`)**: Ruta protegida, accesible solo para usuarios autenticados.
- **Registro (`/register`)**: Permite a los usuarios registrarse en la aplicación.
- **Inicio de sesión (`/login`)**: Permite a los usuarios iniciar sesión.
- **Página no encontrada (`*`)**: Muestra un mensaje de error 404 cuando la ruta no existe.

## 🔄 Layout

El componente **Layout** define la estructura común de la aplicación, que incluye:

- **Encabezado (Header)**: Título de la aplicación con un fondo personalizado.
- **Barra de navegación (Nav)**: Contiene enlaces a las páginas principales y cambia dinámicamente según el estado de autenticación del usuario.
  - Si el usuario está autenticado: muestra un enlace al dashboard y un botón para cerrar sesión.
  - Si no está autenticado: muestra enlaces para iniciar sesión y registrarse.
- **Contenido principal (Main)**: Se renderiza el contenido específico de cada página.
- **Pie de página (Footer)**: Muestra información sobre el desarrollador y un enlace a su perfil de LinkedIn.

## 💡 Funcionalidades clave

- **Autenticación con Firebase**: Registro, inicio de sesión y cierre de sesión de usuarios.
- **Protección de rutas**: Las rutas privadas (como el dashboard) solo son accesibles para usuarios autenticados.
- **Diseño responsive**: Adaptable a diferentes tamaños de pantalla con Bulma CSS.
- **Fondos personalizados**: Mejora la experiencia visual con diseño atractivo.

## 🤖 Tecnologías utilizadas

- **React**: Biblioteca principal para la interfaz de usuario.
- **React Router**: Manejo de rutas y navegación.
- **Firebase**: Autenticación de usuarios.
- **Bulma CSS**: Framework de estilos.
- **Context API**: Manejo del estado global del usuario.

## 🛠️ Cómo ejecutar el proyecto

1. **Clona el repositorio**:
   ```sh
   git clone https://github.com/tu-usuario/ecommerce-app.git
   cd ecommerce-app
   ```
2. **Instala las dependencias**:
   ```sh
   npm install
   ```
3. **Configura Firebase**:
   - Crea un proyecto en Firebase.
   - Agrega las credenciales en un archivo `.env` según la estructura presentada en `.env.example`.
   - Habilita el servicio de autenticación en la consola de Firebase.
4. **Inicia la aplicación**:
   ```sh
   npm start
   ```
5. **Accede a la aplicación** en [http://localhost:3000](http://localhost:3000).

## 👨‍💻 Desarrollador

Este proyecto fue desarrollado por **Mauricio Sinelli**. Puedes contactarme a través de mi perfil de LinkedIn.

Una versión compilada está disponible en **Vercel** para pruebas.

---

✨ *¡Gracias por revisar mi proyecto! Si tienes alguna pregunta o sugerencia, no dudes en contactarme.* 😊

