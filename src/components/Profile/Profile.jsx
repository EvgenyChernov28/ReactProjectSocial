import React from 'react';
import Profile_mod from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';
import PostsContainer from './Posts/PostsComtainer';

const Profile = (props) => {


    return (
        <div className={Profile_mod.content}>
            <ProfileInfo profile={props.profile}/>
            <PostsContainer />
        </div>
    )
}

export default Profile;