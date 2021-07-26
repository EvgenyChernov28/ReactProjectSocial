import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import {getUserProfile, getStatus, updateStatus} from '../../redux/profile_reducer'
import { withRouter, Redirect } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";


class ProfileConteiner extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if(!userId){
            userId = 18440;
        }
        this.props.getUserProfile(userId);
        this.props.getStatus(userId)
    
        
    }
    
    render() {
        if (!this.props.isAuth) return <Redirect to='/login' />
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus} />
            </div>
        );
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    isAuth: state.auth.isAuth
});


export default compose(connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),withRouter,withAuthRedirect)(ProfileConteiner)