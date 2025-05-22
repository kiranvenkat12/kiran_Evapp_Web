import  { useState } from 'react';
import './contact_usPage.css';
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { IoManSharp } from "react-icons/io5";
import { FaUsersLine } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";
import { FaComment } from "react-icons/fa";
import { IoIosTime } from "react-icons/io";




const aboutUsPage= () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    rating: 0
  });
  const [hoveredRating, setHoveredRating] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      alert('Thank you for your feedback! We will get back to you soon.');
      setFormData({ name: '', email: '', subject: '', message: '', rating: 0 });
      setIsSubmitting(false);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <MdEmail />,
      title: "Email Us",
      info: "support@yourapp.com",
      subInfo: "hello@yourapp.com",
      className: "email-card"
    },
    {
      icon: <IoCall />,
      title: "Call Us",
      info: "+1 (555) 123-4567",
      subInfo: "+1 (555) 987-6543",
      className: "phone-card"
    },
    {
      icon: <IoManSharp />,
      title: "Visit Us",
      info: "123 Business Street",
      subInfo: "New York, NY 10001",
      className: "address-card"
    }
  ];

  const socialLinks = [
    {
      icon: <FaInstagram />,
      name: "Instagram",
      handle: "@yourapp",
      followers: "50K+",
      className: "instagram"
    },
    {
      icon:< FaFacebookF/>,
      name: "Facebook",
      handle: "/yourapp",
      followers: "25K+",
      className: "facebook"
    },
    {
      icon: <FaLinkedinIn/>,
      name: "LinkedIn",
      handle: "/company/yourapp",
      followers: "15K+",
      className: "linkedin"
    },
    {
      icon: <FaTwitter />,
      name: "Twitter",
      handle: "@yourapp",
      followers: "30K+",
      className: "twitter"
    }
  ];

  const stats = [
    { icon: <FaUsersLine />, number: "100K+", label: "Happy Users" },
    { icon: <FaStar />, number: "4.9/5", label: "App Rating" },
    { icon: <FaComment />, number: "24/7", label: "Support" },
    { icon: <IoIosTime />, number: "<2hrs", label: "Response Time" }
  ];

  return (
      <div className="contact-container">
        {/* Hero Section */}
        <div className="hero-section">
          <div className="hero-overlay"></div>
          <div className="hero-gradient"></div>

          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">
                Get In <span className="gradient-text">Touch</span>
              </h1>
              <p className="hero-subtitle">
                We'd love to hear from you. Send us a message and we'll respond as soon as possible.
              </p>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="decorative-elements">
            <div className="floating-element purple"></div>
            <div className="floating-element blue"></div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="stats-section">
          <div className="container">
            <div className="stats-grid">
              {stats.map((stat, index) => (
                  <div key={index} className="stat-card">
                    <div className="stat-icon">
                      <span>{stat.icon}</span>
                    </div>
                    <div className="stat-number">{stat.number}</div>
                    <div className="stat-label">{stat.label}</div>
                  </div>
              ))}
            </div>
          </div>
        </div>

        <div className="main-content">
          <div className="content-grid">

            {/* Contact Information */}
            <div className="contact-info">
              <div className="section-header">
                <h2>Contact Information</h2>
                <p>Choose your preferred way to reach out to us. We're here to help and answer any questions you might have.</p>
              </div>

              {/* Contact Cards */}
              <div className="contact-cards">
                {contactInfo.map((contact, index) => (
                    <div key={index} className={`contact-card ${contact.className}`}>
                      <div className="contact-icon">
                        <span>{contact.icon}</span>
                      </div>
                      <div className="contact-details">
                        <h3>{contact.title}</h3>
                        <p className="primary-info">{contact.info}</p>
                        <p className="secondary-info">{contact.subInfo}</p>
                      </div>
                    </div>
                ))}
              </div>

              {/* Social Media Section */}
              <div className="social-section">
                <h3>Follow Us & Stay Connected</h3>
                <div className="social-grid">
                  {socialLinks.map((social, index) => (
                      <div key={index} className={`social-card ${social.className}`}>
                        <div className="social-icon">
                          <span>{social.icon}</span>
                        </div>
                        <div className="social-info">
                          <div className="social-name">{social.name}</div>
                          <div className="social-handle">{social.handle}</div>
                          <div className="social-followers">{social.followers} followers</div>
                        </div>
                      </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Feedback Form */}
            <div className="feedback-form">
              <div className="form-header">
                <h2>Send Us Your Feedback</h2>
                <p>We value your opinion and would love to hear about your experience with our app.</p>
              </div>

              <form onSubmit={handleSubmit} className="form">
                <div className="form-row">
                  <div className="form-group">
                    <label>Your Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="Enter your full name"
                    />
                  </div>
                  <div className="form-group">
                    <label>Email Address</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>Subject</label>
                  <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      placeholder="What is this about?"
                  />
                </div>

                {/* Rating Section */}
                <div className="form-group">
                  <label>Rate Your Experience</label>
                  <div className="rating-container">
                    <div className="stars">
                      {[1, 2, 3, 4, 5].map((star) => (
                          <button
                              key={star}
                              type="button"
                              onClick={() => setFormData({ ...formData, rating: star })}
                              onMouseEnter={() => setHoveredRating(star)}
                              onMouseLeave={() => setHoveredRating(0)}
                              className={`star ${star <= (hoveredRating || formData.rating) ? 'active' : ''}`}
                          >
                            ⭐
                          </button>
                      ))}
                    </div>
                    <span className="rating-text">
                    {formData.rating > 0 && `${formData.rating}/5 stars`}
                  </span>
                  </div>
                </div>

                <div className="form-group">
                  <label>Your Message</label>
                  <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      placeholder="Tell us about your experience, suggestions, or any issues you've encountered..."
                  />
                </div>

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`submit-btn ${isSubmitting ? 'submitting' : ''}`}
                >
                  {isSubmitting ? (
                      <>
                        <div className="spinner"></div>
                        <span>Sending...</span>
                      </>
                  ) : (
                      <>
                        <span>Submit</span>
                      </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="footer-cta">
          <div className="cta-content">
            <h2>Ready to Get Started?</h2>
            <p>Join thousands of satisfied users and experience our app today.</p>
            <div className="cta-buttons">
              <button className="primary-btn">Download App</button>
              <button className="secondary-btn">Learn More</button>
            </div>
          </div>
        </div>
      </div>
  );
};

export default aboutUsPage;