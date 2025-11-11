import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../firebase/firebase.init';



const googleProvider = new GoogleAuthProvider()
const AuthProvider = ({children}) => {
    const [users,setUsers] = useState(null)
    const [loading,setLoading] = useState(true)

    const createUserWithEmailAndPasswordFunc=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signInWithEmailAndPasswordFunc=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const signOutFunc=(email,password)=>{
        setLoading(true)
        return signOut(auth,email,password)
    }
    const signInWithPopupFunc=()=>{
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
    }
    const updateProfileFunc=(displayName,photoURL)=>{
        setLoading(true)
        return updateProfile(auth.currentUser,{
            displayName,
            photoURL
        })
    }
  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
      setUsers(currentUser)
      setLoading(false)
    })
    return ()=>{
        unsubscribe()
    }
  },[])

    const authInfo = {
      users,
      setUsers,
      createUserWithEmailAndPasswordFunc,
      signInWithEmailAndPasswordFunc,
      signOutFunc,
      signInWithPopupFunc,
      updateProfileFunc,
      loading,
      setLoading,

    }
    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;