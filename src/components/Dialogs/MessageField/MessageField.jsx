import c from './MessageField.module.css';
import React from "react";
import {addMessageActionCreator, updateNewMessageActionCreator} from "../../../redux/dialogsReducer";

const MessageField = (props) => {

  const onMessageChange = (evt) => {
    props.dispatch(updateNewMessageActionCreator(evt.target.value));
  };

  const addMessage = () => {
    props.dispatch(addMessageActionCreator());
  };

  return (
    <div className={`${props.className} ${c.messageField}`}>
      <textarea className={c.messageField__textarea} rows='3' onChange={onMessageChange} value={props.newMessageText}> </textarea>
      <button class={c.messageField__btn} onClick={addMessage}>send</button>
    </div>
  );
};

export default MessageField;