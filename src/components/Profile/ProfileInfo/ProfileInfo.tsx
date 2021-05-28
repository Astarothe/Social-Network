import React from "react";
import s from "./ProfileInfo.module.css";

export function ProfileInfo() {
    return (
        <div>
            <div>
                <img
                    src="https://get.pxhere.com/photo/4k-wallpaper-adventure-daylight-glacier-hd-wallpaper-high-lake-landscape-mountain-mountain-range-nature-nature-wallpaper-outdoors-reflection-scenic-snow-travel-trees-water-1548857.jpg"
                    alt=""/>
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>
    )
}