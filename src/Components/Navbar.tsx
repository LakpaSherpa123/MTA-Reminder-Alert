import React from 'react'

import '../CSS/Navbar.css'
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'


export const Navbar = () => {
    return (
            <nav className="navbar navbar-expand-lg navbar-scroll fixed-top shadow-0 border-bottom border-dark" data-mdb-navbar-init>
                <div className="container">
                    <Link to="/" className="nav-link"> <span className="stylish">MTA</span> </Link>
                    <span className="logo">lert</span>
                    
                    <button className="navbar-toggler" type="button" data-mdb-collapse-init
                    data-mdb-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <i className="fas fa-bars"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                        <Link to="/" className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#!">About Us</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#!">Reminders</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#!">Contacts</a>
                        </li>
                        {/* <button type="button" className="btn btn-dark ms-3">Get Started</button> */}
                    </ul>
                    </div>
                </div>
            </nav>
    )
}

// export const Navbar = () => {
//     return (

//         //Use Bootstrap for the responsive app Navbar

//         <nav classNameName="navigationWrapper">
//             <div classNameName="logoWrapper">
//                 <span classNameName="stylish">MTA</span>
//                 <span classNameName="logo">lert</span>
//             </div>

//             <button classNameName="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//                      <span classNameName="navbar-toggler-icon"></span>
//             </button>
//             <ul classNameName="navigation">
                
//                 <li id="Home"><Link to="/" classNameName="link"> Home</Link></li>
//                 <li id="About"><Link to="/aboutUs" classNameName="link"> About Us</Link></li>
//                 <li id="Reminders"><Link to="/reminders" classNameName="link"> Reminders</Link></li>
//                 <li id="Map"><Link to="/map" classNameName="link"> Map</Link></li>
//                 <li id="Contact"><Link to="/contact" classNameName="link"> Contact</Link></li>
//             </ul>
//         </nav>
//     );
// };


