import React from 'react';
import s from './users.module.css';
import {UsersPropsType} from "./UsersContainer";


export const Users = (props: UsersPropsType) => {
    if (props.usersPage.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                photoUrl: "https://best-fly.ru/wp-content/uploads/2020/08/ikonka-malchik.jpg",
                followed: false,
                fullName: "Dmitry",
                status: "I am a boss",
                location: {city: "Minsk", country: "Belarus"}
            },
            {
                id: 2,
                photoUrl: "https://best-fly.ru/wp-content/uploads/2020/08/ikonka-malchik.jpg",
                followed: true,
                fullName: "Sasha",
                status: "I am a boss too",
                location: {city: "Moscow", country: "Russia"}
            },
            {
                id: 3,
                photoUrl: "https://best-fly.ru/wp-content/uploads/2020/08/ikonka-malchik.jpg",
                followed: false,
                fullName: "Andrew",
                status: "I am a boss too",
                location: {city: "Kiev", country: "Ukraine"}
            }])
    }

    return <div>
        {
            props.usersPage.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoUrl} className={s.userPhoto} alt=""/>
                    </div>
                    {u.followed
                        ? <button onClick={() => {props.unfollow(u.id)}}> Unfollow</button>
                        : <button onClick={() => {props.follow(u.id)}}> Follow</button>}
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div
                        ><div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}