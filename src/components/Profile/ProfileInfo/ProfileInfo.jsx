import React from 'react';
import Preloader from '../../Preloader/Preloader';
import ProfileInfo_mod from './ProfileInfo.module.css'


const ProfileInfo = (props) => {

    if(!props.profile){
        return <Preloader />
    }

    return (
        <div className={ProfileInfo_mod.content}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRisv-yQgXGrto6OxQxX62JyvyQGvRsQQ760g&usqp=CAU"></img>
            <img src={props.profile.photos.large}/>
        </div>
    )
}

export default ProfileInfo;