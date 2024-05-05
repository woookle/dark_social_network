import React from "react";
import style from "./ProfileInfo.module.css";
import defaultAvatar from "../../../assets/images/userPNG.jpg";
import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = (props) => {
  if(!props.profile) {
    return <Preloader />
  }
  return (
    <div>
      <div className={style.div}>
        <img src="https://i.pinimg.com/originals/7c/11/de/7c11dea46b3b915460e750a9f43e7498.jpg" />
      </div>
      <div className={style.descriptionBlock}>
        <img className={style.avatar} src={props.profile.photos.small != null ? props.profile.photos.small : defaultAvatar} />
        <div>
          <p className={style.fullName}>{props.profile.fullName}</p>
          <p className={style.aboutMe}>{props.profile.aboutMe}</p>
        </div>
        </div>
    </div>
  );
};

export default ProfileInfo;
