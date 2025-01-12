import React from 'react';
import Navbar from "../components/Navbar/Navbar";
import {Outlet} from "react-router-dom"
import Section11 from "../components/section_11/section_11";



const Layout = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
            <Section11/>
        </div>
       );
};

export default Layout;