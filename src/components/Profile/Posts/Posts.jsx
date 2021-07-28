import React from "react";
import Posts_mod from "./Posts.module.css";
import Post from "./Post/Post";
import { Field, reduxForm } from "redux-form";
import { maxLengthCreator, required } from "../../../utils/validators";
import { Textarea } from "../../common/Form/FormsControls";

const Posts = (props) => {
    let postsElement = props.posts.map((post) => (
        <Post message={post.message} likeCount={post.likeCount} key={post.id} />
    ));

    let addNewPost = (event) => {
        console.log(event.postMessageBodyForm);
        console.log(props);
        props.addPost(event.postMessageBodyForm);
    };

    return (
        <div className={Posts_mod.content}>
            Мои посты
            <PostsReduxForm onSubmit={addNewPost} />
            {postsElement}
        </div>
    );
};
const maxLength10 = maxLengthCreator(10)

const PostsForm = (props) => {

    
    return (
        <form onSubmit={props.handleSubmit}>
            <Field
                name={"postMessageBodyForm"}
                placeholder={"Введите Ваше сообщение"}
                validate={[required, maxLength10]}
                component={Textarea}
            />

            <button>Добавить пост</button>
        </form>
    );
};

const PostsReduxForm = reduxForm({
    form: "posts",
})(PostsForm);

export default Posts;
