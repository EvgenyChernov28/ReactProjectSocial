import axios from 'axios'
import React from 'react'
import userPhoto from '../../userPhoto.jpg'
let Users = (props) => {

    if(props.users.length === 0){

        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(recponse => {
            props.setUsers(recponse.data.items)
        })

    }
    console.log(props);
    return(
        <div>
            {props.users.map( u => <div key={u.id}>
            <span>
                <div>
                    <img src={u.photos.small != null ? u.photos.small: userPhoto} width="50px"/>
                </div>
                <div>
                    { u.followed ? <button onClick={() => {props.unfollow(u.id)}}>unfollow</button> : <button onClick={() => {props.follow(u.id)}}>follow</button>}
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
            </div>)}
        </div>
    )
}

export default Users