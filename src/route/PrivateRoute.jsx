import React, { use, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({children}) => {
    const {users,loading} =use(AuthContext)
    const location = useLocation()
   
    console.log(users);
    console.log(location);
    if(loading){
        return <p>Loading.....</p>
    }
    if(users){

        return children;
    }
    return <Navigate state={location.pathname}></Navigate>
};

export default PrivateRoute;