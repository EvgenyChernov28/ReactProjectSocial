import React from "react";
import dialogs_mod from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { sendMessadeCreator, upadateNewMessageBodyCreator } from "../../redux/state.js";

const Dialogs = (props) => {
  let state = props.store.getState().dialogPage;
  let dialogElements = state.dialogData.map((dialog) => (
    <DialogItem id={dialog.id} name={dialog.name} />
  ));

  let messageElement = state.messageData.map((message) => (
    <Message mess={message.message} />
  ));

  let newMessageBody = state.newMessageBody;

  let newTextMessage = React.createRef();

  let sendMessage = () => {
    props.store.dispatch(sendMessadeCreator());
  };

  let onNewMessageChange = (event) => {
    let body = event.target.value;
    props.store.dispatch(upadateNewMessageBodyCreator(body));
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
        <button onClick={sendMessage}>Оправить сообщение</button>
      </div>
    </div>
  );
};

export default Dialogs;
