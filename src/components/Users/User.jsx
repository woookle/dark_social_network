import React from "react";
import style from "./Users.module.css";
import userPhoto from "../../assets/images/userPNG.jpg";
import { NavLink } from "react-router-dom";

const User = ({user, ...props}) => {
  return (
    <div className={style.user_block}>
      <div className={style.left_block}>
        <span className={style.avatar_and_btn}>
          <div>
            <NavLink to={"/profile/" + user.id}>
              <img
                className={style.userPhoto}
                src={user.photos.small != null ? user.photos.small : userPhoto}
              />
            </NavLink>
          </div>
          <div>
            {user.followed ? (
              <button
                className={style.flw_btn}
                disabled={props.followingInProgress.some((id) => id === user.id)}
                onClick={() => {
                  props.unfollow(user.id);
                }}
                value="active"
              >
                Unfollow
              </button>
            ) : (
              <button
                className={style.flw_btn}
                disabled={props.followingInProgress.some((id) => id === user.id)}
                onClick={() => {
                  props.follow(user.id);
                }}
              >
                Follow
              </button>
            )}
          </div>
        </span>
        <span className={style.fullname_and_status}>
          <div className={style.user_full_name}>{user.name}</div>
          <div className={style.user_status}>{user.status}</div>
        </span>
      </div>
      <span className={style.location}>
        <div>{"user.location.country"}</div>
        <div>{"user.location.city"}</div>
      </span>
    </div>
  );
};


export default User;