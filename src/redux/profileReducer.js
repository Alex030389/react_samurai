const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST = 'UPDATE-NEW-POST';

let initialState = {
  posts: [
    {
      id: 1,
      message: 'one some text',
      like: true,
      likesCount: 2
    },
    {
      id: 2,
      message: 'two some text',
      like: false,
      likesCount: 5
    },
  ],

  newPostText: ''
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_POST:
      return {
        ...state,
        newPostText: action.text,
      };
    case ADD_POST:
      const newPost = {
        id: 10,
        message: state.newPostText,
        like: false,
        likesCount: 0
      };

      return {
        ...state,
        posts: [
          ...state.posts,
          newPost
        ],
        newPostText: '',
      };
    default:
      return state;
  }
};

export const updateNewPostTextActionCreator = (text) => {
  return {type: UPDATE_NEW_POST, text: text};
};

export const addPostActionCreator = () => {
  return {type: ADD_POST};
};

export default profileReducer;