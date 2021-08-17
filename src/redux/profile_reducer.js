import { usersAPI, profileAPI } from "../API/api";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_SET_STATUS";
const SET_PHOTO = "SET_PHOTO";

let initialState = {
    posts: [
        { id: 1, message: "Привет, как ты?", likeCount: 5 },
        { id: 2, message: "Это мой первый пост.", likeCount: 23 },
    ],
    profile: null,
    status: "",
};
const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 6,
                message: action.newPostText,
                likeCount: 0,
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
            };
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile,
            };
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status,
            };
        }
        case SET_PHOTO: {
            return {
                ...state,
                profile: { ...state.profile, photos: action.photos },
            };
        }

        default:
            return state;
    }
};

export const addPostActionCreator = (newPostText) => ({ type: ADD_POST, newPostText });
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
export const setStatus = (status) => ({ type: SET_STATUS, status });
export const setPhotoSuccess = (photos) => ({ type: SET_PHOTO, photos });

export const getStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId).then((response) => {
        dispatch(setStatus(response.data));
    });
};
export const updateStatus = (status) => async (dispatch) => {
    try {
        let response = await profileAPI.updateStatus(status);
        if (response.data.resultCode === 0) {
            dispatch(setStatus(status));
        }
    } catch (error) {
        debugger;
    }
};
export const getUserProfile = (userId) => (dispatch) => {
    usersAPI.getProfile(userId).then((response) => {
        dispatch(setUserProfile(response.data));
    });
};

export const savePhoto = (file) => (dispatch) => {
    profileAPI.savePhoto(file).then((response) => {
        dispatch(setPhotoSuccess(response.data.data.photos));
    });
};

export const saveProfile = (profile) => (dispatch, getState) => {
    const userId = getState().auth.userId;
    profileAPI.saveProfile(profile).then((response) => {
        dispatch(getUserProfile(userId));
    });
};

export default profileReducer;
