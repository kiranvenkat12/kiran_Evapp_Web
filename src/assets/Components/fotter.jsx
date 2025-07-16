// src/components/Footer.jsx
import  { useState } from 'react';
import './fotter.css';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaArrowUp } from 'react-icons/fa';

const Footer = () => {
    const [openSection, setOpenSection] = useState(null);
    const toggleSection = (id) => setOpenSection(openSection === id ? null : id);

    const handleBackToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="ev-footer">
            <div className="footer-grid">
                {/* Logo & Description */}
                <div className="footer-col brand">
                    <img src="/images/logo/EVAAP_LOGO.png" alt="EVVAAP Logo" className="footer-logo" />


                </div>

                {/* Navigation Sections */}
                <div className="footer-col">
                    <button className="footer-toggle" onClick={() => toggleSection('company')}>
                        Company <span className={`arrow ${openSection === 'company' ? 'open' : ''}`}>⌄</span>
                    </button>
                    <ul className={`footer-links ${openSection === 'company' ? 'open' : ''}`}>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">Press</a></li>
                    </ul>
                </div>

                <div className="footer-col">
                    <button className="footer-toggle" onClick={() => toggleSection('resources')}>
                        Resources <span className={`arrow ${openSection === 'resources' ? 'open' : ''}`}>⌄</span>
                    </button>
                    <ul className={`footer-links ${openSection === 'resources' ? 'open' : ''}`}>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Support</a></li>
                        <li><a href="#">Documentation</a></li>
                    </ul>
                </div>

                {/* Newsletter Signup */}
                <div className="footer-col newsletter">

                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            alert("Subscribed successfully!");
                            e.target.reset();
                        }}
                    >
                        <div className="footer-contact">
                            <p>1/23 Tech Park Rd, Hyderabad, IN</p>
                            <a href="tel:+919999999999">+91 99999 99999</a>
                            <a href="mailto:contact@evvaap.com">contact@evvaap.com</a>
                        </div>
                        <div className="footer-social">
                            <a href="#"><FaFacebookF /></a>
                            <a href="#"><FaTwitter /></a>
                            <a href="#"><FaLinkedinIn /></a>
                            <a href="#"><FaInstagram /></a>
                        </div>
                    </form>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} EVVAAP. All rights reserved.</p>
                <div className="footer-legal">
                    <a href="#">Terms</a>
                    <a href="#">Privacy</a>
                    <a href="#">Cookies</a>
                </div>
            </div>

            {/* Back to top button */}
            <button className="back-to-top" onClick={handleBackToTop} aria-label="Back to top">
                <FaArrowUp />
            </button>
        </footer>
    );
};

export default Footer;
