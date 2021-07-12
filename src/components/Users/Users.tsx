import React from "react";
import s from "./users.module.css";
import userPhoto from "../../assets/images/dummy.png";
import {UserType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";
import axios from "axios";
import {usersAPI} from "../../api/api";

type UsersType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (page: number) => void
    users: UserType[]
    follow: (id: number) => void
    unfollow: (id: number) => void
    followingInProgress: any
}

export let Users = (props: UsersType) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            <div>
                {pages.map(p => <span className={props.currentPage === p ? s.selectedPage : ""}
                                      onClick={() => props.onPageChanged(p)}>{p}</span>)}
            </div>
            {
                props.users.map((u: any) => <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={"/profile/" + u.id}>
                        <img src={u.photos.large != null ? u.photos.small : userPhoto}
                             className={s.userPhoto} alt=""/>
                        </NavLink>
                    </div>
                    {u.followed
                        ?
                        <button disabled={props.followingInProgress
                            .some((id: number) => id === u.id)}
                                onClick={() => {props.unfollow(u.id)}}>
                            Unfollow</button>
                        :
                        <button disabled={props.followingInProgress
                            .some((id: number) => id === u.id)}
                                onClick={() => {props.follow(u.id)}}>
                            Follow</button>}
                </span>
                    <span>
                    <span>
                        <div>{u.name}</div
                        ><div>{u.status}</div>
                    </span>
                    <span>
                        <div>{"u.location.country"}</div>
                        <div>{"u.location.city"}</div>
                    </span>
                </span>
                </div>)
            }
        </div>
    )
}