import React, { useState } from "react";
import style from "./EditProfileForm.module.css";
import { Field, Form, Formik } from "formik";
import { Navigate } from "react-router-dom";
import { connect } from "react-redux";
import { setStats } from "../../redux/profile-reducer";
import Preloader from "../common/Preloader/Preloader";

const EditProfileForm = (props) => {
  let [onClick, setClick] = useState(false);
  if (!props.profile) {
    return <Preloader />;
  }
  let onEditProfile = (newStats) => {
    props.setStats(newStats)
    setClick(true);
  };
  if (onClick) {
    return <Navigate to={"/profile"} />;
  }
  return (
    <Formik
      initialValues={{
        lookingForAJob: false,
        fullName: "",
        contacts: {
          github: "",
          vk: "",
          facebook: "",
          instagram: "",
          twitter: "",
          website: "",
          youtube: "",
          mainLink: "",
        },
      }}
      onSubmit={(values, { resetForm }) => {
        onEditProfile(values);
        resetForm({ values: "" });
      }}
    >
      {() => (
        <Form className={style.form_box}>
          <h1>Настройки профиля</h1>
          <div className={style.input_box}>
            <p>Полное имя</p>
            <Field
              name={"fullName"}
              type={"textarea"}
              placeholder="Enter your full name"
              value={props.profile.fullName}
            />
          </div>
          <h2>Контакты</h2>
          <div className={style.input_box}>
            <p>GitHub</p>
            <Field
              name={"contacts.github"}
              type={"textarea"}
              placeholder="Enter link"
              value={props.profile.github}
            />
          </div>
          <div className={style.input_box}>
            <p>Вконтакте</p>
            <Field
              name={"contacts.vk"}
              type={"textarea"}
              placeholder="Enter link"
              value={props.profile.vk}
            />
          </div>
          <div className={style.input_box}>
            <p>Facebook</p>
            <Field
              name={"contacts.facebook"}
              type={"textarea"}
              placeholder="Enter link"
              value={props.profile.facebook}
            />
          </div>
          <div className={style.input_box}>
            <p>Instagram</p>
            <Field
              name={"contacts.instagram"}
              type={"textarea"}
              placeholder="Enter link"
              value={props.profile.instagram}
            />
          </div>
          <div className={style.input_box}>
            <p>Twitter</p>
            <Field
              name={"contacts.twitter"}
              type={"textarea"}
              placeholder="Enter link"
              value={props.profile.twitter}
            />
          </div>
          <div className={style.input_box}>
            <p>Website</p>
            <Field
              name={"contacts.website"}
              type={"textarea"}
              placeholder="Enter link"
              value={props.profile.website}
            />
          </div>
          <div className={style.input_box}>
            <p>Youtube</p>
            <Field
              name={"contacts.youtube"}
              type={"textarea"}
              placeholder="Enter link"
              value={props.profile.youtube}
            />
          </div>
          <div className={style.input_box}>
            <p>MainLink</p>
            <Field
              name={"contacts.mainLink"}
              type={"textarea"}
              placeholder="Enter link"
              value={props.profile.mainLink}
            />
          </div>
          <label className={style.checkbox}>
            <p>Ищите работу?</p>
            <Field name={"lookingForAJob"} type={"checkbox"} />
          </label>
          <div>
            <button type={"submit"} className={style.send_btn}>
              Изменить
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
});

export default connect(mapStateToProps, {setStats})(EditProfileForm);
