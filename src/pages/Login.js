import React from 'react'
import { firebase } from '../firebase/firebase'



const Login = () => {
    const SignInWithGoogle = () => {
        var google_provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(google_provider)
            .then((re) => {
                console.log(re);
            }).catch((err) => {
                console.log(err);
            })
    }
    return (
        <button onClick={SignInWithGoogle}>sign in with google</button>
    )
}

export default Login
