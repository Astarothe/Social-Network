import React, {ChangeEvent, ChangeEventHandler} from "react";
import s from "./MyPosts.module.css";
import {Post} from "./Post/Post";
import {ActionPropsType, PostsType,} from "../../../redux/store";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

type MyPostsPropsType = {
    posts: Array<PostsType>
    addPost: (newPostText: string) => void
}

const maxLength10 =  maxLengthCreator(10)

export function MyPosts(props: MyPostsPropsType) {

    let postsElements = props.posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>)

    const onAddPost = (values: any) => {
        props.addPost(values.newPostText);
    }
    return (
        <div className={s.postsBlock}>
            <h3>My posts </h3>
            <AddNewPostReduxForm onSubmit={onAddPost} />
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}
let AddNewPostForm = (props: any) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea}
                       name={"newPostText"}
                       validate={[required,maxLength10]} />
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}
const AddNewPostReduxForm = reduxForm({form:"ProfileAddNewPostForm"})(AddNewPostForm)