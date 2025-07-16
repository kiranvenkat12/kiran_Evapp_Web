// Header.jsx
import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./header.css";

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className="evvap-header" role="banner">
            {/* Logo */}
            <div className="evvap-logo" role="img" aria-label="EVVAP Logo">
                <img src="/images/logo/EVAAP_LOGO.png" alt="EVVAP Logo" />
            </div>

            {/* Hamburger Menu Button */}
            <button
                className="hamburger"
                aria-label="Toggle navigation menu"
                aria-expanded={isMobileMenuOpen}
                onClick={toggleMobileMenu}
            >
                &#9776;
            </button>

            {/* Navigation Links */}
            <nav
                className={`nav-links ${isMobileMenuOpen ? "open" : ""}`}
                id="navigation-menu"
                role="navigation"
            >
                <NavLink to="/" className={({ isActive }) => isActive ? "active-link" : ""}>Home</NavLink>
                <NavLink to="/employerDashboard" className={({ isActive }) => isActive ? "active-link" : ""}>Employer</NavLink>
                <NavLink to="/contact_usPage" className={({ isActive }) => isActive ? "active-link" : ""}>Contact Us</NavLink>
                <NavLink to="/ourServices" className={({ isActive }) => isActive ? "active-link" : ""}>Our Services</NavLink>
                <NavLink to="/founderPage" className={({ isActive }) => isActive ? "active-link" : ""}>Our Founders</NavLink>
                <NavLink to="/CandidateDashboard" className={({ isActive }) => isActive ? "active-link" : ""}>Candidate Dashboard</NavLink>
                <NavLink to="/registrationPage" className={({ isActive }) => isActive ? "active-link" : ""}>Register</NavLink>

                {/* CTA Button */}
                <NavLink to="/loginApp1">
                    <button className="sign-in-btn">Sign in</button>
                </NavLink>
            </nav>
        </header>
    );
};

export default Header;
