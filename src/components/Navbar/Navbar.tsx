import React from "react";
import s from "./Navbar.module.css";

export function Navbar() {
    return (
        <nav className={s.nav}>
            <ul>
                <li className={s.item}><a>Profile</a></li>
                <li className={s.item}><a>Messages</a></li>
                <li className={s.item}><a>News</a></li>
                <li className={s.item}><a>Music</a></li>
                <li className={s.item}><a>Settings</a></li>
            </ul>
        </nav>
    )
}