import React from "react";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import style from "./Dialogs.module.css";
import AddMessageForm from "./AddMessageForm/AddMessageForm";

const Dialogs = (props) => {
  let state = props.dialogsPage;

  let dialogsElements = state.dialogs.map((d) => (
    <DialogItem name={d.name} key={d.id} id={d.id} />
  ));
  let messageElements = state.messages.map((m) => (
    <Message message={m.message} key={m.id} />
  ));

  return (
    <div className={style.dialogs}>
      <div className={style.dialogsItems}>{dialogsElements}</div>
      <div className={style.messages}>
        <div className={style.message_block}>{messageElements}</div>
        <AddMessageForm sendMessage={props.sendMessage} />
      </div>
    </div>
  );
};

export default Dialogs;