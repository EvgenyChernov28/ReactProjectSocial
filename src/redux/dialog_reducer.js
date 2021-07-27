const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND_MESSAGE";

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
    // newMessageBody: "",
};
const dialogReducer = (state = initialState, action) => {

    switch (action.type) {
        // case UPDATE_NEW_MESSAGE_BODY: {
        //     return { 
        //         ...state,
        //         newMessageBody: action.body 
        //     };
        // }
        case SEND_MESSAGE: {
            let body = action.newMessageBodyField;
            return {
                ...state,
                messageData: [...state.messageData, { id: 7, message: body }],
                // newMessageBody: "",
            };
        }
        default:
            return state;
    }
};

export const sendMessageCreator = (newMessageBodyField) => ({ type: SEND_MESSAGE, newMessageBodyField });
export const updateNewMessageBodyCreator = (body) => ({
    type: UPDATE_NEW_MESSAGE_BODY,
    body: body,
});

export default dialogReducer;
