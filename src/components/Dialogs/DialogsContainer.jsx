import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import {
    sendMessageCreator,
    upadateNewMessageBodyCreator,
} from "../../redux/dialog_reducer";
import Dialogs from "./Dialogs";

let mapStateToProps = (state) => {
    return {
        dialogPage: state.dialogPage,
        // isAuth: state.auth.isAuth
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

let AuthRedirectComponent = withAuthRedirect(Dialogs)

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

export default DialogsContainer;
