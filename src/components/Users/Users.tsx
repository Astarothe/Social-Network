import React from "react";
import s from "./users.module.css";
import userPhoto from "../../assets/images/dummy.png";
import {UserType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";
import axios from "axios";

type UsersType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (page: number) => void
    users: UserType[]
    follow: (id: number) => void
    unfollow: (id: number) => void
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
                        ? <button onClick={() => {
                            axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,  {
                                withCredentials: true,
                                headers: {
                                    "API-KEY": "42aa837a-8390-46f1-8f1e-90039525de3d"
                                }
                            }) .then(response => {
                                if (response.data.resultCode === 0){
                                    props.unfollow(u.id)
                                }
                            });

                            props.unfollow(u.id)

                        }
                        }> Unfollow</button>
                        : <button onClick={() => {
                            axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                withCredentials: true,
                                headers: {
                                    "API-KEY": "42aa837a-8390-46f1-8f1e-90039525de3d"
                                }
                            }) .then(response => {
                                if (response.data.resultCode === 0){
                                    props.follow(u.id)
                                }
                            });
                        }
                        }> Follow</button>}
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