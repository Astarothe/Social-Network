type DialogType = {
    id: number
    name: string
}
type MessageType = {
    id: number
    message: string
}
type PostsType = {
    id: number
    message: string
    likesCount: number
}
export type ProfilePageType = {
    posts: Array<PostsType>
}
export type DialogsPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}
export type RootStateType = {
    profilePage:ProfilePageType
    dialogsPage: DialogsPageType
}

export let state:RootStateType  = {
    profilePage: {
        posts: [
            {id: 1, message: "Hi, how are you?", likesCount: 23},
            {id: 2, message: "It's my first post", likesCount: 0},
        ],

    },
    dialogsPage: {
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
    },
}