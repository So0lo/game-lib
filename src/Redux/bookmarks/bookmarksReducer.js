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
        default: 
            return state;
    }
};