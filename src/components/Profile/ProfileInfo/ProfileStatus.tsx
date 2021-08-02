import React, {ChangeEvent} from "react";
import s from "./ProfileInfo.module.css";

export class ProfileStatus extends React.Component<any, any> {

    state = {
        editMode: false,
        status: this.props.status
    }
    activatedEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    deactivatedEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status)
    }
    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        });
    }

    componentDidUpdate(prevProps: Readonly<any>, prevState: Readonly<any>, snapshot?: any) {
        if (prevProps.status !== this.props.status) {
            this.setState({status: this.props.status})
        }
    }

    render() {
        return (
            <div>
                {
                    !this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activatedEditMode}>{this.props.status || "-------"}</span>
                    </div>
                }
                {
                    this.state.editMode &&
                    <div>
                        <input autoFocus
                               onBlur={this.deactivatedEditMode}
                               type="text"
                               onChange={this.onStatusChange}
                               value={this.state.status}/>
                    </div>
                }
            </div>
        )
    }
}