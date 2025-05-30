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
          {/*<NavLink to="/CandidateDashboard" activeClassName="active-link">About us</NavLink>*/}
          <NavLink to="/employerDashboard" activeClassName="active-link">Employer</NavLink>
          <NavLink to="/contact_usPage" activeClassName="active-link">Contact us</NavLink>
          <NavLink to="/ourServices" activeClassName="active-link">Our Services</NavLink>
          <NavLink to="/founderPage" activeClassName="active-link">Our Founders</NavLink>
            <NavLink to="/CandidateDashboard" activeClassName="active-link">Candidate DashBoard</NavLink>
            <NavLink to="/loginApp1" activeClassName="active-link">
            <button className="sign-in-btn">Sign in</button>
          </NavLink>
        </nav>
      </header>
  );
};

export default Header;
