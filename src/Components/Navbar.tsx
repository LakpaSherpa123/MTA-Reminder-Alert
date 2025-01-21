import React from 'react'

import '../CSS/Navbar.css'
import { Link } from 'react-router-dom';


export const Navbar = () => {
    return (

        //Use Bootstrap for the responsive app Navbar

        <nav className="navbar navbar-expand-md navbar-mainbg navigationWrapper">
            <div className="logoWrapper">
                <span className="stylish">MTA</span>
                <span className="logo">lert</span>
            </div>

            <div className="ms-auto">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                     <i className="navbar-toggler-icon"></i>
            </button>

         
            <ul className="collapse navbar-collapse ms-auto navigation" id="navbarNav">
                
                <li id="Home"><Link to="/" className="link"> Home</Link></li>
                <li id="About"><Link to="/aboutUs" className="link"> About Us</Link></li>
                <li id="Reminders"><Link to="/reminders" className="link"> Reminders</Link></li>
                <li id="Map"><Link to="/map" className="link"> Map</Link></li>
                <li id="Contact"><Link to="/contact" className="link"> Contact</Link></li>
            </ul>
            </div>
        </nav>
    );
};


