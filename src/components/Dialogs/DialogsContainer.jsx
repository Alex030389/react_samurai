import React from "react";
import {addMessageActionCreator, updateNewMessageActionCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

const DialogsContainer = () => {
  return <StoreContext.Consumer>
    {
      (store) => {
        let state = store.getState();

        const messageChange = (text) => {
          store.dispatch(updateNewMessageActionCreator(text));
        };

        const addMessage = () => {
          store.dispatch(addMessageActionCreator());
        };

        return <Dialogs
          stateDialogs={state.dialogsPage.dialogs}
          stateMessages={state.dialogsPage.messages}
          messageChange={messageChange}
          addMessage={addMessage}
          newMessageText={state.dialogsPage.newMessageText}
        />
      }
    }
  </StoreContext.Consumer>
};

export default DialogsContainer;