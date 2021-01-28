import firebase from 'firebase'


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBYEVoRPQZovJiyBM_7QveDVQkPf6A4RNA",
    authDomain: "facebook-clone-e998b.firebaseapp.com",
    projectId: "facebook-clone-e998b",
    storageBucket: "facebook-clone-e998b.appspot.com",
    messagingSenderId: "823225918509",
    appId: "1:823225918509:web:e0900c0553882a4c4c04a4",
    measurementId: "G-E4D604GV1B"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;