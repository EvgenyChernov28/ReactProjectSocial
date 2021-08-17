import React from "react";
import dialogs_mod from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { Redirect } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import { Textarea } from "../common/Form/FormsControls";
import { maxLengthCreator, required } from "../../utils/validators";

const Dialogs = (props) => {
    let state = props.dialogPage;

    let dialogElements = state.dialogData.map((dialog) => (
        <DialogItem id={dialog.id} name={dialog.name} key={dialog.id} />
    ));

    let messageElement = state.messageData.map((message) => <Message mess={message.message} key={message.id} />);

    let addNewMessage = (event) => {
        props.sendMessage(event.newMessageBodyField);
    };
    if (!props.isAuth) {
        return <Redirect to={"/login"} />;
    }
    return (
        <div className={dialogs_mod.dialogs}>
            <div className={dialogs_mod.users}>{dialogElements}</div>

            <div className={dialogs_mod.messages}>{messageElement}</div>

            <DialogsReduxForm onSubmit={addNewMessage} />
        </div>
    );
};
const maxLength30 = maxLengthCreator(30)
const DialogsForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field
                name={"newMessageBodyField"}
                placeholder="Введите сообщение"
                validate={[required, maxLength30]}
                component={Textarea}
            />
            <button>Оправить сообщение</button>
        </form>
    );
};
const DialogsReduxForm = reduxForm({
    form: "dialogs",
})(DialogsForm);

export default Dialogs;
