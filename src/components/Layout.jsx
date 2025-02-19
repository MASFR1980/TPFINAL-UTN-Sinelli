import React from "react";
import { Link } from "react-router-dom";
import { useUser } from "../context/UserContext";
import { logout } from "../config/auth";

const Layout = ({ children }) => {
  const {user} = useUser()
  const handleLogout = async () => {
    try{
      await logout()
      setUserId(null)
    }
    catch(error){
      console.error(error)
    }
  }
  return (
    <div className="layout-container">
      {/* Header */}
      <header 
        className="hero is-info is-bold" 
        style={{ 
          backgroundImage: 'url(/FONDO.png)', 
          backgroundPosition: 'center', 
          backgroundRepeat: 'repeat', 
          backgroundSize: '210px',  // Reducir el tamaño de la imagen de fondo
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '10px 0',  // Reducir el padding en el header
          minHeight: '150px'   // Reducir la altura mínima del header
        }}
        >
        <div className="hero-body">
          <div className="container has-text-centered">
            <div 
              className="content" 
              style={{ 
                backgroundColor: 'rgba(2, 73, 97, 0.9)',  // Fondo celeste con opacidad
                padding: '10px 150px',  // Reducir el padding alrededor del texto
                borderRadius: '30px', 
                maxWidth: '600px',  // Reducir el tamaño máximo del contenedor
                width: '100%',
                textAlign: 'center',
              }}
            >
              <h1 className="title is-size-3">  {/* Reducir el tamaño de la fuente */}
                <span className="has-text-light" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}>
                  E-Commerce
                </span>
              </h1>
            </div>
          </div>
        </div>
      </header>


      {/* Nav */}
      <nav className="navbar" style={{ backgroundColor: '#ADD8E6' }} role="navigation" aria-label="main navigation"> {/* Celeste */}
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item has-text-weight-bold">
              Home
            </Link>
            <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navMenu">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>
          <div id="navMenu" className="navbar-menu">
            <div className="navbar-end">
              {   
                user ?  <>
                  <Link to="/dashboard" className="navbar-item">
                    Dashboard
                  </Link> 
                  <button onClick={handleLogout} className="navbar-item">Cerrar Sesión</button>
                  <p className="navbar-item">
                    
                    <span
                      style={{
                        backgroundColor: "#003366", // Fondo azul oscuro
                        color: "#fff", // Texto blanco
                        padding: "4px 8px", // Espaciado interno
                        borderRadius: "4px", // Bordes redondeados
                        fontWeight: "bold", // Texto en negrita
                      }}
                    >
                     Usuario: {user.displayName || user.email}
                    </span>
                  </p>
                  
                  
                </>: <>
                  <Link to="/login" className="navbar-item">
                    Login
                  </Link>
                  <Link to="/register" className="navbar-item">
                    Register
                  </Link>
                </>
              }
              
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="section" style={{ 
        minHeight: '60vh', 
        backgroundImage: 'url(/MAIN.png)', // Ruta de la imagen de fondo
        backgroundPosition: 'center',
        backgroundSize: 'cover', // Asegura que la imagen cubra todo el área sin distorsionarse
        backgroundAttachment: 'fixed', // Fija la imagen al fondo cuando se hace scroll
      }}>
        <div className="container">
          {children}
        </div>
      </main>

      {/* Footer */}
      <footer className="footer" style={{ 
          backgroundColor: '#ADD8E6', // Celeste
          padding: '10px 0' // Menos padding para que ocupe menos espacio
        }}>
          <div className="content has-text-centered">
            <p className="has-text-dark">
              Desarrollado por 
              <span> Mauricio Sinelli</span>. Todos los derechos reservados.
            </p>
            <p>
              <a href="https://www.linkedin.com/in/mauricio-alejandro-sinelli-6b6120a9" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin fa-2x has-text-dark"></i>  {/* Ícono de LinkedIn con el enlace */}
              </a>
            </p>
          </div>
        </footer>

    </div>
  );
};

export { Layout };
