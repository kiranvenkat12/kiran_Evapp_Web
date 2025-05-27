import  { useState } from 'react';
import './CandidateDashBoard.css';

const CandidateDashboard = () => {
    const [profilePic, setProfilePic] = useState(null);
    const [formData, setFormData] = useState({
        name: 'John Doe',
        email: 'johndoe@example.com',
        phone: '9876543210',
        qualification: 'B.Tech',
        skills: 'React, Node.js',
    });

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setProfilePic(URL.createObjectURL(file));
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Updated Profile:', formData);
        alert('Profile updated successfully!');
    };

    return (
        <div className="dashboard-container">
            <h2>Candidate Dashboard</h2>
            <div className="profile-section">
                <div className="profile-image">
                    <img
                        src={profilePic || 'https://via.placeholder.com/150'}
                        alt="Profile"
                    />
                    <input type="file" onChange={handleImageChange} />
                </div>
                <form className="profile-form" onSubmit={handleSubmit}>
                    <label>
                        Name:
                        <input
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Email:
                        <input
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            type="email"
                        />
                    </label>
                    <label>
                        Phone:
                        <input
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            type="tel"
                        />
                    </label>
                    <label>
                        Qualification:
                        <input
                            name="qualification"
                            value={formData.qualification}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Skills:
                        <input
                            name="skills"
                            value={formData.skills}
                            onChange={handleChange}
                        />
                    </label>
                    <button type="submit">Save Changes</button>
                </form>
            </div>
        </div>
    );
};

export default CandidateDashboard;
