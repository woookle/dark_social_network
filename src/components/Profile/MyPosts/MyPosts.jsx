import React from "react";
import style from "./MyPosts.module.css";
import Post from "./Post/Post";
import AddPostForm from "./AddPostForm/AddPostForm";

const MyPosts = React.memo((props) => {
  let postElements = props.posts.map((p) => (
    <Post message={p.message} key={p.id} like={p.likesCount} photo={props.photo} />
  ));
  return (
    <div className={style.postsBlock}>
      <h3>My posts</h3>
      <div>
        <AddPostForm addPost={props.addPost} />
      </div>
      <div className={style.posts}>{postElements}</div>
    </div>
  );
});

export default MyPosts;
