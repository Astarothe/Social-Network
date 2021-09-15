import React, {ChangeEvent, useEffect, useState} from "react";

export const ProfileStatusWithHooks = (props: any) => {

    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status)
    },[props.status])

    const activatedEditMode = () => {
        setEditMode(true)
    }
    const deactivatedEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }
    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }
    return (
        <div>
            {!editMode &&
            <div>
                <span onDoubleClick={activatedEditMode}>{props.status || "-------"}</span>
            </div>
            }
            {editMode &&
            <div>
                <input autoFocus
                       onBlur={deactivatedEditMode}
                       type="text"
                       onChange={onStatusChange}
                       value={status}
                />

            </div>
            }
        </div>
    )
}