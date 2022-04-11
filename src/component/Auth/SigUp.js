import React, { useState } from "react";
import {
    createUserWithEmailAndPassword, getAuth
} from 'firebase/auth'
import '../firebase/firebase';
import { useNavigate } from 'react-router-dom'

export default function SignUp() {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    let navigate = useNavigate();
    const registerUser = async (e) => {
        e.preventDefault()
        let auth = getAuth()
        try {
            await createUserWithEmailAndPassword(auth,email,password).then (() => navigate('/profile')).catch(e => console.log(e))
        } catch (error) {
            console.log(error)
        }
    }
    return(
        <>
        <h1>SignUp Page</h1>
        <form onSubmit={registerUser}>
            <input type={"email"} placeholder={"Email"} name={"email"} onChange={(v) => setEmail(v.target.value)} />
            <input type={"password"} placeholder={"password"} name={"password"} onChange={(v) => setPassword(v.target.value)} />
            <button type={"submit"}>Sign up</button>
        </form>
        <a href="/">Need to login</a>
        </>
    )
}

// catch => ловить
// async => асинхронный
// await => ожидать
// prevent => предотвращать
// target => цель
// placeholder => заполнитель
// on Submit => при отправке
// create User With Email And Password => создайте Пользователя С Электронной Почтой И Паролем

// sign => up регистрация
// log in => войдите в систему
// log out => выйти из системы