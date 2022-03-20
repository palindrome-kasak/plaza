// import { initializeApp } from "firebase/app";
// import firebase from 'firebase'
// import * as firebase from 'firebase';
import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"
const firebaseConfig = {
    apiKey: "AIzaSyBEpdvUVCDMa6n9hoRzSTniWdTel5JM4Gg",
    authDomain: "plazacrystal.firebaseapp.com",
    projectId: "plazacrystal",
    storageBucket: "plazacrystal.appspot.com",
    messagingSenderId: "1015284406665",
    appId: "1:1015284406665:web:ad7f90b1e91b59ec85e958"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export {firebase}
