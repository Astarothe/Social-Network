import React from "react";
import {addPostActionCreator} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";

let mapStateToProps = (state: AppStateType) => {
    return {
        posts: state.profilePage.posts,
    }
}
let mapDispatchToProps = (dispatch:any) => {
    return {
        addPost: (newPostText: string) => {
            dispatch(addPostActionCreator(newPostText));
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);