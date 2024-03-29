import React from "react"
import {reduxForm, Field} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {loginTC} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import s from "./../common/FormsControls/FormsControls.module.css"

const Login = (props: any) => {
    const onSubmit = (formData: any) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
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
                       name={"email"}
                       placeholder={"email"}/>
            </div>
            <div>
                <Field component={Input}
                       validate={[required]}
                       name={"password"}
                       type={"password"}
                       placeholder={"Password"}/>
            </div>
            <div>
                <Field component={Input} name={"rememberMe"} type={"checkbox"}/> remember me
            </div>
            {props.error && <div className={s.formSummaryError}>
                {props.error}
            </div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}
const LoginReduxForm = reduxForm({form: "login"})(LoginForm)

const mapStateToProps = (state: any) => ({
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, {login: loginTC})(Login)