import React from "react";
import s from "./Profile.module.css";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../redux/state";
type ProfileType = {
    profilePage: ProfilePageType
    addPost:() => void
    updateNewPostText:(value: string) => void
}
export function Profile(props: ProfileType) {
    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPosts posts={props.profilePage.posts} addPost={props.addPost} updateNewPostText={props.updateNewPostText} newPostText={props.profilePage.newPostText}/>
        </div>
    )
}