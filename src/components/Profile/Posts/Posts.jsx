import React from 'react';
import Posts_mod from './Posts.module.css';
import Post from './Post/Post';


const Posts = (props) => {

    let postsElement = props.postsData.posts.map(post => <Post message={post.message} likeCount={post.likeCount} />)
    console.log(postsElement);
    let newPostsElement = React.createRef();

    let addPost = () => {
        props.dispatch({ type: 'ADD-POST'});
    }

    let onPostChange = () =>{
        let text = newPostsElement.current.value
        props.dispatch({ type: 'APDATE-NEW-POST-TEXT', newText: text});
    }

    return (
        <div className={Posts_mod.content}>
            Мои посты
            <div>
                <div>
                    <textarea name="" id="" ref={newPostsElement} cols="30" rows="3" 
                    onChange={onPostChange} value={props.postsData.newPostText}/>
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