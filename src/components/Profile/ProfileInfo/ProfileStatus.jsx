import React from "react";


class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status,
    };

    activatedEditMode() {
        this.setState({
            editMode: true,
        })
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

    componentDidUpdate(prevProps, prevState) {
        if(prevProps.status !== this.props.status){
            this.setState({
                status: this.props.status
            })
        }
    }
    render() {
        return (
            <>
                {!this.state.editMode && (
                    <div>
                        <span onDoubleClick={ this.activatedEditMode.bind(this)}>{this.state.status || "----"}</span>
                    </div>
                )}

                {this.state.editMode && (
                    <div>
                        <input onChange={this.onStatusChange} autoFocus={true} onBlur={ this.deactivatedEditMode} value={this.state.status}></input>
                    </div>
                )}
            </>
        );
    }
}

export default ProfileStatus;
