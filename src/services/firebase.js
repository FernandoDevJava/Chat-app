import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBJLzt_9eY8gRKsE6_kcsnCfhtnST4hLnE",
    authDomain: "aplicativo-chat634.firebaseapp.com",
    projectId: "aplicativo-chat634",
    storageBucket: "aplicativo-chat634.appspot.com",
    messagingSenderId: "33720415286",
    appId: "1:33720415286:web:2f6479fed9a48ae6399497"
  };

  const app = firebase.initializeApp(firebaseConfig);

  const db = app.firestore();
  const auth = app.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { db, auth, provider };