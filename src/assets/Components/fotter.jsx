import './fotter.css';

import EVEAP_logo from '../../../public/images/logo/EVAAP_LOGO.png';
import Twitter_logo from '../../../public/images/logo/twitter.png';
import Instagram_logo from '../../../public/images/logo/instagram-circle.png';
import LinkedIn_logo from '../../../public/images/logo/linkedin-circled.png';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return(
        <>
            <div className="footer">
                <img src={EVEAP_logo} alt="EVEAP_logo" className="logo"/>


                <div className="text-content1">
                    <ul className="ul">
                        <li className="main-text">Contact us</li>
                        <li className="sub-text">Prashanthi hills</li>
                        <li className="sub-text">meerpet pincode-500058 Hyderabad</li>
                        <li className="sub-text">Telangana</li>
                    </ul>
                </div>

                    <div className="text-content2">
                        <ul className="ul">
                            <li className="main-text">Quick links</li>
                            <li className="sub-text">Home</li>
                            <li className="sub-text">Contact Us</li>
                            <li className="sub-text">Abount Us</li>
                            <li className="sub-text">Our Services</li>
                        </ul>
                    </div>

                        <div className="text-content3">
                            <ul className="ul">
                                <li className="main-text">Tools</li>
                                <li className="sub-text">FAQs</li>
                                <li className="sub-text">Carrer</li>
                                <li className="sub-text">Announces</li>
                            </ul>
                        </div>

                <div className="text-content4">
                    <ul className="ul">
                        <li ><img src={Twitter_logo}  className="img-text" /></li>
                        <li ><img src={Instagram_logo} className="img-text"/></li>
                        <li ><img src={LinkedIn_logo}  className="img-text"/></li>
                    </ul>
                </div>

                </div>
            <div className="copyright">
                &copy; {currentYear} Hiscope Enterprices. All rights reserved.

            </div>
        </>

    )
}

export default Footer;