import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import ProfileInfo_mod from './ProfileInfo.module.css'
import ProfileStatus from './ProfileStatus';


const ProfileInfo = (props) => {

    if(!props.profile){
        return <Preloader />
    }

    return (
        <div className={ProfileInfo_mod.content}>
            <img src={props.profile.photos.large}/>
            <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
        </div>
    )
}

export default ProfileInfo;