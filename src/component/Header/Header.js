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
              <Link to="/">Главная</Link>
            </li>
            <li>
              <Link to="#s">Анкета</Link>
            </li>
            <li>
              <Link to="#s">Команда</Link>
            </li>
            <li>
              <Link to="#s">Контакты</Link>
            </li>
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
