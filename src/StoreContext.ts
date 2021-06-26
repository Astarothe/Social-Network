import React from "react";

type ProviderPropsType = {
    store: any
}

export const StoreContext = React.createContext(null)

export const Provider = (props:ProviderPropsType) => {
    return <StoreContext.Provider value={props.store}>
        {props.children}
        < /StoreContext.Provider>
}