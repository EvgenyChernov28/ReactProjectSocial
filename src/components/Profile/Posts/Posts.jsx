import React from 'react';
import Posts_mod from './Posts.module.css';
import Post from './Post/Post';


const Posts = (props) => {
    
    let postsElement = props.posts.map(post => <Post message={post.message} likeCount={post.likeCount} />)
    
    let newPostsElement = React.createRef();

    let onAddPost = () => {
        props.AddPost();
    }

    let onPostChange = () =>{
        let text = newPostsElement.current.value
        props.updateNewPostText(text);
    }

    return (
        <div className={Posts_mod.content}>
            Мои посты
            <div>
                <div>
                    <textarea name="" id="" ref={newPostsElement} cols="30" rows="3" 
                    onChange={onPostChange} value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={onAddPost}>Добавить пост</button>
                </div>
            </div>

            {postsElement}


        </div>
    )
}

export default Posts;