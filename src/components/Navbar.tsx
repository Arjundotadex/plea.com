import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  onNavigateToLogin?: () => void;
  onNavigateToSignUp?: () => void;
  onNavigateToLawyerSignUp?: () => void;
  onNavigateToHome?: () => void;
}

export default function Navbar({ onNavigateToLogin, onNavigateToSignUp, onNavigateToLawyerSignUp, onNavigateToHome }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Logo - Left */}
          <button 
            onClick={onNavigateToHome}
            className="text-primary hover:text-primary-dark transition-colors"
          >
            <h2 className="text-lg sm:text-xl">LegalEase</h2>
          </button>

          {/* Desktop Center Navigation Links - Rounded Container */}
          <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 bg-background rounded-full px-6 xl:px-8 py-3 items-center gap-4 xl:gap-6 shadow-sm border border-border">
            <a href="#how-it-works" className="text-foreground hover:text-primary transition-colors whitespace-nowrap font-medium text-sm">
              How it Works
            </a>
            <span className="text-border">|</span>
            <a href="#case-types" className="text-foreground hover:text-primary transition-colors whitespace-nowrap font-medium text-sm">
              Case Types
            </a>
            <span className="text-border">|</span>
            <a href="#why-us" className="text-foreground hover:text-primary transition-colors whitespace-nowrap font-medium text-sm">
              Why Us
            </a>
            <span className="text-border">|</span>
            <button 
              onClick={onNavigateToLawyerSignUp}
              className="text-foreground hover:text-primary transition-colors whitespace-nowrap font-medium text-sm"
            >
              Join as a Lawyer
            </button>
          </div>

          {/* CTA Button - Right (Desktop) */}
          <div className="hidden md:flex items-center gap-2 lg:gap-3">
            <motion.button 
              onClick={onNavigateToLogin}
              className="border-2 border-border hover:border-primary text-foreground hover:text-primary px-3 lg:px-5 py-2 lg:py-2.5 rounded-lg transition-all duration-300 text-sm font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Track your status
            </motion.button>
            <motion.button 
              onClick={onNavigateToSignUp}
              className="bg-primary hover:bg-primary-dark text-primary-foreground px-4 lg:px-6 py-2 lg:py-2.5 rounded-lg transition-colors text-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              File a Case
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-foreground p-2"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 pb-4 space-y-3"
            >
              <a href="#how-it-works" className="block text-foreground hover:text-primary transition-colors py-2">
                How it Works
              </a>
              <a href="#case-types" className="block text-foreground hover:text-primary transition-colors py-2">
                Case Types
              </a>
              <a href="#why-us" className="block text-foreground hover:text-primary transition-colors py-2">
                Why Us
              </a>
              <button 
                onClick={onNavigateToLawyerSignUp}
                className="block w-full text-left text-foreground hover:text-primary transition-colors py-2"
              >
                Join as a Lawyer
              </button>
              <div className="pt-3 space-y-2">
                <button 
                  onClick={onNavigateToLogin}
                  className="w-full border-2 border-border hover:border-primary text-foreground hover:text-primary px-4 py-2.5 rounded-lg transition-all duration-300 text-sm"
                >
                  Track your status
                </button>
                <button 
                  onClick={onNavigateToSignUp}
                  className="w-full bg-primary hover:bg-primary-dark text-primary-foreground px-4 py-2.5 rounded-lg transition-colors text-sm"
                >
                  File a Case
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
