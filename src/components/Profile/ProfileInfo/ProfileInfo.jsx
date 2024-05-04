import React from "react";
import style from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div>
      <div className={style.div}>
        <img src="https://i.pinimg.com/originals/7c/11/de/7c11dea46b3b915460e750a9f43e7498.jpg" />
      </div>
      <div className={style.descriptionBlock}>
        ava + description
        </div>
    </div>
  );
};

export default ProfileInfo;
