import React from "react";
import s from "./Profile.module.css";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionPropsType, ProfilePageType} from "../../redux/store";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";

export function Profile() {
    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPostsContainer />
        </div>
    )
}