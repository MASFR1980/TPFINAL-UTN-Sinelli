// auth.js
import { auth } from './firebase'; // Importa la configuración de Firebase
import {
  createUserWithEmailAndPassword, // Para registrar usuarios
  signInWithEmailAndPassword, // Para iniciar sesión
  signOut, // Para cerrar sesión
  updateProfile, // Para actualizar el perfil del usuario
} from 'firebase/auth';

/**
 * Registra un usuario con email, contraseña y nombre completo.
 * @param {string} email - Correo electrónico del usuario.
 * @param {string} password - Contraseña del usuario.
 * @param {string} displayName - Nombre completo del usuario.
 * @returns {Promise<UserCredential>} - Credenciales del usuario.
 */
export const registerUser = async (email, password, displayName) => {
  try {
    // Registrar al usuario en Firebase Authentication
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Actualizar el perfil del usuario con el nombre completo
    await updateProfile(user, { displayName });

    return userCredential;
  } catch (error) {
    throw new Error(error.message);
  }
};

/**
 * Inicia sesión con email y contraseña.
 * @param {string} email - Correo electrónico del usuario.
 * @param {string} password - Contraseña del usuario.
 * @returns {Promise<UserCredential>} - Credenciales del usuario.
 */
export const login = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential;
  } catch (error) {
    throw new Error(error.message);
  }
};

/**
 * Cierra la sesión del usuario actual.
 * @returns {Promise<void>}
 */
export const logout = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    throw new Error(error.message);
  }
};