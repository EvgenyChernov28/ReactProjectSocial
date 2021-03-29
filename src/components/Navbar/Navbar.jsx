import React from 'react';
import Navbar_mod from './Navbar.module.css'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className={Navbar_mod.nav}>
      <div className={`${Navbar_mod.item} ${Navbar_mod.active}`}>
        <NavLink to="/profile" activeClassName={Navbar_mod.activeLink}>Profile</NavLink>
      </div>
      <div className={Navbar_mod.item}>
        <NavLink to="/messages" activeClassName={Navbar_mod.activeLink}>Messages</NavLink>
      </div>
      <div className={Navbar_mod.item}>
        <NavLink to='/news' activeClassName={Navbar_mod.activeLink}>News</NavLink>
      </div>
      <div className={Navbar_mod.item}>
        <NavLink to='/music' activeClassName={Navbar_mod.activeLink}>Music</NavLink>
      </div>
      <div className={Navbar_mod.item}>
        <NavLink to='/frieds' activeClassName={Navbar_mod.activeLink}>Friends</NavLink>
      </div>
    </nav>
  )
}

export default Navbar;