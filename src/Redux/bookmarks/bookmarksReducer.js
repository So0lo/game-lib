import { bookmarksActionTypes } from "./bookmarksActionTypes";

const initialState = {
    games: []
};

export const bookmarksReducer = (state = initialState, action) => {
    switch(action.type){
        case bookmarksActionTypes.ADD:
            return {
                games: [...state.games, action.payload]
            }
        case bookmarksActionTypes.DELETE:
            return {
                games: state.games.filter(
                    (game) => game.id !== action.payload
                )
            }
        case bookmarksActionTypes.USER_BOOKMARKS:
                return {
                    games: action.payload
                }
        default: 
            return state;
    }
};