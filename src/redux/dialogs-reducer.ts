import {ActionPropsType} from "./store";

const SEND_MESSAGE = "SEND_MESSAGE";

type DialogType = {
    id: number
    name: string
}
type MessageType = {
    id: number
    message: string
}
type InitialStateType = typeof initialState

let initialState = {
    dialogs: [
        {id: 1, name: "Dimych"},
        {id: 2, name: "Andrey"},
        {id: 3, name: "Sveta"},
        {id: 4, name: "Sasha"},
        {id: 5, name: "Viktor"},
        {id: 6, name: "Valera"},
    ] as Array<DialogType>,
    messages: [
        {id: 1, message: "Hi"},
        {id: 2, message: "How is your it-kamasutra?"},
        {id: 3, message: "Yo"},
        {id: 4, message: "Yo"},
        {id: 5, message: "Yo"},
        {id: 6, message: "Yo"},
    ] as Array<MessageType>,
}

export const dialogsReducer = (state: InitialStateType = initialState, action: ActionPropsType): InitialStateType => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: 8, message: body}],
            }
        default:
            return state;
    }

}

export const sendMessageAC = (newMessageBody: string) => ({type: SEND_MESSAGE,newMessageBody} as const)

