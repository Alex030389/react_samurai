import c from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import MessageField from "./MessageField/MessageField";

const Dialogs = (props) => {
  // debugger;
  return (
    <div className={c.dialogs}>
      <div className={c.dialogs__list}>
        {props.dialogs.map((el) => <DialogItem key={el.id} id={el.id} name={el.name}/>)}
      </div>

      <div className={c.dialogs__messagesList}>
        {props.messages.map((el) => <Message key={el.id} id={el.id} message={el.message}/>)}

        <MessageField
          className={c.dialogs__messageField}
          newMessageText={props.newMessageText}
          messageChange={props.messageChange}
          addMessage={props.addMessage}
        />
      </div>
    </div>
  );
};

export default Dialogs;