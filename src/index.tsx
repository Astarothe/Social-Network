import reportWebVitals from './reportWebVitals';
import './index.css';
import ReactDOM from "react-dom";
import React from "react";
import {BrowserRouter} from "react-router-dom";
import {App} from "./App";
import {RootStateType} from "./redux/store";
import {store} from "./redux/redux-store";
import {Provider, StoreContext } from './StoreContext';

let rerenderEntireTree = (state: RootStateType) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <Provider value={store}>
                <App />
                </Provider>
            </BrowserRouter>
        </React.StrictMode>, document.getElementById('root'));
}

rerenderEntireTree(store.getState());

store.subscribe(() => {
    let state = store.getState()
    rerenderEntireTree(state);
});


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
