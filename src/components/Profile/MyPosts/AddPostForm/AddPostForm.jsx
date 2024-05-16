import React from "react";
import style from "../MyPosts.module.css";
import { Field, Form, Formik } from "formik";

const AddPostForm = (props) => {
  let onAddPost = (postText) => {
    if (postText.trim() !== "") props.addPost(postText);
  };
  return (
    <Formik
      initialValues={{
        newPostText: ""
      }}
      onSubmit={(values, { resetForm }) => {
        onAddPost(values.newPostText);
        resetForm({ values: "" });
      }}
    >
      {() => (
        <Form>
          <div>
            <Field
              className={style.textarea_add_post}
              name={"newPostText"}
              type={"textarea"}
              placeholder="Enter your post"
            />
          </div>
          <div>
            <button type={"submit"} className={style.add_post_btn}>
              Add post
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default AddPostForm;
