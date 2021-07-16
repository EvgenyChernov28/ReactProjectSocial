const ADD_POST = "ADD-POST";
const APDATE_NEW_POST_TEXT = "APDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";

let initialState = {
    posts: [
        { id: 1, message: "Привет, как ты?", likeCount: 5 },
        { id: 2, message: "Это мой первый пост.", likeCount: 23 },
    ],
    newPostText: "samyrai",
    profile: null
};
const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 6,
                message: state.newPostText,
                likeCount: 0,
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: "",
            };
        }
        case APDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText,
            };
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile,
            };
        }

        default:
            return state;
    }
};

export const addPostActionCreator = () => ({ type: "ADD-POST" });
export const onPostChangeactionCreator = (text) => ({
    type: "APDATE-NEW-POST-TEXT",
    newText: text,
});
export const setUserProfile = (profile) => ({ type: "SET_USER_PROFILE", profile});

export default profileReducer;
