import c from './MyPosts.module.css';
import Post from "./Post/Post";
import React from "react";

const MyPosts = (props) => {

  const onPostChange = (evt) => {
    props.postChange(evt.target.value);
  };

  return (
    <div className={c.myPosts}>
      <div className={c.myPosts__title}>
        My post
      </div>
      <div className={c.myPosts__form}>
        <textarea className={c.myPosts__textarea} rows="5" name="post" onChange={onPostChange} value={props.newPostText} />
        <button className={`${c.myPosts__btn} btn`} onClick={ () => {props.addPost()} }>Add post</button>
      </div>
      <div className={c.myPosts__list}>
        {props.posts.map((el) => <Post key={el.id} id={el.id} text={el.message} count={el.likesCount} like={el.like} />)}
      </div>
    </div>
  );
};

export default MyPosts;