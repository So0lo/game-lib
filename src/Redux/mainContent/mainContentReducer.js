import {mainContentActionTypes} from './mainContentActionTypes';

const initialState = {
    games: [],
    currentPage: 1,
    searchText: '',
    genresFilter: '',
    tagsFilter: '',
    platformsFilter: '',
    chekPage: true,
    fetching: true,
    isLoading: true
};

export const mainContentReducer = (state = initialState, action) => {
    switch(action.type){
        case mainContentActionTypes.SHOW_GAMES:
            return {
                games: [...state.games, ...action.payload.data],
                currentPage: action.payload.currentPage,
                searchText: action.payload.searchText,
                genresFilter: action.payload.genresFilter,
                tagsFilter: action.payload.tagsFilter,
                platformsFilter: action.payload.platformsFilter,
                chekPage: action.payload.chekPage,
                fetching: false,
                isLoading: false
            }
        case mainContentActionTypes.CLEAR_GAMES:
            return {
                ...state,
                games: action.payload,
                currentPage: 1,
                chekPage: true,
                fetching: true,
                isLoading: true
            }
        case mainContentActionTypes.SET_FETCHING:
            return {
                ...state,
                fetching: action.payload
            }
        case mainContentActionTypes.SET_ISLOADING:
            return {
                ...state,
                isLoading: action.payload
            }
        default: 
            return state;
    }
};