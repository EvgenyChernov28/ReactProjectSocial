import { stopSubmit } from "redux-form";
import { authAPI } from "../API/api";

const SET_USER_DATA = "SET_USER_DATA";
const SET_CAPTCHA_SUCCESS = "SET_CAPTCHA_SUCCESS";

let initialState = {
    userId: null,
    login: null,
    email: null,
    isFetching: false,
    isAuth: false,
    captcha: null,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.payload,
            };
        }
        case SET_CAPTCHA_SUCCESS: {
            return {
                ...state,
                ...action.payload,
            };
        }
        default:
            return state;
    }
};

export const setUserData = (userId, email, login, isAuth) => ({
    type: SET_USER_DATA,
    payload: { userId, email, login, isAuth },
});
export const setCaptchaSuccess = (captcha) => ({
    type: SET_USER_DATA,
    payload: { captcha },
});

export const getAuthUserData = () => (dispatch) => {
    return authAPI.me().then((response) => {
        if (response.data.resultCode === 0) {
            let { id, login, email } = response.data.data;
            dispatch(setUserData(id, email, login, true));
        }
    });
};

export const getCaptcha = () => (dispatch) => {
    return authAPI.captchaURL().then((response) => {
            
            let captcha  = response.data.url;
            dispatch(setCaptchaSuccess(captcha));
        
    });
};

export const login = (email, password, rememberMe, captcha) => (dispatch) => {
    authAPI.login(email, password, rememberMe, captcha).then((response) => {
        if (response.data.resultCode === 0) {
            dispatch(getAuthUserData());
        } else if(response.data.resultCode === 10){
            dispatch(getCaptcha())
        }else {
            let message = response.data.messages.length > 0 ? response.data.messages[0] : "какая-то ошибка";
            dispatch(stopSubmit("login", { _error: message }));
        }
    });
};

export const logout = () => (dispatch) => {
    authAPI.logout().then((response) => {
        if (response.data.resultCode === 0) {
            dispatch(setUserData(null, null, null, false));
        }
    });
};

export default authReducer;
