import React from "react";
import {RootStateType} from "../../redux/store";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";

let mapStateToProps = (state: RootStateType) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}
let mapDispatchToProps = (dispatch:any) => {
    return {
        updateNewMessageBody: (body:string) => {
            dispatch(updateNewMessageBodyCreator(body));
        },
        SendMessage: () => {
            dispatch(sendMessageCreator());
        }
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);