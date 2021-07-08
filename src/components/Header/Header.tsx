import React from "react";
import {NavLink} from "react-router-dom";
import s from "./Header.module.css";


export function Header(props: any) {

    return (
        <header className={s.header}>
            <img
                src="https://www.pinclipart.com/picdir/big/546-5464333_icon-aperture-aperture-science-logo-clipart.png"
                alt=""/>
            <div className={s.loginBlock}>
                {props.isAuth ? props.login
                    : <NavLink to={"/login"}>Login</NavLink>}

            </div>
        </header>
    )
}