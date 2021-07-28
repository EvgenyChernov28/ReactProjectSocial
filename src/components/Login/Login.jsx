import React from "react";
import { Field, reduxForm } from "redux-form";
import { maxLengthCreator, required } from "../../utils/validators";
import { Input } from "../common/Form/FormsControls";

const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData);
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};

const maxLength20 = maxLengthCreator(20)
const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"логин"} name={"login"} component={Input} validate={[required, maxLength20]}/>
            </div>
            <div>
                <Field placeholder={"пароль"} name={"password"} component={Input} validate={[required, maxLength20]}/>
            </div>
            <div>
                <Field type={"checkbox"} name={"rememberMe"} component={Input} validate={[required, maxLength20]}/> Запомнить меня
            </div>
            <div>
                <button>Нажать</button>
            </div>
        </form>
    );
};

const LoginReduxForm = reduxForm({
    form: "login",
})(LoginForm)



export default Login;
