import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Navbar.module.css";



export function Navbar() {
    return (
        <nav className={s.nav}>
            <ul className={s.listItem}>
                <li className={s.item}>
                    <NavLink to={"/profile"} activeClassName={s.active}>Profile</NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to={"/dialogs"} activeClassName={s.active}>Messages</NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to={"/news"} activeClassName={s.active}>News</NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to={"/music"} activeClassName={s.active}>Music</NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to={"/settings"} activeClassName={s.active}>Settings</NavLink>
                </li>
            </ul>
        </nav>
    )
}