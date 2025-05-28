import React from 'react';
import './VerifyEmployee.css'; // Make sure this contains the styles below

const VerifyEmployee = () => {
    return (
        <div className="verify-section">
            <h1 className="section-title">Verify Employee</h1>
            <p className="section-description">
                Enter the employee’s details to verify their identity and history.
            </p>

            <form className="verify-form" onSubmit={(e) => e.preventDefault()}>
                <div className="form-group">
                    <label className="form-label">Employee Name</label>
                    <input
                        type="text"
                        className="form-input"
                        placeholder="e.g. Jane Doe"
                    />
                </div>

                <div className="form-group">
                    <label className="form-label">Email Address</label>
                    <input
                        type="email"
                        className="form-input"
                        placeholder="e.g. jane@example.com"
                    />
                </div>

                <div className="form-group">
                    <label className="form-label">Previous Employer</label>
                    <input
                        type="text"
                        className="form-input"
                        placeholder="e.g. Acme Corp"
                    />
                </div>

                <div className="form-group">
                    <label className="form-label">Position Held</label>
                    <input
                        type="text"
                        className="form-input"
                        placeholder="e.g. Software Engineer"
                    />
                </div>

                <button className="btn btn-primary" type="submit">
                    Verify
                </button>
            </form>
        </div>
    );
};

export default VerifyEmployee;
