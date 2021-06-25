import React from "react";
import s from "./Profile.module.css";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionPropsType, ProfilePageType} from "../../redux/store";
type ProfileType = {
    profilePage: ProfilePageType
    dispatch: (action: ActionPropsType) => void
}
export function Profile(props: ProfileType) {
    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPosts posts={props.profilePage.posts} dispatch={props.dispatch}
                     newPostText={props.profilePage.newPostText}/>
        </div>
    )
}