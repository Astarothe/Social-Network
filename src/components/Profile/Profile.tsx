import React from "react";
import s from "./Profile.module.css";
import {MyPosts} from "./MyPosts/MyPosts";

export function Profile() {
    return (
        <div className={s.content}>
            <div>
                <img
                    src="https://get.pxhere.com/photo/4k-wallpaper-adventure-daylight-glacier-hd-wallpaper-high-lake-landscape-mountain-mountain-range-nature-nature-wallpaper-outdoors-reflection-scenic-snow-travel-trees-water-1548857.jpg"
                    alt=""/>
            </div>
            <div>
                ava + description
            </div>
            <MyPosts />
        </div>
    )
}