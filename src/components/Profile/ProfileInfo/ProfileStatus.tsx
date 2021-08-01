import React from "react";
import s from "./ProfileInfo.module.css";

export class ProfileStatus extends React.Component<any, any> {
    state = {
        editMode: false
    }

    activatedEditMode() {
        this.setState({
            editMode: true
        })
    }
    deactivatedEditMode() {
        this.setState({
            editMode: false
        })
    }

    render() {
        return (
            <div>
                {
                    !this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activatedEditMode.bind(this)}>{this.props.status}</span>
                    </div>
                }
                {
                    this.state.editMode &&
                    <div>
                        <input autoFocus onBlur={ this.deactivatedEditMode.bind(this) } type="text" value={this.props.status}/>
                    </div>
                }
            </div>
        )
    }
}