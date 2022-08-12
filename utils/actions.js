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

export const RegisterUser = async(email,password)=>{
    const result = {stautusResponse:true, error:null}

    try {
        await firebase.auth().createUserWithEmailAndPassword(email,password)
    } catch (error) {
        result.error ="Este correo ya ha sido registrado"     
    }

    return result 
}

export const closeSession = () => {
    return firebase.auth().signOut()
}
