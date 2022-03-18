import firebase from 'firebase/app';
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBEpdvUVCDMa6n9hoRzSTniWdTel5JM4Gg",
    authDomain: "plazacrystal.firebaseapp.com",
    projectId: "plazacrystal",
    storageBucket: "plazacrystal.appspot.com",
    messagingSenderId: "1015284406665",
    appId: "1:1015284406665:web:ad7f90b1e91b59ec85e958"
  };



firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const facebookAuthProvider = new firebase.auth.facebookAuthProvider();

export{auth, googleAuthProvider,facebookAuthProvider}; 