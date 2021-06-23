import React from "react";
import { connect } from "react-redux";
import Users from "./Users";

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
    };
};

let mapDispatchToProps = (dispatch) => {
    return {
        
    };
};

const UsersConteiner = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersConteiner;