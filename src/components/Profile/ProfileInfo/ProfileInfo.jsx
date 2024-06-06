import React from "react";
import style from "./ProfileInfo.module.css";
import defaultAvatar from "../../../assets/images/userPNG.jpg";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

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
    <div>
      <div className={style.descriptionBlock}>
        <div className={style.image_and_changed}>
          <img
            className={style.avatar}
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
          <p className={style.aboutMe}>{props.profile.aboutMe}</p>
          <ProfileStatusWithHooks
            className={style.aboutMe}
            status={props.status}
            updateStatus={props.updateStatus}
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
