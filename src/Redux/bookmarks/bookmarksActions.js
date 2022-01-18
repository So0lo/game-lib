import { bookmarksActionTypes } from "./bookmarksActionTypes";
import { db } from '../../Firebase/FirebaseConfig';
import { doc, getDoc } from "firebase/firestore";


export const addBookmark = (game) => ({
    type: bookmarksActionTypes.ADD,
    payload: game
});

export const deleteBookmark = (id) => ({
    type: bookmarksActionTypes.DELETE,
    payload: id
});

export const getUserBookmarks = (userId) => {
    return async (dispatch) => {
        const docSnap = await getDoc(doc(db, "users", userId));
        dispatch({
            type: bookmarksActionTypes.USER_BOOKMARKS,
            payload: docSnap.data().bookmarks
        });
    }
}
