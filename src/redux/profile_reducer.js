const ADD_POST = 'ADD-POST'
const APDATE_NEW_POST_TEXT ='APDATE-NEW-POST-TEXT'

const profileReducer = (state, action) =>{

    switch (action.type){
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likeCount: 0,
              };
            state.posts.push(newPost);
            state.newPostText = "";
            return state;
        case APDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state
    }

}

export default profileReducer;