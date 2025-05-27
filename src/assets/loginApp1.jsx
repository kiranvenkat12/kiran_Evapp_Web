// LoginApp1.jsx
import React, { useState } from 'react';
import './loginApp1.css';
import { FaUserTie, FaBuilding, FaUserShield } from 'react-icons/fa';

const LoginApp1 = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [selectedRole, setSelectedRole] = useState('');
    const [apiUrl, setApiUrl] = useState(''); // Add your API URL here

    const handleRoleSelect = (role) => {
        setSelectedRole(role);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can use fetch or axios with the apiUrl
        // Example:
        // fetch(`${apiUrl}/login`, { method: 'POST', body: JSON.stringify(data) })
    };

    const renderRoleSelection = () => (
        <div className="role-selection">
            <h2>Select Your Role</h2>
            <div className="role-options">
                <div onClick={() => handleRoleSelect('Employee')} className="role-card">
                    <FaUserTie size={30} />
                    <span>Employee</span>
                </div>
                <div onClick={() => handleRoleSelect('Employer')} className="role-card">
                    <FaBuilding size={30} />
                    <span>Employer</span>
                </div>
                {isLogin && (
                    <div onClick={() => handleRoleSelect('Admin')} className="role-card">
                        <FaUserShield size={30} />
                        <span>Admin</span>
                    </div>
                )}
            </div>
        </div>
    );

    const renderForm = () => (
        <form onSubmit={handleSubmit} className="form-section">
            {isLogin ? (
                <>
                    <h2>{selectedRole} Login</h2>
                    <input type="email" placeholder="Email" required />
                    <input type="password" placeholder="Password" required />
                    <div className="form-options">
                        <label><input type="checkbox" /> Remember me</label>
                        <span className="forgot-password">Forgot password?</span>
                    </div>
                    <button type="submit">Login</button>
                    <div className="divider">-----Or continue with-----</div>
                    <button type="button" className="google-button">Continue with Google</button>
                </>
            ) : (
                <>
                    <h2>{selectedRole} Register</h2>
                    <input type="text" placeholder="Full Name" required />
                    <input type="email" placeholder="Email" required />
                    <input type="password" placeholder="Password" required />
                    <input type="password" placeholder="Confirm Password" required />
                    <label className="terms"><input type="checkbox" required /> I agree to the terms</label>
                    <button type="submit">Create Account</button>
                </>
            )}
        </form>
    );

    return (
        <div className="login-app-wrapper">
            <div className="login-card">
                <div className="left-container">
                    <h1>EVAAP</h1>
                    <img src="./src/assets/Components/service_page_Images/preEmployementBackground.jpg" alt="EVEAP"  className="logo"/>
                    <p className="quote">Your Professional Gateway</p>
                    <p className="description">Manage job applications, candidates, and more.</p>
                </div>
                <div className="right-container">
                    <div className="tab-buttons">
                        <button onClick={() => { setIsLogin(true); setSelectedRole(''); }}>Login</button>
                        <button onClick={() => { setIsLogin(false); setSelectedRole(''); }}>Register</button>
                    </div>
                    {/*<div className="form-options">*/}
                    {/*    <label><input type="checkbox" /> Remember me</label>*/}
                    {/*    <span className="forgot-password">Forgot password?</span>*/}
                    {/*</div>*/}

                    {selectedRole === '' ? renderRoleSelection() : renderForm()}

                    <button className="back-button" onClick={() => setSelectedRole('')}>&lt; Back</button>
                </div>
            </div>
        </div>
    );

};

export default LoginApp1;
