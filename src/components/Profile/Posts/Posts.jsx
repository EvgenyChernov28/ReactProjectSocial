import React from "react";
import Posts_mod from "./Posts.module.css";
import Post from "./Post/Post";
import { Field, reduxForm } from "redux-form";

const Posts = (props) => {
    let postsElement = props.posts.map((post) => (
        <Post message={post.message} likeCount={post.likeCount} key={post.id} />
    ));

    // let newPostsElement = React.createRef();

    // let onAddPost = () => {
    //     props.addPost();
    // };

    // let onPostChange = () => {
    //     let text = newPostsElement.current.value;
    //     props.updateNewPostText(text);
    // };
    let addNewPost = (event) => {
        console.log(event.postMessageBodyForm);
        console.log(props);
        props.addPost(event.postMessageBodyForm)
    };

    return (
        <div className={Posts_mod.content}>
            Мои посты
            <PostsReduxForm onSubmit={addNewPost}/>
            {/* <div>
                <div>
                    <textarea
                        name=""
                        id=""
                        ref={newPostsElement}
                        cols="30"
                        rows="3"
                        onChange={onPostChange}
                        value={props.newPostText}
                    />
                </div>
                <div>
                    <button onClick={onAddPost}>Добавить пост</button>
                </div>
            </div> */}
            {postsElement}
        </div>
    );
};

const PostsForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field name={"postMessageBodyForm"} placeholder={"Введите Ваше сообщение"} component={"textarea"}/>

            <button>Добавить пост</button>
        </form>
    );
};

const PostsReduxForm = reduxForm({
    form: "posts",
})(PostsForm);

export default Posts;
