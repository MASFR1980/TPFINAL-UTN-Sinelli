E-Commerce App

Este proyecto es una aplicación de comercio electrónico construida con React y React Router. La aplicación incluye un sistema de enrutamiento para navegar entre diferentes páginas, un diseño común (Layout) que se aplica a todas las páginas, y un sistema de autenticación para proteger rutas privadas.
El objetivo de la aplicacion es permitir a usuarios que se registren, que presenten las credenciales y puedan agregar, modificar o borrar artículos que son mostrados en el Home para que cualquier visitante pueda ver los productos ofrecidos por la tienda.
Las credenciales y los articulos son gestionados a traves de Firebase.

Estructura del Proyecto

Árbol del Proyecto

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

AppRouter

El componente AppRouter es el núcleo del enrutamiento de la aplicación. Utiliza react-router-dom para definir las rutas y los componentes que se renderizan en cada una de ellas. Las rutas se ocultan segun el usuario este o no autenticado en la aplicacion. Las rutas incluyen:

    Página de inicio (/): Muestra la página principal de la aplicación.

    Dashboard (/dashboard): Una ruta protegida que solo es accesible para usuarios autenticados.

    Registro (/register): Permite a los usuarios registrarse en la aplicación.

    Inicio de sesión (/login): Permite a los usuarios iniciar sesión.

    Página no encontrada (*): Muestra un mensaje de error 404 cuando la ruta no existe.

Layout

El componente Layout define la estructura común de la aplicación, que incluye:

    Encabezado (Header): Muestra el título de la aplicación con un fondo personalizado.

    Barra de navegación (Nav): Contiene enlaces a las páginas principales y cambia dinámicamente según el estado de autenticación del usuario. Si el usuario está autenticado, muestra un enlace al dashboard y un botón para cerrar sesión. Si no está autenticado, muestra enlaces para iniciar sesión y registrarse.

    Contenido principal (Main): Aquí se renderiza el contenido específico de cada página.

    Pie de página (Footer): Muestra información sobre el desarrollador y un enlace a su perfil de LinkedIn.

Funcionalidades clave

    Autenticación con Firebase: La aplicación utiliza Firebase para gestionar la autenticación de usuarios, incluyendo registro, inicio de sesión y cierre de sesión.

    Protección de rutas: Las rutas privadas (como el dashboard) están protegidas y solo son accesibles para usuarios autenticados.

    Diseño responsive: El diseño se adapta a diferentes tamaños de pantalla utilizando estilos personalizados y clases de Bulma CSS.

    Fondos personalizados: El encabezado y el contenido principal tienen fondos personalizados que mejoran la experiencia visual.

Tecnologías utilizadas

    React: Biblioteca principal para la construcción de la interfaz de usuario.

    React Router: Para el manejo de rutas y navegación.

    Firebase: Para la autenticación de usuarios.

    Bulma CSS: Framework de estilos para el diseño de la aplicación.

    Context API: Para gestionar el estado global del usuario.

Cómo ejecutar el proyecto

    Clona el repositorio.

    Instala las dependencias con npm install.

    Configura Firebase:

        Crea un proyecto en Firebase.

        Agrega las credenciales en un archivo .env segun la estructura presentada en .env.example.

        Habilita el servicio de autenticación en la consola de Firebase.

    Inicia la aplicación con npm start.

    Accede a la aplicación en http://localhost:3000.

Desarrollador

Este proyecto fue desarrollado por Mauricio Sinelli. Puedes contactarme a través de mi perfil de LinkedIn. Esta disponible una version compilada en VERCEL que puede ser ensayada en la base de prueba del desarrollador.

¡Gracias por revisar mi proyecto! Si tienes alguna pregunta o sugerencia, no dudes en contactarme. 😊