import React, { createContext, useContext, useEffect, useState } from 'react'
import {
    getAuth,
    onAuthStateChanged
} from 'firebase/auth'
import '../firebase/firebase';

const Auth = createContext();

export const useAuth = () => {
    return useContext(Auth)
}

export default function AuthContext({children}) {
    const [currentUser, setCurrentUser] = useState(null);
    const [pending, setPending] = useState(true);

    let auth = getAuth()

    useEffect(() => {
        let unsubscribe =  onAuthStateChanged(auth,(user)=> {
            setCurrentUser(user) 
            setPending(false)
        })
        return unsubscribe;
    }, [auth])

  return (
      <Auth.Provider value={{
          currentUser
      }}>
          {children}
      </Auth.Provider>
  )
}

// unsubscribe => отписаться
// subscribe => подписываться
// context => контекст 
// state => государство
// changed => измененный
// current => текущий
// pending => рассматриваемый
// set => набор

// sign => up регистрация
// log in => войдите в систему
// log out => выйти из системы