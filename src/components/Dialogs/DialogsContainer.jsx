import Dialogs from "./Dialogs";
import {addMessageActionCreator, updateNewMessageActionCreator} from "../../redux/dialogsReducer";

const DialogsContainer = (props) => {
  // debugger;
  let state = props.store.getState();

  const messageChange = (text) => {
    props.store.dispatch(updateNewMessageActionCreator(text));
  };

  const addMessage = () => {
    props.store.dispatch(addMessageActionCreator());
  };

  return (
    <Dialogs
      stateDialogs={state.dialogsPage.dialogs}
      stateMessages={state.dialogsPage.messages}
      messageChange={messageChange}
      addMessage={addMessage}
      newMessageText={state.dialogsPage.newMessageText}
    />
  );
};

export default DialogsContainer;