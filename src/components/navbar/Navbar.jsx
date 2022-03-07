import React, { useState } from 'react'
import "./Navbar.css"
import { Link } from 'react-scroll'
import logo from "../../images/logo.png"
import { VscThreeBars } from 'react-icons/vsc';
import { FaTimes } from 'react-icons/fa';


const Navbar = () => {

    const [showmanu, setShowmenu] = useState(false);

    return (

        <>
            <nav className="container navbar">

                <div className="main-logo">
                    <Link to="home" smooth={true} duration={1500}>
                        <img src={logo} alt="logo" className="logo" />
                    </Link>
                </div>
                <div className={showmanu ? "nav-items-mobile" : "nav-items"}
                    onClick={() => setShowmenu(false)}>
                    <ul>
                        <li>
                            <Link to="home" smooth={true} duration={1500}>Home</Link>
                        </li>
                        <li>
                            <Link to="services" smooth={true} duration={1500}>Services</Link>
                        </li>
                        <li>
                            <Link to="about" smooth={true} duration={1500}>About</Link>
                        </li>
                        <li>
                            <Link to="features" smooth={true} duration={1500}>Features</Link>
                        </li>
                        <li>
                            <Link to="Clients" smooth={true} duration={1400}>Clients</Link>
                        </li>
                        <l>
                            <a to="#" className="name">+ 971 502674170</a>
                        </l>
                    </ul>
                </div>
                <div className="nav-icon" onClick={() => setShowmenu(!showmanu)}>
                    {showmanu ? <FaTimes /> : <VscThreeBars />}
                </div>
            </nav>
        </>
    )
}

export default Navbar