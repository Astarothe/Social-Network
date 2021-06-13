import reportWebVitals from './reportWebVitals';
import {RootStateType, state, subscribe} from "./redux/state";
import {addPost, updateNewPostText} from "./redux/state";
import './index.css';
import ReactDOM from "react-dom";
import React from "react";
import {BrowserRouter} from "react-router-dom";
import {App} from "./App";


let rerenderEntireTree = (state: RootStateType) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App addPost={addPost} state={state} updateNewPostText={updateNewPostText} />
            </BrowserRouter>
        </React.StrictMode>, document.getElementById('root'));
}

rerenderEntireTree(state);

subscribe(rerenderEntireTree);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
