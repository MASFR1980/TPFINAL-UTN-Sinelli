// context/UserContext.js
import React, { createContext, useState, useContext, useEffect } from 'react';
import { auth } from '../config/firebase'; // Asegúrate de importar correctamente Firebase
import { onAuthStateChanged } from 'firebase/auth';

const UserContext = createContext();

export const useUser = () => {
  return useContext(UserContext);
};

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser); // Guarda el usuario autenticado en el estado
      } else {
        setUser(null); // Si no hay usuario, establece el estado como null
      }
    });

    return () => unsubscribe(); // Limpia el listener al desmontar el componente
  }, []);

  const value = {
    user,
    setUser, // Puedes usar setUser para actualizar el estado si es necesario
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
