import React, { useState } from 'react';
import './EmployeeRegistration.css';

const steps = ['Personal Info', 'Education', 'Professional', 'Documents', 'References', 'Consent'];

const EmployeeRegistration = () => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    fullName: '', email: '', phone: '', dob: '', address: '', profilePhoto: null,
    institution: '', degree: '', field: '', graduationYear: '', grade: '', certificate: null,
    jobTitle: '', company: '', experience: '', employeeId: '',
    govIdNumber: '', govIdFile: null, transcriptFile: null,
    academicRefName: '', academicRefEmail: '', academicRefPhone: '',
    profRefName: '', profRefEmail: '', profRefPhone: '',
    consentTerms: false, consentVerify: false
  });

  const handleChange = (e) => {
    const { name, value, type, files, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'file' ? files[0] : type === 'checkbox' ? checked : value
    }));
  };

  const nextStep = () => setStep(prev => Math.min(prev + 1, steps.length - 1));
  const prevStep = () => setStep(prev => Math.max(prev - 1, 0));

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted successfully');
  };

  return (
      <div className="form-container">
        <h2>Employee Registration - EVVAP</h2>
        <div className="step-indicator">
          {steps.map((label, index) => (
              <div key={index} className={`step ${step === index ? 'active' : ''}`}>{label}</div>
          ))}
        </div>
        <form onSubmit={handleSubmit}>
          {step === 0 && (
              <div className="form-section">
                <input type="text" name="fullName" placeholder="Full Name" onChange={handleChange} value={formData.fullName} required />
                <input type="email" name="email" placeholder="Email" onChange={handleChange} value={formData.email} required />
                <input type="tel" name="phone" placeholder="Phone" onChange={handleChange} value={formData.phone} required />
                <input type="date" name="dob" onChange={handleChange} value={formData.dob} required />
                <textarea name="address" placeholder="Address" onChange={handleChange} value={formData.address} required />
                <input type="file" name="profilePhoto" accept="image/*" onChange={handleChange} />
              </div>
          )}

          {step === 1 && (
              <div className="form-section">
                <input type="text" name="institution" placeholder="Institution" onChange={handleChange} value={formData.institution} required />
                <input type="text" name="degree" placeholder="Degree" onChange={handleChange} value={formData.degree} required />
                <input type="text" name="field" placeholder="Field of Study" onChange={handleChange} value={formData.field} required />
                <input type="text" name="graduationYear" placeholder="Graduation Year" onChange={handleChange} value={formData.graduationYear} required />
                <input type="text" name="grade" placeholder="Grade" onChange={handleChange} value={formData.grade} />
                <input type="file" name="certificate" onChange={handleChange} />
              </div>
          )}

          {step === 2 && (
              <div className="form-section">
                <input type="text" name="jobTitle" placeholder="Job Title" onChange={handleChange} value={formData.jobTitle} />
                <input type="text" name="company" placeholder="Company" onChange={handleChange} value={formData.company} />
                <input type="text" name="experience" placeholder="Experience" onChange={handleChange} value={formData.experience} />
                <input type="text" name="employeeId" placeholder="Employee ID" onChange={handleChange} value={formData.employeeId} />
              </div>
          )}

          {step === 3 && (
              <div className="form-section">
                <input type="text" name="govIdNumber" placeholder="Govt. ID Number" onChange={handleChange} value={formData.govIdNumber} />
                <input type="file" name="govIdFile" onChange={handleChange} />
                <input type="file" name="transcriptFile" onChange={handleChange} />
              </div>
          )}

          {step === 4 && (
              <div className="form-section">
                <h4>Academic Reference</h4>
                <input type="text" name="academicRefName" placeholder="Name" onChange={handleChange} value={formData.academicRefName} />
                <input type="email" name="academicRefEmail" placeholder="Email" onChange={handleChange} value={formData.academicRefEmail} />
                <input type="tel" name="academicRefPhone" placeholder="Phone" onChange={handleChange} value={formData.academicRefPhone} />
                <h4>Professional Reference</h4>
                <input type="text" name="profRefName" placeholder="Name" onChange={handleChange} value={formData.profRefName} />
                <input type="email" name="profRefEmail" placeholder="Email" onChange={handleChange} value={formData.profRefEmail} />
                <input type="tel" name="profRefPhone" placeholder="Phone" onChange={handleChange} value={formData.profRefPhone} />
              </div>
          )}

          {step === 5 && (
              <div className="form-section">
                <label><input type="checkbox" name="consentTerms" onChange={handleChange} checked={formData.consentTerms} /> I agree to Terms & Conditions</label>
                <label><input type="checkbox" name="consentVerify" onChange={handleChange} checked={formData.consentVerify} /> I authorize verification</label>
              </div>
          )}

          <div className="form-navigation">
            {step > 0 && <button type="button" onClick={prevStep}>Previous</button>}
            {step < steps.length - 1 ? (
                <button type="button" onClick={nextStep}>Next</button>
            ) : (
                <button type="submit">Submit</button>
            )}
          </div>
        </form>
      </div>
  );
};

export default EmployeeRegistration;
