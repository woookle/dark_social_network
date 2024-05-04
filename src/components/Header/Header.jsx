import React from "react";
import style from './Header.module.css'

const Header = () => {
    return (
        <header className={style.header}>
            <img src='https://logodix.com/logo/1600113.png' />
            <p>dark social network.</p>
        </header>
    )
}

export default Header