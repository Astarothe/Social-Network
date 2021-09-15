import React from "react";
import s from "./Profile.module.css";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";

type ProfileType = {
    aboutMe: null
    contacts: {
        facebook: null
        github: null
        instagram: null
        mainLink: null
        twitter: null
        vk: null
        website: null
        youtube: null
    }
    fullName: string
    lookingForAJob: boolean
    lookingForAJobDescription: null
    photos: { small: null, large: null }
    userId: number
}

type ProfilePropsType = {
    profile: ProfileType
    status: string
    updateStatus: (text: string) => void
}

export function Profile(props: ProfilePropsType) {
    return (
        <div className={s.content}>
            <ProfileInfo profile={props.profile}
                         status={props.status}
                         updateStatus={props.updateStatus}/>
            <MyPostsContainer/>
        </div>
    )
}