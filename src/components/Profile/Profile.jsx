import React from 'react';
import Profile_mod from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';
import PostsContainer from './Posts/PostsComtainer';

const Profile = (props) => {
    console.log('2',props);

    return (
        <div className={Profile_mod.content}>
            <ProfileInfo />
            <PostsContainer 
                store={props.store} />
        </div>
    )
}

export default Profile;