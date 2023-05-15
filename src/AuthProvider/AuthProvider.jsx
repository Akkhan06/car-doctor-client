import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config'
export const AuthContext = createContext(null)
const auth = getAuth(app)
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [lodding, setLodding] = useState(true)

    const googleProvider = new GoogleAuthProvider()

  const googleUser = () => {
    return signInWithPopup(auth, googleProvider)
  }

    const loginUser = (email, password) => {
        setLodding(true)
        return signInWithEmailAndPassword(auth, email, password)  
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, carentUser => {
            setUser(carentUser)
            setLodding(false)
            console.log("this is my onAuthChange", carentUser)

            if (carentUser) {
                const logedUser = {
                    email: carentUser.email
                  }
                fetch('http://localhost:5000/jwt', {
                method: "POST",
                headers: {
                  'content-type': "application/json"
                },
                body: JSON.stringify(logedUser)
              })
              .then(res => res.json())
              .then(data => {
                console.log(data)
                localStorage.setItem('access-token', data.token)
                
              })
            }
            else{
                localStorage.removeItem('access-token')
            }
        })
        return () => unsubscribe()
    },[])


    const logOut = () => {
        return signOut(auth)
    }
    const userInfo ={
        user,
        lodding,
        loginUser,
        logOut,
        googleUser
    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;