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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return

  const userRef = firestore.doc(`users/${userAuth.uid}`)
  const snapshot = await userRef.get()

  console.log(snapshot)

  if (!snapshot.exists) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      })
    } catch (error) {
      console.log('error creating user', error.message)
    }
  }

  return userRef
}

export default firebase
