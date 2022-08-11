import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'



const firebaseConfig = {
    apiKey: "AIzaSyBGjbe1uOg4dz53Vzl0T8hRVGu0K1Gd8gw",
    authDomain: "restaurantsb-6ce79.firebaseapp.com",
    projectId: "restaurantsb-6ce79",
    storageBucket: "restaurantsb-6ce79.appspot.com",
    messagingSenderId: "269620011192",
    appId: "1:269620011192:web:2e68c028a43b702d31144d"
  }

  export const firebaseApp = firebase.initializeApp(firebaseConfig)