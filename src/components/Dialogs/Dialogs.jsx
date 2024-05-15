import React from "react";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import style from './Dialogs.module.css';

const Dialogs = (props) => {

    let message = React.createRef()
    let state = props.dialogsPage
    
    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id} />)
    let messageElements = state.messages.map(m => <Message message={m.message} key={m.id} />)

    let addMessage = () => {
        if (message.current.value.trim() !== '')
            props.sendMessage()
    }
    
    let updateMessager = () => {
        let text = message.current.value
        props.updateNewMessageBody(text)
    }
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={style.messages}>
                <div className={style.message_block}>
                    {messageElements}
                </div>
                <div className={style.send_message_block}>
                    <textarea className={style.textarea_message} ref={message} onChange={updateMessager} value={state.messageText} placeholder="Enter your message"></textarea>
                    <button className={style.send_btn} onClick={addMessage}>Send</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs