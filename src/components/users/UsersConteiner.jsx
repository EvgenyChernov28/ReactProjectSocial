import React from "react";
import { connect } from "react-redux";
import {
    follow,
    setUsers,
    unfollow,
    setCurrentPage,
    setTotalUsersCount,
    setIsFetching,
} from "../../redux/user_reducer";
import Users from "./Users";
import axios from "axios";
import Preloader from "../Preloader/Preloader";


class UsersContainer extends React.PureComponent {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.setIsFetching(true);
        axios
            .get(
                `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`, {withCredentials: true}
            )
            .then((response) => {
                this.props.setIsFetching(false);
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
    }

    onPageChange = (pageNumber) => {
        this.props.setIsFetching(true);
        this.props.setCurrentPage(pageNumber);
        axios
            .get(
                `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`, {withCredentials: true}
            )
            .then((response) => {
                this.props.setIsFetching(false);
                this.props.setUsers(response.data.items);
            });
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
    };
};

// let mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userId) => {
//             dispatch(followAC(userId));
//         },
//         unfollow: (userId) => {
//             dispatch(unfollowAC(userId));
//         },
//         setUsers: (users) => {
//             dispatch(setUsersAC(users));
//         },
//         setCurrentPage: (pageNumber) => {
//             dispatch(setCurrentPageAC(pageNumber));
//         },
//         setTotalUsersCount: (totalCount) => {
//             dispatch(setTotalUsersCountAC(totalCount));
//         },
//         setIsFetching: (isFetching) => {
//             dispatch(setIsFetchingAC(isFetching));
//         },
//     };
// };

const UsersConteiner = connect(
    mapStateToProps,
    {
        follow,
        unfollow,
        setUsers,
        setCurrentPage,
        setTotalUsersCount,
        setIsFetching,
    }
)(UsersContainer);

export default UsersConteiner;
