import React from 'react';
import Posts_mod from './Posts.module.css';
import Post from './Post/Post';
import {addPostactionCreator, onPostChangeactionCreator} from '../../../redux/state.js'


const Posts = (props) => {
    
    console.log(props);
    let postsElement = props.store.getState().profilePage.posts.map(post => <Post message={post.message} likeCount={post.likeCount} />)
    
    
    let newPostsElement = React.createRef();

    let addPost = () => {
        props.dispatch(addPostactionCreator());
    }

    let onPostChange = () =>{
        let text = newPostsElement.current.value
        props.dispatch(onPostChangeactionCreator(text));
    }

    return (
        <div className={Posts_mod.content}>
            Мои посты
            <div>
                <div>
                    <textarea name="" id="" ref={newPostsElement} cols="30" rows="3" 
                    onChange={onPostChange} value={props.store.getState().profilePage.newPostText}/>
                </div>
                <div>
                    <button onClick={addPost}>Добавить пост</button>
                </div>
            </div>

            {postsElement}


        </div>
    )
}

export default Posts;