const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE ='SEND_MESSAGE'

let initialState = {
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
  }
const dialogReducer = (state = initialState, action) =>{

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messageData.push({id: 6, message: body});
            return state;
        default:
            return state;
    }

}

export const sendMessageCreator = () => ({ type: "SEND_MESSAGE" });
export const upadateNewMessageBodyCreator = (body) => ({
  type: "UPDATE-NEW-MESSAGE-BODY",
  body: body,
});

export default dialogReducer;