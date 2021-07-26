import React from "react";
import ProfileInfo_mod from "./ProfileInfo.module.css";

class ProfileStatus extends React.Component {
    // statusInputRef = React.createRef()
    state = {
        editMode: false,
        status: this.props.status,
    };

    activatedEditMode() {
        this.setState({
            editMode: true,
        })
        // this.state.editMode = true;
        // this.forceUpdate();
    }
    deactivatedEditMode = () => {
        this.setState({
            editMode: false,
        })
        this.props.updateStatus(this.state.status);
    }
    onStatusChange = (e) => {
        console.log(this);
        this.setState({
            status: e.currentTarget.value
        })
    }
    render() {
        return (
            <>
                {!this.state.editMode && (
                    <div>
                        <span onDoubleClick={ this.activatedEditMode.bind(this)}>{this.state.status || "----"}</span>
                        {/* <button onClick={this.onStatusChange} value={'sdfd'}>отправить</button> */}
                    </div>
                )}

                {this.state.editMode && (
                    <div>
                        <input onChange={this.onStatusChange} autoFocus={true} onBlur={ this.deactivatedEditMode} value={this.state.status}></input>
                        {/* <button onClick={this.onStatusChange}>отправить</button> */}
                    </div>
                )}
            </>
        );
    }
}

export default ProfileStatus;
