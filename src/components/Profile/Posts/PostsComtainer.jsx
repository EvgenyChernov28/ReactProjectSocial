import React from "react";
import {addPostActionCreator, onPostChangeactionCreator,} from "../../../redux/profile_reducer";
import Posts from "./Posts";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
    };
};

let mapDispatchToProps = (dispatch) => {
    return {
        // updateNewPostText: (text) => {
        //     let action = onPostChangeactionCreator(text);
        //     dispatch(action);
        // },
        addPost: (postMessageBodyForm) => {
            dispatch(addPostActionCreator(postMessageBodyForm));
        },
    };
};

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer;
