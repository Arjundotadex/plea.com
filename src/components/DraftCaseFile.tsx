import { useState, useEffect } from 'react';
import svgPaths from '../imports/svg-23i37qxptk';
import imgLawyer from 'figma:asset/b98188831a3933f358c227a30dc107a47f833da6.png';
import ProgressBar from './ProgressBar';
import Header from './Header';

function ContinueArrow() {
  return (
    <svg className="w-[24px] h-[15px]" fill="none" viewBox="0 0 26 15">
      <path d={svgPaths.p39cb0dc0} fill="white" />
    </svg>
  );
}

function DocumentIcon() {
  return (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  );
}

function CheckCircleIcon() {
  return (
    <svg className="w-5 h-5 text-[#1CA099]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function LoadingSpinner() {
  return (
    <div className="relative w-[80px] h-[80px]">
      <svg 
        className="absolute inset-0 w-full h-full animate-spin" 
        fill="none" 
        viewBox="0 0 80 80"
        style={{ animationDuration: '1.5s' }}
      >
        <circle cx="40" cy="40" r="35" stroke="#D0EAE6" strokeWidth="6" strokeLinecap="round" strokeDasharray="165 55" />
      </svg>
      <svg 
        className="absolute inset-0 w-full h-full animate-spin" 
        fill="none" 
        viewBox="0 0 80 80"
        style={{ animationDuration: '1s', animationDirection: 'reverse' }}
      >
        <circle cx="40" cy="40" r="25" stroke="#FF7034" strokeWidth="4" strokeLinecap="round" strokeDasharray="78 78" />
      </svg>
    </div>
  );
}

type DraftCaseFileProps = {
  onContinue?: () => void;
  onLogoClick?: () => void;
};

export default function DraftCaseFile({ onContinue, onLogoClick }: DraftCaseFileProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [loadingStep, setLoadingStep] = useState(0);

  const loadingSteps = [
    "Analyzing your case details...",
    "Gathering relevant legal precedents...",
    "Drafting case summary...",
    "Formatting legal documents...",
    "Finalizing your draft case file..."
  ];

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setLoadingProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 2;
      });
    }, 100);

    const stepInterval = setInterval(() => {
      setLoadingStep(prev => {
        if (prev >= loadingSteps.length - 1) {
          clearInterval(stepInterval);
          return prev;
        }
        return prev + 1;
      });
    }, 1000);

    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => {
      clearInterval(progressInterval);
      clearInterval(stepInterval);
      clearTimeout(loadingTimer);
    };
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-gradient-to-b from-[#325368] to-[#1e3a4a] flex flex-col items-center justify-center z-50">
        <div className="animate-[fadeIn_0.3s_ease-in]">
          <LoadingSpinner />
        </div>
        
        <div className="mt-8 text-center animate-[fadeInUp_0.6s_ease-out_both]">
          <h2 className="font-['Roboto_Serif',serif] font-semibold text-white text-[24px] sm:text-[28px] mb-4">
            Generating Your Draft Case File
          </h2>
          <p className="font-['Roboto',sans-serif] text-[#d0eae6] text-[16px] sm:text-[18px] mb-6 px-4 max-w-md">
            Our AI is preparing your personalized case documentation
          </p>
        </div>

        <div className="w-full max-w-md px-6 animate-[fadeInUp_0.8s_ease-out_0.2s_both]">
          <div className="bg-white/10 rounded-full h-3 overflow-hidden mb-4">
            <div 
              className="bg-[#FF7034] h-full rounded-full transition-all duration-200 ease-out"
              style={{ width: `${loadingProgress}%` }}
            />
          </div>
          <p className="font-['Roboto',sans-serif] text-white text-[14px] text-center">
            {loadingProgress}% Complete
          </p>
        </div>

        <div className="mt-8 space-y-3 px-6 w-full max-w-md">
          {loadingSteps.map((step, index) => (
            <div 
              key={index}
              className={`flex items-center gap-3 transition-all duration-300 ${
                index <= loadingStep ? 'opacity-100' : 'opacity-30'
              }`}
              style={{
                animation: index === loadingStep ? 'pulse 1.5s ease-in-out infinite' : 'none'
              }}
            >
              {index < loadingStep ? (
                <CheckCircleIcon />
              ) : index === loadingStep ? (
                <div className="w-5 h-5 border-2 border-[#FF7034] border-t-transparent rounded-full animate-spin" />
              ) : (
                <div className="w-5 h-5 border-2 border-white/30 rounded-full" />
              )}
              <span className={`font-['Roboto',sans-serif] text-[14px] ${
                index <= loadingStep ? 'text-white' : 'text-white/50'
              }`}>
                {step}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#325368] to-[#1e3a4a] relative overflow-hidden">
      <Header onLogoClick={onLogoClick} />
      
      <div className="animate-[fadeIn_0.8s_ease-out_0.2s_both]">
        <ProgressBar currentStep={8} />
      </div>

      <main className="w-full max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16 py-8 lg:py-12">
        <div className="flex justify-center mb-6 animate-[scaleIn_0.6s_ease-out]">
          <div className="w-[78px] h-[78px] bg-[#1CA099] rounded-full flex items-center justify-center">
            <DocumentIcon />
          </div>
        </div>

        <h1 className="font-['Roboto_Serif',serif] font-semibold text-white text-[28px] sm:text-[36px] lg:text-[42px] text-center mb-4 capitalize animate-[fadeInUp_0.8s_ease-out_0.2s_both] px-4">
          Your Draft Case File is Ready
        </h1>

        <p className="font-['Roboto',sans-serif] text-white text-[16px] sm:text-[17px] md:text-[18px] text-center mb-8 max-w-2xl mx-auto animate-[fadeInUp_0.8s_ease-out_0.4s_both] px-4">
          Review your AI-generated case file below. Your lawyer will refine and finalize this document.
        </p>

        <div className="bg-white rounded-[12px] shadow-xl max-w-[700px] mx-auto mb-8 animate-[fadeInUp_0.8s_ease-out_0.6s_both] overflow-hidden">
          <div className="bg-[#264456] px-6 py-4 flex items-center gap-4">
            <div className="text-white">
              <DocumentIcon />
            </div>
            <div>
              <h3 className="font-['Roboto_Serif',serif] font-medium text-white text-[18px]">
                Draft Case File
              </h3>
              <p className="font-['Roboto',sans-serif] text-[#d0eae6] text-[14px]">
                Generated on {new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}
              </p>
            </div>
          </div>

          <div className="p-6 space-y-6">
            <div className="animate-[fadeInUp_0.8s_ease-out_0.8s_both]">
              <h4 className="font-['Roboto_Serif',serif] font-semibold text-[#264456] text-[16px] mb-2 border-b border-gray-200 pb-2">
                Case Information
              </h4>
              <div className="grid grid-cols-2 gap-4 text-[14px]">
                <div>
                  <p className="font-['Roboto',sans-serif] text-gray-500">Case Type</p>
                  <p className="font-['Roboto',sans-serif] font-medium text-[#1d1c22]">Divorce Proceedings</p>
                </div>
                <div>
                  <p className="font-['Roboto',sans-serif] text-gray-500">Case ID</p>
                  <p className="font-['Roboto',sans-serif] font-medium text-[#1d1c22]">PLea-2024-{Math.floor(Math.random() * 10000).toString().padStart(4, '0')}</p>
                </div>
                <div>
                  <p className="font-['Roboto',sans-serif] text-gray-500">Urgency Level</p>
                  <p className="font-['Roboto',sans-serif] font-medium text-[#FF7034]">Urgent</p>
                </div>
                <div>
                  <p className="font-['Roboto',sans-serif] text-gray-500">Status</p>
                  <p className="font-['Roboto',sans-serif] font-medium text-[#1CA099]">Draft Ready</p>
                </div>
              </div>
            </div>

            <div className="animate-[fadeInUp_0.8s_ease-out_1s_both]">
              <h4 className="font-['Roboto_Serif',serif] font-semibold text-[#264456] text-[16px] mb-2 border-b border-gray-200 pb-2">
                Case Summary
              </h4>
              <p className="font-['Roboto',sans-serif] text-[#1d1c22] text-[14px] leading-relaxed">
                This draft case file has been prepared based on the information you provided. It contains the preliminary documentation required for initiating divorce proceedings under the applicable family law statutes. The assigned lawyer will review all submitted documents and evidence to strengthen your case.
              </p>
            </div>

            <div className="animate-[fadeInUp_0.8s_ease-out_1.2s_both]">
              <h4 className="font-['Roboto_Serif',serif] font-semibold text-[#264456] text-[16px] mb-2 border-b border-gray-200 pb-2">
                Assigned Lawyer
              </h4>
              <div className="flex items-center gap-4">
                <img 
                  src={imgLawyer} 
                  alt="Jonas Smith" 
                  className="w-[50px] h-[50px] rounded-full object-cover"
                />
                <div>
                  <p className="font-['Roboto_Serif',serif] font-medium text-[#264456] text-[16px]">Jonas Smith</p>
                  <p className="font-['Roboto',sans-serif] text-gray-500 text-[14px]">Divorce Law Specialist • 12 years experience</p>
                </div>
              </div>
            </div>

            <div className="animate-[fadeInUp_0.8s_ease-out_1.4s_both]">
              <h4 className="font-['Roboto_Serif',serif] font-semibold text-[#264456] text-[16px] mb-2 border-b border-gray-200 pb-2">
                Documents Included
              </h4>
              <ul className="space-y-2">
                {['Case petition draft', 'Evidence summary', 'Timeline of events', 'Supporting documents list'].map((doc, index) => (
                  <li key={index} className="flex items-center gap-2 font-['Roboto',sans-serif] text-[14px] text-[#1d1c22]">
                    <CheckCircleIcon />
                    {doc}
                  </li>
                ))}
              </ul>
            </div>

            <div className="animate-[fadeInUp_0.8s_ease-out_1.6s_both]">
              <h4 className="font-['Roboto_Serif',serif] font-semibold text-[#264456] text-[16px] mb-2 border-b border-gray-200 pb-2">
                Next Steps
              </h4>
              <ol className="space-y-2 list-decimal list-inside font-['Roboto',sans-serif] text-[14px] text-[#1d1c22]">
                <li>Your lawyer will review and refine this draft within 24-48 hours</li>
                <li>You'll receive a notification when the final version is ready</li>
                <li>Review and approve the final case file</li>
                <li>Your lawyer will officially file the case</li>
              </ol>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 animate-[fadeInUp_0.8s_ease-out_1.8s_both]">
          <button 
            className="flex items-center justify-center gap-2 px-6 py-4 border-2 border-white rounded-[6px] font-['Roboto_Serif',serif] font-semibold text-white text-[16px] hover:bg-white/10 transition-all"
          >
            Download Draft PDF
          </button>
          <button 
            onClick={onContinue}
            className="flex items-center justify-center gap-2 px-6 py-4 bg-[#FF7034] rounded-[6px] shadow-[0px_2px_6.9px_0px_rgba(0,0,0,0.25)] font-['Roboto_Serif',serif] font-bold text-[#e5ebf0] text-[16px] hover:bg-[#ff8a4d] transition-all hover:scale-105"
          >
            Go to Dashboard
            <ContinueArrow />
          </button>
        </div>

        <p className="font-['Roboto',sans-serif] text-white text-[14px] sm:text-[16px] text-center max-w-[589px] mx-auto animate-[fadeIn_0.8s_ease-out_2s_both] px-4">
          Your lawyer will contact you within 24 hours to discuss the next steps.
        </p>
      </main>
    </div>
  );
}
