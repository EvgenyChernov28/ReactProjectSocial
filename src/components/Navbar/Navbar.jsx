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
        <NavLink to="/messages" activeClassName={Navbar_mod.activeLink}>messages</NavLink>
      </div>
      <div className={Navbar_mod.item}>
        <a href="">news</a>
      </div>
      <div className={Navbar_mod.item}>
        <a href="">music</a>
      </div>
    </nav>
  )
}

export default Navbar;