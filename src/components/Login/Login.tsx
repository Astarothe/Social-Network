import React from "react"
import {reduxForm, Field} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";

export const Login = (props: any) => {
    const onSubmit = (formData: any) => {
        console.log(formData)
    }
    return <div>
        <h1>login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

export const LoginForm = (props: any) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Input}
                       validate={[required]}
                       name={"login"}
                       placeholder={"Login"}/>
            </div>
            <div>
                <Field component={Input}
                       validate={[required]}
                       name={"password"}
                       placeholder={"Password"}/>
            </div>
            <div>
                <Field component={Input} name={"rememberMe"}  type={"checkbox"}/> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}
const LoginReduxForm = reduxForm({form: "login"})(LoginForm)