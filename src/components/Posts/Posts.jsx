import React, { Component } from 'react';
import Posts_mod from './Posts.module.css';
import Post from './Post/Post';

const Posts = () => {
    return (
        <div className={Posts_mod.content}>
            Мои посты
            <div>
                <textarea name="" id="" cols="30" rows="3"></textarea>
                <button>Добавить пост</button>
            </div>
            <Post message='Привет, как ты?' likeCount='5'/>
            <Post message='Это мой первый пост.'/>

        </div>
    )
}

export default Posts;