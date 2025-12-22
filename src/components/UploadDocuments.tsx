import { useState, DragEvent } from 'react';
import ProgressBar from './ProgressBar';
import Header from './Header';

/**
 * Local fallback svgPaths — placeholder path data so component builds.
 * Replace these with the real paths if you later export them from Figma.
 */
const svgPaths = {
  p1fa56d00:
    // simple document/upload-ish icon path (placeholder)
    'M30 6H14a4 4 0 0 0-4 4v28a4 4 0 0 0 4 4h28a4 4 0 0 0 4-4V18L30 6z M30 6v12h12',
  p39cb0dc0:
    // small arrow for continue button (placeholder)
    'M0 7.5h18v-1H0v1zm10-5l6 5-6 5V12l3-4-3-4V2.5z',
};

type UploadDocumentsProps = {
  onContinue?: () => void;
  onLogoClick?: () => void;
};

export default function UploadDocuments({ onContinue, onLogoClick }: UploadDocumentsProps) {
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [isDragging, setIsDragging] = useState(false);

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    const files = Array.from(e.dataTransfer.files);
    setUploadedFiles((prev) => [...prev, ...files]);
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      setUploadedFiles((prev) => [...prev, ...files]);
    }
  };

  const removeFile = (index: number) => {
    setUploadedFiles((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#325368] to-[#1e3a4a] relative overflow-hidden">
      {/* Header/Navigation */}
      <Header onLogoClick={onLogoClick} />

      {/* Progress Bar */}
      <div className="animate-[fadeIn_0.8s_ease-out_0.2s_both]">
        <ProgressBar currentStep={3} />
      </div>

      {/* Main Content */}
      <main className="w-full max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16 py-8 lg:py-12">
        {/* Heading */}
        <h1 className="font-['Roboto_Serif',serif] font-semibold text-white text-[32px] sm:text-[40px] lg:text-[48px] text-center mb-8 lg:mb-12 capitalize animate-[fadeInUp_0.8s_ease-out_0.4s_both]">
          Upload Any Documents You Have
        </h1>

        {/* Upload Area */}
        <div className="w-full max-w-[637px] mx-auto mb-6 animate-[fadeInUp_0.8s_ease-out_0.6s_both]">
          <div
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            className={`relative w-full min-h-[200px] bg-[#e5ebf0] rounded-[20px] border-2 border-dashed transition-all ${
              isDragging ? 'border-[#FF7034] bg-[#d0eae6]' : 'border-[#6b6b6b]'
            } flex flex-col items-center justify-center p-8`}
            role="region"
            aria-label="File upload area"
          >
            <svg className="w-[60px] h-[60px] mb-4" fill="none" viewBox="0 0 60 60" aria-hidden>
              <path d={svgPaths.p1fa56d00} fill="#325368" />
            </svg>
            <p className="font-['Roboto',sans-serif] text-[#325368] text-[16px] mb-2 text-center">
              Drag and drop files here or
            </p>
            <label className="cursor-pointer">
              <span className="font-['Roboto',sans-serif] text-[#FF7034] text-[16px] underline">
                browse files
              </span>
              <input
                type="file"
                multiple
                onChange={handleFileInput}
                className="hidden"
                accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
              />
            </label>
          </div>

          {/* Uploaded Files List */}
          {uploadedFiles.length > 0 && (
            <div className="mt-4 space-y-2">
              {uploadedFiles.map((file, index) => (
                <div
                  key={`${file.name}-${index}`}
                  className="flex items-center justify-between bg-white/10 rounded-lg p-3 animate-[fadeInUp_0.3s_ease-out]"
                >
                  <span className="font-['Roboto',sans-serif] text-white text-[14px] truncate">
                    {file.name}
                  </span>
                  <button
                    onClick={() => removeFile(index)}
                    className="text-red-400 hover:text-red-300 ml-2 transition-colors"
                    type="button"
                    aria-label={`Remove ${file.name}`}
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Instruction Text */}
        <p className="font-['Roboto',sans-serif] font-medium text-white text-[16px] sm:text-[18px] text-center mb-12 lg:mb-16 max-w-2xl mx-auto animate-[fadeInUp_0.8s_ease-out_0.8s_both]">
          You can also share documents later. This just helps us understand faster.
        </p>

        {/* Continue Button */}
        <div className="flex flex-col items-center gap-4 animate-[fadeInUp_0.8s_ease-out_1s_both]">
          <button
            onClick={onContinue}
            className="bg-[#FF7034] flex items-center gap-3 px-6 py-4 rounded-[6px] shadow-[0px_2px_6.9px_0px_rgba(0,0,0,0.25)] font-['Roboto_Serif',serif] font-bold text-[#e5ebf0] text-[16px] hover:bg-[#ff8a4d] transition-all hover:scale-105"
            type="button"
          >
            Continue
            <svg className="w-[24px] h-[15px]" fill="none" viewBox="0 0 26 15" aria-hidden>
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
