import {
    createUserWithEmailAndPassword,
    getAuth,
    signInWithEmailAndPassword,
    signOut as so,
    onAuthStateChanged,
    NextOrObserver,
    User,
} from 'firebase/auth'

// app
import { app } from './'
const auth = getAuth(app)

export const signIn = (email: string, password: string) =>
    new Promise((res, rej) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log('i', userCredential)
                res(userCredential.user)
            })
            .catch((err) => {
                const errorCode = err.code
                const errorMessage = err.message
                rej(err)
            })
    })

export const signUp = (email: string, password: string) =>
    new Promise((res, rej) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log('u', userCredential)
                res(userCredential.user)
            })
            .catch((err) => {
                const errorCode = err.code
                const errorMessage = err.message
                rej(err)
            })
    })
export const signOut = () => so(auth)
export const addAuthListener = (observer: NextOrObserver<User>) => {
    onAuthStateChanged(auth, observer)
}
