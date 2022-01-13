import {createStore, combineReducers, applyMiddleware} from 'redux';
import {mainContentReducer} from './mainContent/mainContentReducer';
import {userReducer} from './user/userReducer';
import { gamePageReducer } from './gamePage/gamePageReducer';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    games: mainContentReducer,
    user: userReducer,
    game: gamePageReducer
});

export const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);

