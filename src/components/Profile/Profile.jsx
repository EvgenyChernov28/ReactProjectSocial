import React, { Component } from 'react';
import Profile_mod from './Profile.module.css'
import Posts from '../Posts/Posts';

const Profile = () => {
    return (
        <div className={Profile_mod.content}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRisv-yQgXGrto6OxQxX62JyvyQGvRsQQ760g&usqp=CAU"></img>
            <Posts />
        </div>
    )
}

export default Profile;