import { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import svgPaths from './imports/svg-5b4k42ud8n';
import imgVecteezyBg from 'figma:asset/08ad5f567704c58fb61b26f0e366609aea3c71c0.png';
import imgLogo from 'figma:asset/df73b7b3c0298cb52210faaa9b1d7bba265a447b.png';
import imgIllustration from 'figma:asset/61128c839287648c81ee737fc7278f8fc7914e28.png';
import ConfirmCaseType from './components/ConfirmCaseType';
import DescribeYourIssue from './components/DescribeYourIssue';
import UploadDocuments from './components/UploadDocuments';
import CaseUrgency from './components/CaseUrgency';
import AccountSetup from './components/AccountSetup';
import LawyerSelection from './components/LawyerSelection';
import Payment from './components/Payment';
import Confirmation from './components/Confirmation';
import DraftCaseFile from './components/DraftCaseFile';
import Loading from './components/Loading';

// Arrow icon for "Get the App" button
function ArrowIcon() {
  return (
    <svg className="w-[18px] h-[18px]" fill="none" viewBox="0 0 18 18">
      <path d={svgPaths.p23f83f00} fill="white" />
    </svg>
  );
}

// Illustration on the right side
function Illustration() {
  return (
    <div className="relative w-full max-w-[350px] h-[350px] lg:max-w-[400px] lg:h-[400px]">
      <img 
        src={imgIllustration} 
        alt="Legal Protection Illustration" 
        className="w-full h-full object-contain"
      />
    </div>
  );
}

// Animated counter component
function AnimatedCounter({ end, duration = 2000 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const startTime = Date.now();
    const startValue = Math.floor(end * 0.7); // Start from 70% of the end value
    
    const animate = () => {
      const currentTime = Date.now();
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      const easeOutQuad = (t: number) => t * (2 - t);
      const easedProgress = easeOutQuad(progress);
      
      const currentCount = Math.floor(startValue + (end - startValue) * easedProgress);
      setCount(currentCount);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        // Add random increments after initial animation
        const interval = setInterval(() => {
          setCount(prev => {
            const increment = Math.random() > 0.5 ? 1 : 0;
            return prev + increment;
          });
        }, 5000);
        
        return () => clearInterval(interval);
      }
    };
    
    animate();
  }, [end, duration]);

  return <>{count.toLocaleString()}</>;
}

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'confirm-case' | 'describe-issue' | 'upload-documents' | 'case-urgency' | 'account-setup' | 'confirmation' | 'draft-case-file'>('home');
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearchError, setShowSearchError] = useState(false);
  const [isInitialLoading, setIsInitialLoading] = useState(true);
  const [isPageTransitioning, setIsPageTransitioning] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Initial loading animation (3 seconds)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsInitialLoading(false);
    }, 3000);
    
    return () => clearTimeout(timer);
  }, []);

  const navigateToPage = (page: typeof currentPage) => {
    setIsPageTransitioning(true);
    setMobileMenuOpen(false);
    
    setTimeout(() => {
      setCurrentPage(page);
      setIsPageTransitioning(false);
    }, 1500);
  };

  const navigateToHome = () => {
    navigateToPage('home');
  };

  const ComingSoon = () => (
    <div className="min-h-screen bg-[#325368] flex items-center justify-center p-6 text-center">
      <div className="max-w-md space-y-6">
        <h2 className="font-['Roboto_Serif',serif] text-white text-2xl">This feature is coming soon. Right now, Plea focuses on helping you start your legal case safely.</h2>
        <button 
          onClick={navigateToHome}
          className="px-8 py-3 bg-[#FF7034] rounded-[6px] font-['Roboto_Serif',serif] font-semibold text-[#e5ebf0] hover:bg-[#ff8a4d] transition-colors"
        >
          Go Back to Home
        </button>
      </div>
    </div>
  );

  const handleStartFiling = () => {
    if (searchQuery.trim()) {
      setShowSearchError(false);
      navigateToPage('confirm-case');
    } else {
      setShowSearchError(true);
      // Remove error border after 3 seconds
      setTimeout(() => setShowSearchError(false), 3000);
    }
  };

  const handleQuickPillClick = (caseType: string) => {
    setSearchQuery(caseType);
    setShowSearchError(false);
  };

  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && searchQuery.trim()) {
      setShowSearchError(false);
      navigateToPage('confirm-case');
    }
  };

  const handleConfirmCaseTypeContinue = () => {
    navigateToPage('describe-issue');
  };

  const handleDescribeIssueContinue = () => {
    navigateToPage('upload-documents');
  };

  const handleUploadDocumentsContinue = () => {
    navigateToPage('case-urgency');
  };

  const handleCaseUrgencyContinue = () => {
    navigateToPage('account-setup');
  };

  const handleAccountSetupContinue = () => {
    navigateToPage('confirmation');
  };

  const handleConfirmationContinue = () => {
    navigateToHome();
  };

  const handleDraftCaseFileContinue = () => {
    navigateToPage('home');
  };

  // Show initial loading screen
  if (isInitialLoading) {
    return <Loading />;
  }

  // Show page transition loading
  if (isPageTransitioning) {
    return <Loading />;
  }

  // Handle "Coming Soon" for unused pages
  const isUnusedPage = ['how-it-works', 'case-types', 'why-us', 'join-lawyer'].includes(currentPage);
  if (isUnusedPage) {
    return <ComingSoon />;
  }

  // If on draft case file page, show that component
  if (currentPage === 'draft-case-file') {
    return <DraftCaseFile onContinue={handleDraftCaseFileContinue} onLogoClick={navigateToHome} />;
  }

  // If on confirmation page, show that component
  if (currentPage === 'confirmation') {
    return <Confirmation onContinue={handleConfirmationContinue} onLogoClick={navigateToHome} />;
  }

  // If on payment page, show that component
  if (currentPage === 'payment') {
    return <Payment onContinue={handlePaymentContinue} onLogoClick={navigateToHome} />;
  }

  // If on lawyer selection page, show that component
  if (currentPage === 'lawyer-selection') {
    return <LawyerSelection onContinue={handleLawyerSelectionContinue} onLogoClick={navigateToHome} />;
  }

  // If on account setup page, show that component
  if (currentPage === 'account-setup') {
    return <AccountSetup onContinue={handleAccountSetupContinue} onLogoClick={navigateToHome} />;
  }

  // If on case urgency page, show that component
  if (currentPage === 'case-urgency') {
    return <CaseUrgency onContinue={handleCaseUrgencyContinue} onLogoClick={navigateToHome} />;
  }

  // If on upload documents page, show that component
  if (currentPage === 'upload-documents') {
    return <UploadDocuments onContinue={handleUploadDocumentsContinue} onLogoClick={navigateToHome} />;
  }

  // If on describe issue page, show that component
  if (currentPage === 'describe-issue') {
    return <DescribeYourIssue onContinue={handleDescribeIssueContinue} onLogoClick={navigateToHome} />;
  }

  // If on confirm case page, show that component
  if (currentPage === 'confirm-case') {
    return <ConfirmCaseType onContinue={handleConfirmCaseTypeContinue} onLogoClick={navigateToHome} initialSearchQuery={searchQuery} />;
  }

  // Otherwise show the hero page
  return (
    <div className="min-h-screen bg-[#325368] relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img 
          src={imgVecteezyBg} 
          alt="" 
          className="w-full h-full object-cover opacity-5"
        />
        <div className="absolute inset-0 bg-[rgba(50,83,104,0.37)]" />
      </div>

      {/* Content Container */}
      <div className="relative z-10">
        {/* Header/Navigation with Support Email for Home Page */}
        <header className="w-full max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 py-6 lg:py-8 animate-[fadeInDown_0.5s_ease-out]">
          <div className="flex items-center justify-between flex-wrap gap-4">
            {/* Logo - Clickable */}
            <button onClick={navigateToHome} className="w-[92px] h-[60px] shrink-0 hover:opacity-80 transition-opacity">
              <img src={imgLogo} alt="Plea Logo" className="w-full h-full object-contain" />
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
              <a href="mailto:support@plea.live" aria-label="Contact Support Email" className="font-['Roboto_Serif',serif] font-medium text-white text-[14px] hover:text-[#d0eae6] transition-colors">
                support@plea.live
              </a>
              
              <button 
                onClick={handleStartFiling}
                className="px-[22px] py-[12px] bg-[#FF7034] rounded-[6px] shadow-[0px_2px_6.9px_0px_rgba(0,0,0,0.25)] font-['Roboto_Serif',serif] font-semibold text-[#e5ebf0] text-[16px] hover:bg-[#ff8a4d] transition-all hover:scale-105"
              >
                Start Your Case
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
              <a href="mailto:support@plea.live" aria-label="Contact Support Email" className="block font-['Roboto_Serif',serif] font-medium text-white text-[16px] py-2 px-3 hover:bg-white/10 rounded transition-colors">
                support@plea.live
              </a>
              
              <button 
                onClick={handleStartFiling}
                className="w-full px-[22px] py-[12px] bg-[#FF7034] rounded-[6px] shadow-[0px_2px_6.9px_0px_rgba(0,0,0,0.25)] font-['Roboto_Serif',serif] font-semibold text-[#e5ebf0] text-[16px] hover:bg-[#ff8a4d] transition-colors"
              >
                Start Your Case
              </button>
            </div>
          )}
        </header>

        {/* Hero Section */}
        <main className="w-full max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center pt-8 lg:pt-16 pb-8">
            {/* Left Content */}
            <div className="space-y-5 lg:space-y-6 animate-[fadeInUp_0.8s_ease-out_0.2s_both]">
              {/* Hero Heading */}
              <h1 className="font-['Roboto_Serif',serif] text-white text-[32px] sm:text-[38px] lg:text-[42px] xl:text-[46px] leading-tight">
                Get Legal Help in Minutes — Without Confusion or Overcharging
              </h1>

              {/* Description */}
              <p className="font-['Roboto',sans-serif] font-medium text-white text-[16px] sm:text-[17px] lg:text-[18px] leading-relaxed max-w-[478px]">
                Explain your situation, submit your details, and a verified human at Plea will review your case and guide your next steps.
              </p>

              {/* Search Bar */}
              <div className="relative w-full max-w-[592px]">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#325368] w-6 h-6">
                  <Search className="w-full h-full" />
                </div>
                <input
                  type="text"
                  placeholder="What do you need help with? e.g Property Dispute, Divorce, Fraud..."
                  className={`w-full h-[50px] pl-14 pr-4 bg-[#e5ebf0] rounded-[43px] font-['Roboto',sans-serif] text-[#6b6b6b] text-[14px] sm:text-[16px] focus:outline-none transition-all ${
                    showSearchError 
                      ? 'ring-2 ring-red-500 animate-[shake_0.5s_ease-in-out]' 
                      : 'focus:ring-2 focus:ring-[#FF7034]'
                  } placeholder:text-[#6b6b6b]`}
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    if (e.target.value.trim()) {
                      setShowSearchError(false);
                    }
                  }}
                  onKeyDown={handleSearch}
                />
                {showSearchError && (
                  <p className="absolute -bottom-6 left-4 text-red-400 text-[12px] sm:text-[14px] font-['Roboto',sans-serif]">
                    Please enter what you need help with
                  </p>
                )}
              </div>

              {/* Quick Tags */}
              <div className="flex flex-wrap gap-3">
                <button 
                  onClick={() => handleQuickPillClick('Divorce')}
                  className={`px-4 py-2 rounded-[40px] font-['Roboto',sans-serif] text-[14px] sm:text-[16px] transition-colors ${
                    searchQuery === 'Divorce' 
                      ? 'bg-[#d0eae6] text-[#1d1c22]' 
                      : 'bg-[#e5ebf0] text-[#6b6b6b] hover:bg-[#d5dbe0]'
                  }`}
                >
                  Divorce
                </button>
                <button 
                  onClick={() => handleQuickPillClick('Property Dispute')}
                  className={`px-4 py-2 rounded-[41px] font-['Roboto',sans-serif] text-[14px] sm:text-[16px] transition-colors ${
                    searchQuery === 'Property Dispute' 
                      ? 'bg-[#d0eae6] text-[#1d1c22]' 
                      : 'bg-[#e5ebf0] text-[#6b6b6b] hover:bg-[#d5dbe0]'
                  }`}
                >
                  Property Dispute
                </button>
                <button 
                  onClick={() => handleQuickPillClick('Tenant')}
                  className={`px-4 py-2 rounded-[35px] font-['Roboto',sans-serif] text-[14px] sm:text-[16px] transition-colors ${
                    searchQuery === 'Tenant' 
                      ? 'bg-[#d0eae6] text-[#1d1c22]' 
                      : 'bg-[#e5ebf0] text-[#6b6b6b] hover:bg-[#d5dbe0]'
                  }`}
                >
                  Tenant
                </button>
              </div>

              {/* CTA Button */}
              <button 
                onClick={handleStartFiling}
                className="w-full sm:w-auto px-6 py-3 bg-[#FF7034] rounded-[6px] shadow-[0px_2px_6.9px_0px_rgba(0,0,0,0.25)] font-['Roboto_Serif',serif] font-semibold text-[#e5ebf0] text-[16px] hover:bg-[#ff8a4d] transition-colors"
              >
                Start Your Case
              </button>

              {/* Info Text */}
              <p className="font-['Roboto_Serif',serif] font-medium text-white text-[14px] sm:text-[16px]">
                No spam. No AI auto-filing. Real people helping you.
              </p>
            </div>

            {/* Right Illustration */}
            <div className="hidden lg:flex justify-center items-center lg:justify-end">
              <Illustration />
            </div>
          </div>

          {/* Stats Section */}
          <div className="py-10 lg:py-16">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-10 lg:gap-16 max-w-5xl mx-auto">
              {/* Cases Filed */}
              <div className="text-center space-y-2">
                <p className="font-['Roboto_Serif',serif] font-semibold text-[#FF7034] text-[36px] sm:text-[40px] lg:text-[44px]">
                  <AnimatedCounter end={15850} />
                </p>
                <p className="font-['Roboto',sans-serif] font-semibold text-white text-[20px] sm:text-[22px] lg:text-[24px]">
                  Cases Filed
                </p>
              </div>

              {/* Hours Saved */}
              <div className="text-center space-y-2">
                <p className="font-['Roboto_Serif',serif] font-semibold text-[#FF7034] text-[36px] sm:text-[40px] lg:text-[44px]">
                  <AnimatedCounter end={23482} />
                </p>
                <p className="font-['Roboto',sans-serif] font-semibold text-white text-[20px] sm:text-[22px] lg:text-[24px]">
                  Hours Saved
                </p>
              </div>

              {/* Cases Resolved */}
              <div className="text-center space-y-2">
                <p className="font-['Roboto_Serif',serif] font-semibold text-[#FF7034] text-[36px] sm:text-[40px] lg:text-[44px]">
                  <AnimatedCounter end={12397} />
                </p>
                <p className="font-['Roboto',sans-serif] font-semibold text-white text-[20px] sm:text-[22px] lg:text-[24px]">
                  Cases Resolved
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}