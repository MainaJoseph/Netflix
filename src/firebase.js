import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore";




const firebaseConfig = {
    apiKey: "AIzaSyAOGt_0Gn-4gpo7APUO2qXk79B5Gf4mEL0",
    authDomain: "netflix-clone-jm-9d3f2.firebaseapp.com",
    projectId: "netflix-clone-jm-9d3f2",
    storageBucket: "netflix-clone-jm-9d3f2.appspot.com",
    messagingSenderId: "784169393906",
    appId: "1:784169393906:web:3422dca75c63414e463a6b"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();


  export {auth}

  export default db;