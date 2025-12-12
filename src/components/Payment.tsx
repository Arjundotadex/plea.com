import { useState } from 'react';
import svgPaths from '../imports/svg-t1dt1p1hpx';
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

// Google Pay Icon
function GooglePayIcon() {
  return (
    <svg className="w-[37px] h-[39px]" viewBox="0 0 37 39" fill="none">
      <path d="M18.5 0C8.3 0 0 8.3 0 18.5C0 28.7 8.3 37 18.5 37C28.7 37 37 28.7 37 18.5C37 8.3 28.7 0 18.5 0Z" fill="#5F6368"/>
      <path d="M16.8 19.7H13.5V17.3H16.8C17.3 17.3 17.8 17.5 18.1 17.8C18.4 18.1 18.6 18.6 18.6 19.1C18.6 19.6 18.4 20.1 18.1 20.4C17.8 20.7 17.3 20.9 16.8 20.9V19.7Z" fill="white"/>
      <path d="M19.5 14.5V23.5H17.5V14.5H19.5Z" fill="#4285F4"/>
      <path d="M25.5 19C25.5 20.1 25.1 21.1 24.4 21.8C23.7 22.5 22.7 22.9 21.6 22.9C20.5 22.9 19.5 22.5 18.8 21.8C18.1 21.1 17.7 20.1 17.7 19C17.7 17.9 18.1 16.9 18.8 16.2C19.5 15.5 20.5 15.1 21.6 15.1C22.7 15.1 23.7 15.5 24.4 16.2C25.1 16.9 25.5 17.9 25.5 19Z" fill="#EA4335"/>
    </svg>
  );
}

// Card Icon
function CardIcon() {
  return (
    <svg className="w-[51px] h-[33px]" fill="none" viewBox="0 0 51 33">
      <path d={svgPaths.p2e104bf0} fill="white" />
    </svg>
  );
}

type PaymentProps = {
  onContinue?: () => void;
  onLogoClick?: () => void;
};

export default function Payment({ onContinue, onLogoClick }: PaymentProps) {
  const [selectedMethod, setSelectedMethod] = useState<'gpay' | 'card' | 'netbanking' | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#325368] to-[#1e3a4a] relative overflow-hidden">
      {/* Header/Navigation */}
      <Header onLogoClick={onLogoClick} />

      {/* Progress Bar */}
      <div className="animate-[fadeIn_0.8s_ease-out_0.2s_both]">
        <ProgressBar currentStep={7} />
      </div>

      {/* Main Content */}
      <main className="w-full max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16 py-8 lg:py-12">
        {/* Heading */}
        <h1 className="font-['Roboto_Serif',serif] font-semibold text-white text-[32px] sm:text-[40px] lg:text-[48px] text-center mb-8 lg:mb-10 capitalize animate-[fadeInUp_0.8s_ease-out_0.4s_both]">
          Complete Your Payment
        </h1>

        {/* Case Summary Card */}
        <div className="bg-[#d0eae6] rounded-[7px] p-6 max-w-[589px] mx-auto mb-10 lg:mb-12 animate-[fadeInUp_0.8s_ease-out_0.6s_both] hover:shadow-xl transition-shadow">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-4">
            {/* Lawyer Image */}
            <div className="w-[60px] h-[60px] shrink-0">
              <img 
                src={imgLawyer} 
                alt="Jonas Smith" 
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            {/* Lawyer Info */}
            <div className="flex-1">
              <p className="font-['Roboto_Serif',serif] font-medium text-[#264456] text-[18px] mb-2">
                Jonas Smith
              </p>
              <p className="font-['Roboto',sans-serif] text-[#1d1c22] text-[16px]">
                Divorce Law
              </p>
            </div>

            {/* Price */}
            <div className="text-right">
              <p className="font-['Roboto_Serif',serif] text-[#1d1c22] text-[18px] mb-2">
                ₹5,000
              </p>
              <p className="font-['Roboto',sans-serif] text-[#1d1c22] text-[16px]">
                Estimate within: 3 weeks
              </p>
            </div>
          </div>

          <p className="font-['Roboto',sans-serif] text-[#1d1c22] text-[16px]">
            Case urgency: <span className="font-medium text-[#325368]">Urgent</span>
          </p>
        </div>

        {/* Payment Method Selection */}
        <h2 className="font-['Roboto_Serif',serif] font-semibold text-white text-[28px] sm:text-[32px] text-center mb-8 animate-[fadeInUp_0.8s_ease-out_0.8s_both]">
          Choose your payment method
        </h2>

        {/* Payment Options */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-8 lg:mb-10 animate-[fadeInUp_0.8s_ease-out_1s_both]">
          {/* Google Pay */}
          <button
            onClick={() => setSelectedMethod('gpay')}
            className={`px-[27px] py-[10px] bg-white rounded-[9px] border border-white flex items-center gap-3 transition-all hover:scale-105 ${
              selectedMethod === 'gpay' ? 'ring-2 ring-[#FF7034]' : ''
            }`}
          >
            <GooglePayIcon />
            <span className="font-['Roboto',sans-serif] font-medium text-[20px] sm:text-[24px] text-black">
              Pay
            </span>
          </button>

          {/* Card */}
          <button
            onClick={() => setSelectedMethod('card')}
            className={`px-[27px] py-[13px] rounded-[9px] border border-white flex items-center gap-3 transition-all hover:scale-105 ${
              selectedMethod === 'card' ? 'bg-[#FF7034] ring-2 ring-[#FF7034]' : 'bg-transparent'
            }`}
          >
            <CardIcon />
            <span className="font-['Roboto',sans-serif] font-medium text-[20px] sm:text-[24px] text-white">
              Card
            </span>
          </button>

          {/* Netbanking */}
          <button
            onClick={() => setSelectedMethod('netbanking')}
            className={`px-[27px] py-[10px] rounded-[9px] border border-white transition-all hover:scale-105 ${
              selectedMethod === 'netbanking' ? 'bg-[#FF7034] ring-2 ring-[#FF7034]' : 'bg-transparent'
            }`}
          >
            <span className="font-['Roboto',sans-serif] font-medium text-[24px] sm:text-[32px] text-white">
              Netbanking
            </span>
          </button>
        </div>

        {/* Verify & Pay Button */}
        <div className="flex justify-center mb-8 animate-[fadeInUp_0.8s_ease-out_1.2s_both]">
          <button 
            onClick={onContinue}
            disabled={!selectedMethod}
            className={`flex items-center gap-2 px-[14px] py-[14px] rounded-[6px] shadow-[0px_2px_6.9px_0px_rgba(0,0,0,0.25)] font-['Roboto_Serif',serif] font-bold text-[#e5ebf0] text-[16px] transition-all ${
              selectedMethod 
                ? 'bg-[#FF7034] hover:bg-[#ff8a4d] cursor-pointer hover:scale-105' 
                : 'bg-[#FF7034]/50 cursor-not-allowed'
            }`}
          >
            Verify & Pay
            <ContinueArrow />
          </button>
        </div>

        {/* Security Notice */}
        <p className="font-['Roboto',sans-serif] text-white text-[16px] sm:text-[18px] text-center max-w-[589px] mx-auto animate-[fadeIn_0.8s_ease-out_1.4s_both]">
          Payments are processes securely via Razorpay. PCI-DSS compliant. Your payment information is encrypted and we don't store card details. Read our refund policy.
        </p>
      </main>
    </div>
  );
}