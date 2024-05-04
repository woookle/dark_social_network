import React from "react";
import { updateNewPostTextCreator, addPostActionCreator } from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import { connect } from "react-redux";


let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    NewPostText: state.profilePage.NewPostText
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    updateNewPostText: (text) => {
      let action = updateNewPostTextCreator(text)
      dispatch(action)
    },
    addPost: () => {
      dispatch(addPostActionCreator())
    }
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;
