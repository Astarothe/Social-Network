import React from "react";
import s from "./ProfileInfo.module.css";
import {Preloader} from "../../common/Preloader/Preloader";
import {ProfileStatus} from "./ProfileStatus";

export function ProfileInfo(props: any) {
    if(!props.profile){
        return <Preloader />
    }
    return (
        <div>
            <div>
                <img
                    src="https://get.pxhere.com/photo/4k-wallpaper-adventure-daylight-glacier-hd-wallpaper-high-lake-landscape-mountain-mountain-range-nature-nature-wallpaper-outdoors-reflection-scenic-snow-travel-trees-water-1548857.jpg"
                    alt=""/>
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large} />
                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
            </div>
        </div>
    )
}