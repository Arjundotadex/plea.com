import { useState } from 'react';
import svgPaths from '../imports/svg-shiy9d4c02';
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

// Microphone icon for voice recording
function MicrophoneIcon() {
  return (
    <svg className="w-[16px] h-[25px]" fill="none" viewBox="0 0 16 25">
      <g>
        <path 
          d={svgPaths.p3444cc00} 
          stroke="#E5EBF0" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth="2" 
        />
        <path 
          d={svgPaths.p116919c0} 
          stroke="#E5EBF0" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth="2" 
        />
        <path 
          d="M8.00244 19.8182V24" 
          stroke="#E5EBF0" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth="2" 
        />
        <path 
          d="M4.00098 24H12.0037" 
          stroke="#E5EBF0" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth="2" 
        />
      </g>
    </svg>
  );
}

type DescribeYourIssueProps = {
  onContinue?: () => void;
  onLogoClick?: () => void;
};

export default function DescribeYourIssue({ onContinue, onLogoClick }: DescribeYourIssueProps) {
  const [issueDescription, setIssueDescription] = useState('');
  const isDescriptionValid = issueDescription.trim().length >= 15;

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#325368] to-[#1e3a4a] relative overflow-hidden">
      {/* Header/Navigation */}
      <Header onLogoClick={onLogoClick} />

      {/* Progress Bar */}
      <div className="animate-[fadeIn_0.8s_ease-out_0.2s_both]">
        <ProgressBar currentStep={2} />
      </div>

      {/* Main Content */}
      <main className="w-full max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16 py-8 lg:py-12">
        {/* Heading */}
        <h1 className="font-['Roboto_Serif',serif] font-semibold text-white text-[32px] sm:text-[40px] lg:text-[48px] text-center mb-8 lg:mb-12 capitalize animate-[fadeInUp_0.8s_ease-out_0.4s_both]">
          Describe Your Issue
        </h1>

        {/* Text Area */}
        <div className="relative w-full max-w-[637px] mx-auto mb-2 animate-[fadeInUp_0.8s_ease-out_0.6s_both]">
          <textarea
            value={issueDescription}
            onChange={(e) => setIssueDescription(e.target.value)}
            placeholder="Describe your issue… e.g. Husband refuses to sign divorce papers."
            className="w-full h-[160px] p-6 bg-[#e5ebf0] rounded-[24px] font-['Roboto',sans-serif] text-[#325368] text-[16px] resize-none focus:outline-none focus:ring-2 focus:ring-[#FF7034] transition-all placeholder:text-[#6b6b6b]"
          />
        </div>
        
        <div className="max-w-[600px] mx-auto mb-4 px-4 animate-[fadeInUp_0.8s_ease-out_0.7s_both]">
          <p className="text-white/60 text-[13px] leading-relaxed text-center font-['Roboto',sans-serif]">
            Please describe your case truthfully and clearly. Your information will guide real legal review. 
            Submitting incomplete, inaccurate, or casual information may delay help or make it harder for us to assist you.
          </p>
        </div>
        
        {!isDescriptionValid && issueDescription.trim().length > 0 && (
          <p className="text-[#FF7034] text-[14px] text-center mb-4 font-medium animate-[fadeInUp_0.4s_ease-out]">Please provide a bit more detail (at least 15 characters)</p>
        )}

        {/* Instruction Text */}
        <p className="font-['Roboto',sans-serif] font-medium text-white text-[16px] sm:text-[18px] text-center mb-12 lg:mb-16 max-w-2xl mx-auto animate-[fadeInUp_0.8s_ease-out_0.8s_both]">
          Briefly explain your legal issue.
        </p>

        {/* Continue Button */}
        <div className="flex flex-col items-center gap-4 animate-[fadeInUp_0.8s_ease-out_1s_both]">
          <button 
            onClick={onContinue}
            disabled={!isDescriptionValid}
            className={`w-full max-w-[280px] h-[52px] flex items-center justify-center rounded-[30px] shadow-[0px_4px_10px_0px_rgba(255,112,52,0.3)] font-['Roboto_Serif',serif] font-bold text-white text-[18px] transition-all ${
              isDescriptionValid
                ? 'bg-[#FF7034] hover:bg-[#ff8a4d] cursor-pointer hover:scale-105 active:scale-95'
                : 'bg-[#FF7034]/50 cursor-not-allowed opacity-70'
            }`}
          >
            Continue →
          </button>

          <p className="font-['Roboto_Serif',serif] font-medium text-white text-[14px] sm:text-[16px] text-center">
            Takes less than 1 minute. No commitment required.
          </p>
        </div>
      </main>
    </div>
  );
}