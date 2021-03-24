import React from 'react';
import Posts_mod from './Posts.module.css';
import Post from './Post/Post';


const Posts = (props) => {

    

    let postsElement = props.postsData.map( post => <Post message={post.message} likeCount={post.likeCount} /> )

    return (
        <div className={Posts_mod.content}>
            Мои посты
            <div>
                <div>
                    <textarea name="" id="" cols="30" rows="3"></textarea>
                </div>
                <div>
                    <button>Добавить пост</button>
                </div>
            </div>
            
            {postsElement}
            

        </div>
    )
}

export default Posts;