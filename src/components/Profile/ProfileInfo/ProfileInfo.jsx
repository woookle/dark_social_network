import React from "react";
import style from "./ProfileInfo.module.css";
import defaultAvatar from "../../../assets/images/userPNG.jpg";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import { NavLink } from "react-router-dom";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }
  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      props.savePhoto(e.target.files[0]);
    }
  };
  return (
    <div className={style.main_container}>
      <div className={style.descriptionBlock}>
        <div className={style.image_and_changed}>
          <img
            className={props.isOwner ? style.myavatar : style.avatar}
            src={
              props.profile.photos.small != null
                ? props.profile.photos.small
                : defaultAvatar
            }
          />
          {props.isOwner && (
            <input
              type="file"
              className={style.change_photo}
              onChange={onMainPhotoSelected}
            />
          )}
        </div>
        <div>
          <p className={style.fullName}>{props.profile.fullName}</p>
          <ProfileStatusWithHooks
            className={style.aboutMe}
            status={props.status}
            updateStatus={props.updateStatus}
          />
        </div>
      </div>
      <div className={style.notes}>
        <div>
          <p>
            <b>Full Name</b>: {props.profile.fullName}
          </p>
          <p>
            <b>Looking for a job</b>:{" "}
            {props.profile.lookingForAJob ? "Yes" : "No"}
          </p>
          <p>
            <b>About me</b>:{" "}
            {props.profile.aboutMe ? props.profile.aboutMe : "..."}
          </p>
          {props.isOwner && <NavLink to={'/edit_profile'} className={style.edit_profile} >Изменить</NavLink>}
        </div>
        <div className={style.contacts_box}>
          <p className={style.important_text}>Contacts</p>
          <div>
            {Object.keys(props.profile.contacts).map((key) => (
              <Contact
                key={key}
                contactTitle={key}
                contactValue={props.profile.contacts[key]}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Contact = ({ contactTitle, contactValue }) => {
  return (
    <div>
      <b>{contactTitle}</b>: {contactValue ? contactValue : "None"}
    </div>
  );
};

export default ProfileInfo;
