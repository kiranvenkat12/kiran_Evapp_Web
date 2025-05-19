import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import bannerImg from "./assets/Components/header_images/verification_imges/employee verification.jpg";
import serviceImg1 from "./assets/Components/header_images/verification_imges/laptop image.avif";
import serviceImg2 from "./assets/Components/header_images/verification_imges/time picture image.avif";
import serviceImg3 from "./assets/Components/header_images/verification_imges/fraud image.webp";
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






        <div className="home_verification_path_div3">
          <li>
            <img src={serviceImg1} alt="home_service_img"/>
            <p>
              <b>Open 24/7</b> <br/>
              Our online Verification Services are available to you 24/7.That’s
              why we offer 24/7 verification services for both candidates and
              employers. Whether you need to verify a job applicant’s credentials,
              employment history, or qualifications, or confirm details about
              potential employees, our team is always available to provide
              reliable, real-time verification. We ensure that all requests are
              handled promptly and securely, giving you peace of mind at any hour
              of the day or night
            </p>
          </li>
          <li>
            <img src={serviceImg2} alt="home_service_img"/>
            <p>
              <b> Get instant results</b> <br/>
              we know that time is valuable. That’s why we partner with The
              Clearinghouse to provide instant, up-to-date verifications for both
              candidates and employers. Our system ensures that you receive
              accurate, real-time results, helping your business save time and
              make faster, more informed decisions. Whether you need to verify
              employment, qualifications, or credentials, you can count on
              immediate access to the most current data, available 24/7
            </p>
          </li>
          <li>
            <img src={serviceImg3} alt="home_service_img"/>
            <p>
              <b>Reduce credentials fraud </b> <br/>
              We help you safeguard your business against credentials fraud by
              ensuring diploma, enrollment, and degree authenticity. We understand
              the importance of confidentiality and handle all candidate
              verification requests with the highest level of security. Whether
              you re looking to confirm work experience, educational credentials,
              or professional licenses, our service provides a trusted solution to
              help you make the best hiring decisions
            </p>
          </li>
        </div>
      </div>
        </>
  );
};

export default Home;
