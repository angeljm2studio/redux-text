

import {types} from '../types/types'
import {firebase, googleProvider} from '../firebase/firebase'



export const startRegisterEmailaAndPassword = (email, password, name) =>{
    return (dispatch) =>{
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then( async ({user})=>{
           await user.updateProfile({displayName: name})
            dispatch(login(user.uid, user.displayName))
        })
    }
}



export const startRegisterLoginGoogle = () =>{
    return(dispatch) =>{
        firebase.auth().signInWithPopup(googleProvider)
       .then(({user})=>{
           dispatch(login(user.uid, user.displayName))
       })
    }
}


export const startLogin = (email, password) => {
  return (dispatch) =>{
      firebase.auth().signInWithEmailAndPassword(email, password)
      .then(({user})=>{
          dispatch(login(user.uid, user.displayName))
      })
  }
}

export const login = (uid, displayName) =>({
    type: types.login,
    payload: {
        uid,
        displayName
    }
})