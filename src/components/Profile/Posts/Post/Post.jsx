import React from 'react';
import Post_mod from './Post.module.css';


const Post = (props) => {
    

    return (
        <div className={Post_mod.content}>
            <img src="https://pngicon.ru/file/uploads/gory.png" alt="" />
            {props.message};

            <div>
                {props.mane}
                <span>Лайк{props.likeCount}</span>
            </div>
            
        </div>
    )
}

export default Post;