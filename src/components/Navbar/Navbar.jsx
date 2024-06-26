import React from "react";
import style from './Navbar.module.css';
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={style.nav}>
            <div className={style.item}><NavLink to="/profile" className={(navData) => navData.isActive ? style.activeLink : style.item}>Profile</NavLink></div>
            <div className={style.item}><NavLink to="/dialogs" className={(navData) => navData.isActive ? style.activeLink : style.item}>Message</NavLink></div>
            <div className={style.item}><NavLink to="/users" className={(navData) => navData.isActive ? style.activeLink : style.item}>Users</NavLink></div>
            <div className={style.item}><NavLink to='/news' className={(navData) => navData.isActive ? style.activeLink : style.item}>News</NavLink></div>
            <div className={style.item}><NavLink to="/music" className={(navData) => navData.isActive ? style.activeLink : style.item}>Music</NavLink></div>
            <div className={style.item}><NavLink to="/settings" className={(navData) => navData.isActive ? style.activeLink : style.item}>Settings</NavLink></div>
        </nav>
    )
}

export default Navbar