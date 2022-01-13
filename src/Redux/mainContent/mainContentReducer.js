import {mainContentActionTypes} from './mainContentActionTypes';

const initialState = {
    games: [],
    currentPage: 1,
    searchText: '',
    genresFilter: '',
    tagsFilter: '',
    platformsFilter: '',
    chekPage: true,
    fetching: true
};

export const mainContentReducer = (state = initialState, action) => {
    switch(action.type){
        case mainContentActionTypes.SHOW_GAMES:
            return {
                games: [...state.games, ...action.payload.games],
                currentPage: action.payload.currentPage,
                searchText: action.payload.searchText,
                genresFilter: action.payload.genresFilter,
                tagsFilter: action.payload.tagsFilter,
                platformsFilter: action.payload.platformsFilter,
                chekPage: action.payload.chekPage,
                fetching: false
            }
        case mainContentActionTypes.CLEAR_GAMES:
            return {
                ...state,
                games: action.payload,
                currentPage: 1,
                chekPage: true,
                fetching: true
            }
        case mainContentActionTypes.SET_FETCHING:
            return {
                ...state,
                fetching: action.payload
            }
        default: 
            return state;
    }
};