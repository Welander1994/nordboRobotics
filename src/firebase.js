import { initializeApp } from "firebase/app";
//Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAWn0W861jlt4IIlqla61kmg4k-2pYA9vs",
  authDomain: "nordbo-robotics.firebaseapp.com",
  projectId: "nordbo-robotics",
  storageBucket: "nordbo-robotics.appspot.com",
  messagingSenderId: "787194822969",
  appId: "1:787194822969:web:df1945beef603b36cce8e8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export { app };
