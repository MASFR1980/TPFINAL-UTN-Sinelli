import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';
import { login } from '../config/auth'; // Importa la función de inicio de sesión

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const { user } = useUser();
  const navigate = useNavigate();

  if (user) {
    navigate('/dashboard'); // Redirige al dashboard si el usuario está autenticado
  }

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Inicia sesión con email y contraseña
      await login(email, password);
      setError(null); // Limpiar errores previos
      navigate('/dashboard'); // Redirige a dashboard al iniciar sesión
    } catch (error) {
      setError(error.message);
    }
  };

  const handleRegisterRedirect = () => {
    navigate('/register'); // Redirige a la página de registro
  };

  return (
    <div className="box">
      <h1 className="title is-3">Iniciar sesión</h1>
      {error && <p className="has-text-danger">{error}</p>}
      <form onSubmit={handleLogin}>
        <div className="field">
          <label className="label">Correo electrónico</label>
          <div className="control">
            <input
              className="input"
              type="email"
              placeholder="Ingrese su correo electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Contraseña</label>
          <div className="control">
            <input
              className="input"
              type="password"
              placeholder="Ingrese su contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <div className="field is-grouped">
          <div className="control">
            <button type="submit" className="button is-link">
              Iniciar sesión
            </button>
          </div>
          <div className="control">
            <button
              type="button"
              className="button is-text"
              onClick={handleRegisterRedirect}
            >
              Registrarse
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export { Login };