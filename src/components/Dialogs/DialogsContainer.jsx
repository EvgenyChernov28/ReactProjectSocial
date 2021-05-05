import React from "react";
import {
    sendMessageCreator,
    upadateNewMessageBodyCreator,
} from "../../redux/dialog_reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
    let state = props.store.getState().dialogPage;

    let sendMessage = () => {
        props.store.dispatch(sendMessageCreator());
    };

    let onNewMessageChange = (body) => {
        props.store.dispatch(upadateNewMessageBodyCreator(body));
    };

    return (
        <Dialogs
            upadateNewMessageBody={onNewMessageChange}
            sendMessage={sendMessage}
            dialogPage={state}
        />
    );
};

export default DialogsContainer;
