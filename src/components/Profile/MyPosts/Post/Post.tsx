import React from "react";
import s from "./Post.module.css";

type PostPropsType = {
    message:string
    likesCount: number
}

export function Post(props: PostPropsType) {
    return (
        <div className={s.item}>
            <img src="https://macplay.github.io/images/avatar.png" alt=""/>
            { props.message }
            <div>
                <span>like </span>{props.likesCount}
            </div>
        </div>
    )
}