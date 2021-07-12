import {authAPI} from "../api/api";


const SET_USER_DATA = "SET_USER_DATA" as const

export type InitialStateType = {
    userId: null | number,
    email: null | string,
    login: null | string
    isAuth: boolean
}

type ActionPropsType =
    ReturnType<typeof setAuthUserData>


const initialState: InitialStateType = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}


export const authReducer = (state: InitialStateType = initialState, action: ActionPropsType): InitialStateType => {

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default :
            return state
    }
}

export const setAuthUserData = (userId: any, email: any, login: any) => ({type: SET_USER_DATA, data: {userId, email, login}})

export const getAuthUserData = () => {
    return (dispatch: any) => {
        authAPI.me()
        .then(response => {
            if (response.data.resultCode === 0) {
                let {id, login, email} = response.data.data
                dispatch(setAuthUserData(id, email, login))
            }
        });
    }
}