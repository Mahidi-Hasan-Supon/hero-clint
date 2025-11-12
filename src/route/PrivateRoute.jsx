import React, { use } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Navigate, useLocation } from 'react-router';
import Loading from '../compunents/Loading';

const PrivateRoute = ({children}) => {
    const {users,loading} =use(AuthContext)
    const location = useLocation()
   
    console.log(users);
    console.log(location);
    if(loading){
        return <Loading></Loading>
    }
    if(users){

        return children;
    }
    return <Navigate to='/login' state={location.pathname}></Navigate>
};

export default PrivateRoute;