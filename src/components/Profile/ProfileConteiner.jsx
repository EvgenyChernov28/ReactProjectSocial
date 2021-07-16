import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import {setUserProfile} from '../../redux/profile_reducer'
import { withRouter } from "react-router-dom";

class ProfileConteiner extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        console.log(this.props);
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then((response) => {
                this.props.setUserProfile(response.data);
            });
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

export default connect(mapSetToProps, {setUserProfile})(WithUrlDataConteinerComponent);
