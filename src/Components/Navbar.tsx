
import { Link } from 'react-router-dom';
import '../CSS/Navbar.css'



// If you only include the Bootstrap CSS file,
// you'll get the styling but not the interactive functionality.
// That's why you need to explicitly import the JavaScript as well, 
// using import 'bootstrap'.

export const Navbar = () => {

    return (

        //Use Bootstrap for the responsive app Navbar

        <nav className="navbar navbar-expand-md navbar-mainbg navigationWrapper">
            <div className='container-fluid'>


                <div className="logoWrapper">
                    <span className="stylish">MTA</span>
                    <span className="logo">lert</span>
                </div>

                
                    <button className="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navItems" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navItems">
                        <ul className="ms-auto navbar-nav mb-2 mb-lg-0 navigation" >
                            <li id="Home" className = "nav-item"><Link to="/" className="link"> Home</Link></li>
                            <li id="About" className = "nav-item"><Link to="/aboutUs" className="link"> About Us</Link></li>
                            <li id="Reminders" className = "nav-item"><Link to="/reminders" className="link"> Reminders</Link></li>
                            <li id="Map" className = "nav-item"><Link to="/map" className="link"> Map</Link></li>
                            <li id="Contact" className = "nav-item"><Link to="/contact" className="link"> Contact</Link></li>
                        </ul>
                    </div>
               

            </div>
        </nav>
    );
};


