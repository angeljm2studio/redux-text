import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyBiR8xjIJlA6PVb0ndf03686m5_agMFkno",
    authDomain: "fernado-74645.firebaseapp.com",
    databaseURL: "https://fernado-74645.firebaseio.com",
    projectId: "fernado-74645",
    storageBucket: "fernado-74645.appspot.com",
    messagingSenderId: "401909264552",
    appId: "1:401909264552:web:0a11537d5321d0638b929d"
};



firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()
const googleProvider = new firebase.auth.GoogleAuthProvider()

export {
    db,
    firebase,
    googleProvider
}