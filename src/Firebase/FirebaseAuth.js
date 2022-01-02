import { 
    GoogleAuthProvider,
    getAuth,
    signInWithPopup
} from "firebase/auth";
import {app} from './FirebaseConfig';

const provider = new GoogleAuthProvider();
export const auth = getAuth();


export const signIn = () => {
    return signInWithPopup(auth, provider)
    .then((result) => {
        const user = result.user;
        console.log(user);
        return user;
    }).catch((error) => {
        throw error;
    });
}