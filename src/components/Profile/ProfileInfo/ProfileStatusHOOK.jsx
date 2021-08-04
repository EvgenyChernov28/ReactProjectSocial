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
        <div>
            {(!editMode &&
                <div>
                    <span onDoubleClick={activatedEditMode}>{props.status || "----"}</span>
                </div>
            )}

            {editMode && (
                <div>
                    <input onChange={onStatusChange} autoFocus={true} onBlur={deactivatedEditMode} value={status}></input>
                </div>
            )}
        </div>
    );
};

export default ProfileStatusHook;
