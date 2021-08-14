import React, { useEffect } from "react";
import { useState } from "react";

const ProfileStatusHook = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status);
    }, [props.status])
    
    const activatedEditMode = () => {
        setEditMode(true)
    }
    const deactivatedEditMode = () => {
        setEditMode(false)
        props.updateStatus(status);
    }
    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }
    return (
        <span>
            {(!editMode &&
                <span>
                    <span onDoubleClick={activatedEditMode}>{props.status || "----"}</span>
                </span>
            )}

            {editMode && (
                <span>
                    <input onChange={onStatusChange} autoFocus={true} onBlur={deactivatedEditMode} value={status}></input>
                </span>
            )}
        </span>
    );
};

export default ProfileStatusHook;
