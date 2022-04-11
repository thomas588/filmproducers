import React from "react";
import s from "./Header.module.css";
import Wrapper from "../Wrapper/Wrapper";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <header>
        <nav>
          <p className={s.logo}>
            CASTING<span>.UZ</span>
          </p>
          <ul className={s.navigation}>
            <li>
              <Link to="/home">Главная</Link>
            </li>
            {/* <li>
              <a href="#s">Анкета</a>
            </li>
            <li>
              <a href="#s">Команда</a>
            </li>
            <li>
              <a href="#s">Контакты</a>
            </li> */}
          </ul>
          <button className={s.login}>
            <Link to="/login">Войти</Link>
          </button>
        </nav>
      </header>
      <Wrapper />
    </>
  );
}

export default Header;
