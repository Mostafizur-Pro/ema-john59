import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth'
import app from '../Firebase/Firebase.config'

export const AuthContext = createContext()

const auth = getAuth(app)

const UserContext = ({children}) => {
    const [user, setUser] = useState(null)
    // const user = {email: 'sohan'}

    
    
    const createUser = (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signIn = (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logout = ()=>{
        return signOut(auth)
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            console.log('current user', currentUser)
            setUser(currentUser)
        })
        return ()=> unSubscribe()
    },[])




    const authInfo = {user, createUser, signIn, logout}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}            
        </AuthContext.Provider>
    );
};

export default UserContext;