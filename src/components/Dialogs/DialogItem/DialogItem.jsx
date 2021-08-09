import React from 'react';
import dialogs_mod from './../Dialogs.module.css';
import { NavLink } from 'react-router-dom'


const DialogItem = (props) => {
    return (
        <div className={dialogs_mod.dialogs}>
            <NavLink to={'/messages/' + props.id}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem;