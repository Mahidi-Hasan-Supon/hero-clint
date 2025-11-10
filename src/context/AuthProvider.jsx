import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../firebase/firebase.init';



const googleProvider = new GoogleAuthProvider()
const AuthProvider = ({children}) => {
    const [users,setUsers] = useState(null)

    const createUserWithEmailAndPasswordFunc=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signInWithEmailAndPasswordFunc=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    const signOutFunc=(email,password)=>{
        return signOut(auth,email,password)
    }
    const signInWithPopupFunc=()=>{
        return signInWithPopup(auth,googleProvider)
    }
    const updateProfileFunc=(displayName,photoURL)=>{
        return updateProfile(auth.currentUser,{
            displayName,
            photoURL
        })
    }
  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
      setUsers(currentUser)
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

    }
    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;