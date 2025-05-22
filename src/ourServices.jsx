import React from "react";
import "./ourServices.css";

export default function OurServices() {
  return (
      <div className="our-services-container">
        <header className="header-section">
          <h1 className="main-title">Our Services</h1>
          <p className="sub-title">
            Empowering organizations with secure and verified credentials
          </p>
        </header>

        <section className="services-grid">
          <div className="service-card">
            <img src="/images/education-verification.png" alt="Educational Verification" className="service-image" />
            <h2>Educational Verification</h2>
            <p>
              We verify academic credentials directly from institutions to ensure the legitimacy of educational qualifications. This includes primary, secondary, and tertiary education checks with real-time status updates and institution authenticity scoring.
            </p>
          </div>

          <div className="service-card">
            <img src="/images/employee-verification.png" alt="Employee Verification" className="service-image" />
            <h2>Employee Verification</h2>
            <p>
              Authenticate current and past employment history to ensure a candidate's professional track record is accurate. We reach out to employers, confirm roles, duration, performance notes, and provide detailed documentation with timestamps.
            </p>
          </div>

          <div className="service-card">
            <img src="/images/candidate-verification.png" alt="Candidate Verification" className="service-image" />
            <h2>Candidate Verification</h2>
            <p>
              Comprehensive background checks including identity validation, criminal records, financial history, and reference verification to ensure candidate integrity and trustworthiness across industries.
            </p>
          </div>

          <div className="service-card">
            <img src="/images/hr-assessment.png" alt="HR Capability Assessment" className="service-image" />
            <h2>HR Capability Assessment</h2>
            <p>
              Equip HR teams with tools to evaluate candidate suitability based on job role, skill sets, verified qualifications, and soft skills assessments. Our platform includes scoring engines and AI-powered recommendation tools.
            </p>
          </div>

          <div className="service-card">
            <img src="/images/monitoring.png" alt="Ongoing Monitoring" className="service-image" />
            <h2>Ongoing Monitoring</h2>
            <p>
              Enable continuous monitoring of employee or contractor status for regulatory compliance, certification expiration, or conduct issues post-hiring, with proactive alert systems and audit trails.
            </p>
          </div>

          <div className="service-card">
            <img src="/images/compliance.png" alt="Compliance and Documentation" className="service-image" />
            <h2>Compliance & Documentation</h2>
            <p>
              All verifications are delivered with downloadable compliance-ready reports tailored to ISO, SOC2, and GDPR standards. Our documentation supports legal audits and corporate reporting.
            </p>
          </div>
        </section>

        <section className="app-overview-section">
          <h2 className="section-title">Why Download Our App?</h2>
          <p className="section-intro">
            Our mobile and web apps are built to streamline and simplify the verification process for all stakeholders — whether you're an employer, HR manager, or job candidate.
          </p>

          <ul className="app-features">
            <li><strong>Instant Verification Requests:</strong> Employers and HRs can initiate verification requests in just a few taps.</li>
            <li><strong>Real-Time Status Tracking:</strong> Know the current status of each verification step instantly through the dashboard.</li>
            <li><strong>Secure Document Upload:</strong> Candidates can upload certifications and identity documents with full encryption.</li>
            <li><strong>Intelligent Recommendations:</strong> AI-driven insights help HR choose the most suitable candidate based on data.</li>
            <li><strong>Mobile Friendly:</strong> Download the app and handle all verification workflows on-the-go from Android and iOS devices.</li>
            <li><strong>Compliance Automation:</strong> Generate downloadable, audit-friendly reports directly from the app.</li>
          </ul>

          <div className="cta-banner">
            <h3>Ready to Experience Seamless Verifications?</h3>
            <p>Download our app today and transform how you verify, evaluate, and hire with confidence.</p>
            <button className="download-button">Download App</button>
          </div>
        </section>
      </div>
  );
}
