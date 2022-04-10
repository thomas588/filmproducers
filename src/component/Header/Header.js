import React from "react";
import s from "./Header.module.css";
import Wrapper from "../Wrapper/Wrapper";

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
              <a href="#s">Главная</a>
            </li>
            <li>
              <a href="#s">Анкета</a>
            </li>
            <li>
              <a href="#s">Команда</a>
            </li>
            <li>
              <a href="#s">Контакты</a>
            </li>
          </ul>
          <button className={s.login}>Войти</button>
        </nav>
      </header>
      <Wrapper />
    </>
  );
}

export default Header;
