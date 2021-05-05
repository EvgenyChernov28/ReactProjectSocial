import dialogReducer from './dialog_reducer';
import profileReducer from './profile_reducer';

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Привет, как ты?", likeCount: 5 },
        { id: 2, message: "Это мой первый пост.", likeCount: 23 },
      ],
      newPostText: "samyrai",
    },
    dialogPage: {
      dialogData: [
        { id: 1, name: "Маша" },
        { id: 2, name: "Паша" },
        { id: 3, name: "Саша" },
        { id: 4, name: "Таша" },
        { id: 5, name: "Гаша" },
      ],
      messageData: [
        { id: 1, message: "Привет" },
        { id: 2, message: "Hello" },
        { id: 3, message: "Hi" },
        { id: 4, message: "Ky" },
        { id: 5, message: "By" },
      ],
      newMessageBody: "",
    },
  },
  getState() {
    return this._state;
  },
  _callSbscriber() {
    console.log("State changed");
  },

  dispatch(action) {

    profileReducer(store.getState().profilePage, action);
    dialogReducer(store.getState().dialogPage, action)
    this._callSbscriber(this._state);

  },
  subscribe(observer) {
    this._callSbscriber = observer;
  },
};

export const addPostactionCreator = () => ({ type: "ADD-POST" });
export const onPostChangeactionCreator = (text) => ({
  type: "APDATE-NEW-POST-TEXT",
  newText: text,
});

export const sendMessadeCreator = () => ({ type: "SEND_MESSAGE" });
export const upadateNewMessageBodyCreator = (body) => ({
  type: "UPDATE-NEW-MESSAGE-BODY",
  body: body,
});

window.store = store;

export default store;
