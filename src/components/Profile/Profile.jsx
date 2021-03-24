import React, { Component } from 'react';
import Profile_mod from './Profile.module.css'
import Posts from './Posts/Posts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {

    
    return (
        <div className={Profile_mod.content}>
            <ProfileInfo />
            <Posts postsData={props.postsData} />
        </div>
    )
}

export default Profile;