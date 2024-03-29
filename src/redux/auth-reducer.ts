import {authAPI} from "../api/api";
import {Dispatch} from "redux";
import {stopSubmit} from "redux-form";


const SET_USER_DATA = "SET_USER_DATA" as const

export type InitialStateType = {
    userId: null | number,
    email: null | string,
    login: null | string
    isAuth: boolean
}

type ActionPropsType =
    ReturnType<typeof setAuthUserDataAC>


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
                ...action.payload,
            }
        default :
            return state
    }
}

export const setAuthUserDataAC = (userId: any, email: any, login: any, isAuth: boolean) => ({
    type: SET_USER_DATA,
    payload: {userId, email, login, isAuth}
})

export const getAuthUserDataTC = () => {
    return (dispatch: Dispatch) => {
       return authAPI.me()
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, login, email} = response.data.data
                    dispatch(setAuthUserDataAC(id, email, login, true))
                }
            });
    }
}
export const loginTC = (email: string, password: string, rememberMe: boolean) => (dispatch: any) => {

    authAPI.login(email, password, rememberMe)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(getAuthUserDataTC())
            } else {
                console.log(response.data.messages[0])
                let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error";
                dispatch(stopSubmit("login", {_error: message}))
            }
        });
}
export const logoutTC = () => (dispatch: Dispatch) => {
    authAPI.logout()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserDataAC(null, null, null, false))

            }
        });
}
