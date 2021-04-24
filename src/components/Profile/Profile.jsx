import React from 'react';
import Profile_mod from './Profile.module.css'
import Posts from './Posts/Posts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
    console.log('2',props);

    return (
        <div className={Profile_mod.content}>
            <ProfileInfo />
            <Posts 
                store={props.store}
                // newPostText={props.postsData}
                dispatch={props.dispatch} />
        </div>
    )
}

export default Profile;