
import React, { useState } from 'react';
import {
    Home,             // Dashboard icon (from employerDashboard)
    Users,            // User Management (same as employerDashboard)
    ShieldCheck,      // Verification Queue (from employerDashboard, similar to Shield)
    MessageSquare,    // Messaging Center (same as employerDashboard)
    FileText,         // Reports & Complaints (from employerDashboard, for reports)
    BarChart3,        // Analytics & Logs (same as employerDashboard)
    Settings,         // Settings (standard, assuming available)
    Bell,             // Notifications (keeping, not in employerDashboard menu)
    Search,           // Search (same as employerDashboard)
    Filter,           // Filter (same as employerDashboard)
    Download,         // Download (keeping, not in employerDashboard menu)
    Eye,              // View (same as employerDashboard)
    CheckCircle,      // Approve (same as employerDashboard)
    XCircle,          // Reject (keeping, not in employerDashboard menu)
    Clock,            // Pending/Time (keeping, not in employerDashboard menu)
    AlertTriangle,    // Original for reports (keeping for now, but FileText is primary for reports)
    Moon,             // Dark mode (keeping)
    Sun,              // Light mode (keeping)
    Menu,             // Sidebar toggle (keeping)
    X,                // Close icon (keeping)
    PlusCircle,       // Add New User, Quick Actions (keeping)
    DollarSign,       // Revenue stat (same as employerDashboard)
    Activity,         // Activity Log (keeping)
    Building          // For general admin/company icon (from employerDashboard)
} from 'lucide-react';
import './admin.css';


const AdminDashboard = () => {
    const [activeSection, setActiveSection] = useState('dashboard');
    const [darkMode, setDarkMode] = useState(false);
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [showNotifications, setShowNotifications] = useState(false); // New state for notifications dropdown

    // Sample data - replace with real data from your API
    const dashboardStats = {
        totalUsers: 1248,
        pendingVerifications: 23,
        activeEmployers: 456,
        activeEmployees: 792,
        reports: 8,
        notifications: 15,
        newSignupsToday: 12, // Added new stat
        revenueMonth: '₹ 15,000' // Added new stat
    };

    // Menu items with icons updated to match employerDashboard where appropriate
    const menuItems = [
        { id: 'dashboard', label: 'Dashboard', icon: Home }, // Changed from BarChart3 to Home
        { id: 'users', label: 'User Management', icon: Users },
        { id: 'verification', label: 'Verification Queue', icon: ShieldCheck }, // Changed from UserCheck to ShieldCheck
        { id: 'messages', label: 'Messaging Center', icon: MessageSquare },
        { id: 'reports', label: 'Reports & Complaints', icon: FileText }, // Changed from AlertTriangle to FileText
        { id: 'analytics', label: 'Analytics & Logs', icon: BarChart3 },
        { id: 'settings', label: 'Settings', icon: Settings }
    ];

    const pendingTasks = [
        { id: 1, type: 'Verification', user: 'John Doe Company', status: 'pending', timestamp: '2 hours ago' },
        { id: 2, type: 'Report Review', user: 'Employee #456', status: 'in-progress', timestamp: '4 hours ago' },
        { id: 3, type: 'Document Check', user: 'ABC Corp', status: 'pending', timestamp: '1 day ago' }
    ];

    const recentUsers = [
        { id: 1, name: 'John Smith', type: 'Employer', status: 'verified', joinDate: '2024-05-27' },
        { id: 2, name: 'Sarah Johnson', type: 'Employee', status: 'pending', joinDate: '2024-05-26' },
        { id: 3, name: 'Tech Solutions Ltd', type: 'Employer', status: 'verified', joinDate: '2024-05-25' }
    ];
    
    const recentActivities = [
        { id: 1, user: 'Admin User', action: 'Approved John Doe Company verification', timestamp: 'Just now' },
        { id: 2, user: 'System', action: 'Generated monthly report', timestamp: '10 minutes ago' },
        { id: 3, user: 'Admin User', action: 'Replied to Sarah Johnson message', timestamp: '1 hour ago' }
    ];
    
    const notifications = [
        { id: 1, message: 'New user registered: Jane Doe.', type: 'info', time: '5 min ago' },
        { id: 2, message: 'Critical: Server usage exceeded 90%.', type: 'alert', time: '1 hour ago' },
        { id: 3, message: 'New report submitted by Employee #123.', type: 'warning', time: '2 hours ago' }
    ];

    const renderDashboard = () => (
        <div className="admin-content-section">
            <div className="admin-section-header">
                <h2>Dashboard Overview</h2>
                <div className="admin-header-actions">
                    {/* Global Search Bar */}
                    <div className="admin-search-box admin-global-search">
                        <Search size={16} />
                        <input
                            type="text"
                            placeholder="Search everything..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <button className="admin-btn admin-btn-secondary">
                        <Download size={16} />
                        Export Report
                    </button>
                    {/* Quick Actions */}
                    <button className="admin-btn admin-btn-primary">
                        <PlusCircle size={16} />
                        Add New User
                    </button>
                </div>
            </div>

            {/* Stats Cards */}
            <div className="admin-stats-grid">
                <div className="stat-card">
                    <div className="admin-stat-icon-wrapper admin-stat-icon-blue"> {/* Updated class */}
                        <Users size={24} />
                    </div>
                    <div className="stat-content">
                        <h3>{dashboardStats.totalUsers}</h3>
                        <p>Total Users</p>
                    </div>
                </div>
                <div className="stat-card">
                    <div className="admin-stat-icon-wrapper admin-stat-icon-yellow"> {/* Updated class and color */}
                        <Clock size={24} />
                    </div>
                    <div className="stat-content">
                        <h3>{dashboardStats.pendingVerifications}</h3>
                        <p>Pending Verifications</p>
                    </div>
                </div>
                <div className="stat-card">
                    <div className="admin-stat-icon-wrapper admin-stat-icon-green"> {/* Updated class */}
                        <Users size={24} />
                    </div>
                    <div className="stat-content">
                        <h3>{dashboardStats.activeEmployers}</h3>
                        <p>Active Employers</p>
                    </div>
                </div>
                <div className="stat-card">
                    <div className="admin-stat-icon-wrapper admin-stat-icon-purple"> {/* Updated class and color */}
                        <Users size={24} />
                    </div>
                    <div className="stat-content">
                        <h3>{dashboardStats.activeEmployees}</h3>
                        <p>Active Employees</p>
                    </div>
                </div>
                 {/* New Stat Cards */}
                <div className="stat-card">
                    <div className="admin-stat-icon-wrapper admin-stat-icon-blue"> {/* Updated class */}
                        <PlusCircle size={24} />
                    </div>
                    <div className="stat-content">
                        <h3>{dashboardStats.newSignupsToday}</h3>
                        <p>New Signups Today</p>
                    </div>
                </div>
                {/* <div className="admin-stat-card">
                    <div className="admin-stat-icon-wrapper admin-stat-icon-green"> 
                        <DollarSign size={24} />
                    </div>
                    <div className="admin-stat-content">
                        <h3>{dashboardStats.revenueMonth}</h3>
                        <p>Revenue (This Month)</p>
                    </div>
                </div> */}
            </div>

            {/* Quick Actions Panel */}
            <div className="admin-card admin-quick-actions">
                <h3>Quick Actions</h3>
                <div className="admin-quick-action-grid">
                    <button className="admin-btn admin-btn-secondary admin-btn-icon">
                        <FileText size={20} /> {/* Changed from PlusCircle to FileText for "Create Report" */}
                        <span>Create Report</span>
                    </button>
                    <button className="admin-btn admin-btn-secondary admin-btn-icon">
                        <MessageSquare size={20} />
                        <span>Send Broadcast</span>
                    </button>
                    <button className="admin-btn admin-btn-secondary admin-btn-icon">
                        <Users size={20} />
                        <span>Manage Roles</span>
                    </button>
                    <button className="admin-btn admin-btn-secondary admin-btn-icon">
                        <Settings size={20} />
                        <span>System Settings</span>
                    </button>
                </div>
            </div>

            {/* Data Visualization Placeholder */}
            <div className="admin-card admin-chart-placeholder">
                <h3>User Growth Over Time</h3>
                <div className="chart-area">
                    {/* Placeholder for a chart library like Chart.js or Recharts */}
                    <p className="text-placeholder">Chart data would be displayed here.</p>
                </div>
            </div>


            {/* Task Board */}
            <div className="admin-task-board">
                <h3>Task Management</h3>
                <div className="admin-kanban-board">
                    <div className="admin-kanban-column">
                        <div className="admin-kanban-header admin-kanban-todo">
                            <h4>To-Do ({pendingTasks.filter(t => t.status === 'pending').length})</h4>
                        </div>
                        {pendingTasks.filter(t => t.status === 'pending').map(task => (
                            <div key={task.id} className="admin-kanban-card">
                                <div className="admin-kanban-card-header">
                                    <span className="admin-task-type">{task.type}</span>
                                    <span className="admin-task-time">{task.timestamp}</span>
                                </div>
                                <p>{task.user}</p>
                                <div className="admin-kanban-actions">
                                    <button className="admin-btn admin-btn-small admin-btn-primary">Approve</button>
                                    <button className="admin-btn admin-btn-small admin-btn-danger">Reject</button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="admin-kanban-column">
                        <div className="admin-kanban-header admin-kanban-progress">
                            <h4>In Progress ({pendingTasks.filter(t => t.status === 'in-progress').length})</h4>
                        </div>
                        {pendingTasks.filter(t => t.status === 'in-progress').map(task => (
                            <div key={task.id} className="admin-kanban-card">
                                <div className="admin-kanban-card-header">
                                    <span className="admin-task-type">{task.type}</span>
                                    <span className="admin-task-time">{task.timestamp}</span>
                                </div>
                                <p>{task.user}</p>
                                <div className="admin-kanban-actions">
                                    <button className="admin-btn admin-btn-small admin-btn-primary">Complete</button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="admin-kanban-column">
                        <div className="admin-kanban-header admin-kanban-done">
                            <h4>Done (12)</h4>
                        </div>
                        {/* Add more done tasks here or fetch from API */}
                    </div>
                </div>
            </div>

            {/* Recent Users */}
            <div className="admin-recent-activity">
                <h3>Recent Users</h3>
                <div className="admin-table-container">
                    <table className="admin-table">
                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>Type</th>
                            <th>Status</th>
                            <th>Join Date</th>
                            <th>Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {recentUsers.map(user => (
                            <tr key={user.id}>
                                <td>{user.name}</td>
                                <td>
                                    <span className={`admin-badge admin-badge-${user.type.toLowerCase()}`}>
                                      {user.type}
                                    </span>
                                </td>
                                <td>
                                    <span className={`admin-status admin-status-${user.status}`}>
                                      {user.status}
                                    </span>
                                </td>
                                <td>{user.joinDate}</td>
                                <td>
                                    <button className="admin-btn admin-btn-small admin-btn-secondary">
                                        <Eye size={14} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Recent Activity Log */}
            <div className="admin-card admin-recent-activity-log">
                <h3>Admin Activity Log</h3>
                <div className="admin-table-container">
                    <table className="admin-table">
                        <thead>
                            <tr>
                                <th>User</th>
                                <th>Action</th>
                                <th>Timestamp</th>
                            </tr>
                        </thead>
                        <tbody>
                            {recentActivities.map(activity => (
                                <tr key={activity.id}>
                                    <td>{activity.user}</td>
                                    <td>{activity.action}</td>
                                    <td>{activity.timestamp}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );

    const renderUserManagement = () => (
        <div className="admin-content-section">
            <div className="admin-section-header">
                <h2>User Management</h2>
                <div className="admin-header-actions">
                    <div className="admin-search-box">
                        <Search size={16} />
                        <input
                            type="text"
                            placeholder="Search users..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <button className="admin-btn admin-btn-secondary">
                        <Filter size={16} />
                        Filter
                    </button>
                    <button className="admin-btn admin-btn-primary">
                        <Download size={16} />
                        Export
                    </button>
                </div>
            </div>

            <div className="admin-user-tabs">
                <button className="admin-tab admin-tab-active">All Users</button>
                <button className="admin-tab">Employers</button>
                <button className="admin-tab">Employees</button>
                <button className="admin-tab">Pending Verification</button>
            </div>

            <div className="admin-table-container">
                <table className="admin-table">
                    <thead>
                    <tr>
                        <th>User</th>
                        <th>Type</th>
                        <th>Status</th>
                        <th>Join Date</th>
                        <th>Last Active</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {recentUsers.map(user => (
                        <tr key={user.id}>
                            <td>
                                <div className="admin-user-cell">
                                    <div className="admin-user-avatar">
                                        {user.name.charAt(0)}
                                    </div>
                                    <div>
                                        <div className="admin-user-name">{user.name}</div>
                                        <div className="admin-user-email">user@example.com</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                  <span className={`admin-badge admin-badge-${user.type.toLowerCase()}`}>
                                    {user.type}
                                  </span>
                            </td>
                            <td>
                                  <span className={`admin-status admin-status-${user.status}`}>
                                    {user.status}
                                  </span>
                            </td>
                            <td>{user.joinDate}</td>
                            <td>2 hours ago</td>
                            <td>
                                <div className="admin-action-buttons">
                                    <button className="admin-btn admin-btn-small admin-btn-secondary">
                                        <Eye size={14} />
                                    </button>
                                    <button className="admin-btn admin-btn-small admin-btn-secondary">
                                        <CheckCircle size={14} />
                                    </button>
                                    <button className="admin-btn admin-btn-small admin-btn-danger">
                                        <XCircle size={14} />
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );

    const renderVerificationQueue = () => (
        <div className="admin-content-section">
            <div className="admin-section-header">
                <h2>Verification Queue</h2>
                <div className="admin-header-actions">
                    <span className="admin-queue-count">{dashboardStats.pendingVerifications} pending</span>
                </div>
            </div>
            <div className="admin-verification-list">
                {pendingTasks.map(task => (
                    <div key={task.id} className="admin-verification-card">
                        <div className="admin-verification-header">
                            <div className="admin-user-info">
                                <div className="admin-user-avatar">
                                    {task.user.charAt(0)}
                                </div>
                                <div>
                                    <h4>{task.user}</h4>
                                    <p>Submitted {task.timestamp}</p>
                                </div>
                            </div>
                            <span className={`admin-status admin-status-${task.status}`}>
                                {task.status}
                            </span>
                        </div>
                        <div className="admin-verification-content">
                            <div className="admin-document-list">
                                <div className="admin-document-item">
                                    <span><CheckCircle size={14} /> Identity Document</span>
                                </div>
                                <div className="admin-document-item">
                                    <span><CheckCircle size={14} /> Business License</span>
                                </div>
                                <div className="admin-document-item">
                                    <span><Clock size={14} /> Tax Certificate</span>
                                </div>
                            </div>
                            <div className="admin-verification-actions">
                                <button className="admin-btn admin-btn-secondary">
                                    <Eye size={16} /> View Profile
                                </button>
                                <button className="admin-btn admin-btn-primary">
                                    <CheckCircle size={16} /> Approve
                                </button>
                                <button className="admin-btn admin-btn-danger">
                                    <XCircle size={16} /> Reject
                                </button>
                                <button className="admin-btn admin-btn-secondary">
                                    <MessageSquare size={16} /> Contact
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

    const renderMessagingCenter = () => (
        <div className="admin-content-section">
            <div className="admin-section-header">
                <h2>Messaging Center</h2>
                <div className="admin-header-actions">
                    <button className="admin-btn admin-btn-primary">New Message</button>
                </div>
            </div>
            <div className="admin-messaging-layout">
                <div className="admin-message-sidebar">
                    <div className="admin-message-tabs">
                        <button className="admin-tab admin-tab-active">All Messages</button>
                        <button className="admin-tab">Employers</button>
                        <button className="admin-tab">Employees</button>
                        <button className="admin-tab">System</button>
                    </div>
                    <div className="admin-message-list">
                        <div className="admin-message-item admin-message-unread">
                            <div className="admin-message-avatar">J</div>
                            <div className="admin-message-content">
                                <div className="admin-message-name">John Doe</div>
                                <div className="admin-message-preview">Verification question...</div>
                                <div className="admin-message-time">5 min ago</div>
                            </div>
                        </div>
                        <div className="admin-message-item">
                            <div className="admin-message-avatar">S</div>
                            <div className="admin-message-content">
                                <div className="admin-message-name">Sarah Wilson</div>
                                <div className="admin-message-preview">Regarding report #123...</div>
                                <div className="admin-message-time">1 day ago</div>
                            </div>
                        </div>
                        {/* More message items can be added here */}
                    </div>
                </div>
                <div className="admin-message-main-content">
                    <div className="admin-message-header">
                        <h3>Conversation with John Doe</h3>
                        <div className="admin-header-actions">
                            <button className="admin-btn admin-btn-small admin-btn-secondary"><Search size={14} /></button>
                            <button className="admin-btn admin-btn-small admin-btn-danger"><XCircle size={14} /></button>
                        </div>
                    </div>
                    <div className="admin-message-thread">
                        <div className="admin-message-bubble admin-message-bubble-received">
                            Hi Admin, I have a question about my verification status.
                        </div>
                        <div className="admin-message-bubble admin-message-bubble-sent">
                            Hello John, I'm checking your status now. Please provide your user ID.
                        </div>
                        <div className="admin-message-bubble admin-message-bubble-received">
                            My ID is 12345.
                        </div>
                        {/* More messages */}
                    </div>
                    <div className="admin-message-input-area">
                        <input type="text" placeholder="Type your message here..." />
                        <button className="admin-btn admin-btn-primary">Send</button>
                    </div>
                </div>
            </div>
        </div>
    );

    const renderReportsComplaints = () => (
        <div className="admin-content-section">
            <div className="admin-section-header">
                <h2>Reports & Complaints</h2>
                <div className="admin-header-actions">
                    <span className="admin-queue-count">{dashboardStats.reports} active reports</span>
                </div>
            </div>
            {/* Placeholder for reports list/grid */}
            <div className="admin-card admin-empty-state">
                <FileText size={48} className="empty-state-icon" /> {/* Changed from AlertTriangle to FileText */}
                <p className="empty-state-text">No new reports or complaints at this time. All clear!</p>
            </div>
        </div>
    );

    const renderAnalyticsLogs = () => (
        <div className="admin-content-section">
            <div className="admin-section-header">
                <h2>Analytics & Logs</h2>
                <div className="admin-header-actions">
                    <button className="admin-btn admin-btn-secondary">Export Logs</button>
                </div>
            </div>
            {/* Placeholder for charts/graphs or log entries */}
            <div className="admin-card admin-empty-state">
                <BarChart3 size={48} className="empty-state-icon" />
                <p className="empty-state-text">Detailed analytics and system logs will be displayed here.</p>
            </div>
        </div>
    );

    const renderSettings = () => (
        <div className="admin-content-section">
            <div className="admin-section-header">
                <h2>Settings</h2>
                <div className="admin-header-actions">
                    <button className="admin-btn admin-btn-primary">Save Settings</button>
                </div>
            </div>
            {/* Placeholder for various settings options */}
            <div className="admin-card admin-empty-state">
                <Settings size={48} className="empty-state-icon" />
                <p className="empty-state-text">Manage application settings, user roles, and integrations.</p>
            </div>
        </div>
    );


    const renderContent = () => {
        switch (activeSection) {
            case 'dashboard':
                return renderDashboard();
            case 'users':
                return renderUserManagement();
            case 'verification':
                return renderVerificationQueue();
            case 'messages':
                return renderMessagingCenter();
            case 'reports':
                return renderReportsComplaints();
            case 'analytics':
                return renderAnalyticsLogs();
            case 'settings':
                return renderSettings();
            default:
                return renderDashboard();
        }
    };

    return (
        <div className={`admin-container ${darkMode ? 'admin-dark' : ''}`}>
            {/* Sidebar */}
            <div className={`admin-sidebar ${sidebarOpen ? '' : 'admin-sidebar-closed'}`}>
                <div className="admin-sidebar-header">
                    {/* Changed logo from h1 to a div with Building icon */}
                    <div className="admin-logo">
                        <Building size={24} className="admin-logo-icon" />
                        <h1 className="admin-logo-text">Admin Panel</h1>
                    </div>
                    <button
                        className="admin-sidebar-toggle"
                        onClick={() => setSidebarOpen(!sidebarOpen)}
                        aria-label={sidebarOpen ? 'Collapse sidebar' : 'Expand sidebar'}
                    >
                        {sidebarOpen ? <Menu size={20} /> : <X size={20} />}
                    </button>
                </div>

                <nav className="admin-nav">
                    {menuItems.map(item => (
                        <button
                            key={item.id}
                            className={`admin-nav-item ${activeSection === item.id ? 'admin-nav-active' : ''}`}
                            onClick={() => setActiveSection(item.id)}
                        >
                            <item.icon size={20} />
                            <span>{item.label}</span>
                        </button>
                    ))}
                </nav>
            </div>

            {/* Main Content */}
            <div className="admin-main">
                {/* Header */}
                <div className="admin-header">
                    <div className="admin-header-left">
                        <button
                            className="admin-mobile-menu"
                            onClick={() => setSidebarOpen(!sidebarOpen)}
                        >
                            <Menu size={20} />
                        </button>
                        <h1>Admin Dashboard</h1>
                    </div>

                    <div className="admin-header-right">
                        <button
                            className="admin-notification-btn"
                            onClick={() => setShowNotifications(!showNotifications)} // Toggle notification dropdown
                        >
                            <Bell size={20} />
                            {dashboardStats.notifications > 0 && (
                                <span className="admin-notification-badge">{dashboardStats.notifications}</span>
                            )}
                        </button>
                        {/* Notifications Dropdown */}
                        {showNotifications && (
                            <div className="admin-notification-dropdown">
                                <div className="dropdown-header">
                                    <h4>Notifications ({notifications.length})</h4>
                                    <button className="clear-all-btn">Clear All</button>
                                </div>
                                <div className="notification-list">
                                    {notifications.length > 0 ? (
                                        notifications.map(notif => (
                                            <div key={notif.id} className={`notification-item notification-item-${notif.type}`}>
                                                <p>{notif.message}</p>
                                                <span>{notif.time}</span>
                                            </div>
                                        ))
                                    ) : (
                                        <p className="no-notifications">No new notifications.</p>
                                    )}
                                </div>
                            </div>
                        )}

                        <button
                            className="admin-theme-toggle"
                            onClick={() => setDarkMode(!darkMode)}
                        >
                            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                        </button>

                        <div className="admin-user-menu">
                            <div className="admin-user-avatar">A</div>
                            <span>Admin User</span>
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="admin-content">
                    {renderContent()}
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;