import React from "react";
import userPhoto from "../../userPhoto.jpg";
import { NavLink } from "react-router-dom";
import Pagination from "../common/pagination/Pagination";

// let Users = ({currentPage, totalUsersCount, pageSize, onPageChange, users, ...props})
let Users = React.memo(({ currentPage, totalUsersCount, pageSize, onPageChange, ...props }) => {
    // let pageCount = Math.ceil(props.totalUsersCount / props.pageSize);

    // let pages = [];

    // for (let i = 1; i <= pageCount; i++) {
    //     pages.push(i);
    // }
    console.log(props);
    return (
        <div>
            <Pagination
                totalUsersCount={totalUsersCount}
                pageSize={pageSize}
                currentPage={currentPage}
                onPageChange={onPageChange}
            />
            {/* <div>
                {pages.map((p) => {
                    return (
                        <span
                            className={props.currentPage === p && styles.selectedPage}
                            onClick={(e) => {
                                props.onPageChange(p);
                            }}
                        >
                            {p}
                        </span>
                    );
                })}
            </div> */}
            {props.users.map((u) => (
                <div key={u.id}>
                    <span>
                        <div>
                            <NavLink to={"/profile/" + u.id}>
                                <img
                                    src={u.photos.small != null ? u.photos.small : userPhoto}
                                    width="100px"
                                    alt="emptyPhoto"
                                />
                            </NavLink>
                        </div>

                        <div>
                            {u.followed ? (
                                <button
                                    disabled={props.followingInProgress.some((id) => id === u.id)}
                                    onClick={() => {
                                        props.unfollow(u.id);
                                    }}
                                >
                                    unfollow
                                </button>
                            ) : (
                                <button
                                    disabled={props.followingInProgress.some((id) => id === u.id)}
                                    onClick={() => {
                                        props.follow(u.id);
                                    }}
                                >
                                    follow
                                </button>
                            )}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{"u.location.country"}</div>
                            <div>{"u.location.city"}</div>
                        </span>
                    </span>
                </div>
            ))}
        </div>
    );
});

export default Users;
