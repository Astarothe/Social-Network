import React from "react";
import s from "./ProfileInfo.module.css";
import {Preloader} from "../../common/Preloader/Preloader";
import {ProfileStatus} from "./ProfileStatus";
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";

export function ProfileInfo(props: any) {
    if(!props.profile){
        return <Preloader />
    }
    return (
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large} />
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
            </div>
    )
}