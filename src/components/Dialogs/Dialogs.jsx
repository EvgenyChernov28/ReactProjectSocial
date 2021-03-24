import React, { Component } from 'react';
import dialogs_mod from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'


const Dialogs = (props) => {

    let dialogElements = props.dialogDataPage.dialogData.map(dialog => <DialogItem id={dialog.id} name={dialog.name} />)

    let messageElement = props.dialogDataPage.messageData.map(message => <Message mess={message.message} />)

    return (
        <div className={dialogs_mod.dialogs}>
            <div className={dialogs_mod.users}>
                {dialogElements}
            </div>

            <div className={dialogs_mod.messages}>
                {messageElement}
            </div>

        </div>
    )
}

export default Dialogs;