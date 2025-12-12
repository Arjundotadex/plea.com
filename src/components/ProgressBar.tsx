import { useEffect, useState } from 'react';

type ProgressBarProps = {
  currentStep: number;
  totalSteps?: number;
};

const stepLabels = [
  'Confirm your case type',
  'Describe Your Issue',
  'Upload Documents',
  'Case Urgency',
  'Account Setup',
  'Lawyer Selection',
  'Payment',
  'Confirmation'
];

// Checkmark icon
function CheckIcon() {
  return (
    <svg className="w-3 h-3" fill="none" viewBox="0 0 12 9">
      <path 
        d="M1 4.5L4.5 8L11 1" 
        stroke="white" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function ProgressBar({ currentStep, totalSteps = 8 }: ProgressBarProps) {
  const [animatedProgress, setAnimatedProgress] = useState(0);
  
  useEffect(() => {
    // Animate progress bar fill
    const targetProgress = ((currentStep - 1) / (totalSteps - 1)) * 100;
    const duration = 800;
    const startTime = Date.now();
    const startProgress = animatedProgress;
    
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function
      const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);
      const easedProgress = easeOutCubic(progress);
      
      const currentProgress = startProgress + (targetProgress - startProgress) * easedProgress;
      setAnimatedProgress(currentProgress);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    animate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentStep, totalSteps]);

  return (
    <>
      {/* Desktop Progress Bar - XL screens */}
      <div className="hidden xl:block w-full max-w-[1200px] mx-auto px-6 py-8">
        <div className="relative">
          {/* Background Line */}
          <div className="absolute top-[11px] left-0 right-0 h-[9px] bg-white rounded-full" />
          
          {/* Animated Progress Line */}
          <div 
            className="absolute top-[11px] left-0 h-[9px] bg-[#FF7034] rounded-full transition-all duration-700 ease-out"
            style={{ width: `${animatedProgress}%` }}
          />
          
          {/* Steps */}
          <div className="relative flex justify-between items-start">
            {stepLabels.map((label, index) => {
              const stepNumber = index + 1;
              const isCompleted = stepNumber < currentStep;
              const isActive = stepNumber === currentStep;
              
              return (
                <div key={label} className="flex flex-col items-center gap-2" style={{ flex: '0 0 auto' }}>
                  {/* Circle with checkmark or empty */}
                  <div 
                    className={`w-[23px] h-[23px] rounded-full flex items-center justify-center transition-all duration-500 ${
                      isCompleted || isActive 
                        ? 'bg-[#FF7034] scale-110' 
                        : 'bg-white scale-100'
                    }`}
                  >
                    {(isCompleted || isActive) && (
                      <div className="animate-[fadeIn_0.3s_ease-in]">
                        <CheckIcon />
                      </div>
                    )}
                  </div>
                  
                  {/* Label */}
                  <p 
                    className={`font-['Roboto',sans-serif] font-medium text-[14px] text-center capitalize max-w-[100px] transition-all duration-300 ${
                      isCompleted || isActive ? 'text-[#e5ebf0]' : 'text-[#e5ebf0]/70'
                    }`}
                  >
                    {label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Tablet Progress Bar - LG screens */}
      <div className="hidden lg:block xl:hidden w-full px-6 py-6">
        <div className="relative max-w-[700px] mx-auto">
          {/* Background Line */}
          <div className="absolute top-[11px] left-0 right-0 h-[9px] bg-white rounded-full" />
          
          {/* Animated Progress Line */}
          <div 
            className="absolute top-[11px] left-0 h-[9px] bg-[#FF7034] rounded-full transition-all duration-700 ease-out"
            style={{ width: `${Math.min(animatedProgress * 0.5, 100)}%` }}
          />
          
          {/* Visible Steps - Only show first 4 */}
          <div className="relative flex justify-between items-start">
            {stepLabels.slice(0, 4).map((label, index) => {
              const stepNumber = index + 1;
              const isCompleted = stepNumber < currentStep;
              const isActive = stepNumber === currentStep;
              
              return (
                <div key={label} className="flex flex-col items-center gap-2">
                  <div 
                    className={`w-[23px] h-[23px] rounded-full flex items-center justify-center transition-all duration-500 ${
                      isCompleted || isActive 
                        ? 'bg-[#FF7034] scale-110' 
                        : 'bg-white scale-100'
                    }`}
                  >
                    {isCompleted && (
                      <div className="animate-[fadeIn_0.3s_ease-in]">
                        <CheckIcon />
                      </div>
                    )}
                  </div>
                  <p className={`font-['Roboto',sans-serif] font-medium text-[13px] text-center capitalize max-w-[90px] ${
                    isCompleted || isActive ? 'text-[#e5ebf0]' : 'text-[#e5ebf0]/70'
                  }`}>
                    {label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Mobile Progress Bar - simplified */}
      <div className="lg:hidden w-full px-6 py-6">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-[23px] h-[23px] rounded-full bg-[#FF7034] flex items-center justify-center">
            <CheckIcon />
          </div>
          <p className="font-['Roboto',sans-serif] font-medium text-white text-[14px]">
            Step {currentStep} of {totalSteps}
          </p>
        </div>
        <div className="w-full h-2 bg-white/20 rounded-full overflow-hidden">
          <div 
            className="h-full bg-[#FF7034] rounded-full transition-all duration-700 ease-out"
            style={{ width: `${(currentStep / totalSteps) * 100}%` }}
          />
        </div>
      </div>
    </>
  );
}