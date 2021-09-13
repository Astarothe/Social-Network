import {profileAPI, usersAPI} from "../api/api";
import {Dispatch} from "redux";

const initialState = {
    posts: [
        {id: 1, message: "Hi, how are you?", likesCount: 23},
        {id: 2, message: "It's my first post", likesCount: 0},
    ] as Array<PostsType>,
    profile: null,
    status: ""
}

export const profileReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "ADD-POST":
            let newPost = {id: 5, message: action.newPostText, likesCount: 0};

            return {...state, posts: [...state.posts, newPost],}
        case "SET-USER-PROFILE":
            return {...state, profile: action.profile}
        case "SET-STATUS":
            return {...state, status: action.status}
        default:
            return state;
    }
}
// actions
export const addPostAC = (newPostText: string) => ({type: "ADD-POST",newPostText} as const)
export const setUserProfileAC = (profile: any) => ({type: "SET-USER-PROFILE", profile} as const)
export const setStatusAC = (status: string) => ({type:"SET-STATUS", status} as const)

// thunk
export const getUserProfileTC = (userId: number) => (dispatch: Dispatch<ActionsType>) => {
    usersAPI.getProfile(userId)
        .then(res => {
            dispatch(setUserProfileAC(res.data))
        });
}
export const getStatusTC = (userId: number) => (dispatch: Dispatch<ActionsType>) => {
    profileAPI.getStatus(userId)
        .then(res => {
            dispatch(setStatusAC(res.data))
        });
}
export const updateStatusTC = (status: string) => (dispatch: Dispatch<ActionsType>) => {
    profileAPI.updateStatus(status)
        .then(res => {
            if(res.data.resultCode === 0){
                dispatch(setStatusAC(status))
            }
        });
}


type PostsType = {
    id: number
    message: string
    likesCount: number
}

type InitialStateType = typeof initialState

type ActionsType =
    | ReturnType<typeof addPostAC>
    | ReturnType<typeof setUserProfileAC>
    | ReturnType<typeof setStatusAC>