import React from "react";
import ProfileInfo_mod from "./ProfileInfo.module.css";

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
    };

    activatedEditMode(){
        this.setState({
            editMode: true,
        })
        // this.state.editMode = true;
        // this.forceUpdate();
    }
    deactivatedEditMode(){
        this.setState({
            editMode: false,
        })
    }
    render() {
        return (
            <>
                {!this.state.editMode && (
                    <div>
                        <span onDoubleClick={ this.activatedEditMode.bind(this)}>{this.props.status}</span>
                    </div>
                )}

                {this.state.editMode && (
                    <div>
                        <input autoFocus={true} onBlur={ this.deactivatedEditMode.bind(this)} value={this.props.status}></input>
                    </div>
                )}
            </>
        );
    }
}

export default ProfileStatus;
