const ADD_POST = 'ADD-POST'
const APDATE_NEW_POST_TEXT ='APDATE-NEW-POST-TEXT'


let initialState = {
    posts: [
      { id: 1, message: "Привет, как ты?", likeCount: 5 },
      { id: 2, message: "Это мой первый пост.", likeCount: 23 },
    ],
    newPostText: "samyrai",
  }
const profileReducer = (state = initialState, action) =>{

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

export const addPostactionCreator = () => ({ type: "ADD-POST" });
export const onPostChangeactionCreator = (text) => ({
  type: "APDATE-NEW-POST-TEXT",
  newText: text,
});

export default profileReducer;