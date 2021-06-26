import React, {ChangeEvent, ChangeEventHandler} from "react";
import {ActionPropsType, PostsType,} from "../../../redux/store";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {StoreContext} from "../../../StoreContext";




export function MyPostsContainer() {
    return (
        <StoreContext.Consumer>
            {(store) => {
                let state = store.getState();
                const addPost = () => {
                    store.dispatch(addPostActionCreator())
                }
                const onPostChange = (text: string) => {
                    let action = updateNewPostTextActionCreator(text)
                    store.dispatch(action);
                }

                return <MyPosts updateNewPostText={onPostChange}
                                addPost={addPost}
                                posts={state.profilePage.posts}
                                newPostText={state.profilePage.newPostText}/>

            }

        }
        </StoreContext.Consumer>
    )
}