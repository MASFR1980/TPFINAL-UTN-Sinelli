// components/PrivateRoute.jsx
import { Navigate } from "react-router-dom";
import { useUser } from "../context/UserContext"; // Usamos el contexto de usuario

const PrivateRoute = ({ children }) => {
  const { user } = useUser(); // Obtén el estado del usuario desde el contexto

  return (
    user ? children : <Navigate to="/login" replace/>
  );
};

export {PrivateRoute};
