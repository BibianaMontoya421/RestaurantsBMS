import {firebaseApp} from './firebase'
import * as firebase from 'firebase/compat'
import 'firebase/compat/firestore'; 

const db= firebase.firestore(firebaseApp)


export const isUserlogged = ()=>{
    let isLogged = false 
    firebase.auth().onAuthStateChanged((user)=>{
        user !== null && (isLogged= true)
    })

    return isLogged
}

export const getCurrentUser = () => {
    return firebase.auth().currentUser
}