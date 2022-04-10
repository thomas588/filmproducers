import React from "react";
import s from "./Wrapper.module.css";
import img1 from "../img/img1.jpg";

function Wrapper() {
  return (
    <>
      <div className={s.backg_img}>
        <img className={s.chair} src={img1} alt="" />
      </div>
      <div className={s.context}>
        <p className={s.info}>
          <span
            style={{ fontSize: "25px", color: "white", textAlign: "right" }}
          >
            Единая Автоматизированная <br />
            Информационная Система <br />
            Ассоциации Кинопроизводителей <br />
            Узбекистана
          </span>{" "}
          <br />
          Информационная поддержка на каждом шаге <br /> кинопроизводства - от
          зарождения идие до <br />
          премьерного показа
        </p>
        <form>
          <input
            className={s.inputs}
            type={"search"}
            placeholder="Введите e-mail или номера телефона"
          />
          <button className={s.login}>Зарегистрироваться</button>
        </form>
      </div>
    </>
  );
}

export default Wrapper;
