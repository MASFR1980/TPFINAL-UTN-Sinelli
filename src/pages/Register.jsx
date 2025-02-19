import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';
import { registerUser } from '../config/auth'; // Importa la función de registro

const Register = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState(null);
  const { user } = useUser();
  const navigate = useNavigate();

  if (user) {
    navigate('/dashboard'); // Redirige al dashboard si el usuario está autenticado
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { firstname, lastname, email, password } = formData;

    // Validación básica de campos vacíos
    if (!firstname || !lastname || !email || !password) {
      setError('Todos los campos son obligatorios');
      return;
    }

    try {
      // Combina firstname y lastname para crear el displayName
      const displayName = `${firstname} ${lastname}`;

      // Registra al usuario con email, contraseña y displayName
      await registerUser(email, password, displayName);
      setError(null); // Limpiar errores previos
      navigate('/dashboard'); // Redirige a dashboard al registrarse
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="box">
      <h1 className="title is-3">Registro</h1>
      {error && <p className="has-text-danger">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="field">
          <label className="label">Nombre</label>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="Ingrese su nombre"
              name="firstname"
              value={formData.firstname}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Apellido</label>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="Ingrese su apellido"
              name="lastname"
              value={formData.lastname}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Correo electrónico</label>
          <div className="control">
            <input
              className="input"
              type="email"
              placeholder="Ingrese su correo electrónico"
              name="email"
              value={formData.email}
              onChange={handleChange}
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
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="field is-grouped">
          <div className="control">
            <button type="submit" className="button is-link">
              Registrarse
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export { Register };