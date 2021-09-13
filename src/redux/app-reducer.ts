import {Dispatch} from "redux";
import {getAuthUserDataTC} from "./auth-reducer";

const initialState = {
    initialized: false,
}

export const appReducer = (state: initialStateType = initialState, action: any): initialStateType => {
    switch (action.type) {
        case "INITIALIZED-SUCCESS":
            return {...state,initialized: true}
        default :
            return state
    }
}

type initialStateType = {
    initialized: boolean
}

export const InitializedSuccessAC = () => ({type: "INITIALIZED-SUCCESS"});

export const initializeAppTC = () => (dispatch: any) => {
   let promise = dispatch(getAuthUserDataTC());

   promise.then(() => {
       dispatch(InitializedSuccessAC())
   })
}