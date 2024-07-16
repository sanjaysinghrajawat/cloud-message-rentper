import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyCAwLqNzpo93KmIlLYErmaE49yvABOf9fU",
  authDomain: "cloud-message-app-3b6ab.firebaseapp.com",
  projectId: "cloud-message-app-3b6ab",
  storageBucket: "cloud-message-app-3b6ab.appspot.com",
  messagingSenderId: "101470413319",
  appId: "1:101470413319:web:93ee6c2ab1575e29c400a2"
};

export const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app);