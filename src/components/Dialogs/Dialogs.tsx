import React, {ChangeEvent} from "react";
import s from "./Dialogs.module.css";
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsPageType} from "../../redux/store";
import {Field, reduxForm} from "redux-form";


type DialogsType = {
    dialogsPage: DialogsPageType
    isAuth: any
    updateNewMessageBody: (body: string) => void
    SendMessage: (newMessageBody: string) => void
}


export function Dialogs(props: DialogsType) {
    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messageElements = state.messages.map(m => <Message message={m.message}/>)

    const addNewMessage = (values: any) => {
        props.SendMessage(values.newMessageBody);
    }
    console.log(props.isAuth)
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messageElements}</div>
                <AddMessageReduxForm onSubmit={addNewMessage}/>
            </div>
        </div>
    )
}

const AddMessageForm = (props: any) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={"textarea"} name={"newMessageBody"} placeholder={"Enter your message"}/>
            </div>
            <div>
                <button>send</button>
            </div>
        </form>
    )
}

const AddMessageReduxForm = reduxForm({form: "dialogAddMessageForm"})(AddMessageForm)