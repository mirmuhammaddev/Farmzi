import React from 'react';
import "./Navbar.style.css"
import {assets} from "../../assets/assets";
import {Link} from "react-router";

const Navbar = () => {
    return (
        <div>
            <nav className="nav">
                <div className="logo">
                    <img src={assets.logo} alt=""/>
                </div>
                <ul className="pages">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="About">About</Link></li>
                    <li>Pages</li>
                    <li><Link to="Blog">Blog</Link></li>
                    <li><Link to="Contact">Contact</Link></li>
                </ul>
                <div className="phone_number">
                    <div className="phone_icon">
                        <img src={assets.phone_icon} alt=""/>
                    </div>
                    <div className="call_number">
                        <p>Call us:</p>
                        <h4>+00 89 458 648</h4>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;