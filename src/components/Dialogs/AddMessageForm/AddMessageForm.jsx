import React from "react";
import style from "../Dialogs.module.css";
import { Field, Form, Formik } from "formik";

const AddMessageForm = (props) => {
  let addNewMessage = (NewMessage) => {
    if (NewMessage.trim() !== "") props.sendMessage(NewMessage);
  };
  return (

      <Formik
        initialValues={{
          NewMessage: "",
        }}
        onSubmit={(values, { resetForm }) => {
          addNewMessage(values.NewMessage);
          resetForm({ values: "" });
        }}
      >
        {() => (
          <Form className={style.send_message_block}>
            <Field
              type={"textarea"}
              className={style.textarea_message}
              name={"NewMessage"}
              placeholder="Enter your message"
            />
            <button type={"submit"} className={style.send_btn}>
              Send
            </button>
          </Form>
        )}
      </Formik>
    
  );
};

export default AddMessageForm;
