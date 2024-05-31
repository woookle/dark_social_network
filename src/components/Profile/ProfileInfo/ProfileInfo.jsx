import React from "react";
import style from "./ProfileInfo.module.css";
import defaultAvatar from "../../../assets/images/userPNG.jpg";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }
  return (
    <div>
      <div className={style.div}></div>
      <div className={style.descriptionBlock}>
        <img
          className={style.avatar}
          src={
            props.profile.photos.small != null
              ? props.profile.photos.small
              : defaultAvatar
          }
        />
        <div>
          <p className={style.fullName}>{props.profile.fullName}</p>
          <p className={style.aboutMe}>{props.profile.aboutMe}</p>
          <ProfileStatus
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
