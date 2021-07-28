import React from "react";
import { connect } from "react-redux";
import { setCurrentPage, toggleFollowingInProgress, getUsers, follow, unfollow } from "../../redux/user_reducer";
import Users from "./Users";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";
import Preloader from "../common/Preloader/Preloader";

class UsersContainer extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChange = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
    };

    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader /> : null}
                <Users
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    onPageChange={this.onPageChange}
                    users={this.props.users}
                    toggleFollowingInProgress={this.props.toggleFollowingInProgress}
                    followingInProgress={this.props.followingInProgress}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                />
            </>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
    };
};

// const UsersConteiner = withAuthRedirect(connect(mapStateToProps, {
//     setCurrentPage,
//     toggleFollowingInProgress,
//     getUsers,
//     follow,
//     unfollow,
// })(UsersContainer));

// export default UsersConteiner;

export default compose(
    connect(mapStateToProps, {
        setCurrentPage,
        toggleFollowingInProgress,
        getUsers,
        follow,
        unfollow,
    }),
    withAuthRedirect
)(UsersContainer);
