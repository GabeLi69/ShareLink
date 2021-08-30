import {  ADD_LINK, LIST_LINK } from "./actions";

const initialState = {
    linkList: []
};

export function linkReducer(state = initialState, action){
    switch(action.type){
        case ADD_LINK:
            return {
                linkList: [...state.linkList, action.payload]
            };
        case LIST_LINK:
            return {
                linkList: action.payload
            };
        default:
            return state;
        }
}