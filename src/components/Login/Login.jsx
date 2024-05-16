import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import style from "./Login.module.css";
import loginFormSchema from "./LoginFormSchema";
import { connect } from "react-redux";
import { login } from "../../redux/auth-reducer";
import { Navigate } from "react-router-dom";

const Login = (props) => {
  if (props.isAuth)
    return <Navigate to={'/profile'} />
  return <div className={style.form_block}>
    <h1 className={style.login}>Login</h1>
    <Formik
      initialValues={{ email: "", password: "", rememberMe: false }}
      validate={(values) => {
        const errors = {};
        if (!values.email) {
          errors.email = "email is none";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Invalid email address";
        }
        return errors;
      }}
      onSubmit={(values, { resetForm }) => {
        props.login(values.email, values.password, values.rememberMe);
        resetForm({ values: "" });
      }}
      validationSchema={loginFormSchema}
    >
      {() => (
        <Form className={style.login_form}>
          <div>
            <Field
              type={"text"}
              name={"email"}
              placeholder={"e-mail"}
              className={style.input_block}
            />
          </div>
          <ErrorMessage
            name="email"
            component="div"
            className={style.error_message}
          />
          <div>
            <Field
              type={"password"}
              name={"password"}
              placeholder={"password"}
              className={style.input_block_password}
            />
          </div>
          <ErrorMessage
            name="password"
            component="div"
            className={style.error_message}
          />
          <div className={style.remember_me}>
            <Field type={"checkbox"} name={"rememberMe"} id={'rememberMe'} />
            <label htmlFor={"rememberMe"} className={style.remember_text}> remember me </label>
          </div>

          <button type={"submit"} className={style.login_btn}>Log in</button>
        </Form>
      )}
    </Formik>
  </div>
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login);