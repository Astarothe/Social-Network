import {usersAPI} from "../api/api";

type PostsType = {
    id: number
    message: string
    likesCount: number
}
type InitialStateType = typeof initialState

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";

const initialState = {
    posts: [
        {id: 1, message: "Hi, how are you?", likesCount: 23},
        {id: 2, message: "It's my first post", likesCount: 0},
    ] as Array<PostsType>,
    newPostText: "",
    profile: null
}
type ActionPropsType =
    ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof updateNewPostTextActionCreator>

export const profileReducer = (state: InitialStateType = initialState, action: ActionPropsType): InitialStateType => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {id: 5, message: state.newPostText, likesCount: 0};
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ""
            }

        case UPDATE_NEW_POST_TEXT:
            return {...state, newPostText: action.newText}
        case SET_USER_PROFILE:
            return {...state, profile: action.profile}
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST} as const)
export const setUserProfile = (profile: any) => ({type: SET_USER_PROFILE, profile} as const)
export const getUserProfile = (userId: number) => (dispatch: any) => {
    usersAPI.getProfile(userId)
        .then(response => {
            dispatch(setUserProfile(response.data))
        });
}

export const updateNewPostTextActionCreator = (text: string) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    } as const
}
