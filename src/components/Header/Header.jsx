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
      <div className={style.loginBlock}>
        {props.isAuth ? props.login : <NavLink to={"/login"}>Login</NavLink>}
      </div>
    </header>
  );
};

export default Header;
