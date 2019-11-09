import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: 'AIzaSyARIKZNWyzjgS-5cQUG5YfMpaPV-8izVq4',
  authDomain: 'crwn-db-873cd.firebaseapp.com',
  databaseURL: 'https://crwn-db-873cd.firebaseio.com',
  projectId: 'crwn-db-873cd',
  storageBucket: 'crwn-db-873cd.appspot.com',
  messagingSenderId: '837294078895',
  appId: '1:837294078895:web:53fd9068fcd1caa1194d5a',
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
