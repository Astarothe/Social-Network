import React, {ChangeEvent} from "react";
import s from "./Dialogs.module.css";
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsPageType, StoreType} from "../../redux/store";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";

type DialogsType = {
    dialogsPage: DialogsPageType
    updateNewMessageBody: (body: string) => void
    SendMessage: () => void
}


export function Dialogs(props: DialogsType) {
    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messageElements = state.messages.map(m => <Message message={m.message}/>)
    let newMessageBody = state.newMessageBody;


    let onSendMessageClick = () => {
        props.SendMessage();
    }
    let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.currentTarget.value;
        props.updateNewMessageBody(body)
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messageElements}</div>
                <div>
                    <div>
                    <textarea value={newMessageBody}
                              onChange={onNewMessageChange}
                              placeholder={"Enter your message"}></textarea></div>
                    <div>
                        <button onClick={onSendMessageClick}>send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}