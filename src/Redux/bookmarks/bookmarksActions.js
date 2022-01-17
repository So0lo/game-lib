import { bookmarksActionTypes } from "./bookmarksActionTypes";

export const addBookmark = (game) => ({
    type: bookmarksActionTypes.ADD,
    payload: game
});

export const deleteBookmark = (id) => ({
    type: bookmarksActionTypes.DELETE,
    payload: id
});