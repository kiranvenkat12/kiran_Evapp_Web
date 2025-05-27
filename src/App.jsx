import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Header from "./assets/Components/header";
import Fotter from "./assets/Components/fotter";
import Home from "./home";
import SignupForm from "./registrationPage";
import ContactUs from "./contact_usPage";
import FounderPage from "./founderPage";
// import LoginForm from "./loginForm";
import CandidatePage from "./assets/Components/candidatePage";
import OurServices from "./ourServices";
import Admin from "./admin"
import CandidateDashboard from "./CandidateDashboard";


function App() {
  return (
    <Router>
      <Header />
      <Routes>
      <Route path="/" element={<Navigate to="/home"/>} />
        <Route path="/ourServices" element={<OurServices/>} />
        <Route path="/home" element={<Home />} />
        <Route path="/registrationPage" element={<SignupForm />} />
        <Route path="/contact_usPage" element={<ContactUs />} />
        <Route path="/founderPage" element={<FounderPage />} />
         <Route path="/CandidateDashboard" element={< CandidateDashboard/>} />
        <Route path="/candidatePage" element={<CandidatePage />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
      <Fotter />
    </Router>
  );
}

export default App;
