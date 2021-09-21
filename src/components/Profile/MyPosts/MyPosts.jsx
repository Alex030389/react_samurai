import c from './MyPosts.module.css';
import Post from "./Post/Post";
import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profileReducer";

const MyPosts = (props) => {

  const addPost = () => {
    props.dispatch(addPostActionCreator());
  };

  const onPostChange = (evt) => {
    props.dispatch(updateNewPostTextActionCreator(evt.target.value));
  };

  return (
    <div className={c.myPosts}>
      <div className={c.myPosts__title}>
        My post
      </div>
      <div className={c.myPosts__form}>
        <textarea className={c.myPosts__textarea} rows="5" name="post" onChange={onPostChange} value={props.newPostText} />
        <button className={`${c.myPosts__btn} btn`} onClick={ addPost }>Add post</button>
      </div>
      <div className={c.myPosts__list}>
        {props.posts.map((el) => <Post id={el.id} text={el.message} count={el.likesCount} like={el.like} />)}
      </div>
    </div>
  );
};

export default MyPosts;