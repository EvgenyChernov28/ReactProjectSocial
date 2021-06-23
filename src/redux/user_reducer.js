const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

let initialState = {
    users: [
        {
            id: 1,
            followed: true,
            name: "Алексей",
            status: true,
            location: { country: "Russia", city: "Moscow" },
        },
        {
            id: 2,
            followed: false,
            name: "Павел",
            status: true,
            location: { country: "Russia", city: "Moscow" },
        },
        {
            id: 3,
            followed: true,
            name: "Гриша",
            status: true,
            location: { country: "Russia", city: "Moscow" },
        },
        {
            id: 4,
            followed: false,
            name: "Оля",
            status: true,
            location: { country: "Russia", city: "Moscow" },
        },
    ],
    newPostText: "samyrai",
};
const usersReducers = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map((u) => {
                    if (u.id === action.usersId) {
                        return { ...u, followed: true };
                    }
                    return u;
                }),
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map((u) => {
                    if (u.id === action.usersId) {
                        return { ...u, followed: false };
                    }
                    return u;
                }),
            };
        case SET_USERS: {
            return {
                ...state,
                users: [...state.users, ...action.users],
            };
        }

        default:
            return state;
    }
};

export const followAC = (usersId) => ({ type: FOLLOW, usersId });
export const unfollowAC = (usersId) => ({ type: UNFOLLOW, usersId });

export const setUsersAC = (users) => ({ type: SET_USERS, users });

export default usersReducers;
