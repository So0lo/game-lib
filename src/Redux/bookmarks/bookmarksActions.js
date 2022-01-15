import { bookmarksActionTypes } from "./bookmarksActionTypes";

export const addBookmark = (game) => ({
    type: bookmarksActionTypes.ADD,
    payload: game
});