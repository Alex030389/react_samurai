const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_MESSAGE = 'UPDATE_MESSAGE';

const dialogsReducer = (state, action) => {
  switch(action.type) {
    case UPDATE_MESSAGE:
      state.newMessageText = action.text;
      return state;
    case ADD_MESSAGE:
      state.messages.push(
        {id: ++state.messages.length, message: state.newMessageText,}
      );
      state.newMessageText = '';
      return state;
    default:
      return state;
  }
};

export const updateNewMessageActionCreator = (text) => {
  return {type: UPDATE_MESSAGE, text: text};
};

export const addMessageActionCreator = () => {
  return {type: ADD_MESSAGE}
};

export default dialogsReducer;