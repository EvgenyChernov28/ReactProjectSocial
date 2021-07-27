import { connect } from "react-redux";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { sendMessageCreator, updateNewMessageBodyCreator } from "../../redux/dialog_reducer";
import Dialogs from "./Dialogs";

let mapStateToProps = (state) => {
    return {
        dialogPage: state.dialogPage,
        // isAuth: state.auth.isAuth,
    };
};
let mapDispatchToProps = (dispatch) => {
    return {
        // updateNewMessageBody: (body) => {
        //     dispatch(updateNewMessageBodyCreator(body));
        // },
        sendMessage: (newMessageBodyField) => {
            dispatch(sendMessageCreator(newMessageBodyField));
        },
    };
};

export default compose(connect(mapStateToProps, mapDispatchToProps), withAuthRedirect)(Dialogs);
