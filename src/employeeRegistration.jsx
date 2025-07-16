import { useState } from 'react';
import './employeeRegistration.css';

const steps = ['Personal Info', 'Education', 'Professional (Optional)', 'Documents', 'Consent'];

const EmployeeRegistration = () => {
  const [step, setStep] = useState(0);
  const [educationList, setEducationList] = useState([
    { institution: '', degree: '', field: '', graduationYear: '', grade: '', certificate: null }
  ]);

  const [formData, setFormData] = useState({
    fullName: '', email: '', phone: '', dob: '', address: '', profilePhoto: null,
    jobTitle: '', company: '', experience: '', employeeId: '',
    govIdFile: null, transcriptFile: null, skillsFile: [],
    consentTerms: false, consentVerify: false
  });

  const handleChange = (e) => {
    const { name, value, type, files, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'file' ? files[0] : type === 'checkbox' ? checked : value
    }));
  };

  const handleEducationChange = (index, e) => {
    const { name, value, type, files } = e.target;
    const updated = [...educationList];
    updated[index][name] = type === 'file' ? files[0] : value;
    setEducationList(updated);
  };

  const addEducation = () => {
    setEducationList([...educationList, { institution: '', degree: '', field: '', graduationYear: '', grade: '', certificate: null }]);
  };

  const removeEducation = (index) => {
    const updated = educationList.filter((_, i) => i !== index);
    setEducationList(updated);
  };

  const handleSkillsUpload = (e) => {
    setFormData(prev => ({ ...prev, skillsFile: Array.from(e.target.files) }));
  };

  const nextStep = () => setStep(prev => Math.min(prev + 1, steps.length - 1));
  const prevStep = () => setStep(prev => Math.max(prev - 1, 0));

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ ...formData, educationList });
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
                <label>
                  Upload passport-size photo
                  <input type="file" name="profilePhoto" accept="image/*" onChange={handleChange} />
                </label>
              </div>
          )}

          {step === 1 && (
              <div className="form-section">
                {educationList.map((edu, index) => (
                    <div key={index} className="education-block">
                      <input type="text" name="institution" placeholder="Institution" value={edu.institution} onChange={e => handleEducationChange(index, e)} required />
                      <input type="text" name="degree" placeholder="Degree" value={edu.degree} onChange={e => handleEducationChange(index, e)} required />
                      <input type="text" name="field" placeholder="Field of Study" value={edu.field} onChange={e => handleEducationChange(index, e)} required />
                      <input type="text" name="graduationYear" placeholder="Graduation Year" value={edu.graduationYear} onChange={e => handleEducationChange(index, e)} required />
                      <input type="text" name="grade" placeholder="Grade" value={edu.grade} onChange={e => handleEducationChange(index, e)} />
                      <label>
                        Upload education certificate
                        <input type="file" name="certificate" onChange={e => handleEducationChange(index, e)} />
                      </label>
                      {index > 0 && <button type="button" onClick={() => removeEducation(index)}>Remove</button>}
                    </div>
                ))}
                <button type="button" onClick={addEducation}>Add Education</button>
              </div>
          )}

          {step === 2 && (
              <div className="form-section">
                <h4>Professional Details (Optional)</h4>
                <small>Skip if you're a student or don't have work experience</small>
                <input type="text" name="jobTitle" placeholder="Job Title" onChange={handleChange} value={formData.jobTitle} />
                <input type="text" name="company" placeholder="Company" onChange={handleChange} value={formData.company} />
                <input type="text" name="experience" placeholder="Experience" onChange={handleChange} value={formData.experience} />
                <input type="text" name="employeeId" placeholder="Employee ID" onChange={handleChange} value={formData.employeeId} />
              </div>
          )}

          {step === 3 && (
              <div className="form-section">
                <label>
                  Upload Government ID Document
                  <input type="file" name="govIdFile" onChange={handleChange} />
                </label>
                <label>
                  Upload Academic Transcript
                  <input type="file" name="transcriptFile" onChange={handleChange} />
                </label>
                <label>
                  Upload skills or internship certificates (optional)
                  <input type="file" multiple onChange={handleSkillsUpload} />
                </label>
              </div>
          )}

          {step === 4 && (
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