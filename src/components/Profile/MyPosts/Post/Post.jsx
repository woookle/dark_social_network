import defaultAvatar from "../../../../assets/images/userPNG.jpg"
import React from "react";
import style from './Post.module.css';

const Post = (props) => {
    return (
      <div className={style.item}>
        <div className={style.post_info}>
          <img src={props.photo != null ? props.photo : defaultAvatar} alt="avatar" />
          {props.message}
        </div>
        <div className={style.total_likes}>
          <span>𖤐</span> {props.like}
        </div>
      </div>

    )
}

export default Post