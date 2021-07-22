import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import {getUserProfile} from '../../redux/profile_reducer'
import { Redirect, withRouter } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";


class ProfileConteiner extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if(!userId){
            userId = 2;
        }
        this.props.getUserProfile(userId);
    }
    
    render() {
        
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile} />
            </div>
        );
    }
}

let mapSetToProps = (state) => ({
    profile: state.profilePage.profile,
});

// let AuthRedirectComponent = withAuthRedirect(ProfileConteiner)

// let WithUrlDataConteinerComponent = withRouter(AuthRedirectComponent)

// export default connect(mapSetToProps, {getUserProfile})(WithUrlDataConteinerComponent);

export default compose(connect(mapSetToProps, {getUserProfile}),withRouter,withAuthRedirect)(ProfileConteiner)