import React, {ChangeEvent} from "react";
import s from "./Dialogs.module.css";
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsPageType, StoreType} from "../../redux/store";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {StoreContext} from "../../StoreContext";


export function DialogsContainer() {

    return (
        <StoreContext.Consumer>
            {store => {
                let onSendMessageClick = () => {
                    store.dispatch(sendMessageCreator());
                }
                let onNewMessageChange = (body: string) => {
                    store.dispatch(updateNewMessageBodyCreator(body));
                }

                return <Dialogs updateNewMessageBody={onNewMessageChange}
                                SendMessage={onSendMessageClick}
                                dialogsPage={store.getState().dialogsPage}/>

            }
            }
        </StoreContext.Consumer>
    )
}