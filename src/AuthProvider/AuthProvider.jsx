import React, { createContext, useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase/firebase.config'
export const AuthContext = createContext(null)
const auth = getAuth(app)
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [lodding, setLodding] = useState(true)

  

    const loginUser = (email, password) => {
        setLodding(true)
        return signInWithEmailAndPassword(auth, email, password)  
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, carentUser => {
            setUser(carentUser)
            setLodding(false)
            console.log("this is my onAuthChange", carentUser)
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
        logOut
    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;