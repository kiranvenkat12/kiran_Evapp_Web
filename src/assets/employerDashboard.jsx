import React, { useState } from 'react';
import './employerDashboard.css'; // Import the CSS file
import VerifyEmployee from './VerifyEmployee';
import CompanyProfile from './CompanyProfile';

import {
    Home,
    Plus,
    FileText,
    Users,
    Star,
    Building,
    MessageSquare,
    BarChart3,
    HelpCircle,
    Search,
    Filter,
    // Download,
    Calendar,
    Eye,
    Edit,
    Trash2,
    CheckCircle,
    // Clock,
    // AlertCircle,
    User,
    Mail,
    Phone,
    MapPin,
    DollarSign,
    ShieldCheck
    // Briefcase
} from 'lucide-react';

export const EmployerDashboard = () => {
    const [activeMenu, setActiveMenu] = useState('dashboard');
    // const [selectedJob, setSelectedJob] = useState(null);
    const [draggedCandidate, setDraggedCandidate] = useState(null);

    // Sample data
    const [jobs] = useState([
        { id: 1, title: 'Senior React Developer', applicants: 15, status: 'active', location: 'Remote', salary: '$80k-$120k', type: 'Full-time' },
        { id: 2, title: 'Product Manager', applicants: 8, status: 'active', location: 'New York', salary: '$90k-$130k', type: 'Full-time' },
        { id: 3, title: 'UX Designer', applicants: 12, status: 'draft', location: 'San Francisco', salary: '$70k-$100k', type: 'Part-time' }
    ]);

    const [candidates, setCandidates] = useState({
        todo: [
            { id: 1, name: 'John Smith', position: 'Senior React Developer', email: 'john@email.com', phone: '+1234567890', status: 'new', verified: false },
            { id: 2, name: 'Sarah Johnson', position: 'Product Manager', email: 'sarah@email.com', phone: '+1234567891', status: 'new', verified: true }
        ],
        inProgress: [
            { id: 3, name: 'Mike Wilson', position: 'Senior React Developer', email: 'mike@email.com', phone: '+1234567892', status: 'interview', verified: true },
            { id: 4, name: 'Lisa Davis', position: 'UX Designer', email: 'lisa@email.com', phone: '+1234567893', status: 'review', verified: false }
        ],
        done: [
            { id: 5, name: 'Tom Brown', position: 'Product Manager', email: 'tom@email.com', phone: '+1234567894', status: 'hired', verified: true },
            { id: 6, name: 'Anna Lee', position: 'Senior React Developer', email: 'anna@email.com', phone: '+1234567895', status: 'rejected', verified: true }
        ]
    });

    const menuItems = [
        { id: 'dashboard', label: 'Dashboard', icon: Home },
        { id: 'verify-employee', label: 'Verify Employee', icon: ShieldCheck },
        { id: 'post-job', label: 'Post a Job', icon: Plus },
        { id: 'manage-jobs', label: 'Manage Jobs', icon: FileText },
        { id: 'applicants', label: 'View Applicants', icon: Users },
        { id: 'shortlist', label: 'Shortlisting', icon: Star },
        { id: 'company-profile', label: 'Company Profile', icon: Building },
        { id: 'messaging', label: 'Messaging', icon: MessageSquare },
        { id: 'analytics', label: 'Analytics', icon: BarChart3 },
        { id: 'support', label: 'Support', icon: HelpCircle },

    ];

    const handleDragStart = (e, candidate, column) => {
        setDraggedCandidate({ candidate, sourceColumn: column });
        e.dataTransfer.effectAllowed = 'move';
    };




    const handleDragOver = (e) => {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
    };

    const handleDrop = (e, targetColumn) => {
        e.preventDefault();
        if (!draggedCandidate || draggedCandidate.sourceColumn === targetColumn) return;

        const { candidate, sourceColumn } = draggedCandidate;

        setCandidates(prev => ({
            ...prev,
            [sourceColumn]: prev[sourceColumn].filter(c => c.id !== candidate.id),
            [targetColumn]: [...prev[targetColumn], candidate]
        }));

        setDraggedCandidate(null);
    };



    const renderDashboard = () => (
        <div className="dashboard-content">
            <div className="dashboard-header">
                <h1 className="dashboard-title">Employer Dashboard</h1>
                <p className="dashboard-subtitle">Manage your hiring process efficiently</p>
            </div>

            {/* Stats Cards */}
            <div className="stats-grid">
                <div className="stat-card">
                    <div className="stat-icon-wrapper stat-icon-blue">
                        <FileText className="stat-icon" />
                    </div>
                    <div className="stat-content">
                        <h3 className="stat-number">12</h3>
                        <p className="stat-label">Active Job Postings</p>
                    </div>
                </div>
                <div className="stat-card">
                    <div className="stat-icon-wrapper stat-icon-green">
                        <Users className="stat-icon" />
                    </div>
                    <div className="stat-content">
                        <h3 className="stat-number">86</h3>
                        <p className="stat-label">Total Applicants</p>
                    </div>
                </div>
                <div className="stat-card">
                    <div className="stat-icon-wrapper stat-icon-yellow">
                        <Calendar className="stat-icon" />
                    </div>
                    <div className="stat-content">
                        <h3 className="stat-number">24</h3>
                        <p className="stat-label">Pending Interviews</p>
                    </div>
                </div>
                <div className="stat-card">
                    <div className="stat-icon-wrapper stat-icon-purple">
                        <CheckCircle className="stat-icon" />
                    </div>
                    <div className="stat-content">
                        <h3 className="stat-number">8</h3>
                        <p className="stat-label">Hires Made</p>
                    </div>
                </div>
            </div>

            {/* Kanban Board */}
            <div className="kanban-section">
                <h2 className="section-title">Candidate Pipeline</h2>
                <div className="kanban-board">
                    {Object.entries(candidates).map(([column, candidateList]) => (
                        <div
                            key={column}
                            className="kanban-column"
                            onDragOver={handleDragOver}
                            onDrop={(e) => handleDrop(e, column)}
                        >
                            <div className="kanban-header">
                                <h3 className="kanban-title">
                                    {column === 'todo' ? 'To Do' : column === 'inProgress' ? 'In Progress' : 'Done'}
                                </h3>
                                <span className="kanban-count">{candidateList.length}</span>
                            </div>
                            <div className="kanban-content">
                                {candidateList.map(candidate => (
                                    <div
                                        key={candidate.id}
                                        className="candidate-card"
                                        draggable
                                        onDragStart={(e) => handleDragStart(e, candidate, column)}
                                    >
                                        <div className="candidate-header">
                                            <div className="candidate-avatar">
                                                <User size={20} />
                                            </div>
                                            <div className="candidate-info">
                                                <h4 className="candidate-name">{candidate.name}</h4>
                                                <p className="candidate-position">{candidate.position}</p>
                                            </div>
                                            {candidate.verified && (
                                                <CheckCircle className="verification-badge" size={16} />
                                            )}
                                        </div>
                                        <div className="candidate-details">
                                            <div className="candidate-detail">
                                                <Mail size={14} />
                                                <span>{candidate.email}</span>
                                            </div>
                                            <div className="candidate-detail">
                                                <Phone size={14} />
                                                <span>{candidate.phone}</span>
                                            </div>
                                        </div>
                                        <div className="candidate-actions">
                                            <button className="action-btn action-btn-primary">View</button>
                                            <button className="action-btn action-btn-secondary">Message</button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );



    const renderShortlisting = () => {
        return (
            <div className="shortlist-section">
                <h1 className="section-title">Shortlisting Candidates</h1>
                <p className="section-description">Review and shortlist the best candidates for the job.</p>

                <div className="shortlist-grid">
                    {Object.values(candidates).flat().map(candidate => (
                        <div key={candidate.id} className="shortlist-card">
                            <div className="shortlist-header">
                                <div className="shortlist-avatar">
                                    <User size={22} />
                                </div>
                                <div className="shortlist-info">
                                    <h3 className="shortlist-name">{candidate.name}</h3>
                                    <p className="shortlist-position">{candidate.position}</p>
                                </div>
                                {candidate.verified && (
                                    <CheckCircle className="verification-badge" size={18} />
                                )}
                            </div>
                            <div className="shortlist-details">
                                <div className="shortlist-detail">
                                    <Mail size={14} />
                                    <span>{candidate.email}</span>
                                </div>
                                <div className="shortlist-detail">
                                    <Phone size={14} />
                                    <span>{candidate.phone}</span>
                                </div>
                            </div>
                            <div className="shortlist-actions">
                                <button className="btn btn-sm btn-primary">Shortlist</button>
                                <button className="btn btn-sm btn-outline">Reject</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    };

    // const renderCompanyProfile = () => (
    //     <div className="profile-section">
    //         <h1 className="section-title">Company Profile</h1>
    //         <p className="section-subtitle">Manage your company information and branding.</p>
    //
    //         <form className="company-form">
    //             <div className="form-group">
    //                 <label className="form-label">Company Name</label>
    //                 <input type="text" className="form-input" placeholder="e.g. Acme Corp" />
    //             </div>
    //
    //             <div className="form-group">
    //                 <label className="form-label">Website</label>
    //                 <input type="text" className="form-input" placeholder="e.g. www.acme.com" />
    //             </div>
    //
    //             <div className="form-group">
    //                 <label className="form-label">About Company</label>
    //                 <textarea className="form-textarea" rows="5" placeholder="Tell us about your company..."></textarea>
    //             </div>
    //
    //             <div className="form-actions">
    //                 <button type="submit" className="btn btn-primary">Save Changes</button>
    //             </div>
    //         </form>
    //     </div>
    // );
    //


    const renderPostJob = () => (
        <div className="form-section">
            <div className="form-header">
                <h1 className="form-title">Post a New Job</h1>
                <p className="form-subtitle">Create a compelling job listing to attract top talent</p>
            </div>

            <form className="job-form">
                <div className="form-grid">
                    <div className="form-group">
                        <label className="form-label">Job Title *</label>
                        <input type="text" className="form-input" placeholder="e.g. Senior Software Engineer" />
                    </div>

                    <div className="form-group">
                        <label className="form-label">Job Type *</label>
                        <select className="form-select">
                            <option>Full-time</option>
                            <option>Part-time</option>
                            <option>Contract</option>
                            <option>Remote</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label className="form-label">Location *</label>
                        <input type="text" className="form-input" placeholder="e.g. New York, NY or Remote" />
                    </div>

                    <div className="form-group">
                        <label className="form-label">Salary Range</label>
                        <input type="text" className="form-input" placeholder="e.g. $80,000 - $120,000" />
                    </div>
                </div>

                <div className="form-group">
                    <label className="form-label">Job Description *</label>
                    <textarea className="form-textarea" rows="6" placeholder="Describe the role, responsibilities, and what you're looking for in a candidate..."></textarea>
                </div>

                <div className="form-group">
                    <label className="form-label">Required Skills</label>
                    <input type="text" className="form-input" placeholder="React, Node.js, Python (comma separated)" />
                </div>

                <div className="form-group">
                    <label className="form-label">Experience Level</label>
                    <select className="form-select">
                        <option>Entry Level (0-2 years)</option>
                        <option>Mid Level (3-5 years)</option>
                        <option>Senior Level (6+ years)</option>
                        <option>Executive Level</option>
                    </select>
                </div>

                <div className="form-actions">
                    <button type="button" className="btn btn-secondary">Save as Draft</button>
                    <button type="submit" className="btn btn-primary">Post Job</button>
                </div>
            </form>
        </div>
    );

    const renderManageJobs = () => (
        <div className="jobs-section">
            <div className="section-header">
                <h1 className="section-title">Manage Job Listings</h1>
                <div className="section-actions">
                    <div className="search-bar">
                        <Search className="search-icon" size={20} />
                        <input type="text" placeholder="Search jobs..." className="search-input" />
                    </div>
                    <button className="btn btn-outline">
                        <Filter size={16} />
                        Filter
                    </button>
                </div>
            </div>

            <div className="jobs-grid">
                {jobs.map(job => (
                    <div key={job.id} className="job-card">
                        <div className="job-header">
                            <h3 className="job-title">{job.title}</h3>
                            <span className={`job-status ${job.status}`}>{job.status}</span>
                        </div>
                        <div className="job-details">
                            <div className="job-detail">
                                <MapPin size={16} />
                                <span>{job.location}</span>
                            </div>
                            <div className="job-detail">
                                <DollarSign size={16} />
                                <span>{job.salary}</span>
                            </div>
                            <div className="job-detail">
                                <Users size={16} />
                                <span>{job.applicants} applicants</span>
                            </div>
                        </div>
                        <div className="job-actions">
                            <button className="action-btn action-btn-outline">
                                <Eye size={16} />
                                View
                            </button>
                            <button className="action-btn action-btn-outline">
                                <Edit size={16} />
                                Edit
                            </button>
                            <button className="action-btn action-btn-danger">
                                <Trash2 size={16} />
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );



    const renderContent = () => {
        switch (activeMenu) {
            case 'dashboard':
                return renderDashboard();
            case 'post-job':
                return renderPostJob();
            case 'manage-jobs':
                return renderManageJobs();
            case 'applicants':
                return (
                    <div className="applicants-section">
                        <h1 className="section-title">All Applicants</h1>
                        <div className="applicants-grid">
                            {Object.values(candidates).flat().map(candidate => (
                                <div key={candidate.id} className="applicant-card">
                                    <div className="applicant-header">
                                        <div className="applicant-avatar">
                                            <User size={24} />
                                        </div>
                                        <div className="applicant-info">
                                            <h3 className="applicant-name">{candidate.name}</h3>
                                            <p className="applicant-position">{candidate.position}</p>
                                        </div>
                                        {candidate.verified && (
                                            <CheckCircle className="verification-badge" size={20} />
                                        )}
                                    </div>
                                    <div className="applicant-details">
                                        <div className="applicant-detail">
                                            <Mail size={16} />
                                            <span>{candidate.email}</span>
                                        </div>
                                        <div className="applicant-detail">
                                            <Phone size={16} />
                                            <span>{candidate.phone}</span>
                                        </div>
                                    </div>
                                    <div className="applicant-actions">
                                        <button className="btn btn-primary btn-sm">View Profile</button>
                                        <button className="btn btn-outline btn-sm">Download Resume</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                );
            case 'shortlist':
                return renderShortlisting(); // 👈 Add this

            case 'company-profile':
                return <CompanyProfile />;

            case 'verify-employee':
                return <VerifyEmployee />;



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
        <div className="employer-dashboard">
            {/* Sidebar */}
            <div className="sidebar">
                <div className="sidebar-header">
                    <div className="logo">
                        <Building className="logo-icon" />
                        <span className="logo-text">Employer Portal</span>
                    </div>
                </div>

                <nav className="sidebar-nav">
                    {menuItems.map(item => {
                        const Icon = item.icon;
                        return (
                            <button
                                key={item.id}
                                className={`nav-item ${activeMenu === item.id ? 'active' : ''}`}
                                onClick={() => setActiveMenu(item.id)}
                            >
                                <Icon className="nav-icon" size={20} />
                                <span className="nav-label">{item.label}</span>
                            </button>
                        );
                    })}
                </nav>
            </div>







            {/* Main Content */}
            <div className="main-content">
                {renderContent()}
            </div>
        </div>
    );
};

export default EmployerDashboard;
