const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST = 'UPDATE-NEW-POST';

const profileReducer = (state, action) => {
  switch (action.type) {
    case UPDATE_NEW_POST:
      state.newPostText = action.text;
      return state;
    case ADD_POST:
      const newPost = {
        id: 10,
        message: state.newPostText,
        like: false,
        likesCount: 0
      };
      state.posts.push(newPost);
      state.newPostText = '';
      return state;
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