import { combineReducers, createStore } from "redux";
import dialogReducer from "./dialog_reducer";
import profileReducer from "./profile_reducer";
import usersReducers from "./user_reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogReducer,
    usersPage: usersReducers,
})

let store = createStore(reducers);



export default store;