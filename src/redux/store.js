import { combineReducers, createStore } from "redux";
import dialogReducer from "./dialog_reducer";
import profileReducer from "./profile_reducer";
import usersReducers from "./user_reducer";
import authReducer from "./auth_reducer"

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogReducer,
    usersPage: usersReducers,
    auth: authReducer,
})

let store = createStore(reducers);
window.store = store


export default store;