import { useState } from 'react';
import svgPaths from '../imports/svg-3mpelxa1ms';
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

// Checkmark icon for selected option
function CheckmarkIcon() {
  return (
    <svg className="w-3 h-3" fill="none" viewBox="0 0 12 9">
      <path 
        d="M1 4.5L4.5 8L11 1" 
        stroke="#d0eae6" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </svg>
  );
}

type UrgencyOptionProps = {
  title: string;
  description: string;
  selected: boolean;
  onClick: () => void;
};

function UrgencyOption({ title, description, selected, onClick }: UrgencyOptionProps) {
  return (
    <button
      onClick={onClick}
      className="flex gap-[33px] items-center w-full text-left transition-all hover:scale-[1.02]"
    >
      {/* Circle with optional checkmark */}
      <div className="relative shrink-0 w-[21px] h-[21px] flex items-center justify-center">
        {selected ? (
          // Filled circle with checkmark
          <div className="w-[21px] h-[21px] rounded-full bg-[#d0eae6] flex items-center justify-center">
            <CheckmarkIcon />
          </div>
        ) : (
          // Empty circle
          <svg className="block size-full" fill="none" viewBox="0 0 21 21">
            <circle 
              cx="10.5" 
              cy="10.5" 
              r="9.5" 
              stroke="white" 
              strokeWidth="2" 
            />
          </svg>
        )}
      </div>

      {/* Text content */}
      <div className="flex items-center gap-2 sm:gap-4 md:gap-6 lg:gap-[26px] text-white text-[16px] sm:text-[17px] md:text-[18px]">
        <span className="font-['Roboto',sans-serif] font-semibold whitespace-nowrap">
          {title}
        </span>
        <span className="font-['Roboto',sans-serif] font-normal">
          {description}
        </span>
      </div>
    </button>
  );
}

type CaseUrgencyProps = {
  onContinue?: () => void;
  onLogoClick?: () => void;
};

export default function CaseUrgency({ onContinue, onLogoClick }: CaseUrgencyProps) {
  const [selectedUrgency, setSelectedUrgency] = useState<'immediate' | 'urgent' | 'standard' | null>(null);

  const urgencyOptions = [
    { 
      key: 'immediate' as const, 
      title: 'Immediate', 
      description: 'I need this within 48 hours' 
    },
    { 
      key: 'urgent' as const, 
      title: 'Urgent', 
      description: 'Within 1 week' 
    },
    { 
      key: 'standard' as const, 
      title: 'Standard', 
      description: 'No rush—take the usual time' 
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#325368] to-[#1e3a4a] relative overflow-hidden">
      {/* Header/Navigation */}
      <Header onLogoClick={onLogoClick} hideNav={true} />

      {/* Progress Bar */}
      <div className="animate-[fadeIn_0.8s_ease-out_0.2s_both]">
        <ProgressBar currentStep={4} />
      </div>

      {/* Main Content */}
      <main className="w-full max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16 py-8 lg:py-12">
        {/* Heading */}
        <h1 className="font-['Roboto_Serif',serif] font-semibold text-white text-[32px] sm:text-[40px] lg:text-[48px] text-center mb-8 lg:mb-12 capitalize animate-[fadeInUp_0.8s_ease-out_0.4s_both]">
          How urgent is your case?
        </h1>

        {/* Urgency Options */}
        <div className="flex flex-col gap-8 max-w-[637px] mx-auto mb-12 lg:mb-16 animate-[fadeInUp_0.8s_ease-out_0.6s_both]">
          {urgencyOptions.map((option, index) => (
            <div
              key={option.key}
              className="animate-[fadeInUp_0.6s_ease-out_both]"
              style={{ animationDelay: `${0.8 + index * 0.15}s` }}
            >
              <UrgencyOption
                title={option.title}
                description={option.description}
                selected={selectedUrgency === option.key}
                onClick={() => setSelectedUrgency(option.key)}
              />
            </div>
          ))}
        </div>

        {/* Continue Button */}
        <div className="flex flex-col items-center gap-4 animate-[fadeInUp_0.8s_ease-out_1.3s_both]">
          <button
            onClick={onContinue}
            disabled={!selectedUrgency}
            className={`flex items-center gap-3 px-6 py-4 rounded-[6px] shadow-[0px_2px_6.9px_0px_rgba(0,0,0,0.25)] font-['Roboto_Serif',serif] font-bold text-[#e5ebf0] text-[16px] transition-all ${
              selectedUrgency
                ? 'bg-[#FF7034] hover:bg-[#ff8a4d] cursor-pointer hover:scale-105'
                : 'bg-[#FF7034]/50 cursor-not-allowed'
            }`}
          >
            Continue
            <ContinueArrow />
          </button>

          <p className="font-['Roboto_Serif',serif] font-medium text-white text-[14px] sm:text-[16px] text-center">
            Takes less than 1 minute. No commitment required.
          </p>
        </div>
      </main>
    </div>
  );
}