import React from 'react';
import { NavLink } from 'react-router-dom';
import Header_mod from './Header.module.css'

const Header = (props) => {
    return (
        <header className={Header_mod.header}>
            <img src='https://cdn.logo.com/hotlink-ok/logo-social-sq.png' ></img>

            <div className={Header_mod.loginBlock}>
                {props.isAuth ? props.login
                : <NavLink to='/login' >LOGIN</NavLink>}
                
            </div>
        </header>
    )
}

export default Header;