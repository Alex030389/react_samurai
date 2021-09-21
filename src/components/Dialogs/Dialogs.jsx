import c from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import MessageField from "./MessageField/MessageField";

const Dialogs = (props) => {
  return (
    <div className={c.dialogs}>
      <div className={c.dialogs__list}>
        {props.stateDialogsPage.dialogs.map((el) => <DialogItem id={el.id} name={el.name}/>)}
      </div>

      <div className={c.dialogs__messagesList}>
        {props.stateDialogsPage.messages.map((el) => <Message id={el.id} message={el.message}/>)}

        <MessageField
          className={c.dialogs__messageField}
          newMessageText={props.stateDialogsPage.newMessageText}
          dispatch={props.dispatch}
        />
      </div>
    </div>
  );
};

export default Dialogs;