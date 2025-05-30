import React from 'react';
import UpNav from './Components/UpNav/UpNav';
import NavBar from './Components/NavBar';
import { Outlet } from 'react-router-dom';
import Footer from './Components/Footer';

const Root = () => {
    return (
        <div>
            <UpNav></UpNav>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;