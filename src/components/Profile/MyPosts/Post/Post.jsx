import React from "react";
import style from './Post.module.css';

const Post = (props) => {
    return (

      <div className={style.item}>
        <div className={style.post_info}>
          <img src="https://i.pinimg.com/originals/b3/47/ab/b347ab3c49fe082880ff2d5a315e14d5.jpg" alt="avatar" />
          {props.message}
        </div>
        <div className={style.total_likes}>
          <span>𖤐</span> {props.like}
        </div>
      </div>

    )
}

export default Post