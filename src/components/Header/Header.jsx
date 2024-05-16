import React from "react";
import style from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <header className={style.header}>
      <div className={style.siteName}>
        <img src="https://logodix.com/logo/1600113.png" />
        <p>dark social network.</p>
      </div>
      <div>
        {props.isAuth ? 
        <div className={style.loginBlock}><NavLink className={style.loginText} to={'/profile'}>{props.login}</NavLink><button onClick={props.logout}>Log out</button></div> : <NavLink to={"/login"} className={style.login_btn}>Login</NavLink>}
      </div>
    </header>
  );
};

export default Header;
