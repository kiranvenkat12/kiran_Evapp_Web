import React, { useState } from "react";
import "./CandidateDashBoard.css";
import {
    FaUserCircle,
    FaCheckCircle,
    FaFileAlt,
    FaBell,
    FaSignOutAlt,
} from "react-icons/fa";

const CandidateDashboard = () => {
    const [activeSection, setActiveSection] = useState("profile");
    const [email, setEmail] = useState("john.doe@example.com");

    const renderSection = () => {
        switch (activeSection) {
            case "profile":
                return (
                    <section className="profile-section">
                        <h2>Profile Overview</h2>

                        <div className="profile-card">
                            <img src="https://via.placeholder.com/100" alt="Profile" className="profile-image" />

                            <div className="profile-details">
                                <h3>John Doe</h3>
                                <p><strong>EVVAP ID:</strong> EVVAP-CND-20251001</p>

                                <div className="editable-field">
                                    <label htmlFor="email">Email:</label>
                                    <div className="email-edit">
                                        <input
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                        <button onClick={() => alert(`Email updated to: ${email}`)}>Save</button>
                                    </div>
                                </div>

                                <p><strong>Phone:</strong> +91 9876543210</p>
                            </div>
                        </div>

                        <div className="upload-progress-box">
                            <h4>Document Upload Progress</h4>
                            <p>3 of 5 documents uploaded</p>
                            <div className="progress-bar">
                                <div className="progress" style={{ width: "60%" }}></div>
                            </div>
                            <small>Upload remaining documents to proceed with verification.</small>
                        </div>
                    </section>

                );
            case "status":
                return (
                    <section className="status-section">
                        <h2>Verification Status</h2>
                        <div className="status-tracker">
                            <div className="step complete">Registered</div>
                            <div className="step complete">Documents Submitted</div>
                            <div className="step active">Under Review</div>
                            <div className="step">Verified</div>
                        </div>
                    </section>
                );
            case "documents":
                return (
                    <section className="documents-section">
                        <h2>Uploaded Documents</h2>
                        <div className="documents-list">
                            <div className="doc-card">
                                <FaFileAlt size={40} />
                                <p>Aadhar Card</p>
                                <span className="status approved">Approved</span>
                            </div>
                            <div className="doc-card">
                                <FaFileAlt size={40} />
                                <p>Marksheet</p>
                                <span className="status pending">Pending</span>
                            </div>
                        </div>
                    </section>
                );
            case "notifications":
                return (
                    <section className="notifications-section">
                        <h2>Notifications</h2>
                        <ul className="notifications-list">
                            <li>Your Aadhar Card has been approved.</li>
                            <li>Marksheet verification is pending review.</li>
                            <li>New message from EVVAP Support.</li>
                        </ul>
                    </section>
                );
            default:
                return null;
        }
    };

    return (
        <div className="dashboard-container">
            {/* Sidebar */}
            <aside className="sidebar">
                <h2 className="logo">EVVAP</h2>
                <nav className="nav-links">
                    <button onClick={() => setActiveSection("profile")}>
                        <FaUserCircle /> Profile
                    </button>
                    <button onClick={() => setActiveSection("documents")}>
                        <FaFileAlt /> Documents
                    </button>
                    <button onClick={() => setActiveSection("status")}>
                        <FaCheckCircle /> Verification Status
                    </button>
                    <button onClick={() => setActiveSection("notifications")}>
                        <FaBell /> Notifications
                    </button>
                    <button>
                        <FaSignOutAlt /> Logout
                    </button>
                </nav>
            </aside>

            {/* Main Content */}
            <main className="main-content">
                <header className="topbar">
                    <h1>Candidate Dashboard</h1>
                    <div className="user-info">
                        <FaUserCircle size={28} />
                        <span>John Doe</span>
                    </div>
                </header>

                {renderSection()}
            </main>
        </div>
    );
};

export default CandidateDashboard;
