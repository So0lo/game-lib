import {createStore, combineReducers, applyMiddleware} from 'redux';
import {mainContentReducer} from './mainContent/mainContentReducer';
import {userReducer} from './user/userReducer';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    games: mainContentReducer,
    user: userReducer
});

export const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);

