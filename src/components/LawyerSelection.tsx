import { useState } from 'react';
import imgLawyer from '../assets/lawyer.png'; // <-- make sure this file exists
import ProgressBar from './ProgressBar';
import Header from './Header';

/**
 * Fallback svgPaths: replace the path strings with the real ones
 * if you obtain proper SVG path data later. These are simple arrow shapes
 * used as placeholders so the component builds correctly.
 */
const svgPaths = {
  // small arrow used in LawyerCard button
  p23f83f00:
    'M2 9h10.586l-3.293 3.293 1.414 1.414L16.414 9l-5.707-5.707-1.414 1.414L12.586 8H2v2z',
  // arrow used for Continue button
  p39cb0dc0:
    'M0 7.5h18v-1H0v1zm12-5l6 5-6 5V12l3-4-3-4V2.5z',
};

// Arrow icon for buttons
function ArrowIcon() {
  return (
    <svg className="w-[18px] h-[18px]" fill="none" viewBox="0 0 18 18" aria-hidden>
      <g>
        <path d={svgPaths.p23f83f00} fill="white" />
      </g>
    </svg>
  );
}

// Arrow for Continue button
function ContinueArrow() {
  return (
    <svg className="w-[24px] h-[15px]" fill="none" viewBox="0 0 26 15" aria-hidden>
      <path d={svgPaths.p39cb0dc0} fill="white" />
    </svg>
  );
}

type LawyerCardProps = {
  name: string;
  specialty: string;
  price: string;
  successRate: string;
  selected: boolean;
  onClick: () => void;
};

function LawyerCard({ name, specialty, price, successRate, selected, onClick }: LawyerCardProps) {
  return (
    <button
      onClick={onClick}
      className={`w-full min-h-[85px] rounded-[8px] overflow-hidden relative transition-all hover:scale-[1.02] p-4 sm:p-0 ${
        selected ? 'bg-[#d0eae6] ring-2 ring-[#FF7034]' : 'bg-white'
      }`}
      type="button"
    >
      {/* Mobile/Tablet Layout */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 lg:hidden">
        <div className="flex items-center gap-4">
          <div className="w-[60px] h-[60px] shrink-0">
            <img
              src={imgLawyer}
              alt={name}
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <div className="flex flex-col gap-2 items-start text-left">
            <p className="font-['Roboto_Serif',serif] font-medium text-[#264456] text-[18px]">
              {name}
            </p>
            <p className="font-['Roboto',sans-serif] text-[#1d1c22] text-[16px]">
              {specialty}
            </p>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-2 items-start">
            <p className="font-['Roboto',sans-serif] text-[#1d1c22] text-[16px]">Affordable</p>
            <p className="font-['Roboto',sans-serif] text-[rgba(29,28,34,0.5)] text-[16px]">{price}</p>
          </div>
          <div className="flex gap-1 items-end">
            <p className="font-['Roboto_Serif',serif] font-medium text-[#264456] text-[18px]">
              {successRate}
            </p>
            <p className="font-['Roboto',sans-serif] text-[#1d1c22] text-[16px]">success rate</p>
          </div>
        </div>
      </div>

      {/* Desktop Layout - Absolute Positioning (only on lg+) */}
      <div className="hidden lg:block h-[85px] relative">
        <div className="absolute left-[25px] top-[13px] w-[60px] h-[60px]">
          <img
            src={imgLawyer}
            alt={name}
            className="w-full h-full object-cover rounded-full"
          />
        </div>

        <div className="absolute left-[105px] top-[18px] flex flex-col gap-[9px] items-start">
          <p className="font-['Roboto_Serif',serif] font-medium text-[#264456] text-[18px] text-left">
            {name}
          </p>
          <p className="font-['Roboto',sans-serif] text-[#1d1c22] text-[16px] text-left">
            {specialty}
          </p>
        </div>

        <div className="absolute left-[393px] top-[20px] flex flex-col gap-[9px] items-center w-[76px]">
          <p className="font-['Roboto',sans-serif] text-[#1d1c22] text-[16px]">Affordable</p>
          <p className="font-['Roboto',sans-serif] text-[rgba(29,28,34,0.5)] text-[16px]">{price}</p>
        </div>

        <div className="absolute left-[533px] top-[29px] flex gap-[3px] items-end">
          <p className="font-['Roboto_Serif',serif] font-medium text-[#264456] text-[18px]">{successRate}</p>
          <p className="font-['Roboto',sans-serif] text-[#1d1c22] text-[16px]">success rate</p>
        </div>
      </div>
    </button>
  );
}

type LawyerSelectionProps = {
  onContinue?: () => void;
  onLogoClick?: () => void;
};

export default function LawyerSelection({ onContinue, onLogoClick }: LawyerSelectionProps) {
  const [selectedLawyer, setSelectedLawyer] = useState<number | null>(null);

  const lawyers = [
    { id: 1, name: 'Jonas Smith', specialty: 'Divorce Law', price: '₹5,000', successRate: '87%' },
    { id: 2, name: 'Sarah Williams', specialty: 'Divorce Law', price: '₹4,500', successRate: '92%' },
    { id: 3, name: 'Michael Brown', specialty: 'Divorce Law', price: '₹6,000', successRate: '85%' },
    { id: 4, name: 'Emily Davis', specialty: 'Divorce Law', price: '₹5,500', successRate: '89%' },
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
        {/* Heading */}
        <h1 className="font-['Roboto_Serif',serif] font-semibold text-white text-[32px] sm:text-[40px] lg:text-[48px] text-center mb-6 lg:mb-8 capitalize animate-[fadeInUp_0.8s_ease-out_0.4s_both]">
          We Found The Best Lawyers For You
        </h1>

        {/* Subtitle */}
        <p className="font-['Roboto',sans-serif] font-medium text-white text-[16px] sm:text-[17px] md:text-[18px] text-center mb-8 lg:mb-12 animate-[fadeInUp_0.8s_ease-out_0.6s_both]">
          Select a lawyer to get started on your case
        </p>

        {/* Lawyer Cards */}
        <div className="flex flex-col gap-[9px] max-w-[862px] mx-auto mb-8 animate-[fadeInUp_0.8s_ease-out_0.8s_both]">
          {lawyers.map((lawyer, index) => (
            <div
              key={lawyer.id}
              className="animate-[fadeInUp_0.6s_ease-out_both]"
              style={{ animationDelay: `${1 + index * 0.1}s` }}
            >
              <LawyerCard
                name={lawyer.name}
                specialty={lawyer.specialty}
                price={lawyer.price}
                successRate={lawyer.successRate}
                selected={selectedLawyer === lawyer.id}
                onClick={() => setSelectedLawyer(lawyer.id)}
              />
            </div>
          ))}
        </div>

        {/* Search Manually Button */}
        <div className="flex justify-center mb-6 animate-[fadeIn_0.8s_ease-out_1.3s_both]">
          <button className="px-[14px] py-[14px] border border-white rounded-[6px] shadow-[0px_2px_6.9px_0px_rgba(0,0,0,0.25)] font-['Roboto',sans-serif] font-bold text-[#e5ebf0] text-[16px] hover:bg-white/10 transition-all hover:scale-105" type="button">
            Search Lawyers Manually
          </button>
        </div>

        {/* Security Message */}
        <p className="font-['Roboto',sans-serif] text-white text-[16px] sm:text-[17px] md:text-[18px] text-center mb-8 lg:mb-12 max-w-2xl mx-auto animate-[fadeIn_0.8s_ease-out_1.4s_both]">
          Your information is encrypted and only shared with your assigned lawyer.
        </p>

        {/* Continue Button */}
        <div className="flex flex-col items-center gap-4 animate-[fadeInUp_0.8s_ease-out_1.5s_both]">
          <button
            onClick={onContinue}
            disabled={!selectedLawyer}
            className={`flex items-center gap-3 px-6 py-4 rounded-[6px] shadow-[0px_2px_6.9px_0px_rgba(0,0,0,0.25)] font-['Roboto_Serif',serif] font-bold text-[#e5ebf0] text-[16px] transition-all ${
              selectedLawyer
                ? 'bg-[#FF7034] hover:bg-[#ff8a4d] cursor-pointer hover:scale-105'
                : 'bg-[#FF7034]/50 cursor-not-allowed'
            }`}
            type="button"
          >
            Continue
            <ContinueArrow />
          </button>
        </div>
      </main>
    </div>
  );
}
