import React from "react";
import dialogs_mod from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let state = props.dialogPage;
    let dialogElements = state.dialogData.map((dialog) => (
        <DialogItem id={dialog.id} name={dialog.name} key={dialog.id}/>
    ));

    let messageElement = state.messageData.map((message) => (
        <Message mess={message.message} key={message.id}/>
    ));

    let newMessageBody = state.newMessageBody;

    let newTextMessage = React.createRef();

    let onSendMessage = () => {
        props.sendMessage();
    };

    let onNewMessageChange = (event) => {
        let body = event.target.value;
        props.upadateNewMessageBody(body);
    };

    return (
        <div className={dialogs_mod.dialogs}>
            <div className={dialogs_mod.users}>{dialogElements}</div>

            <div className={dialogs_mod.messages}>{messageElement}</div>
            <div>
                <textarea
                    ref={newTextMessage}
                    value={newMessageBody}
                    onChange={onNewMessageChange}
                    placeholder="Введите сообщение"
                ></textarea>
            </div>
            <div>
                <button onClick={onSendMessage}>Оправить сообщение</button>
            </div>
        </div>
    );
};

export default Dialogs;
