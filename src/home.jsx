import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import bannerImg from "./assets/Components/header_images/verification_imges/employee verification.jpg";
import Mainimage from "./assets/Components/header_images/mainimg.png";
import Mainpage from "./assets/Components/header_images/mainpage.png";
import { FaHandshake } from "react-icons/fa6";
import { FaMagnifyingGlassPlus } from "react-icons/fa6";
import { IoManSharp } from "react-icons/io5";
import  TestimonialsSlider from "./assets/Components/slider";

import "./home.css";

const featuresLeft = [
  {
    icon: '🌐',
    title: 'Unified Verification Across India',
    description: 'One platform to authenticate students and employees nationwide with a single click.',
  },
  {
    icon: '📣',
    title: 'EVVAAP Drives Credibility',
    description: 'Verified profiles enhance visibility and trust, helping users build strong digital reputations.',
  },
  {
    icon: '💰',
    title: 'Cost-Efficient & Scalable',
    description: 'Eliminate manual verification costs and reduce fraud with our smart, scalable system.',
  },
];

const featuresRight = [
  {
    icon: '🎁',
    title: 'Incentivized Profiles',
    description: 'Reward users and institutions for maintaining verified and updated credentials.',
  },
  {
    icon: '🛠️',
    title: 'Future-Proof Support & Integrations',
    description: 'Seamless API and real-time chat support make EVVAAP easy to adopt across organizations.',
  },
  {
    icon: '📊',
    title: 'Smart Hiring & Re-Matching',
    description: 'Employers can easily re-engage verified users for future roles and recommendations.',
  },
];
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

    <div className="main-wrapper">
      {/* Impact Section */}
      <section className="impact-section">
        <div className="impact-box">
          <h3>
            Impact of Verify <span>On Evvap</span>
          </h3>
          <div className="impact-metrics">
            <div>Verify empowers EVVAAP to authenticate students and employees with unmatched accuracy, boosting trust and operational efficiency</div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="evvaap-features">
        <h2>
          What Makes <span className="highlight">EVVAAP</span> the Ultimate Verification Solution
        </h2>
        <div className="features-grid">
          <div className="features-list">
            {featuresLeft.map((feature, index) => (
                <div className="feature-item" key={index}>
                  <span className="icon">{feature.icon}</span>
                  <div>
                    <h4>{feature.title}</h4>
                    <p>{feature.description}</p>
                  </div>
                </div>
            ))}
          </div>

          <div className="phone-preview">
            <img src={Mainpage} alt="EVVAAP App Preview" />
          </div>

          <div className="features-list">
            {featuresRight.map((feature, index) => (
                <div className="feature-item" key={index}>
                  <span className="icon">{feature.icon}</span>
                  <div>
                    <h4>{feature.title}</h4>
                    <p>{feature.description}</p>
                  </div>
                </div>
            ))}
          </div>
        </div>
      </section>

      {/*Sliding section */}

   <TestimonialsSlider  />




    </div>


  </div>
      </>
  );
};

export default Home;
