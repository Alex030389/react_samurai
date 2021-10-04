import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";

const store = {
  _state: {
    profilePage: {
      posts: [{
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
        {
          id: 3,
          message: 'three some text',
          like: false,
          likesCount: 7
        },
        {
          id: 4,
          message: 'four some text',
          like: true,
          likesCount: 9
        },
      ],

      newPostText: ''
    },

    dialogsPage: {
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
    },

    sidebar: {
      onlineFriends: [
        {
          id: 1,
          name: 'Alex',
          photo: 'https://cdn.shopify.com/s/files/1/0550/8933/2422/files/Ava_Website_Global_FeaturedSections-CatTreats_b37d5e48-3366-4e90-88b3-247f977376ee_400x.png?v=1617988432',
        },
        {
          id: 2,
          name: 'Pavel',
          photo: 'https://cdn.shopify.com/s/files/1/0550/8933/2422/files/Ava_Website_Global_FeaturedSections-CatTreats_b37d5e48-3366-4e90-88b3-247f977376ee_400x.png?v=1617988432',
        },
        {
          id: 3,
          name: 'Julia',
          photo: 'https://cdn.shopify.com/s/files/1/0550/8933/2422/files/Ava_Website_Global_FeaturedSections-CatTreats_b37d5e48-3366-4e90-88b3-247f977376ee_400x.png?v=1617988432',
        },
        {
          id: 4,
          name: 'Jack',
          photo: 'https://cdn.shopify.com/s/files/1/0550/8933/2422/files/Ava_Website_Global_FeaturedSections-CatTreats_b37d5e48-3366-4e90-88b3-247f977376ee_400x.png?v=1617988432',
        },
      ],
    },
  },

  _callSubscriber() {
    console.log('State changed');
  },

  getState() {
    return this._state;
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    profileReducer(this._state.profilePage, action);
    dialogsReducer(this._state.dialogsPage, action);
    sidebarReducer(this._state.onlineFriends, action);
    this._callSubscriber(this._state);
  },
};

// store
export default store;