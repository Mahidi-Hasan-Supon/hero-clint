import React from 'react';
import Navber from '../compunents/Navber';
import Footer from '../compunents/Footer';
import { Outlet } from 'react-router';

const Root = () => {
    return (
        <div>
            <Navber></Navber>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;