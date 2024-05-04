import React from "react";
import style from "./MyPosts.module.css";
import Post from "./Post/Post";


const MyPosts = (props) => {

  let postElements = (props.posts).map(p => <Post message={p.message} key={p.id} like={p.likesCount} />)

  let newPostElement = React.createRef();

  let onAddPost = () => {
    if (newPostElement.current.value.trim() !=='')
      props.addPost()
  }

  let onPostChange = () => {
    let text = newPostElement.current.value
    props.updateNewPostText(text)
  }

  return (
    <div className={style.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea className={style.textarea_add_post} ref={newPostElement} value={props.NewPostText} onChange={onPostChange} placeholder="Enter your post" ></textarea>
        </div>
        <div>
          <button onClick={onAddPost} className={style.add_post_btn} >Add post</button>
        </div>
      </div>
      <div className={style.posts}>
        {postElements}
      </div>
    </div>
  );
};

export default MyPosts;
