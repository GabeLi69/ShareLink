import {combineReducers, createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import {linkReducer} from "./reducers";

const rootReducer = combineReducers({
    linkStore: linkReducer,
}); 

export const createReduxStore = () => {
    return createStore(
        rootReducer,
        applyMiddleware(thunk)
    );
}