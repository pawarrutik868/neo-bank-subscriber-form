import React, { useState } from 'react';
import './SubscriberRegistration.css';

const SubscriberRegistration = () => {
  const [formData, setFormData] = useState({
    registerWith: 'pan',
    applicantType: 'individual',
    statusOfApplicant: 'citizen',
    accountType: 'tier1and2',
    howDidYouHear: '',
    pan: '',
    dob: '',
    ckycConsent: false
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="SubscriberRegistration-container">
      {/* Header */}
      <header className="SubscriberRegistration-header">
        <div className="SubscriberRegistration-logo-section">
          <div className="SubscriberRegistration-logo">
            <div className="SubscriberRegistration-logo-icon"></div>
            <div className="SubscriberRegistration-logo-text">
              <span className="SubscriberRegistration-bank-name">Neo Bank</span>
              <span className="SubscriberRegistration-bank-subtitle">NEO BANK</span>
              <span className="SubscriberRegistration-bank-tagline">Build a better Life</span>
            </div>
          </div>
        </div>
        <div className="SubscriberRegistration-nps-section">
          <h1 className="SubscriberRegistration-nps-title">National Pension System</h1>
          <p className="SubscriberRegistration-nps-subtitle">
            <span className="SubscriberRegistration-hindi">Retired life ka sahara, </span>
            <span className="SubscriberRegistration-nps-text">NPS</span>
            <span className="SubscriberRegistration-hindi"> hamara</span>
          </p>
        </div>
      </header>

      {/* Help Section */}
      <div className="SubscriberRegistration-help-section">
        <span>For assistance, please contact our HelpDesk: </span>
        <a href="mailto:mynpsassist@proteantech.in" className="SubscriberRegistration-help-link">
          mynpsassist@proteantech.in
        </a>
      </div>

      {/* Main Content */}
      <div className="SubscriberRegistration-main-content">
        <h2 className="SubscriberRegistration-page-title">Online Subscriber Registration</h2>
        
        <div className="SubscriberRegistration-cookie-notice">
          * Please ensure "Cookies" are enabled in your browser before proceeding for Registration
        </div>

        <div className="SubscriberRegistration-content-wrapper">
          {/* Left Sidebar */}
          <aside className="SubscriberRegistration-sidebar">
            <div className="SubscriberRegistration-nav-item SubscriberRegistration-nav-item-active">
              New Registration
            </div>
            <div className="SubscriberRegistration-nav-item">
              Complete Pending Registration
            </div>
            <div className="SubscriberRegistration-nav-item">
              OTP Authenticate / eSign / View Registration Form
            </div>
          </aside>

          {/* Main Form */}
          <main className="SubscriberRegistration-form-section">
            <div className="SubscriberRegistration-form-container">
              <h3 className="SubscriberRegistration-form-title">New Registration</h3>
              
              <p className="SubscriberRegistration-form-subtitle">Choose appropriate options</p>

              <form onSubmit={handleSubmit}>
                {/* Register With Section */}
                <div className="SubscriberRegistration-form-group">
                  <label className="SubscriberRegistration-section-label">Register With</label>
                  <div className="SubscriberRegistration-options-grid">
                    <div className="SubscriberRegistration-option-column">
                      <label className="SubscriberRegistration-radio-label">
                        <input
                          type="radio"
                          name="registerWith"
                          value="aadhaar"
                          checked={formData.registerWith === 'aadhaar'}
                          onChange={handleInputChange}
                          className="SubscriberRegistration-radio-input"
                        />
                        <span className="SubscriberRegistration-radio-text">Aadhaar Offline e-KYC</span>
                      </label>
                      
                      <label className="SubscriberRegistration-radio-label">
                        <input
                          type="radio"
                          name="registerWith"
                          value="digilocker"
                          checked={formData.registerWith === 'digilocker'}
                          onChange={handleInputChange}
                          className="SubscriberRegistration-radio-input"
                        />
                        <span className="SubscriberRegistration-radio-text">Document with DigiLocker</span>
                      </label>
                    </div>
                    
                    <div className="SubscriberRegistration-option-column">
                      <label className="SubscriberRegistration-radio-label">
                        <input
                          type="radio"
                          name="registerWith"
                          value="existing"
                          checked={formData.registerWith === 'existing'}
                          onChange={handleInputChange}
                          className="SubscriberRegistration-radio-input"
                        />
                        <span className="SubscriberRegistration-radio-text">Existing Customer of Bank</span>
                      </label>
                      
                      <label className="SubscriberRegistration-radio-label">
                        <input
                          type="radio"
                          name="registerWith"
                          value="pan"
                          checked={formData.registerWith === 'pan'}
                          onChange={handleInputChange}
                          className="SubscriberRegistration-radio-input"
                        />
                        <span className="SubscriberRegistration-radio-text">Permanent Account Number (PAN)</span>
                      </label>
                    </div>
                  </div>
                </div>

                {/* Applicant Type Section */}
                <div className="SubscriberRegistration-form-group">
                  <label className="SubscriberRegistration-section-label">
                    Applicant Type<span className="SubscriberRegistration-required">*</span>
                  </label>
                  <div className="SubscriberRegistration-options-grid">
                    <div className="SubscriberRegistration-option-column">
                      <label className="SubscriberRegistration-radio-label">
                        <input
                          type="radio"
                          name="applicantType"
                          value="individual"
                          checked={formData.applicantType === 'individual'}
                          onChange={handleInputChange}
                          className="SubscriberRegistration-radio-input"
                        />
                        <span className="SubscriberRegistration-radio-text">Individual Subscriber</span>
                      </label>
                      
                      <label className="SubscriberRegistration-radio-label">
                        <input
                          type="radio"
                          name="applicantType"
                          value="minor"
                          checked={formData.applicantType === 'minor'}
                          onChange={handleInputChange}
                          className="SubscriberRegistration-radio-input"
                        />
                        <span className="SubscriberRegistration-radio-text">NPS Vatsalya (Minor) Subscriber</span>
                      </label>
                    </div>
                    
                    <div className="SubscriberRegistration-option-column">
                      <label className="SubscriberRegistration-radio-label">
                        <input
                          type="radio"
                          name="applicantType"
                          value="corporate"
                          checked={formData.applicantType === 'corporate'}
                          onChange={handleInputChange}
                          className="SubscriberRegistration-radio-input"
                        />
                        <span className="SubscriberRegistration-radio-text">Corporate Subscriber</span>
                      </label>
                    </div>
                  </div>
                </div>

                {/* Status of Applicant Section */}
                <div className="SubscriberRegistration-form-group">
                  <label className="SubscriberRegistration-section-label">Status of Applicant</label>
                  <div className="SubscriberRegistration-options-grid">
                    <div className="SubscriberRegistration-option-column">
                      <label className="SubscriberRegistration-radio-label">
                        <input
                          type="radio"
                          name="statusOfApplicant"
                          value="citizen"
                          checked={formData.statusOfApplicant === 'citizen'}
                          onChange={handleInputChange}
                          className="SubscriberRegistration-radio-input"
                        />
                        <span className="SubscriberRegistration-radio-text">Citizens of India</span>
                      </label>
                    </div>
                  </div>
                </div>

                {/* Account Type Section */}
                <div className="SubscriberRegistration-form-group">
                  <label className="SubscriberRegistration-section-label">Account Type</label>
                  <div className="SubscriberRegistration-options-grid">
                    <div className="SubscriberRegistration-option-column">
                      <label className="SubscriberRegistration-radio-label">
                        <input
                          type="radio"
                          name="accountType"
                          value="tier1and2"
                          checked={formData.accountType === 'tier1and2'}
                          onChange={handleInputChange}
                          className="SubscriberRegistration-radio-input"
                        />
                        <span className="SubscriberRegistration-radio-text">Tier I & Tier II</span>
                      </label>
                    </div>
                    
                    <div className="SubscriberRegistration-option-column">
                      <label className="SubscriberRegistration-radio-label">
                        <input
                          type="radio"
                          name="accountType"
                          value="tier1only"
                          checked={formData.accountType === 'tier1only'}
                          onChange={handleInputChange}
                          className="SubscriberRegistration-radio-input"
                        />
                        <span className="SubscriberRegistration-radio-text">Tier I only</span>
                      </label>
                    </div>
                  </div>
                </div>

                {/* How did you hear about NPS */}
                <div className="SubscriberRegistration-form-group">
                  <label className="SubscriberRegistration-section-label">
                    How did you hear about NPS <span className="SubscriberRegistration-required">*</span>
                  </label>
                  <select
                    name="howDidYouHear"
                    value={formData.howDidYouHear}
                    onChange={handleInputChange}
                    className="SubscriberRegistration-select"
                  >
                    <option value="">SELECT</option>
                    <option value="advertisement">Advertisement</option>
                    <option value="friend">Friend/Family</option>
                    <option value="internet">Internet</option>
                    <option value="branch">Bank Branch</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <h4 className="SubscriberRegistration-details-title">Please enter the following details</h4>

                {/* POP Name */}
                <div className="SubscriberRegistration-form-group">
                  <label className="SubscriberRegistration-field-label">POP Name</label>
                  <div className="SubscriberRegistration-readonly-field">NEO BANK LIMITED</div>
                </div>

                {/* Enter PAN */}
                <div className="SubscriberRegistration-form-group">
                  <label className="SubscriberRegistration-field-label">
                    Enter PAN <span className="SubscriberRegistration-required">*</span>
                  </label>
                  <input
                    type="text"
                    name="pan"
                    value={formData.pan}
                    onChange={handleInputChange}
                    className="SubscriberRegistration-input"
                    placeholder="Enter PAN"
                  />
                </div>

                {/* Enter Date of Birth */}
                <div className="SubscriberRegistration-form-group">
                  <label className="SubscriberRegistration-field-label">
                    Enter Date of Birth <span className="SubscriberRegistration-required">*</span>
                  </label>
                  <input
                    type="text"
                    name="dob"
                    value={formData.dob}
                    onChange={handleInputChange}
                    placeholder="(DD/MM/YYYY)"
                    className="SubscriberRegistration-input SubscriberRegistration-date-input"
                  />
                </div>

                {/* CKYC Consent */}
                <div className="SubscriberRegistration-form-group">
                  <label className="SubscriberRegistration-checkbox-label">
                    <input
                      type="checkbox"
                      name="ckycConsent"
                      checked={formData.ckycConsent}
                      onChange={handleInputChange}
                      className="SubscriberRegistration-checkbox"
                    />
                    <span className="SubscriberRegistration-checkbox-text">
                      I give my consent to download my KYC Records from the Central KYC Registry (CKYCR), only for the purpose of 
                      verification of my identity and address from the database of CKYCR Registry. I understand that my KYC Records includes 
                      my KYC Records/Personal information such as my name, address, date of birth, PAN number etc.
                    </span>
                  </label>
                </div>

                {/* Submit Button */}
                <div className="SubscriberRegistration-submit-section">
                  <button 
                    type="submit" 
                    className="SubscriberRegistration-submit-button"
                    disabled={!formData.ckycConsent}
                  >
                    Verify CKYC Details
                  </button>
                </div>
              </form>
            </div>
          </main>
        </div>
      </div>

      {/* Notes Section */}
      <div className="SubscriberRegistration-notes-section">
        <h4 className="SubscriberRegistration-notes-title">Note</h4>
        <ul className="SubscriberRegistration-notes-list">
          <li>
            Tier I is the mandatory account for long-term savings. Invest in Tier I account to avail exclusive Tax benefit upto Rs.50,000 u/s 80CCD(1B). 
            Tax Benefit is not available for NPS Vatsalya (Minor) Subscriber.
          </li>
          <li>
            Tier II (Not Applicable for NPS Vatsalya [Minor] Subscriber) is an add-on account which provides you the flexibility to invest and withdraw from various schemes available in 
            NPS without any exit load.
          </li>
          <li>
            Government employees who are mandatorily covered under NPS shall approach their Nodal Offices for PRAN generation.
          </li>
        </ul>
      </div>

      {/* Footer */}
      <footer className="SubscriberRegistration-footer">
        <div className="SubscriberRegistration-footer-content">
          <p className="SubscriberRegistration-browser-info">
            Best viewed in Google Chrome 30.x or higher, Mozilla Firefox 27.x or higher & Internet Explorer 11.x or higher with a resolution of 1024 X 768.
          </p>
          <div className="SubscriberRegistration-footer-right">
            <a href="#" className="SubscriberRegistration-privacy-link">Privacy Policy</a>
          </div>
        </div>
        <div className="SubscriberRegistration-footer-bottom">
          <div className="SubscriberRegistration-protean-logo"></div>
          <span className="SubscriberRegistration-powered-text">Powered & Maintained by Protean eGov Technologies Ltd.</span>
        </div>
      </footer>
    </div>
  );
};

export default SubscriberRegistration;