import React, { useState } from "react";
import Preloader from "../../common/Preloader/Preloader";
import ProfileInfo_mod from "./ProfileInfo.module.css";
import ProfileStatusHook from "./ProfileStatusHOOK";
import userPhoto from "../../../userPhoto.jpg";
import { Field, reduxForm } from "redux-form";
import { Input } from "../../common/Form/FormsControls";

const ProfileInfo = React.memo(({ profile, isOwner, status, updateStatus, savePhoto, saveProfile }) => {
    let [editProfileMod, setEditProfileMod] = useState(false);

    if (!profile) {
        return <Preloader />;
    }

    const onUploadFile = (event) => {
        if (event.target.files.length) {
            savePhoto(event.target.files[0]);
        }
    };

    const onSubmit = (formData) => {
        saveProfile(formData)
        setEditProfileMod(false)
    };

    return (
        <div className={ProfileInfo_mod.content}>
            <img src={profile.photos.large || userPhoto} alt="largePhoto" />
            {isOwner && <input type="file" onChange={onUploadFile} />}

            <div>
                <b>Статус:</b> <ProfileStatusHook status={status} updateStatus={updateStatus} />
            </div>
            {editProfileMod ? <ProfileInfoReduxForm initialValues={profile} onSubmit={onSubmit} /> : <ProfileInfoData profile={profile} />}

            {isOwner && !editProfileMod && (
                <button onClick={() => setEditProfileMod(true)}>Редактировать профиль</button>
            )}
        </div>
    );
})

const ProfileInfoData = ({ profile }) => {
    console.log("profile",profile);
    return (
        <div>
            <div>
                <b>Полное имя:</b> {profile.fullName}
            </div>
            <div>
                <b>Ищу работу:</b> {profile.lookingForAJob ? "да" : "нет"}
            </div>
            {profile.lookingForAJob && (
                <div>
                    <b>Описание желаемой работы:</b> {profile.lookingForAJobDescription}
                </div>
            )}
            <div>
                <b>Обо мне:</b> {profile.aboutMe}
            </div>
        </div>
    );
};

const ProfileInfoForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Полное имя"} name={"fullName"} component={Input} />
            </div>
            <div>
                <Field placeholder={"в поисках работы?"} name={"lookingForAJob"} component={Input} type={"checkbox"} />
            </div>

            <div>
                <Field placeholder={"описание работы"} name={"lookingForAJobDescription"} component={Input} />
            </div>
            <div>
                <Field placeholder={"Обо мне"} name={"aboutMe"} component={Input} />
            </div>
            <div>
                <button>Нажать для сохранения и отправки</button>
            </div>
        </form>
    );
};

const ProfileInfoReduxForm = reduxForm({
    form: "profileInfo",
})(ProfileInfoForm);

export default ProfileInfo;
