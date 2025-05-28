import React, { useState, useEffect } from "react";
import "./CompanyProfile.css";
import axios from "axios";

const CompanyProfile = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [companyData, setCompanyData] = useState({
        name: "Hiscope Technologies",
        location: "Bangalore, India",
        email: "contact@hiscope.com",
        description: "We are a leading tech company specializing in AI-driven solutions.",
    });

    const handleInputChange = (e) => {
        setCompanyData({ ...companyData, [e.target.name]: e.target.value });
    };

    const handleSave = () => {
        // Save logic here (e.g., axios.put)
        setIsEditing(false);
    };

    return (
        <div className="company-profile">
            <div className="header">
                <h2>Company Profile</h2>
                <button className="edit-button" onClick={() => setIsEditing(!isEditing)}>
                    {isEditing ? "Cancel" : "Edit"}
                </button>
            </div>

            <div className="profile-content">
                {isEditing ? (
                    <form className="edit-form">
                        <label>
                            Company Name:
                            <input name="name" value={companyData.name} onChange={handleInputChange} />
                        </label>
                        <label>
                            Location:
                            <input name="location" value={companyData.location} onChange={handleInputChange} />
                        </label>
                        <label>
                            Email:
                            <input name="email" value={companyData.email} onChange={handleInputChange} />
                        </label>
                        <label>
                            Description:
                            <textarea name="description" value={companyData.description} onChange={handleInputChange} />
                        </label>
                        <button type="button" className="save-button" onClick={handleSave}>Save</button>
                    </form>
                ) : (
                    <div className="details">
                        <p><strong>Company Name:</strong> {companyData.name}</p>
                        <p><strong>Location:</strong> {companyData.location}</p>
                        <p><strong>Email:</strong> {companyData.email}</p>
                        <p><strong>Description:</strong> {companyData.description}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CompanyProfile;
