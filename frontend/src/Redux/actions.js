import thunk from "redux-thunk";
import axios from "axios";

export const ADD_LINK = "ADD_LINK";
export const LIST_LINK = "LIST_LINK";

export const addLink = (link) => async (dispatch) => {
    console.log("Adding Link to db and store >>", link)
    
    const { data } = await axios.post("http://localhost:8080/api/link", link);
    dispatch({type: ADD_LINK, payload: link});
}

export const listLink = () => async (dispatch) => {
    console.log("Listing links from db and put it in store")

    const { data } = await axios.get("http://localhost:8080/api/link")
    dispatch({type: LIST_LINK, payload: data});

}