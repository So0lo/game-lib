import { gamePageActionTypes } from "./gamePageActionTypes";

const initialState = {
    game: {},
    movies: [],
    comments: [],
    currentPage: 1,
    chekPage: true,
    fetching: true,
    error: ''
};

export const gamePageReducer = (state = initialState, action) => {
    switch(action.type){
        case gamePageActionTypes.GAME:
            return {
                ...state,
                game: action.payload
            }
        case gamePageActionTypes.MOVIES:
            return {
                ...state,
                movies: action.payload
            }
        case gamePageActionTypes.COMMENTS:
            return {
                ...state,
                comments: [...state.comments, ...action.payload.comments],
                currentPage: action.payload.currentPage,
                chekPage: action.payload.chekPage,
                fetching: false
            }
        case gamePageActionTypes.CLEAR_GAME:
            return {
                game: {},
                movies: [],
                comments: [],
                currentPage: 1,
                chekPage: true,
                fetching: true,
                error: ''
            }
        case gamePageActionTypes.SET_COMMENTS:
            return {
                ...state,
                comments: [action.payload, ...state.comments]
            }
        case gamePageActionTypes.SET_FETCHING:
            return {
                ...state,
                fetching: action.payload
            }
        default: 
            return state;
    }
};