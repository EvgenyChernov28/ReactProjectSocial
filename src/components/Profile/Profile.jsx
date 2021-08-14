import React from 'react';
import Profile_mod from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';
import PostsContainer from './Posts/PostsComtainer';
window.props = []
const Profile = React.memo((props) => {
//     debugger
// window.props.push(props)
    // console.log("profile");
//     console.log(props);
    return (
        <div className={Profile_mod.content}>
            <ProfileInfo saveProfile={props.saveProfile} savePhoto={props.savePhoto} isOwner={props.isOwner} profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
            <PostsContainer />
        </div>
    )
})

export default Profile;