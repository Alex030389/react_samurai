import c from './MessageField.module.css';
import React from "react";

const MessageField = (props) => {
  // debugger;
  const onMessageChange = (evt) => {
    props.messageChange(evt.target.value);
  };

  const onAddMessage = () => {
    props.addMessage();
  };

  return (
    <div className={`${props.className} ${c.messageField}`}>
      <textarea className={c.messageField__textarea} rows='3' onChange={onMessageChange} value={props.newMessageText}> </textarea>
      <button className={c.messageField__btn} onClick={onAddMessage}>send</button>
    </div>
  );
};

export default MessageField;