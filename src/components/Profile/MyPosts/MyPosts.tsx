import React, {ChangeEvent, ChangeEventHandler} from "react";
import s from "./MyPosts.module.css";
import {Post} from "./Post/Post";
import {addPostActionCreator, PostsType, ProfilePageType, updateNewPostTextActionCreator} from "../../../redux/state";

type MyPostsPropsType = {
    newPostText:string
    posts: Array<PostsType>
    dispatch: (obj: any) => void
}



export function MyPosts(props: MyPostsPropsType) {

    let postsElements = props.posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>)
    let newPostElement = React.createRef<HTMLTextAreaElement>();

    const AddPost = () => {
        if(newPostElement.current) {
            props.dispatch(addPostActionCreator())
        }
    }
    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(updateNewPostTextActionCreator(e.currentTarget.value));
    }
    return (
        <div className={s.postsBlock}>
            <h3>My posts </h3>
            <div>
                <div>
                    <textarea value={props.newPostText} onChange={onPostChange} ref={newPostElement}></textarea>
                </div>
                <div>
                    <button onClick={AddPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}