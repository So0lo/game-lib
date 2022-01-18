import {signIn, auth} from '../../Firebase/FirebaseAuth';
import {userActionTypes} from './userActionTypes';
import { db } from '../../Firebase/FirebaseConfig';
import { doc, setDoc, getDoc } from "firebase/firestore";

export const userLogin = () => {
    return (dispatch) => {
        signIn()
        .then((user) => {
            dispatch({
                type: userActionTypes.USER_LOGIN,
                payload: user 
            });
        })
        .catch((err) => {
            dispatch({
                type: 'USER_LOGIN_ERROR',
                payload: err
            });
        })
    }
}

export const userLogout = () => {
    return (dispatch) => {
        auth.signOut()
        .then(() => {
            dispatch({
                type: userActionTypes.USER_LOGOUT
            });
        });
    }
}

export const initUser = (userId, bookmarks) => {
    return async () => {
        await setDoc(doc(db, "users", userId), {
            bookmarks: bookmarks
        });
    }
}
