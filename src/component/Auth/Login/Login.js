import React, { useState } from 'react'
import { signInWithEmailAndPassword, getAuth } from 'firebase/auth';
import { useNavigate } from 'react-router-dom'

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    let navigate = useNavigate()
    let auth = getAuth()

    const loginUser = async (event) => {
        event.preventDefault();
        try {
            await signInWithEmailAndPassword(auth,email, password).then(() => navigate('/profile')).catch(e => console.log(e))
        } catch (error) {
            alert(error.code)
        }
    }

    return (
      <div>
        <h1>Login Page</h1>
        <form onSubmit={loginUser}>
            <input type={'email'} placeholder={'email'} name={'email'} onChange={(v) => setEmail(v.target.value)}/>
            <input type={'password'} placeholder={'password'} name={'password'} onChange={(v) => setPassword(v.target.value)}/>
            <button type='submit'>Login</button>
        </form>
        <br/>
        <a href='/signup'>Need an account</a>
      </div>
    )
}

// sign => up регистрация
// log in => войдите в систему
// log out => выйти из системы