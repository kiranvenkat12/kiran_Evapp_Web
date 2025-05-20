import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import bannerImg from "./assets/Components/header_images/verification_imges/employee verification.jpg";
import Mainimage from "./assets/Components/header_images/mainimg.png";
import { FaHandshake } from "react-icons/fa6";
import { FaMagnifyingGlassPlus } from "react-icons/fa6";
import { IoManSharp } from "react-icons/io5";

import "./home.css";

const Home = () => {
  return (
      <>
  <div className="home_container">
    {/* <Header/> */}
    <main className="login-main">
      <section className="login-left">
        <h1>Welcome to your<br />Verification community</h1>

        <button className="google-btn">
          <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" />
          Continue as Google
        </button>

        <button className="microsoft-btn">
          <img src="https://img.icons8.com/color/48/microsoft.png" alt="Microsoft" />
          Continue with Microsoft
        </button>

        <button className="email-btn">Sign in with email</button>

        <p className="disclaimer">
          By clicking Continue to join or sign in, you agree to LinkedIn’s
          <a href="#"> User Agreement</a>, <a href="#">Privacy Policy</a>, and <a href="#">Cookie Policy</a>.
        </p>

        <p className="join-message">New to Evaap? <a href="#">Join now</a></p>
      </section>

      <section className="login-right">
        <img src={Mainimage} alt="Illustration" className="illustration" />
      </section>
    </main>
    <div className="cards-container1">
    <div className="maincards">
    <div className="cards">
      <FaHandshake className="img"/>
      <div className="caed-body">
        <p className="card-text">Employee Rights and Responsibilities</p>
        <p className="text">know your rights and responsibilities under Evvap-Verify</p>
      </div>
    </div>
    </div>

      <div className="maincards">
        <div className="cards">
          <FaMagnifyingGlassPlus className="img"/>
          <div className="caed-body">
            <p  className="card-text">Evaap-Verify Candidates</p>
            <p className="text">Streamline your employment eligibility verification process with our new service</p>
          </div>
        </div>
      </div>

      <div className="maincards">
        <div className="cards">
          <IoManSharp className="img"/>
          <div className="caed-body">
            <p  className="card-text">Evaap-Verify Employee</p>
            <p className="text">Send us your documentation via myUploads and resolve your E-Verify case</p>
          </div>
        </div>
      </div>
    </div>

    <div className="explore-section">
      <section className="explore-articles">
        <h2>Explore collaborative articles</h2>
        <div className="tags">
          {[
           "Engineering",
            "IT Services",
            "HR Management"
          ].map((tag, i) => (
              <button key={i} className="tag-btn">{tag}</button>
          ))}
          <button className="tag-btn show-all">Show all</button>
        </div>
      </section>

      <section className="explore-jobs">
        <h2>Find the right job or internship for you</h2>
        <div className="tags">
          {[
            "Engineering", "Business Development", "Finance", "Administrative Assistant",
            "Retail Associate", "Customer Service", "Operations",
            "Information Technology", "Marketing", "Human Resources"
          ].map((tag, i) => (
              <button key={i} className="tag-btn">{tag}</button>
          ))}
          <button className="tag-btn show-more">
            Show more <span className="arrow">▼</span>
          </button>
        </div>
      </section>
    </div>



    <div className="evvap-container">
      <div className="evvap-text">
        <h2>Who is <span className="highlight">EVVAP</span> for?</h2>
        <p>Anyone looking to Get verified with the highest standards.</p>
        <div className="evvap-buttons">
          <button>Verify yourself</button>
          <button>Find a new job</button>
          <button>Find the verified Candidates </button>
        </div>
      </div>
      <div className="evvap-image">
        <img src={bannerImg} alt="People collaborating" />
      </div>
    </div>

        <div className="home_verification_path_div2">
          <Link
              to="/registrationPage"
              className="home_verification_path_div2_link"
          >
            Need an immediate verification ?
          </Link>
        </div>
    <div>
      <h1 className="heading-text">
        Enterprise-grade security. Verified degrees. Trusted, authentic credentials.
      </h1>
      <button className="start-btn">Get started</button>
      <div className="background-section">
        <div className="top-opacity-overlay"></div>

      </div>
    </div>
  </div>
      </>
  );
};

export default Home;
