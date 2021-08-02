import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../common/FormsControls/FormsControls";
import React from "react";

const maxLength50 = maxLengthCreator(50)

const AddMessageForm = (props: any) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea}
                       validate={[required, maxLength50]}
                       name={"newMessageBody"}
                       placeholder={"Enter your message"}/>
            </div>
            <div>
                <button>send</button>
            </div>
        </form>
    )
}

export const AddMessageReduxForm = reduxForm({form: "dialogAddMessageForm"})(AddMessageForm)