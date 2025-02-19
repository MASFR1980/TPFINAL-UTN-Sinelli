// config/registerUser.js
import { auth, db } from '../config/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';

export const registerUser = async (email, password, additionalData) => {
  try {
    // Registrar al usuario en Firebase Authentication
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Crear un documento en Firestore con los datos adicionales
    const userDocRef = doc(db, 'users', user.uid);
    await setDoc(userDocRef, {
      uid: user.uid,
      email: user.email,
      ...additionalData, // Datos adicionales (nombre, apellido, etc.)
      createdAt: new Date(),
    });

    return user;
  } catch (error) {
    throw new Error(error.message);
  }
};