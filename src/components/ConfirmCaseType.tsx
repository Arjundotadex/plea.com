import { useState } from 'react';
import svgPaths from '../imports/svg-fp8q23hit9';
import { Search } from 'lucide-react';
import ProgressBar from './ProgressBar';
import Header from './Header';

type ConfirmCaseTypeProps = {
  onContinue?: () => void;
  onLogoClick?: () => void;
};

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

type CaseTypeButtonProps = {
  text: string;
  selected?: boolean;
  onClick?: () => void;
};

function CaseTypeButton({ text, selected = false, onClick }: CaseTypeButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`px-3 sm:px-4 py-2 rounded-[40px] font-['Roboto',sans-serif] text-[13px] sm:text-[14px] md:text-[16px] transition-all hover:scale-105 ${
        selected
          ? 'bg-[#d0eae6] text-[#325367] border-2 border-[#FF7034] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]'
          : 'bg-[#e5ebf0] text-[#6b6b6b] hover:bg-[#d5dbe0]'
      }`}
    >
      {text}
    </button>
  );
}

export default function ConfirmCaseType({ onContinue, onLogoClick }: ConfirmCaseTypeProps) {
  const [selectedCase, setSelectedCase] = useState('Divorce');
  const [searchQuery, setSearchQuery] = useState('Divorce');

  const caseTypes = [
    'Divorce',
    'Property Dispute',
    'Fraud',
    'Cyber Crime',
    'Employment',
    'Tenant/Landlord'
  ];

  const handleCaseTypeClick = (caseType: string) => {
    setSelectedCase(caseType);
    setSearchQuery(caseType);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#325368] to-[#1e3a4a] relative overflow-hidden">
      {/* Header/Navigation */}
      <Header onLogoClick={onLogoClick} />

      {/* Progress Bar */}
      <div className="animate-[fadeIn_0.8s_ease-out_0.2s_both]">
        <ProgressBar currentStep={1} />
      </div>

      {/* Main Content */}
      <main className="w-full max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16 py-8 lg:py-12">
        {/* Heading */}
        <h1 className="font-['Roboto_Serif',serif] font-semibold text-white text-[32px] sm:text-[40px] lg:text-[48px] text-center mb-8 lg:mb-12 capitalize animate-[fadeInUp_0.8s_ease-out_0.4s_both]">
          Confirm your case type
        </h1>

        {/* Search Bar */}
        <div className="relative w-full max-w-[637px] mx-auto mb-6 animate-[fadeInUp_0.8s_ease-out_0.6s_both]">
          <div className="absolute left-8 top-1/2 -translate-y-1/2 text-[#325368] w-6 h-6">
            <Search className="w-full h-full" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full h-[54px] pl-16 pr-6 bg-[#e5ebf0] rounded-[43px] font-['Roboto',sans-serif] text-[#325368] text-[16px] sm:text-[18px] focus:outline-none focus:ring-2 focus:ring-[#FF7034] transition-all"
          />
        </div>

        {/* Instruction Text */}
        <p className="font-['Roboto',sans-serif] font-medium text-white text-[16px] sm:text-[18px] text-center mb-8 animate-[fadeInUp_0.8s_ease-out_0.8s_both]">
          Choose the option that matches best your issue
        </p>

        {/* Case Type Buttons */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mb-12 lg:mb-16 max-w-4xl mx-auto animate-[fadeInUp_0.8s_ease-out_1s_both]">
          {caseTypes.map((caseType, index) => (
            <div
              key={caseType}
              className="animate-[fadeInUp_0.6s_ease-out_both]"
              style={{ animationDelay: `${1.2 + index * 0.1}s` }}
            >
              <CaseTypeButton
                text={caseType}
                selected={selectedCase === caseType}
                onClick={() => handleCaseTypeClick(caseType)}
              />
            </div>
          ))}
        </div>

        {/* Continue Button */}
        <div className="flex flex-col items-center gap-4 animate-[fadeInUp_0.8s_ease-out_1.8s_both]">
          <button 
            onClick={onContinue}
            className="bg-[#FF7034] flex items-center gap-3 px-6 py-4 rounded-[6px] shadow-[0px_2px_6.9px_0px_rgba(0,0,0,0.25)] font-['Roboto_Serif',serif] font-bold text-[#e5ebf0] text-[16px] hover:bg-[#ff8a4d] transition-all hover:scale-105"
          >
            Continue
            <svg className="w-[24px] h-[15px]" fill="none" viewBox="0 0 26 15">
              <path d={svgPaths.p39cb0dc0} fill="white" />
            </svg>
          </button>

          <p className="font-['Roboto_Serif',serif] font-medium text-white text-[14px] sm:text-[16px] text-center">
            Takes less than 1 minute. No commitment required.
          </p>
        </div>
      </main>
    </div>
  );
}