import React, {ChangeEvent, ChangeEventHandler} from "react";
import s from "./MyPosts.module.css";
import {Post} from "./Post/Post";
import {ActionPropsType, PostsType,} from "../../../redux/store";

type MyPostsPropsType = {
    newPostText: string
    posts: Array<PostsType>
    updateNewPostText: (text:string) => void
    addPost: () => void
}


export function MyPosts(props: MyPostsPropsType) {

    let postsElements = props.posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>)
    let newPostElement = React.createRef<HTMLTextAreaElement>();

    const onAddPost = () => {
        props.addPost();
    }
    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewPostText(e.currentTarget.value)
    }
    return (
        <div className={s.postsBlock}>
            <h3>My posts </h3>
            <div>
                <div>
                    <textarea value={props.newPostText} onChange={onPostChange} ref={newPostElement}></textarea>
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}