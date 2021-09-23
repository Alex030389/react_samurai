const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_MESSAGE = 'UPDATE_MESSAGE';

let initialState = {
  dialogs: [
    {
      id: 1,
      name: 'Alex'
    },
    {
      id: 2,
      name: 'Andrew'
    },
    {
      id: 3,
      name: 'Olga'
    },
    {
      id: 4,
      name: 'Vadim'
    },
    {
      id: 5,
      name: 'Sasha'
    },
  ],

  messages: [
    {
      id: 1,
      message: 'Hi'
    },
    {
      id: 2,
      message: 'Hi2'
    },
  ],

  newMessageText: '',
};

const dialogsReducer = (state = initialState, action) => {
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