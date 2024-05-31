import React from "react";
import { addPostActionCreator } from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import { connect } from "react-redux";


let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    profile: state.profilePage.profile
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    addPost: (postText) => {
      dispatch(addPostActionCreator(postText))
    }
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;
