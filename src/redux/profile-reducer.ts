import {ActionPropsType} from "./store";

type PostsType = {
    id: number
    message: string
    likesCount: number
}
type InitialStateType = typeof initialState

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

const initialState = {
    posts: [
        {id: 1, message: "Hi, how are you?", likesCount: 23},
        {id: 2, message: "It's my first post", likesCount: 0},
    ] as Array<PostsType>,
    newPostText: ""
}


export const profileReducer = (state: InitialStateType = initialState, action: ActionPropsType): InitialStateType => {
    let newState = {
        ...state,
        posts: state.posts.map(p => ({...p}))
    }
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            newState.posts.push(newPost)
            newState.newPostText = "";
            return newState
        case UPDATE_NEW_POST_TEXT:
            newState.newPostText = action.newText;
            return newState;
        default:
            return newState;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST} as const)

export const updateNewPostTextActionCreator = (text: string) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    } as const
}