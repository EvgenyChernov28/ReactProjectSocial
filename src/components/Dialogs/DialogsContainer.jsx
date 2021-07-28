import { connect } from "react-redux";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { sendMessageCreator} from "../../redux/dialog_reducer";
import Dialogs from "./Dialogs";

let mapStateToProps = (state) => {
    return {
        dialogPage: state.dialogPage,
    };
};
let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (newMessageBodyField) => {
            dispatch(sendMessageCreator(newMessageBodyField));
        },
    };
};

export default compose(connect(mapStateToProps, mapDispatchToProps), withAuthRedirect)(Dialogs);
