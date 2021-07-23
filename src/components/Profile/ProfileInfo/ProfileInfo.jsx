import React from 'react';
import Preloader from '../../Preloader/Preloader';
import ProfileInfo_mod from './ProfileInfo.module.css'
import ProfileStatus from './ProfileStatus';


const ProfileInfo = (props) => {

    if(!props.profile){
        return <Preloader />
    }

    return (
        <div className={ProfileInfo_mod.content}>
            <img src={props.profile.photos.large}/>
            <ProfileStatus status="ahgfsjkdg"/>
        </div>
    )
}

export default ProfileInfo;