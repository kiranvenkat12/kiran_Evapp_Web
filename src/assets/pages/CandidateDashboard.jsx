import { useState } from "react";
import "./CandidateDashBoard.css";

const menuItems = [
    "Profile",
    "Documents",
    "Verification Status",
    "Settings",
    "Logout",
];


export default function CandidateDashboard() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [activeTab, setActiveTab] = useState("Profile");
    const [activeSetting, setActiveSetting] = useState(null);

    const toggleSetting = (section) => {
        setActiveSetting((prev) => (prev === section ? null : section));
    };

    // const renderContent = () => {
    //     return <div className="content-box">{activeTab} Page Content</div>;
    // };
    //profiel page content
    const renderContent = () => {
        if (activeTab === "Profile") {
            return (
                <div className="profile-content content-box">
                    <div className="profile-header">
                        <img src="https://via.placeholder.com/100" alt="Profile" className="profile-image" />
                        <div>
                            <h2>John Doe</h2>
                            <p><strong>EVVAP ID:</strong> EVVAP-CND-20251001</p>
                            <p><strong>Email:</strong> johndoe@example.com</p>
                            <p><strong>Phone:</strong> +91 9876543210</p>
                            <p><strong>Date of Birth:</strong> Jan 1, 2000</p>
                            <p><strong>Nationality:</strong> Indian</p>
                        </div>
                    </div>

                    <div className="profile-extra">
                        <h3>Profile Completion</h3>
                        <div className="progress-bar-container">
                            <div className="progress-bar" style={{ width: "75%" }}></div>
                        </div>
                        <p>75% completed</p>
                    </div>
                </div>
            );
        }

        // document page
        if (activeTab === "Documents") {
            const submittedDocs = [
                { name: "Aadhaar Card", status: "Verified" },
                { name: "10th Marksheet", status: "Pending Verification" },
                { name: "12th Marksheet", status: "Verified" },
            ];

            const remainingDocs = [
                "Graduation Certificate",
                "Post-Graduation Certificate",
                "Character Certificate",
            ];

            return (
                <div className="documents-content content-box">
                    <div className="section">
                        <h2>📄 Submitted Documents</h2>
                        <div className="doc-card-grid">
                            {submittedDocs.map((doc, index) => (
                                <div key={index} className="doc-card">
                                    <span className="doc-name">{doc.name}</span>
                                    <span className={`doc-status ${doc.status === "Verified" ? "verified" : "pending"}`}>
                                {doc.status}
                            </span>

                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="section">
                        <h2>📥 Remaining Documents</h2>
                        <div className="doc-card-grid">
                            {remainingDocs.map((doc, index) => (
                                <div key={index} className="doc-card remaining">
                                    <span className="doc-name">{doc}</span>
                                    <button className="upload-btn">Upload</button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            );
        }


        // Verification Status code
        if (activeTab === "Verification Status") {
            const documentStatus = [
                { name: "Aadhaar Card", status: "Verified", date: "2025-05-20", remarks: "Valid document" },
                { name: "10th Marksheet", status: "Pending", date: "", remarks: "" },
                { name: "12th Marksheet", status: "Verified", date: "2025-05-22", remarks: "Verified by Board" },
                { name: "Graduation Certificate", status: "Pending", date: "", remarks: "" },
            ];

            const total = documentStatus.length;
            const verifiedCount = documentStatus.filter(doc => doc.status === "Verified").length;
            const pendingCount = total - verifiedCount;
            const progressPercent = Math.round((verifiedCount / total) * 100);

            return (
                <div className="verification-status content-box">
                    <h2>📊 Verification Overview</h2>

                    <div className="status-cards">
                        <div className="status-card verified">
                            <h3>{verifiedCount}</h3>
                            <p>Verified</p>
                        </div>
                        <div className="status-card pending">
                            <h3>{pendingCount}</h3>
                            <p>Pending</p>
                        </div>
                        <div className="status-card total">
                            <h3>{total}</h3>
                            <p>Total Submitted</p>
                        </div>
                    </div>

                    <div className="progress-section">
                        <p>Overall Progress</p>
                        <div className="progress-bar-container">
                            <div className="progress-bar" style={{ width: `${progressPercent}%` }}></div>
                        </div>
                        <small>{progressPercent}% verified</small>
                    </div>

                    <div className="document-status-table">
                        <h3>Document Status Details</h3>
                        <table>
                            <thead>
                            <tr>
                                <th>Document</th>
                                <th>Status</th>
                                <th>Date</th>
                                <th>Remarks</th>
                            </tr>
                            </thead>
                            <tbody>
                            {documentStatus.map((doc, idx) => (
                                <tr key={idx}>
                                    <td>{doc.name}</td>
                                    <td className={doc.status.toLowerCase()}>{doc.status}</td>
                                    <td>{doc.date || "--"}</td>
                                    <td>{doc.remarks || "No remarks"}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            );
        }

        // setting code


        if (activeTab === "Settings") {
            return (
                <div className="settings-page content-box">
                    <h2>⚙️ Account Settings</h2>

                    {/* Personal Info */}
                    <button className="settings-toggle" onClick={() => toggleSetting("personal")}>
                        Edit Personal Info
                    </button>
                    {activeSetting === "personal" && (
                        <div className="settings-section">
                            <label>Name:
                                <input type="text" placeholder="John Doe" />
                            </label>
                            <label>Email:
                                <input type="email" placeholder="johndoe@example.com" />
                            </label>
                            <label>Phone:
                                <input type="tel" placeholder="+91 9876543210" />
                            </label>
                            <label>Profile Picture:
                                <input type="file" />
                            </label>
                            <button className="save-button">Save</button>
                        </div>
                    )}

                    {/* Security */}
                    <button className="settings-toggle" onClick={() => toggleSetting("security")}>
                        Change Password
                    </button>
                    {activeSetting === "security" && (
                        <div className="settings-section">
                            <label>New Password:
                                <input type="password" />
                            </label>
                            <label>Confirm Password:
                                <input type="password" />
                            </label>
                            <button className="save-button">Update Password</button>
                        </div>
                    )}

                    {/* Notifications */}
                    <button className="settings-toggle" onClick={() => toggleSetting("notifications")}>
                        Notification Preferences
                    </button>
                    {activeSetting === "notifications" && (
                        <div className="settings-section">
                            <label><input type="checkbox" defaultChecked /> Email verification updates</label>
                            <label><input type="checkbox" /> SMS alerts</label>
                        </div>
                    )}

                    {/* Account */}
                    <button className="settings-toggle" onClick={() => toggleSetting("account")}>
                        Account Management
                    </button>
                    {activeSetting === "account" && (
                        <div className="settings-section danger-zone">
                            <button className="danger-button">Download My Data</button>
                            <button className="danger-button">Delete My Account</button>
                        </div>
                    )}
                </div>
            );
        }




        return <div className="content-box">{activeTab} Page Content</div>;
    };


    return (
        <div className="dashboard-container">


            <aside className={`sidebar ${sidebarOpen ? "open" : ""}`}>

                <h2 className="sidebar-title">EVVAP</h2>
               

                <ul>
                    {menuItems.map((item) => (
                        <li
                            key={item}
                            className={activeTab === item ? "active" : ""}
                            onClick={() => setActiveTab(item)}
                        >
                            {item}
                        </li>
                    ))}
                </ul>
            </aside>

            <main className="dashboard-content">
                <h1>{activeTab}</h1>
                {renderContent()}
            </main>
        </div>
    );
}
