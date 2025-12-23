import { useState } from 'react';
import svgPaths from '../imports/svg-mqsw9bykmf';
import ProgressBar from './ProgressBar';
import Header from './Header';

// Arrow icon for buttons
function ArrowIcon() {
  return (
    <svg className="w-[18px] h-[18px]" fill="none" viewBox="0 0 18 18">
      <g>
        <path d={svgPaths.p23f83f00} fill="white" />
      </g>
    </svg>
  );
}

// Arrow for Continue button
function ContinueArrow() {
  return (
    <svg className="w-[24px] h-[15px]" fill="none" viewBox="0 0 26 15">
      <path d={svgPaths.p39cb0dc0} fill="white" />
    </svg>
  );
}

// Google Icon
function GoogleIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none">
      <path d="M19.6 10.227c0-.709-.064-1.39-.182-2.045H10v3.868h5.382a4.6 4.6 0 01-1.996 3.018v2.51h3.232c1.891-1.742 2.982-4.305 2.982-7.351z" fill="#4285F4"/>
      <path d="M10 20c2.7 0 4.964-.895 6.618-2.423l-3.232-2.509c-.895.6-2.04.955-3.386.955-2.605 0-4.81-1.76-5.595-4.123H1.064v2.59A9.996 9.996 0 0010 20z" fill="#34A853"/>
      <path d="M4.405 11.9c-.2-.6-.314-1.24-.314-1.9 0-.66.114-1.3.314-1.9V5.51H1.064A9.996 9.996 0 000 10c0 1.614.386 3.14 1.064 4.49L4.405 11.9z" fill="#FBBC05"/>
      <path d="M10 3.977c1.468 0 2.786.505 3.823 1.496l2.868-2.868C14.959.99 12.695 0 10 0 6.09 0 2.71 2.24 1.064 5.51l3.34 2.59C5.19 5.737 7.395 3.977 10 3.977z" fill="#EA4335"/>
    </svg>
  );
}

// Apple Icon
function AppleIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 20 24" fill="currentColor">
      <path d="M17.769 13.493c-.027-2.852 2.327-4.224 2.433-4.293-1.327-1.94-3.393-2.206-4.127-2.235-1.756-.178-3.426 1.034-4.317 1.034-.89 0-2.267-1.007-3.724-.98-1.917.028-3.684 1.115-4.671 2.833-1.992 3.453-.51 8.565 1.431 11.368.95 1.373 2.082 2.915 3.568 2.86 1.432-.056 1.973-.925 3.705-.925 1.732 0 2.217.925 3.724.896 1.541-.027 2.51-1.374 3.452-2.753 1.09-1.597 1.538-3.142 1.565-3.22-.034-.015-3.002-1.152-3.039-4.585zM14.54 2.614c.79-.957 1.322-2.286 1.177-3.614-1.137.046-2.515.757-3.33 1.711-.731.846-1.372 2.197-1.201 3.495 1.27.099 2.567-.646 3.354-1.592z"/>
    </svg>
  );
}

type AccountSetupProps = {
  onContinue?: () => void;
  onLogoClick?: () => void;
};

export default function AccountSetup({ onContinue, onLogoClick }: AccountSetupProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    location: ''
  });

  const isFormValid = formData.fullName.trim() !== '' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#325368] to-[#1e3a4a] relative overflow-hidden">
      {/* Header/Navigation */}
      <Header onLogoClick={onLogoClick} />

      {/* Progress Bar */}
      <div className="animate-[fadeIn_0.8s_ease-out_0.2s_both]">
        <ProgressBar currentStep={5} />
      </div>

      {/* Main Content */}
      <main className="w-full max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16 py-8 lg:py-12">
        {/* Heading */}
        <h1 className="font-['Roboto_Serif',serif] font-semibold text-white text-[32px] sm:text-[40px] lg:text-[48px] text-center mb-8 lg:mb-12 animate-[fadeInUp_0.8s_ease-out_0.4s_both]">
          Share Your Contact Details
        </h1>

        {/* Contact Form */}
        <div className="w-full max-w-[637px] mx-auto space-y-4 animate-[fadeInUp_0.8s_ease-out_0.6s_both]">
          <input
            type="text"
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            placeholder="Full Name (Required)"
            className="w-full h-[54px] px-6 bg-[#e5ebf0] rounded-[43px] font-['Roboto',sans-serif] text-[#325368] text-[16px] sm:text-[18px] focus:outline-none focus:ring-2 focus:ring-[#FF7034] transition-all placeholder:text-[#6b6b6b]"
          />
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="Email (Required)"
            className="w-full h-[54px] px-6 bg-[#e5ebf0] rounded-[43px] font-['Roboto',sans-serif] text-[#325368] text-[16px] sm:text-[18px] focus:outline-none focus:ring-2 focus:ring-[#FF7034] transition-all placeholder:text-[#6b6b6b]"
          />
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="Phone Number (Optional)"
            className="w-full h-[54px] px-6 bg-[#e5ebf0] rounded-[43px] font-['Roboto',sans-serif] text-[#325368] text-[16px] sm:text-[18px] focus:outline-none focus:ring-2 focus:ring-[#FF7034] transition-all placeholder:text-[#6b6b6b]"
          />
          <input
            type="text"
            value={formData.location}
            onChange={(e) => setFormData({ ...formData, location: e.target.value })}
            placeholder="City / State (Optional)"
            className="w-full h-[54px] px-6 bg-[#e5ebf0] rounded-[43px] font-['Roboto',sans-serif] text-[#325368] text-[16px] sm:text-[18px] focus:outline-none focus:ring-2 focus:ring-[#FF7034] transition-all placeholder:text-[#6b6b6b]"
          />
          
          <p className="font-['Roboto',sans-serif] text-white text-[14px] text-center pt-2">
            Your details are only used to contact you about your case. We do not spam or sell your data.
          </p>
        </div>

        {/* Continue Button */}
        <div className="flex flex-col items-center gap-4 mt-12 animate-[fadeInUp_0.8s_ease-out_1.2s_both]">
          <button
            onClick={onContinue}
            disabled={!isFormValid}
            className={`flex items-center gap-3 px-6 py-4 rounded-[6px] shadow-[0px_2px_6.9px_0px_rgba(0,0,0,0.25)] font-['Roboto_Serif',serif] font-bold text-[#e5ebf0] text-[16px] transition-all ${
              isFormValid
                ? 'bg-[#FF7034] hover:bg-[#ff8a4d] cursor-pointer hover:scale-105'
                : 'bg-[#FF7034]/50 cursor-not-allowed opacity-70'
            }`}
          >
            Continue
            <svg className="w-[24px] h-[15px]" fill="none" viewBox="0 0 26 15">
              <path d={svgPaths.p39cb0dc0} fill="white" />
            </svg>
          </button>
        </div>
      </main>
    </div>
  );
}