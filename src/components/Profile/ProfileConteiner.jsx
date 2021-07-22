import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import {getUserProfile} from '../../redux/profile_reducer'
import { withRouter } from "react-router-dom";


class ProfileConteiner extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
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
    profile: state.profilePage.profile
});


let WithUrlDataConteinerComponent = withRouter(ProfileConteiner)

export default connect(mapSetToProps, {getUserProfile})(WithUrlDataConteinerComponent);
