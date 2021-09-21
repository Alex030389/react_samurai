import c from './Message.module.css';

const Message = (props) => {
  return (
    <div className={`${c.message} ${c.message_his}`}>
      <div className={c.message__ava}></div>
      <div className={c.message__text}>
        {props.message}
      </div>
    </div>
  );
};

export default Message;