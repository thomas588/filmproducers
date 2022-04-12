import React from "react";
import s from "./FooterComponent.module.css"

function FooterComponent() {
    return(
        <>
            <footer>
                <div className={s.footer_cols}>

                    <div className={s.footer_column}>
                        <b>Комапния</b>
                        <li>About Us</li>
                        <li>Why Choose us</li>
                        <li>Pricing</li>
                        <li>Testimonial</li>
                    </div>

                    <div className={s.footer_column}>
                        <b>Ресурсы</b>
                        <li>Privacy Policy</li>
                        <li>Terms and Condition</li>
                        <li>Blog</li>
                        <li>Contact Us</li>
                    </div>

                    <div className={s.footer_column}>
                         <b>Продукт</b>
                         <li>Project managment</li>
                         <li>Time tracker</li>
                         <li>Time schedule</li>
                         <li>Lead generate</li>
                         <li>Remote Collaboration</li>
                    </div>

                    <div className={s.footer_subscribe}>
                        <p className={s.logo}>
                             CASTING<span>.UZ</span>
                        </p>
                        <b>Подпишитесь на нашу рассылку</b>
                        <form>
                            <input type={"email"} placeholder={"Введите Email"}/>
                            <button type={"submit"}>Подписатся</button>
                        </form>
                    </div>

                </div>
            </footer>
        </>
    )
}

export default FooterComponent;