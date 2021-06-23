import React from "react";
import { connect } from "react-redux";
import {
    sendMessageCreator,
    upadateNewMessageBodyCreator,
} from "../../redux/dialog_reducer";
import Dialogs from "./Dialogs";

let mapStateToProps = (state) => {
    console.log(state);
    return {
        dialogPage: state.dialogPage,
    };
};
let mapDispatchToProps = (dispatch) => {
    return {
        upadateNewMessageBody: (body) => {
            dispatch(upadateNewMessageBodyCreator(body));
        },
        sendMessage: () => {
            dispatch(sendMessageCreator());
        },
    };
};
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
