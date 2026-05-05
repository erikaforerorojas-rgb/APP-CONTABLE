import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// 🔴 PEGA AQUÍ TU CONFIGURACIÓN DE FIREBASE
const firebaseConfig = {
  apiKey: "AQUI_TU_API_KEY",
  authDomain: "AQUI_TU_AUTH_DOMAIN",
  projectId: "creditos-daza",
  storageBucket: "AQUI_TU_STORAGE_BUCKET",
  messagingSenderId: "AQUI_TU_SENDER_ID",
  appId: "AQUI_TU_APP_ID"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Base de datos (Firestore)
export const db = getFirestore(app);
