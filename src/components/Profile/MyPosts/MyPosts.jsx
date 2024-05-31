import React from "react";
import style from "./MyPosts.module.css";
import Post from "./Post/Post";
// import defaultAvatar from "../../../assets/images/userPNG.jpg"
import AddPostForm from "./AddPostForm/AddPostForm";


const MyPosts = (props) => {

  let postElements = (props.posts).map(p => <Post message={p.message} key={p.id} like={p.likesCount} />)

  // let onAddPost = () => {
  //   if (newPostElement.current.value.trim() !=='')
  //     props.addPost()
  // }

  // let onPostChange = () => {
  //   let text = newPostElement.current.value
  //   props.updateNewPostText(text)
  // }

  return (
    <div className={style.postsBlock}>
      <h3>My posts</h3>
      <div>
        <AddPostForm addPost={props.addPost} />
      </div>
      <div className={style.posts}>
        {postElements}
      </div>
    </div>
  );
};

export default MyPosts;
