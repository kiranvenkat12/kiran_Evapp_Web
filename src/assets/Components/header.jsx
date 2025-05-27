import { NavLink } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
      <header className="evvap-header">
        <img
            src="/images/logo/EVAAP_LOGO.png"
            alt="evvap"
            className="evvap-logo"
        />
        <nav>
          <NavLink to="/" activeClassName="active-link">Home</NavLink>
          <NavLink to="/people" activeClassName="active-link">About us</NavLink>
          <NavLink to="/learning" activeClassName="active-link">Contact us</NavLink>
          <NavLink to="/jobs" activeClassName="active-link">Our Services</NavLink>
          <NavLink to="/games" activeClassName="active-link">Our Founders</NavLink>
          <NavLink to="/signin">
            <button className="sign-in-btn">Sign in</button>
          </NavLink>
        </nav>
      </header>
  );
};

export default Header;
