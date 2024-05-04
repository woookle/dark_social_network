import React from "react";
import { updateNewMessageTextCreator, addMesageActionCreator } from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";


let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage

    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBody: (text) => {
            dispatch(updateNewMessageTextCreator(text))
        },
        sendMessage: () => {
            dispatch(addMesageActionCreator())
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer