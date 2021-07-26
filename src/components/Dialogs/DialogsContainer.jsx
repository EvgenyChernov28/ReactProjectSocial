import { connect } from "react-redux";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import {
    sendMessageCreator,
    upadateNewMessageBodyCreator,
} from "../../redux/dialog_reducer";
import Dialogs from "./Dialogs";

let mapStateToProps = (state) => {
    return {
        dialogPage: state.dialogPage,
        isAuth: state.auth.isAuth,
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

export default compose(connect(mapStateToProps, mapDispatchToProps),withAuthRedirect)(Dialogs)