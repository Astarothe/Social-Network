import {addPost, updateNewPostText, RootStateType} from "./redux/state";
import './index.css';
import ReactDOM from "react-dom";
import React from "react";
import {BrowserRouter} from "react-router-dom";
import {App} from "./App";


export let rerenderEntireTree = (state: RootStateType) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App addPost={addPost} state={state} updateNewPostText={updateNewPostText} />
            </BrowserRouter>
        </React.StrictMode>, document.getElementById('root'));
}