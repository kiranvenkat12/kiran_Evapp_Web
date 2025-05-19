import { NavLink } from "react-router-dom";
import "./Header.css";

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
          <NavLink to="/people" activeClassName="active-link">People</NavLink>
          <NavLink to="/learning" activeClassName="active-link">Learning</NavLink>
          <NavLink to="/jobs" activeClassName="active-link">Jobs</NavLink>
          <NavLink to="/games" activeClassName="active-link">Games</NavLink>
          <NavLink to="/app" activeClassName="active-link">Get the app</NavLink>
          <NavLink to="/join" className="join-now" activeClassName="active-link">Join now</NavLink>
          <NavLink to="/signin">
            <button className="sign-in-btn">Sign in</button>
          </NavLink>
        </nav>
      </header>
  );
};

export default Header;
