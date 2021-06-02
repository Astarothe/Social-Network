import s from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

type DialogsItemType = {
    name: string
    id: number
}
export function DialogItem(props: DialogsItemType) {
    let path = `/dialogs/${props.id}`;
    return (
        <div className={s.dialog + " " + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}