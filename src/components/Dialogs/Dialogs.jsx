import React, { Component } from 'react';
import dialogs_mod from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'


const Dialogs = (props) => {

    let dialogElements = props.dialogDataPage.dialogData.map(dialog => <DialogItem id={dialog.id} name={dialog.name} />)

    let messageElement = props.dialogDataPage.messageData.map(message => <Message mess={message.message} />)

    let newTextMessage = React.createRef();

    let sendMessage = () => {
        let textMessage = newTextMessage.current.value
        alert(textMessage)
    }

    return (
        <div className={dialogs_mod.dialogs}>
            <div className={dialogs_mod.users}>
                {dialogElements}
            </div>

            <div className={dialogs_mod.messages}>
                {messageElement}
            </div>
            <div>
                <textarea ref={newTextMessage} name="" id="" cols="30" rows="10"></textarea>
            </div>
            <div>
                <button onClick={sendMessage}>Оправить сообщение</button>
            </div>

        </div>
    )
}

export default Dialogs;