import {ActionPropsType, DialogsPageType} from "./store";
const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND_MESSAGE";

let initialState =  {
        dialogs: [
            {id: 1, name: "Dimych"},
            {id: 2, name: "Andrey"},
            {id: 3, name: "Sveta"},
            {id: 4, name: "Sasha"},
            {id: 5, name: "Viktor"},
            {id: 6, name: "Valera"},
        ],
        messages: [
            {id: 1, message: "Hi"},
            {id: 2, message: "How is your it-kamasutra?"},
            {id: 3, message: "Yo"},
            {id: 4, message: "Yo"},
            {id: 5, message: "Yo"},
            {id: 6, message: "Yo"},
        ],
        newMessageBody: "",
    }

export const dialogsReducer = (state: DialogsPageType = initialState, action: ActionPropsType) => {
    let newState = {
        ...state,
        dialogs: state.dialogs.map(t => ({...t}))
    }
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            newState.newMessageBody = action.body;
            return newState
        case SEND_MESSAGE:
            let body = newState.newMessageBody;
            newState.newMessageBody = "";
            newState.messages = [...newState.messages, {id: 8, message:body}];
            return newState
        default:
            return newState;
    }

}

export const sendMessageCreator = () => ({type: SEND_MESSAGE} as const)

export const updateNewMessageBodyCreator = (text: string) =>
    ({type: UPDATE_NEW_MESSAGE_BODY, body: text} as const)