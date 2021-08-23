import React from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import Header_mod from './Header.module.css'

const Header = (props) => {

    return (
        <header className={Header_mod.header}>
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/SVG_Logo.svg/2048px-SVG_Logo.svg.png' alt="logotip" ></img>

            <div className={Header_mod.loginBlock}>
                {props.isAuth ? <div>{props.login} - <button onClick={props.logout}>выйти</button></div>
                : <Redirect to={"/login"} /> && <NavLink to={'/login'} >LOGIN</NavLink>}
            </div>
        </header>
    )
}

export default Header;