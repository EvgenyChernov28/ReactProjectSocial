import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from "redux-thunk"
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

let store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store


export default store;