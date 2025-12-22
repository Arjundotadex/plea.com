import svgPaths from '../imports/svg-23i37qxptk';
import imgLawyer from 'figma:asset/b98188831a3933f358c227a30dc107a47f833da6.png';
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

// Success checkmark icon
function SuccessCheckmark() {
  return (
    <div className="w-[78px] h-[78px] animate-[scaleIn_0.6s_ease-out]">
      <svg className="w-full h-full" fill="none" viewBox="0 0 78 78">
        <circle cx="39" cy="39" r="39" fill="#1CA099" className="animate-[pulse_2s_ease-in-out_infinite]" />
        <path 
          clipRule="evenodd" 
          d={svgPaths.p33ef9000} 
          fill="white" 
          fillRule="evenodd"
          className="animate-[drawCheck_0.5s_ease-out_0.3s_both]"
        />
      </svg>
    </div>
  );
}

type ConfirmationProps = {
  onContinue?: () => void;
  onLogoClick?: () => void;
};

export default function Confirmation({ onContinue, onLogoClick }: ConfirmationProps) {
  const timelineItems = [
    { number: '1', text: 'Our team reviews your case details.' },
    { number: '2', text: 'We may contact you for clarification.' },
    { number: '3', text: 'We’ll discuss next steps.' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#325368] to-[#1e3a4a] relative overflow-hidden">
      {/* Header/Navigation */}
      <Header onLogoClick={onLogoClick} />
      
      {/* Progress Bar */}
      <div className="animate-[fadeIn_0.8s_ease-out_0.2s_both]">
        <ProgressBar currentStep={6} />
      </div>

      {/* Main Content */}
      <main className="w-full max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16 py-8 lg:py-12">
        {/* Success Icon */}
        <div className="flex justify-center mb-8">
          <SuccessCheckmark />
        </div>

        {/* Heading */}
        <h1 className="font-['Roboto_Serif',serif] font-semibold text-white text-[28px] sm:text-[36px] lg:text-[48px] text-center mb-6 capitalize animate-[fadeInUp_0.8s_ease-out_0.4s_both] px-4">
          Your Case Has Been Successfully Submitted 🎉
        </h1>

        {/* Subtitle */}
        <p className="font-['Roboto',sans-serif] text-white text-[16px] sm:text-[17px] md:text-[18px] text-center mb-8 lg:mb-10 max-w-2xl mx-auto animate-[fadeInUp_0.8s_ease-out_0.6s_both] px-4">
          Thank you for submitting your case. A verified human from Plea will review your information and reach out to you shortly.
        </p>

        {/* Case Summary Card */}
        <div className="bg-[#d0eae6] rounded-[7px] p-6 max-w-[589px] mx-auto mb-10 lg:mb-12 animate-[fadeInUp_0.8s_ease-out_0.8s_both] hover:shadow-xl transition-shadow">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-4">
            {/* Plea Icon/Logo placeholder */}
            <div className="w-[60px] h-[60px] shrink-0 bg-[#325368] rounded-full flex items-center justify-center text-white font-bold">
              P
            </div>

            {/* Case Info */}
            <div className="flex-1 min-w-0">
              <p className="font-['Roboto_Serif',serif] font-medium text-[#264456] text-[18px] mb-2">
                Case Submission
              </p>
              <p className="font-['Roboto',sans-serif] text-[#1d1c22] text-[16px]">
                Under Review
              </p>
            </div>

            {/* Status - Mobile: Below, Desktop: Right */}
            <div className="w-full sm:w-auto sm:text-right">
              <p className="font-['Roboto_Serif',serif] text-[#1d1c22] text-[18px] mb-2">
                Free Review
              </p>
              <p className="font-['Roboto',sans-serif] text-[#1d1c22] text-[16px]">
                Response within: 24–48 hours
              </p>
            </div>
          </div>

          <p className="font-['Roboto',sans-serif] text-[#1d1c22] text-[16px]">
            Case status: <span className="font-medium text-[#325368]">Processing</span>
          </p>
        </div>

        {/* What Happens Next */}
        <div className="max-w-[589px] mx-auto mb-8 lg:mb-10 animate-[fadeInUp_0.8s_ease-out_1s_both]">
          <ul className="space-y-4 text-white font-['Roboto',sans-serif] text-[16px] sm:text-[18px] px-4">
            {timelineItems.map((item) => (
              <li key={item.number} className="leading-relaxed flex gap-3">
                <span>{item.number}️⃣</span> {item.text}
              </li>
            ))}
          </ul>
        </div>

        {/* Back to Home Button */}
        <div className="flex justify-center mb-8 animate-[fadeInUp_0.8s_ease-out_1.2s_both]">
          <button 
            onClick={onContinue}
            className="w-full max-w-[280px] h-[52px] flex items-center justify-center bg-[#FF7034] rounded-[30px] shadow-[0px_4px_10px_0px_rgba(255,112,52,0.3)] font-['Roboto_Serif',serif] font-medium text-white text-[18px] hover:bg-[#ff8a4d] transition-all hover:scale-105 active:scale-95"
          >
            Back to Home
          </button>
        </div>

        {/* Security Notice */}
        <p className="font-['Roboto',sans-serif] text-white text-[16px] sm:text-[18px] text-center max-w-[589px] mx-auto animate-[fadeIn_0.8s_ease-out_1.4s_both] px-4">
          Your information is secure, encrypted, and only reviewed by the Plea team.
        </p>
      </main>
    </div>
  );
}