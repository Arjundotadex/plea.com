import svgPaths from '../imports/svg-znf0g7dys0';

export default function Loading() {
  return (
    <div className="fixed inset-0 bg-gradient-to-b from-[#325368] to-[#1e3a4a] flex items-center justify-center z-50">
      <div className="relative w-[100px] h-[100px]">
        {/* Light teal ring */}
        <svg 
          className="absolute inset-0 w-full h-full animate-spin" 
          fill="none" 
          viewBox="670 462 100 100"
          style={{ animationDuration: '1.5s' }}
        >
          <path d={svgPaths.pcf163b1} fill="#D0EAE6" />
        </svg>
        
        {/* Orange segment */}
        <svg 
          className="absolute inset-0 w-full h-full animate-spin" 
          fill="none" 
          viewBox="670 462 100 100"
          style={{ animationDuration: '1.5s' }}
        >
          <path d={svgPaths.pd239600} fill="#FF7034" />
        </svg>
      </div>
    </div>
  );
}
