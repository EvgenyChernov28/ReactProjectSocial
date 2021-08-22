import React, { useState } from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { maxLengthCreator, required } from "../../utils/validators";
import { Input } from "../common/Form/FormsControls";
import { login } from "../../redux/auth_reducer";
import { Redirect } from "react-router-dom";
import styles from "../common/Form/FormsControls.module.css";
import SignIn from "./signin";

const Login = (props) => {
    const [choseLoginPage, SetLoginPage] = useState(false)

    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha);
        console.log(formData.email, formData.password, formData.rememberMe, formData.captcha);
    };
    if (props.isAuth) {
        return <Redirect to={"/profile"} />;
    }
    const changeLoginPage = () =>{
        SetLoginPage(!choseLoginPage)
    }

    return (
        <div>
            <button onClick={changeLoginPage} >Переключатель страницы авторизации</button>
            {choseLoginPage ? <SignIn onSubmit={onSubmit} /> : <LoginReduxForm captchUrl={props.captchUrl} onSubmit={onSubmit} />}
        </div>
    );
};

const maxLength20 = maxLengthCreator(40);
const LoginForm = (props) => {
    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field placeholder={"логин"} name={"email"} component={Input} validate={[required, maxLength20]} />
                </div>
                <div>
                    <Field
                        placeholder={"пароль"}
                        name={"password"}
                        component={Input}
                        validate={[required, maxLength20]}
                        type={"password"}
                    />
                </div>
                <div>
                    <Field type={"checkbox"} name={"rememberMe"} component={Input} validate={[required, maxLength20]} />{" "}
                    Запомнить меня
                </div>
                {props.error && <div className={styles.form_summary_error}>{props.error}</div>}
                {props.captchUrl && <img src={props.captchUrl} />}
                {props.captchUrl && (
                    <Field
                        placeholder={"Введите символы с картинки"}
                        name={"captcha"}
                        component={Input}
                        validate={[required]}
                    />
                )}
                <div>
                    <button>Нажать</button>
                </div>
            </form>
        </div>
    );
};

const LoginReduxForm = reduxForm({
    form: "login",
})(LoginForm);

const mapStateToProps = (state) => ({
    captchUrl: state.auth.captcha,
    isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, { login })(Login);
