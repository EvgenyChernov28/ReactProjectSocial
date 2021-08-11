import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import ProfileInfo_mod from './ProfileInfo.module.css'
import ProfileStatusHook from './ProfileStatusHOOK';
import userPhoto from "../../../userPhoto.jpg";

const ProfileInfo = ({profile, isOwner, status, updateStatus, savePhoto}) => {

    if(!profile){
        return <Preloader />
    }

    const onUploadFile = (event) => {
        if(event.target.files.length){
            savePhoto(event.target.files[0])
        }
        // let largePhoto = event.target.files;
        // console.log(largePhoto);
    }

    return (
        <div className={ProfileInfo_mod.content}>
            <img src={profile.photos.large || userPhoto} alt="largePhoto" />
            {isOwner && <input type="file" onChange={onUploadFile}/>}
            <ProfileStatusHook status={status} updateStatus={updateStatus}/>
        </div>
    )
}

export default ProfileInfo;