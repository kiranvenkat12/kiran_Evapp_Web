

import React, { useState, useEffect } from 'react';
import './CandidateDashBoard.css'; // Ensure this path is correct
import {
    Home,
    User,
    FileText,
    UploadCloud,
    CheckCircle,
    Calendar,
    MessageSquare,
    Settings,
    HelpCircle,
    LogOut,
    Award,
    Briefcase,
    Mail,
    Phone,
    MapPin,
    Heart,
    Lock,
    Globe,
    Sun,
    Moon,
    File,
    XCircle,
    Download,
    ClipboardCheck,
    Edit, // Import Edit icon
    ShieldCheck, // For 2FA
    Trash2, // For delete account
    Eye, // For verification status
    Menu, // For sidebar toggle
    X // For sidebar close
} from 'lucide-react';

export const CandidateDashboard = () => {
    const [activeMenu, setActiveMenu] = useState('dashboard');
    const [profileCompletion, setProfileCompletion] = useState(60); // Sample progress
    const [isDarkMode, setIsDarkMode] = useState(
        localStorage.getItem('theme') === 'dark'
    );
    const [isEditingProfile, setIsEditingProfile] = useState(false); // State for edit mode in Profile
    const [sidebarOpen, setSidebarOpen] = useState(false); // State for mobile sidebar

    useEffect(() => {
        // Apply dark mode class to HTML element
        if (isDarkMode) {
            document.documentElement.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light');
        }
    }, [isDarkMode]);

    const toggleDarkMode = () => {
        setIsDarkMode(prevMode => !prevMode);
    };

    const toggleSidebar = () => {
        setSidebarOpen(prev => !prev);
    };

    // Sample data for forms and documents
    const [personalInfo, setPersonalInfo] = useState({
        name: 'Jane Doe',
        email: 'jane.doe@example.com',
        phone: '+1-555-123-4567', // User can be asked to fill this if empty
        address: '123 Candidate St, Anytown, CA',
    });

    const [educationalBackground, setEducationalBackground] = useState([
        { id: 1, degree: 'M.Sc. Computer Science', institution: 'State University', year: '2022' },
        { id: 2, degree: 'B.Sc. Software Engineering', institution: 'Tech Institute', year: '2020' },
    ]);

    const [workExperience, setWorkExperience] = useState([
        { id: 1, title: 'Software Engineer', company: 'InnovateX', years: '2022 - Present', description: 'Developed and maintained web applications.' },
    ]);

    const [certifications, setCertifications] = useState([
        { id: 1, name: 'Certified React Developer', issuer: 'DevCert Inc.', year: '2023' },
    ]);

    const [emergencyContacts, setEmergencyContacts] = useState([
        { id: 1, name: 'John Doe', relationship: 'Father', phone: '+1-555-987-6543' },
    ]);


    const [documents, setDocuments] = useState([
        { id: 1, name: 'ID_Proof.pdf', status: 'Approved', type: 'ID Proof', uploadedDate: '2025-05-20' },
        { id: 2, name: 'Resume.pdf', status: 'Pending', type: 'Resume', uploadedDate: '2025-05-21' },
        { id: 3, name: 'Experience_Letter_InnovateX.pdf', status: 'Rejected', feedback: 'Illegible scan', type: 'Experience Letter', uploadedDate: '2025-05-21' },
    ]);

    const [verificationSteps] = useState([
        { id: 1, label: 'Application Submitted', status: 'Approved', date: '2025-05-18' },
        { id: 2, label: 'Documents Uploaded', status: 'Approved', date: '2025-05-21' },
        { id: 3, label: 'ID Verified', status: 'Approved', date: '2025-05-22' },
        { id: 4, label: 'Background Verification', status: 'In Progress', date: '2025-05-23' },
        { id: 5, label: 'Final Approval', status: 'Pending', date: null },
    ]);

    const [notifications] = useState([
        { id: 1, message: 'Your resume has been received.', read: false, type: 'info' },
        { id: 2, message: 'Experience letter rejected. Please re-upload.', read: false, type: 'alert' },
        { id: 3, message: 'Background check initiated.', read: true, type: 'info' },
    ]);

    const menuItems = [
        { id: 'dashboard', label: 'Dashboard', icon: Home },
        { id: 'profile', label: 'Profile', icon: User }, // New Profile menu item
        { id: 'submit-documents', label: 'Submit Documents', icon: UploadCloud },
        { id: 'verification-status', label: 'Verification Status', icon: CheckCircle },
        { id: 'interviews', label: 'Interviews', icon: Calendar },
        { id: 'messages', label: 'Messages', icon: MessageSquare },
        { id: 'settings', label: 'Settings', icon: Settings },
        { id: 'help', label: 'Help / Support', icon: HelpCircle },
        { id: 'logout', label: 'Logout', icon: LogOut },
    ];

    const renderDashboard = () => (
        <div className="dashboard-content">
            <div className="dashboard-header-main"> {/* Renamed for clarity */}
                <h1 className="dashboard-title">Hi, {personalInfo.name}! 👋</h1>
                <p className="dashboard-subtitle">Application ID: CAND-2025-001</p>
            </div>

            <div className="stats-grid">
                <div className="stat-card">
                    <div className="stat-icon-wrapper stat-icon-blue">
                        <User className="stat-icon" />
                    </div>
                    <div className="stat-content">
                        <h3 className="stat-number">{profileCompletion}%</h3>
                        <p className="stat-label">Profile Completion</p>
                        <div className="progress-bar-container">
                            <div className="progress-bar" style={{ width: `${profileCompletion}%` }}></div>
                        </div>
                    </div>
                </div>
                <div className="stat-card">
                    <div className="stat-icon-wrapper stat-icon-green">
                        <CheckCircle className="stat-icon" />
                    </div>
                    <div className="stat-content">
                        <h3 className="stat-number">In Progress</h3>
                        <p className="stat-label">Current Status</p>
                        <p className="stat-sublabel">Background Verification</p>
                    </div>
                </div>
                <div className="stat-card">
                    <div className="stat-icon-wrapper stat-icon-yellow">
                        <Calendar className="stat-icon" />
                    </div>
                    <div className="stat-content">
                        <h3 className="stat-number">Upcoming</h3>
                        <p className="stat-label">Next Interview</p>
                        <p className="stat-sublabel">Product Team, 2 PM (Tomorrow)</p>
                    </div>
                </div>
                <div className="stat-card">
                    <div className="stat-icon-wrapper stat-icon-purple">
                        <MessageSquare className="stat-icon" />
                    </div>
                    <div className="stat-content">
                        <h3 className="stat-number">{notifications.filter(n => !n.read).length}</h3>
                        <p className="stat-label">Unread Messages</p>
                    </div>
                </div>
            </div>

            <div className="section-block">
                <h2 className="section-title">Recent Notifications</h2>
                <div className="notification-list">
                    {notifications.map(notification => (
                        <div key={notification.id} className={`notification-item ${notification.type} ${notification.read ? 'read' : 'unread'}`}>
                            <div className="notification-icon">
                                {notification.type === 'alert' ? <XCircle size={20} /> : <ClipboardCheck size={20} />}
                            </div>
                            <p className="notification-message">{notification.message}</p>
                            {!notification.read && <span className="notification-dot"></span>}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );

    const renderProfile = () => (
        <div className="profile-section">
            <div className="profile-header-content"> {/* Renamed for clarity */}
                <h1 className="profile-title">Your Profile</h1>
                <p className="profile-subtitle">View and update your personal and professional details.</p>
                <button
                    className="btn btn-secondary btn-icon-right profile-edit-toggle-btn"
                    onClick={() => setIsEditingProfile(!isEditingProfile)}
                >
                    <Edit size={16} />
                    {isEditingProfile ? 'Done Editing' : 'Edit Profile'}
                </button>
            </div>

            <form className="candidate-form">
                <h2 className="form-sub-title">Personal Information</h2>
                <div className="form-grid">
                    <div className="form-group">
                        <label className="form-label">Full Name</label>
                        <input type="text" className="form-input" value={personalInfo.name} disabled readOnly />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Email</label>
                        <input type="email" className="form-input" value={personalInfo.email} disabled readOnly />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Phone Number</label>
                        <input type="tel" className="form-input" value={personalInfo.phone} disabled readOnly />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Address</label>
                        <input
                            type="text"
                            className="form-input"
                            value={personalInfo.address}
                            onChange={(e) => setPersonalInfo({ ...personalInfo, address: e.target.value })}
                            disabled={!isEditingProfile}
                        />
                    </div>
                </div>

                <h2 className="form-sub-title">Educational Background</h2>
                {educationalBackground.map((edu, index) => (
                    <div key={edu.id} className="form-grid education-item">
                        <div className="form-group">
                            <label className="form-label">Degree</label>
                            <input type="text" className="form-input" value={edu.degree} disabled readOnly />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Institution</label>
                            <input type="text" className="form-input" value={edu.institution} disabled readOnly />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Year of Graduation</label>
                            <input type="text" className="form-input" value={edu.year} disabled readOnly />
                        </div>
                    </div>
                ))}
                {isEditingProfile && (
                    <button type="button" className="btn btn-secondary btn-sm add-more-btn">Add Education</button>
                )}


                <h2 className="form-sub-title">Work Experience</h2>
                {workExperience.map((exp, index) => (
                    <div key={exp.id} className="form-grid experience-item">
                        <div className="form-group">
                            <label className="form-label">Job Title</label>
                            <input
                                type="text"
                                className="form-input"
                                value={exp.title}
                                onChange={(e) => {
                                    const newExp = [...workExperience];
                                    newExp[index].title = e.target.value;
                                    setWorkExperience(newExp);
                                }}
                                disabled={!isEditingProfile}
                            />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Company</label>
                            <input
                                type="text"
                                className="form-input"
                                value={exp.company}
                                onChange={(e) => {
                                    const newExp = [...workExperience];
                                    newExp[index].company = e.target.value;
                                    setWorkExperience(newExp);
                                }}
                                disabled={!isEditingProfile}
                            />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Years</label>
                            <input
                                type="text"
                                className="form-input"
                                value={exp.years}
                                onChange={(e) => {
                                    const newExp = [...workExperience];
                                    newExp[index].years = e.target.value;
                                    setWorkExperience(newExp);
                                }}
                                disabled={!isEditingProfile}
                            />
                        </div>
                        <div className="form-group full-width">
                            <label className="form-label">Description</label>
                            <textarea
                                className="form-input"
                                value={exp.description}
                                onChange={(e) => {
                                    const newExp = [...workExperience];
                                    newExp[index].description = e.target.value;
                                    setWorkExperience(newExp);
                                }}
                                disabled={!isEditingProfile}
                            ></textarea>
                        </div>
                    </div>
                ))}
                {isEditingProfile && (
                    <button type="button" className="btn btn-secondary btn-sm add-more-btn">Add Work Experience</button>
                )}

                <h2 className="form-sub-title">Certifications</h2>
                {certifications.map((cert, index) => (
                    <div key={cert.id} className="form-grid certification-item">
                        <div className="form-group">
                            <label className="form-label">Certification Name</label>
                            <input
                                type="text"
                                className="form-input"
                                value={cert.name}
                                onChange={(e) => {
                                    const newCerts = [...certifications];
                                    newCerts[index].name = e.target.value;
                                    setCertifications(newCerts);
                                }}
                                disabled={!isEditingProfile}
                            />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Issuer</label>
                            <input
                                type="text"
                                className="form-input"
                                value={cert.issuer}
                                onChange={(e) => {
                                    const newCerts = [...certifications];
                                    newCerts[index].issuer = e.target.value;
                                    setCertifications(newCerts);
                                }}
                                disabled={!isEditingProfile}
                            />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Year</label>
                            <input
                                type="text"
                                className="form-input"
                                value={cert.year}
                                onChange={(e) => {
                                    const newCerts = [...certifications];
                                    newCerts[index].year = e.target.value;
                                    setCertifications(newCerts);
                                }}
                                disabled={!isEditingProfile}
                            />
                        </div>
                    </div>
                ))}
                {isEditingProfile && (
                    <button type="button" className="btn btn-secondary btn-sm add-more-btn">Add Certification</button>
                )}

                <h2 className="form-sub-title">Emergency Contacts</h2>
                {emergencyContacts.map((contact, index) => (
                    <div key={contact.id} className="form-grid contact-item">
                        <div className="form-group">
                            <label className="form-label">Name</label>
                            <input
                                type="text"
                                className="form-input"
                                value={contact.name}
                                onChange={(e) => {
                                    const newContacts = [...emergencyContacts];
                                    newContacts[index].name = e.target.value;
                                    setEmergencyContacts(newContacts);
                                }}
                                disabled={!isEditingProfile}
                            />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Relationship</label>
                            <input
                                type="text"
                                className="form-input"
                                value={contact.relationship}
                                onChange={(e) => {
                                    const newContacts = [...emergencyContacts];
                                    newContacts[index].relationship = e.target.value;
                                    setEmergencyContacts(newContacts);
                                }}
                                disabled={!isEditingProfile}
                            />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Phone</label>
                            <input
                                type="tel"
                                className="form-input"
                                value={contact.phone}
                                onChange={(e) => {
                                    const newContacts = [...emergencyContacts];
                                    newContacts[index].phone = e.target.value;
                                    setEmergencyContacts(newContacts);
                                }}
                                disabled={!isEditingProfile}
                            />
                        </div>
                    </div>
                ))}
                {isEditingProfile && (
                    <button type="button" className="btn btn-secondary btn-sm add-more-btn">Add Emergency Contact</button>
                )}


                {/* <div className="form-group checkbox-group">
                    <input type="checkbox" id="declaration" className="form-checkbox" disabled={!isEditingProfile} />
                    <label htmlFor="declaration" className="form-label">I declare that the information provided is accurate and complete.</label>
                </div> */}

                {isEditingProfile && (
                    <div className="form-actions">
                        <button type="submit" className="btn btn-primary">Save Changes</button>
                    </div>
                )}
            </form>
        </div>
    );


    const renderSubmitDocuments = () => (
        <div className="documents-section">
            <div className="section-header">
                <h1 className="section-title">Submit Your Documents</h1>
                <p className="section-description">Upload required documents for verification. Max file size: 5MB. Allowed types: PDF, JPG, PNG.</p>
            </div>

            <div className="document-upload-grid">
                {documents.map(doc => (
                    <div key={doc.id} className="document-card">
                        <div className="document-header">
                            <File size={24} className="document-icon" />
                            <h3 className="document-name">{doc.name}</h3>
                            <span className={`document-status ${doc.status.toLowerCase().replace(' ', '-')}`}>
                                {doc.status}
                            </span>
                        </div>
                        <div className="document-details">
                            <p className="document-type">{doc.type}</p>
                            <p className="document-date">Uploaded: {doc.uploadedDate}</p>
                            {doc.status === 'Rejected' && (
                                <p className="document-feedback">Feedback: {doc.feedback}</p>
                            )}
                        </div>
                        <div className="document-actions">
                            <button className="btn btn-sm btn-primary">Re-upload</button>
                            <button className="btn btn-sm btn-outline">View</button>
                        </div>
                    </div>
                ))}

                <div className="document-card upload-box">
                    <UploadCloud size={40} className="upload-icon" />
                    <p className="upload-text">Drag & Drop files here or</p>
                    <input type="file" id="file-upload" className="file-input" multiple />
                    <label htmlFor="file-upload" className="btn btn-secondary">Browse Files</label>
                    <p className="upload-hint">Accepted: PDF, JPG, PNG (Max 5MB)</p>
                </div>
            </div>
        </div>
    );

    const renderVerificationStatus = () => (
        <div className="verification-section">
            <h1 className="section-title">Verification Status</h1>
            <p className="section-description">Track the progress of your application verification.</p>

            <div className="verification-tracker">
                {verificationSteps.map(step => (
                    <div key={step.id} className={`verification-step ${step.status.toLowerCase().replace(' ', '-')}`}>
                        <div className="step-icon">
                            {step.status === 'Approved' && <CheckCircle size={20} />}
                            {step.status === 'In Progress' && <ClipboardCheck size={20} />}
                            {step.status === 'Pending' && <Eye size={20} />}
                            {step.status === 'Rejected' && <XCircle size={20} />}
                        </div>
                        <div className="step-content">
                            <h3 className="step-label">{step.label}</h3>
                            <p className="step-status">{step.status}</p>
                            {step.date && <p className="step-date">Date: {step.date}</p>}
                            {step.status === 'Rejected' && <p className="step-feedback">Remarks: Action required.</p>}
                        </div>
                    </div>
                ))}
            </div>
            <div className="support-cta">
                <p>Facing issues? Contact support for assistance.</p>
                <button className="btn btn-primary">Contact Support</button>
            </div>
        </div>
    );

    const renderInterviews = () => (
        <div className="interviews-section">
            <h1 className="section-title">Your Interviews</h1>
            <p className="section-description">Manage your upcoming and past interview schedules.</p>

            <div className="interviews-grid">
                <div className="interview-card upcoming">
                    <Calendar size={24} className="interview-icon" />
                    <div className="interview-info">
                        <h3 className="interview-title">Product Team Interview</h3>
                        <p className="interview-details">Date: June 6, 2025</p>
                        <p className="interview-details">Time: 2:00 PM IST</p>
                        <p className="interview-details">Mode: Google Meet</p>
                    </div>
                    <div className="interview-actions">
                        <button className="btn btn-primary btn-sm">Join Call</button>
                        <button className="btn btn-outline btn-sm">Reschedule</button>
                    </div>
                </div>
                <div className="interview-card past">
                    <Calendar size={24} className="interview-icon" />
                    <div className="interview-info">
                        <h3 className="interview-title">Technical Round 1</h3>
                        <p className="interview-details">Date: May 28, 2025</p>
                        <p className="interview-details">Status: Completed</p>
                        <p className="interview-details">Feedback: N/A</p>
                    </div>
                    <div className="interview-actions">
                        <button className="btn btn-outline btn-sm">View Details</button>
                    </div>
                </div>
            </div>
        </div>
    );

    const renderMessages = () => (
        <div className="messages-section">
            <h1 className="section-title">Messages & Notifications</h1>
            <p className="section-description">Your communication hub with the hiring team.</p>

            <div className="message-center">
                <div className="message-list">
                    {notifications.map(msg => (
                        <div key={msg.id} className={`message-item ${msg.read ? 'read' : 'unread'}`}>
                            <div className="message-icon">
                                <MessageSquare size={20} />
                            </div>
                            <div className="message-content">
                                <h4 className="message-subject">Regarding your application status</h4>
                                <p className="message-body">{msg.message}</p>
                                <span className="message-date">June 5, 2025</span>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="message-compose">
                    <textarea className="message-textarea" placeholder="Type your message here..."></textarea>
                    <button className="btn btn-primary">Send Message</button>
                </div>
            </div>
        </div>
    );

    const renderSettings = () => (
        <div className="settings-section">
            <h1 className="section-title">Settings</h1>
            <p className="section-description">Manage your account preferences.</p>

            <div className="settings-options">
                <div className="setting-card">
                    <h3 className="setting-title">Appearance</h3>
                    <div className="setting-item toggle-setting" onClick={toggleDarkMode}>
                        {isDarkMode ? <Moon size={20} /> : <Sun size={20} />}
                        <span>{isDarkMode ? 'Dark Mode' : 'Light Mode'}</span>
                        <div className={`toggle-switch ${isDarkMode ? 'active' : ''}`}>
                            <div className="toggle-ball"></div>
                        </div>
                    </div>
                </div>

                <div className="setting-card">
                    <h3 className="setting-title">Account Security</h3>
                    <div className="setting-item">
                        <Lock size={20} />
                        <span>Change Password</span>
                        <button className="btn btn-outline btn-sm">Update</button>
                    </div>
                    <div className="setting-item">
                        <ShieldCheck size={20} />
                        <span>Enable 2FA (Optional)</span>
                        <button className="btn btn-outline btn-sm">Setup</button>
                    </div>
                </div>

                <div className="setting-card">
                    <h3 className="setting-title">Preferences</h3>
                    <div className="setting-item">
                        <Globe size={20} />
                        <span>Language</span>
                        <select className="form-select settings-select">
                            <option>English</option>
                            <option>Spanish</option>
                            <option>French</option>
                        </select>
                    </div>
                </div>

                <div className="setting-card danger-zone">
                    <h3 className="setting-title">Danger Zone</h3>
                    <div className="setting-item">
                        <Trash2 size={20} />
                        <span>Delete Account</span>
                        <button className="btn action-btn-danger btn-sm">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );

    const renderHelpSupport = () => (
        <div className="help-section">
            <h1 className="section-title">Help & Support</h1>
            <p className="section-description">Find answers to common questions or contact us for assistance.</p>

            <div className="help-grid">
                <div className="help-card">
                    <HelpCircle size={32} className="help-icon" />
                    <h3>FAQs</h3>
                    <p>Find answers to frequently asked questions about your application and verification.</p>
                    <button className="btn btn-outline btn-sm">View FAQs</button>
                </div>
                <div className="help-card">
                    <Mail size={32} className="help-icon" />
                    <h3>Contact HR / Admin</h3>
                    <p>Submit a ticket or send us an email for specific queries.</p>
                    <button className="btn btn-outline btn-sm">Email Us</button>
                </div>
                <div className="help-card">
                    <Phone size={32} className="help-icon" />
                    <h3>Call Support</h3>
                    <p>Speak to a support representative for immediate assistance.</p>
                    <button className="btn btn-outline btn-sm">Call Now</button>
                </div>
            </div>
        </div>
    );

    const renderContent = () => {
        switch (activeMenu) {
            case 'dashboard':
                return renderDashboard();
            case 'profile':
                return renderProfile(); // Render the new Profile section
            case 'submit-documents':
                return renderSubmitDocuments();
            case 'verification-status':
                return renderVerificationStatus();
            case 'interviews':
                return renderInterviews();
            case 'messages':
                return renderMessages();
            case 'settings':
                return renderSettings();
            case 'help':
                return renderHelpSupport();
            case 'logout':
                return (
                    <div className="placeholder-content">
                        <h1 className="placeholder-title">Logging out...</h1>
                        <p className="placeholder-text">You will be redirected shortly.</p>
                    </div>
                );
            default:
                return (
                    <div className="placeholder-content">
                        <h1 className="placeholder-title">{menuItems.find(item => item.id === activeMenu)?.label}</h1>
                        <p className="placeholder-text">This section is under development</p>
                    </div>
                );
        }
    };

    return (
        <div className={`candidate-container ${sidebarOpen ? 'sidebar-open' : ''}`}>
            {/* Sidebar */}
            <div className={`candidate-sidebar ${sidebarOpen ? '' : 'candidate-sidebar-closed'}`}>
                <div className="candidate-sidebar-header">
                    <div className="candidate-logo">
                        <User size={24} className="candidate-logo-icon" />
                        <h1 className="candidate-logo-text">Candidate Portal</h1>
                    </div>
                    {/* Only show sidebar toggle on larger screens, mobile menu handles it on small screens */}
                    <button
                        className="candidate-sidebar-toggle"
                        onClick={toggleSidebar}
                        aria-label={sidebarOpen ? 'Collapse sidebar' : 'Expand sidebar'}
                    >
                        {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>

                <nav className="candidate-nav">
                    {menuItems.map(item => {
                        const Icon = item.icon;
                        return (
                            <button
                                key={item.id}
                                className={`candidate-nav-item ${activeMenu === item.id ? 'candidate-nav-active' : ''}`}
                                onClick={() => {
                                    setActiveMenu(item.id);
                                    if (window.innerWidth <= 1024) { // Close sidebar on mobile after selection
                                        setSidebarOpen(false);
                                    }
                                }}
                            >
                                <Icon size={20} />
                                <span>{item.label}</span>
                            </button>
                        );
                    })}
                </nav>
            </div>

            {/* Main Content */}
            <div className="candidate-main">
                {/* Header */}
                <div className="candidate-header">
                    <div className="candidate-header-left">
                        {/* Mobile menu button, visible only on smaller screens */}
                        <button
                            className="candidate-mobile-menu"
                            onClick={toggleSidebar}
                            aria-label="Toggle sidebar"
                        >
                            <Menu size={20} />
                        </button>
                        <h1>Candidate Dashboard</h1>
                    </div>

                    <div className="candidate-header-right">
                        <button
                            className="candidate-theme-toggle"
                            onClick={toggleDarkMode}
                        >
                            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                        </button>

                        <div className="candidate-user-menu">
                            <div className="candidate-user-avatar">J</div>
                            <span>{personalInfo.name}</span>
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="candidate-content">
                    {renderContent()}
                </div>
            </div>

            {/* Footer */}
           
        </div>
    );
};

export default CandidateDashboard;
