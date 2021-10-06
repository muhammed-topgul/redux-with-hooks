import {applyMiddleware, compose, createStore} from "redux";
import thunk from "redux-thunk";
import {combineReducers} from "redux";
import accountReducer from './reducer/AccountReducer'

const reducers = combineReducers({
    account: accountReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const configureStore = createStore(
    reducers,
    {},
    composeEnhancers(applyMiddleware(thunk))
);
