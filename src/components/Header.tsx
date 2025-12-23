import { useState } from 'react';
import svgPaths from '../imports/svg-5b4k42ud8n';
import imgLogo from 'figma:asset/df73b7b3c0298cb52210faaa9b1d7bba265a447b.png';

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

type HeaderProps = {
  onLogoClick?: () => void;
  hideNav?: boolean;
};

export default function Header({ onLogoClick, hideNav = false }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // If hiding nav (intake pages), only show logo
  if (hideNav) {
    return (
      <header className="w-full max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 py-6 lg:py-8 animate-[fadeInDown_0.5s_ease-out]">
        <div className="flex items-center justify-between flex-wrap gap-4">
          {/* Logo - Clickable */}
          <button 
            onClick={onLogoClick} 
            className="w-[92px] h-[60px] shrink-0 hover:opacity-80 transition-opacity"
          >
            <img src={imgLogo} alt="Plea Logo" className="w-full h-full object-contain" />
          </button>
        </div>
      </header>
    );
  }

  return (
    <header className="w-full max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 py-6 lg:py-8 animate-[fadeInDown_0.5s_ease-out]">
      <div className="flex items-center justify-between flex-wrap gap-4">
        {/* Logo - Clickable */}
        <button 
          onClick={onLogoClick} 
          className="w-[92px] h-[60px] shrink-0 hover:opacity-80 transition-opacity"
        >
          <img src={imgLogo} alt="Plea Logo" className="w-full h-full object-contain" />
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
          <a href="#" className="font-['Roboto_Serif',serif] font-medium text-white text-[16px] hover:text-[#d0eae6] transition-colors">
            How it Works
          </a>
          <a href="#" className="font-['Roboto_Serif',serif] font-medium text-white text-[16px] hover:text-[#d0eae6] transition-colors">
            Case Types
          </a>
          <a href="#" className="font-['Roboto_Serif',serif] font-medium text-white text-[16px] hover:text-[#d0eae6] transition-colors">
            Why Us
          </a>
          <a href="#" className="font-['Roboto_Serif',serif] font-medium text-white text-[16px] hover:text-[#d0eae6] transition-colors">
            Join as a Lawyer
          </a>
          
          <a href="mailto:support@plea.live" aria-label="Contact Support Email" className="font-['Roboto_Serif',serif] font-medium text-white text-[14px] hover:text-[#d0eae6] transition-colors">
            support@plea.live
          </a>
          
          <button className="flex items-center gap-2 px-[22px] py-[12px] border border-white rounded-[6px] font-['Roboto_Serif',serif] font-medium text-white text-[16px] hover:bg-white/10 transition-all hover:scale-105">
            Get the App
            <ArrowIcon />
          </button>
          
          <button className="px-[22px] py-[12px] bg-[#FF7034] rounded-[6px] shadow-[0px_2px_6.9px_0px_rgba(0,0,0,0.25)] font-['Roboto_Serif',serif] font-semibold text-[#e5ebf0] text-[16px] hover:bg-[#ff8a4d] transition-all hover:scale-105">
            Track your status
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden px-4 py-2 text-white hover:bg-white/10 rounded transition-colors"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-4 bg-[#264456] rounded-lg p-4 space-y-3 animate-[fadeInDown_0.3s_ease-out]">
          <a href="#" className="block font-['Roboto_Serif',serif] font-medium text-white text-[16px] py-2 px-3 hover:bg-white/10 rounded transition-colors">
            How it Works
          </a>
          <a href="#" className="block font-['Roboto_Serif',serif] font-medium text-white text-[16px] py-2 px-3 hover:bg-white/10 rounded transition-colors">
            Case Types
          </a>
          <a href="#" className="block font-['Roboto_Serif',serif] font-medium text-white text-[16px] py-2 px-3 hover:bg-white/10 rounded transition-colors">
            Why Us
          </a>
          <a href="#" className="block font-['Roboto_Serif',serif] font-medium text-white text-[16px] py-2 px-3 hover:bg-white/10 rounded transition-colors">
            Join as a Lawyer
          </a>
          <a href="mailto:support@plea.live" aria-label="Contact Support Email" className="block font-['Roboto_Serif',serif] font-medium text-white text-[16px] py-2 px-3 hover:bg-white/10 rounded transition-colors">
            support@plea.live
          </a>
          <button className="w-full flex items-center justify-center gap-2 px-[22px] py-[12px] border border-white rounded-[6px] font-['Roboto_Serif',serif] font-medium text-white text-[16px] hover:bg-white/10 transition-colors">
            Get the App
            <ArrowIcon />
          </button>
          <button className="w-full px-[22px] py-[12px] bg-[#FF7034] rounded-[6px] shadow-[0px_2px_6.9px_0px_rgba(0,0,0,0.25)] font-['Roboto_Serif',serif] font-semibold text-[#e5ebf0] text-[16px] hover:bg-[#ff8a4d] transition-colors">
            Track your status
          </button>
        </div>
      )}
    </header>
  );
}
