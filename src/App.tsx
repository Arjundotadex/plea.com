import { Search, Clock, Menu, X } from 'lucide-react';
import { useState, useEffect, useMemo } from 'react';
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import { motion, AnimatePresence } from 'framer-motion';
import Login from './Login';
import SignUp from './SignUp';
import LawyerSignUp from './LawyerSignUp';
import LoadingScreen from './components/LoadingScreen';
import LawyersListings from './LawyersListings';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [casesFiled, setCasesFiled] = useState(15847);
  const [timeSaved, setTimeSaved] = useState(23456);
  const [casesResolved, setCasesResolved] = useState(12394);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState<'home' | 'login' | 'signup' | 'lawyerSignup' | 'lawyersListings'>('home');
  const [isLoading, setIsLoading] = useState(true);
  const [pageTransitionLoading, setPageTransitionLoading] = useState(false);
  const [passedSearchQuery, setPassedSearchQuery] = useState('');

  const quickSearchOptions = useMemo(() => [
    { id: 'divorce', label: 'Divorce' },
    { id: 'property', label: 'Property' },
    { id: 'tenant', label: 'Tenant' }
  ], []);

  const handleQuickSearch = (option: string) => {
    setSearchQuery(option);
  };

  // Real-time data updates - optimized
  useEffect(() => {
    const interval = setInterval(() => {
      setCasesFiled(prev => prev + Math.floor(Math.random() * 3) + 1);
      setTimeSaved(prev => prev + Math.floor(Math.random() * 15) + 5);
      setCasesResolved(prev => prev + Math.floor(Math.random() * 2) + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Loading screen effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // If we're on the login page, show the login component
  if (currentPage === 'login') {
    return (
      <>
        {pageTransitionLoading && <LoadingScreen />}
        {!pageTransitionLoading && (
          <Login 
            onBackToHome={() => setCurrentPage('home')} 
            onNavigateToSignUp={() => setCurrentPage('signup')}
            onNavigateToLawyersListings={() => setCurrentPage('lawyersListings')}
          />
        )}
      </>
    );
  }

  // If we're on the signup page, show the signup component
  if (currentPage === 'signup') {
    return (
      <>
        {pageTransitionLoading && <LoadingScreen />}
        {!pageTransitionLoading && (
          <SignUp 
            onBackToHome={() => setCurrentPage('home')}
            onNavigateToSignIn={() => setCurrentPage('login')}
            onNavigateToLawyerSignUp={() => setCurrentPage('lawyerSignup')}
            onNavigateToLawyersListings={() => setCurrentPage('lawyersListings')}
          />
        )}
      </>
    );
  }

  // If we're on the lawyer signup page, show the lawyer signup component
  if (currentPage === 'lawyerSignup') {
    return (
      <>
        {pageTransitionLoading && <LoadingScreen />}
        {!pageTransitionLoading && (
          <LawyerSignUp 
            onBackToHome={() => setCurrentPage('home')}
            onNavigateToSignIn={() => setCurrentPage('login')}
            onNavigateToLawyersListings={() => setCurrentPage('lawyersListings')}
          />
        )}
      </>
    );
  }

  // If we're on the lawyers listings page, show the lawyers listings component
  if (currentPage === 'lawyersListings') {
    return (
      <>
        {pageTransitionLoading && <LoadingScreen />}
        {!pageTransitionLoading && (
          <LawyersListings 
            onBackToHome={() => setCurrentPage('home')}
            initialSearchQuery={passedSearchQuery}
            onNavigateToLogin={() => {
              setPageTransitionLoading(true);
              setTimeout(() => {
                setPageTransitionLoading(false);
                setCurrentPage('login');
              }, 1000);
            }}
            onNavigateToSignUp={() => {
              setPageTransitionLoading(true);
              setTimeout(() => {
                setPageTransitionLoading(false);
                setCurrentPage('signup');
              }, 1000);
            }}
            onNavigateToLawyerSignUp={() => {
              setPageTransitionLoading(true);
              setTimeout(() => {
                setPageTransitionLoading(false);
                setCurrentPage('lawyerSignup');
              }, 1000);
            }}
          />
        )}
      </>
    );
  }

  // Show loading screen if loading
  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            {/* Logo - Left */}
            <div className="text-primary">
              <h2 className="text-lg sm:text-xl">LegalEase</h2>
            </div>

            {/* Desktop Center Navigation Links - Rounded Container */}
            <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 bg-background rounded-full px-6 xl:px-8 py-3 items-center gap-4 xl:gap-6 shadow-sm">
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
              <a href="#join-as-lawyer" className="text-foreground hover:text-primary transition-colors whitespace-nowrap font-medium text-sm">
                Join as a Lawyer
              </a>
            </div>

            {/* CTA Button - Right (Desktop) */}
            <div className="hidden md:flex items-center gap-2 lg:gap-3">
              <motion.button 
                onClick={() => {
                  setPageTransitionLoading(true);
                  setTimeout(() => {
                    setPageTransitionLoading(false);
                    setCurrentPage('login');
                  }, 1000);
                }}
                className="border-2 border-border hover:border-primary text-foreground hover:text-primary px-3 lg:px-5 py-2 lg:py-2.5 rounded-lg transition-all duration-300 text-sm font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Track your status
              </motion.button>
              <motion.button 
                onClick={() => {
                  setPageTransitionLoading(true);
                  setTimeout(() => {
                    setPageTransitionLoading(false);
                    setCurrentPage('signup');
                  }, 1000);
                }}
                className="bg-primary hover:bg-primary-dark text-primary-foreground px-4 lg:px-6 py-2 lg:py-2.5 rounded-lg transition-colors text-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                File a Case
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden text-foreground p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
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
                className="lg:hidden overflow-hidden"
              >
                <div className="flex flex-col gap-3 py-4 border-t border-border mt-3">
                  <a href="#how-it-works" className="text-foreground hover:text-primary transition-colors font-medium text-sm py-2" onClick={() => setMobileMenuOpen(false)}>
                    How it Works
                  </a>
                  <a href="#case-types" className="text-foreground hover:text-primary transition-colors font-medium text-sm py-2" onClick={() => setMobileMenuOpen(false)}>
                    Case Types
                  </a>
                  <a href="#why-us" className="text-foreground hover:text-primary transition-colors font-medium text-sm py-2" onClick={() => setMobileMenuOpen(false)}>
                    Why Us
                  </a>
                  <a href="#join-as-lawyer" className="text-foreground hover:text-primary transition-colors font-medium text-sm py-2" onClick={() => setMobileMenuOpen(false)}>
                    Join as a Lawyer
                  </a>
                  <button 
                    onClick={() => {
                      setCurrentPage('login');
                      setMobileMenuOpen(false);
                    }}
                    className="border-2 border-border hover:border-primary text-foreground hover:text-primary px-6 py-2.5 rounded-lg transition-all duration-300 text-sm font-medium w-full mt-2"
                  >
                    Track your status
                  </button>
                  <button className="bg-primary hover:bg-primary-dark text-primary-foreground px-6 py-2.5 rounded-lg transition-colors text-sm w-full">
                    File a Case
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-16 lg:py-20 overflow-hidden">
        <div className="relative z-10 p-6 sm:p-8 lg:p-12 rounded-2xl overflow-hidden" style={{ backgroundColor: '#EFEFEF', boxShadow: 'inset 0 2px 8px rgba(0, 0, 0, 0.1)' }}>
          <div className="relative text-center space-y-6 sm:space-y-8">
            <div className="space-y-3 sm:space-y-4">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl max-w-3xl mx-auto flex items-center justify-center flex-wrap gap-2">
                <span className="font-semibold">Don't Stress About Legal Problems — Solve Them in</span>{' '}
                <span className="text-primary font-light italic underline decoration-solid inline-flex items-center gap-2">
                  10 Minutes
                  <Clock className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10" />
                </span>
              </h1>
              <p className="text-secondary text-base sm:text-[18px] font-medium max-w-2xl mx-auto px-4">
                Instantly connect with verified lawyers, file your case online, and track everything securely — all from your phone.
              </p>
            </div>

            {/* Search Bar */}
            <motion.div 
              className="max-w-2xl mx-auto space-y-3 sm:space-y-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <form onSubmit={(e) => {
                e.preventDefault();
                if (searchQuery.trim()) {
                  setPageTransitionLoading(true);
                  setTimeout(() => {
                    setPageTransitionLoading(false);
                    setCurrentPage('lawyersListings');
                    setPassedSearchQuery(searchQuery);
                  }, 1000);
                }
              }}>
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5" style={{ color: '#FF6B00' }} />
                  <input
                    type="text"
                    placeholder="Search your case"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 sm:pl-12 pr-4 py-3 sm:py-4 rounded-full focus:outline-none focus:ring-2 focus:ring-primary bg-background transition-all duration-300 text-sm sm:text-base"
                    style={{ border: '1px solid rgba(0, 0, 0, 0.2)' }}
                  />
                </div>
              </form>

              {/* Quick Search Options */}
              <motion.div 
                className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <span className="text-secondary text-xs sm:text-sm">Quick Search:</span>
                <div className="flex gap-2">
                  {quickSearchOptions.map((option, index) => (
                    <motion.button
                      key={option.id}
                      onClick={() => handleQuickSearch(option.label)}
                      className="px-3 sm:px-4 py-1.5 sm:py-2 border border-border rounded-full hover:border-primary hover:text-primary transition-colors text-xs sm:text-sm bg-background"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {option.label}
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Download App Section */}
            <div className="max-w-md mx-auto mt-8 sm:mt-12">
              <p className="text-foreground font-medium mb-3 sm:mb-4 text-sm sm:text-base">Download Our App</p>
              <div className="flex items-center justify-center gap-3 sm:gap-4 flex-wrap">
                {/* Google Play Store Button */}
                <a
                  href="#"
                  className="flex items-center gap-2 bg-foreground text-background px-4 sm:px-5 py-2.5 sm:py-3 rounded-lg hover:opacity-90 transition-opacity"
                >
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                  </svg>
                  <div className="text-left">
                    <div className="text-[9px] sm:text-[10px] opacity-80">GET IT ON</div>
                    <div className="text-xs sm:text-sm font-medium">Google Play</div>
                  </div>
                </a>

                {/* App Store Button */}
                <a
                  href="#"
                  className="flex items-center gap-2 bg-foreground text-background px-4 sm:px-5 py-2.5 sm:py-3 rounded-lg hover:opacity-90 transition-opacity"
                >
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
                  </svg>
                  <div className="text-left">
                    <div className="text-[9px] sm:text-[10px] opacity-80">Download on the</div>
                    <div className="text-xs sm:text-sm font-medium">App Store</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Real-time Stats Section */}
            <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-300">
              <div className="grid grid-cols-3 gap-4 sm:gap-8 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-1 sm:mb-2 transition-all duration-500">
                    {casesFiled.toLocaleString()}
                  </div>
                  <div className="text-secondary text-xs sm:text-sm font-medium">Cases Filed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-1 sm:mb-2 transition-all duration-500">
                    {timeSaved.toLocaleString()}
                  </div>
                  <div className="text-secondary text-xs sm:text-sm font-medium">Hours Saved</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-1 sm:mb-2 transition-all duration-500">
                    {casesResolved.toLocaleString()}
                  </div>
                  <div className="text-secondary text-xs sm:text-sm font-medium">Cases Resolved</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-16 lg:py-20">
        <motion.h2 
          className="text-2xl sm:text-3xl lg:text-[32px] text-left mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-semibold">From confusion to clarity in just a few</span>
          <br />
          <span className="font-semibold">minutes — </span><span className="text-primary font-light">here's how it works.</span>
        </motion.h2>

        {/* Boxes Layout */}
        <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 justify-between">
          {/* Left Column - Box 1 and Box 3 */}
          <div className="flex flex-col gap-4 sm:gap-6 flex-1">
            {/* Box 1 */}
            <motion.div 
              className="rounded-2xl min-h-[200px] sm:min-h-[235px] p-6 sm:p-8" 
              style={{ backgroundColor: '#EAEAEA', boxShadow: 'inset 0 2px 8px rgba(0, 0, 0, 0.1)' }}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="text-lg sm:text-xl lg:text-[22px] font-semibold mb-3 sm:mb-4">Step 1 — Tell Us Your Legal Issue</h3>
              <p className="text-foreground text-sm sm:text-base lg:text-[16px] font-medium mb-2 sm:mb-3">
                Select your case type and share a few quick details. We'll instantly understand what kind of lawyer you need.
              </p>
              <p className="text-foreground text-sm sm:text-base lg:text-[16px] font-medium" style={{ opacity: 0.7 }}>
                💡 Takes less than 2 minutes.
              </p>
            </motion.div>
            
            {/* Box 3 */}
            <motion.div 
              className="rounded-2xl min-h-[200px] sm:min-h-[235px] p-6 sm:p-8" 
              style={{ backgroundColor: '#FF6B00', boxShadow: 'inset 0 2px 8px rgba(0, 0, 0, 0.1)' }}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="text-lg sm:text-xl lg:text-[22px] font-semibold mb-3 sm:mb-4 text-foreground">Step 3 — File or Fight Your Case Online</h3>
              <p className="text-foreground text-sm sm:text-base lg:text-[16px] font-medium mb-2 sm:mb-3">
                Work directly with your lawyer to file your case digitally, review updates, and manage documents — all in one place.
              </p>
              <p className="text-foreground text-sm sm:text-base lg:text-[16px] font-medium" style={{ opacity: 0.7 }}>
                📱 Fast. Secure. 100% online.
              </p>
            </motion.div>
          </div>

          {/* Right Column - Box 2 and CTA */}
          <div className="flex flex-col gap-4 sm:gap-6 lg:w-[508px]">
            {/* Box 2 */}
            <motion.div 
              className="rounded-2xl min-h-[220px] sm:min-h-[296px] p-6 sm:p-8" 
              style={{ backgroundColor: '#1A1A1A', boxShadow: 'inset 0 2px 8px rgba(0, 0, 0, 0.1)' }}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-lg sm:text-xl lg:text-[22px] font-semibold mb-3 sm:mb-4 text-primary">Step 2 — Get Matched with the Right Lawyer</h3>
              <p className="text-white text-sm sm:text-base lg:text-[16px] font-medium mb-2 sm:mb-3">
                Our system connects you to a verified, rated lawyer who specializes in your issue. No endless calls or confusion — just instant, expert help.
              </p>
              <p className="text-sm sm:text-base lg:text-[16px] font-medium" style={{ color: '#FFFFFF', opacity: 0.7 }}>
                🔒 Every lawyer is screened for credibility and experience.
              </p>
            </motion.div>

            {/* CTA and Text */}
            <motion.div 
              className="text-center mt-4 sm:mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <motion.button 
                className="bg-primary hover:bg-primary-dark text-primary-foreground px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg transition-colors mb-2 sm:mb-3 text-sm sm:text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                File a Case
              </motion.button>
              <p className="text-secondary font-semibold text-xs sm:text-[14px]">
                100% secure. Trusted by users across India.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Case Types Section */}
      <section id="case-types" className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-16 lg:py-20">
        <motion.h2 
          className="text-2xl sm:text-3xl lg:text-[32px] text-left sm:text-right mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-semibold">From everyday disputes to complex cases — </span>
          <br />
          <span className="text-primary font-light">we've got the right lawyer for you.</span>
        </motion.h2>

        {/* Case Type Boxes - Responsive Layout */}
        <div className="space-y-4 sm:space-y-6">
          {/* First Row - 3 Boxes */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <motion.div
              className="bg-background border-2 border-border rounded-2xl p-5 sm:p-6 hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="text-lg sm:text-xl lg:text-[22px] font-semibold mb-2 sm:mb-3">🏠 Property & Land Disputes</h3>
              <p className="text-sm sm:text-base lg:text-[16px] group-hover:text-white transition-colors duration-300">
                Resolve ownership, boundary, or tenant issues without endless court visits.
              </p>
            </motion.div>

            <motion.div
              className="bg-background border-2 border-border rounded-2xl p-5 sm:p-6 hover:bg-[#2ECC71] hover:text-white transition-all duration-300 cursor-pointer group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-lg sm:text-xl lg:text-[22px] font-semibold mb-2 sm:mb-3">👨‍👩‍👧 Family & Divorce Cases</h3>
              <p className="text-sm sm:text-base lg:text-[16px] group-hover:text-white transition-colors duration-300">
                Navigate custody, alimony, or separation with compassionate legal support.
              </p>
            </motion.div>

            <motion.div
              className="bg-background border-2 border-border rounded-2xl p-5 sm:p-6 hover:bg-[#E74C3C] hover:text-white transition-all duration-300 cursor-pointer group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="text-lg sm:text-xl lg:text-[22px] font-semibold mb-2 sm:mb-3">⚖️ Criminal Defense</h3>
              <p className="text-sm sm:text-base lg:text-[16px] group-hover:text-white transition-colors duration-300">
                Defend your rights with expert lawyers specializing in criminal law.
              </p>
            </motion.div>
          </div>

          {/* Second Row - 3 Boxes */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <motion.div
              className="bg-background border-2 border-border rounded-2xl p-5 sm:p-6 hover:bg-[#E65A00] hover:text-white transition-all duration-300 cursor-pointer group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h3 className="text-lg sm:text-xl lg:text-[22px] font-semibold mb-2 sm:mb-3">🛒 Consumer Rights</h3>
              <p className="text-sm sm:text-base lg:text-[16px] group-hover:text-white transition-colors duration-300">
                Fight unfair practices, defective products, or service disputes effectively.
              </p>
            </motion.div>

            <motion.div
              className="bg-background border-2 border-border rounded-2xl p-5 sm:p-6 hover:bg-[#1A1A1A] hover:text-white transition-all duration-300 cursor-pointer group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <h3 className="text-lg sm:text-xl lg:text-[22px] font-semibold mb-2 sm:mb-3">💼 Business & Contracts</h3>
              <p className="text-sm sm:text-base lg:text-[16px] group-hover:text-white transition-colors duration-300">
                Handle partnership disputes, contract breaches, or business litigation.
              </p>
            </motion.div>

            <motion.div
              className="bg-background border-2 border-border rounded-2xl p-5 sm:p-6 hover:bg-[#6B6B6B] hover:text-white transition-all duration-300 cursor-pointer group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <h3 className="text-lg sm:text-xl lg:text-[22px] font-semibold mb-2 sm:mb-3">💻 Cyber Crime & Fraud</h3>
              <p className="text-sm sm:text-base lg:text-[16px] group-hover:text-white transition-colors duration-300">
                Combat online fraud, identity theft, or digital harassment with expert help.
              </p>
            </motion.div>
          </div>

          {/* Third Row - 2 Boxes Centered */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:flex lg:justify-center gap-4 sm:gap-6">
            <motion.div
              className="bg-background border-2 border-border rounded-2xl p-5 sm:p-6 hover:bg-[#2ECC71] hover:text-white transition-all duration-300 cursor-pointer group lg:w-[calc(33.333%-16px)]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <h3 className="text-lg sm:text-xl lg:text-[22px] font-semibold mb-2 sm:mb-3">💰 Financial & Tax Issues</h3>
              <p className="text-sm sm:text-base lg:text-[16px] group-hover:text-white transition-colors duration-300">
                Get expert guidance on tax disputes, loan recovery, or financial fraud.
              </p>
            </motion.div>

            <motion.div
              className="bg-background border-2 border-border rounded-2xl p-5 sm:p-6 hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer group lg:w-[calc(33.333%-16px)]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              <h3 className="text-lg sm:text-xl lg:text-[22px] font-semibold mb-2 sm:mb-3">🔍 And More Cases</h3>
              <p className="text-sm sm:text-base lg:text-[16px] group-hover:text-white transition-colors duration-300">
                Unable to find your case? Just use our search bar and look for it.
              </p>
            </motion.div>
          </div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mt-6 sm:mt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 1.0 }}
          >
            <motion.button 
              className="bg-primary hover:bg-primary-dark text-primary-foreground px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg transition-colors text-sm sm:text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              File a Case
            </motion.button>
            <motion.button 
              className="bg-foreground hover:bg-[#333333] text-background px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg transition-colors text-sm sm:text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Join as a Lawyer
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Why Us Section */}
      <section id="why-us" className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-16 lg:py-20">
        <motion.h2 
          className="text-2xl sm:text-3xl lg:text-[32px] text-left mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-semibold">We make legal help </span>
          <span className="text-primary font-light">fast, transparent, and genuinely</span>
          <br />
          <span className="text-primary font-light">trustworthy.</span>
        </motion.h2>

        {/* Feature Cards - Responsive Asymmetric Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6">
          {/* Row 1 - Two Cards */}
          <motion.div
            className="md:col-span-7 bg-primary rounded-2xl p-6 sm:p-8 lg:p-10 text-white relative overflow-hidden"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="relative z-10">
              <div className="text-4xl sm:text-5xl lg:text-6xl mb-3 sm:mb-4">✅</div>
              <h3 className="text-xl sm:text-2xl lg:text-[28px] font-semibold mb-3 sm:mb-4">Verified Lawyers Only</h3>
              <p className="text-sm sm:text-base lg:text-[16px] mb-4 sm:mb-6 opacity-90">
                Handpicked, rated, and background-checked for complete peace of mind.
              </p>
              <motion.button
                className="text-white font-semibold hover:translate-x-2 transition-transform flex items-center gap-2 border-b-2 border-white pb-1 text-sm sm:text-base"
                whileHover={{ x: 5 }}
              >
                Know More
                <span>→</span>
              </motion.button>
            </div>
            <div className="absolute -bottom-10 -right-10 text-7xl sm:text-8xl lg:text-9xl opacity-10">✅</div>
          </motion.div>

          <motion.div
            className="md:col-span-5 bg-[#EFEFEF] rounded-2xl p-6 sm:p-8 lg:p-10 relative overflow-hidden"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative z-10">
              <div className="text-4xl sm:text-5xl lg:text-6xl mb-3 sm:mb-4">⚡</div>
              <h3 className="text-xl sm:text-2xl lg:text-[28px] font-semibold mb-3 sm:mb-4">Matched in Minutes</h3>
              <p className="text-sm sm:text-base lg:text-[16px] text-secondary mb-4 sm:mb-6">
                Instantly connect with the right lawyer for your specific case type.
              </p>
              <motion.button
                className="text-primary font-semibold hover:translate-x-2 transition-transform flex items-center gap-2 border-b-2 border-primary pb-1 text-sm sm:text-base"
                whileHover={{ x: 5 }}
              >
                Know More
                <span>→</span>
              </motion.button>
            </div>
            <div className="absolute -bottom-10 -right-10 text-7xl sm:text-8xl lg:text-9xl opacity-5">⚡</div>
          </motion.div>

          {/* Row 2 - Two Cards (Reversed) */}
          <motion.div
            className="md:col-span-5 bg-foreground rounded-2xl p-6 sm:p-8 lg:p-10 text-white relative overflow-hidden"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="relative z-10">
              <div className="text-4xl sm:text-5xl lg:text-6xl mb-3 sm:mb-4">💰</div>
              <h3 className="text-xl sm:text-2xl lg:text-[28px] font-semibold mb-3 sm:mb-4">Transparent Pricing</h3>
              <p className="text-sm sm:text-base lg:text-[16px] mb-4 sm:mb-6 opacity-90">
                See costs upfront — no surprises, no hidden fees.
              </p>
              <motion.button
                className="text-white font-semibold hover:translate-x-2 transition-transform flex items-center gap-2 border-b-2 border-white pb-1 text-sm sm:text-base"
                whileHover={{ x: 5 }}
              >
                Know More
                <span>→</span>
              </motion.button>
            </div>
            <div className="absolute -bottom-10 -right-10 text-7xl sm:text-8xl lg:text-9xl opacity-10">💰</div>
          </motion.div>

          <motion.div
            className="md:col-span-7 bg-[#2ECC71] rounded-2xl p-6 sm:p-8 lg:p-10 text-white relative overflow-hidden"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="relative z-10">
              <div className="text-4xl sm:text-5xl lg:text-6xl mb-3 sm:mb-4">🔒</div>
              <h3 className="text-xl sm:text-2xl lg:text-[28px] font-semibold mb-3 sm:mb-4">Completely Online & Secure</h3>
              <p className="text-sm sm:text-base lg:text-[16px] mb-4 sm:mb-6 opacity-90">
                File, track, and manage your case safely from anywhere.
              </p>
              <motion.button
                className="text-white font-semibold hover:translate-x-2 transition-transform flex items-center gap-2 border-b-2 border-white pb-1 text-sm sm:text-base"
                whileHover={{ x: 5 }}
              >
                Know More
                <span>→</span>
              </motion.button>
            </div>
            <div className="absolute -bottom-10 -right-10 text-7xl sm:text-8xl lg:text-9xl opacity-10">🔒</div>
          </motion.div>
        </div>
      </section>

      {/* Join as Lawyer Section */}
      <section id="join-as-lawyer" className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-16 lg:py-20">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-semibold mb-4 sm:mb-6">
            <span>Join India's </span>
            <span className="text-primary font-light">fastest-growing legal platform</span>
            <br />
            <span>and connect with people actively seeking expert legal help.</span>
          </h2>
          <p className="text-secondary text-base sm:text-lg lg:text-[22px] font-normal mb-8 sm:mb-12">
            We handle the marketing, tech, and trust — you focus on winning cases.
          </p>
        </motion.div>

        {/* Boxes Layout */}
        <div className="space-y-4 sm:space-y-6">
          {/* Top Row - 3 Boxes */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <motion.div
              className="bg-foreground rounded-2xl p-6 sm:p-8 border-2 border-border hover:border-primary transition-all duration-300 text-white"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">💼</div>
              <h3 className="text-lg sm:text-xl lg:text-[22px] font-semibold mb-2 sm:mb-3">Get Quality Clients</h3>
              <p className="text-sm sm:text-base lg:text-[16px] mb-4 sm:mb-6 opacity-90">
                We bring verified users directly to you—no more cold calls or wasted effort.
              </p>
              <motion.button
                className="text-white font-semibold hover:translate-x-2 transition-transform flex items-center gap-2 text-sm sm:text-base"
                whileHover={{ x: 5 }}
              >
                Know More
                <span>→</span>
              </motion.button>
            </motion.div>

            <motion.div
              className="rounded-2xl p-6 sm:p-8 border-2 border-border hover:border-primary transition-all duration-300"
              style={{ backgroundColor: '#D9D9D9' }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">📊</div>
              <h3 className="text-lg sm:text-xl lg:text-[22px] font-semibold mb-2 sm:mb-3">Grow Your Practice</h3>
              <p className="text-sm sm:text-base lg:text-[16px] text-secondary mb-4 sm:mb-6">
                Access a steady stream of cases matched to your expertise and location.
              </p>
              <motion.button
                className="text-primary font-semibold hover:translate-x-2 transition-transform flex items-center gap-2 text-sm sm:text-base"
                whileHover={{ x: 5 }}
              >
                Know More
                <span>→</span>
              </motion.button>
            </motion.div>

            <motion.div
              className="bg-[#EFEFEF] rounded-2xl p-6 sm:p-8 border-2 border-border hover:border-primary transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">⚙️</div>
              <h3 className="text-lg sm:text-xl lg:text-[22px] font-semibold mb-2 sm:mb-3">Easy Case Management</h3>
              <p className="text-sm sm:text-base lg:text-[16px] text-secondary mb-4 sm:mb-6">
                Track cases, share documents, and communicate—all from one simple dashboard.
              </p>
              <motion.button
                className="text-primary font-semibold hover:translate-x-2 transition-transform flex items-center gap-2 text-sm sm:text-base"
                whileHover={{ x: 5 }}
              >
                Know More
                <span>→</span>
              </motion.button>
            </motion.div>
          </div>

          {/* Bottom Row - 2 Boxes (5th box double width) */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
            <motion.div
              className="bg-secondary rounded-2xl p-6 sm:p-8 border-2 border-border hover:border-primary transition-all duration-300 text-white"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🎯</div>
              <h3 className="text-lg sm:text-xl lg:text-[22px] font-semibold mb-2 sm:mb-3">Build Your Reputation</h3>
              <p className="text-sm sm:text-base lg:text-[16px] mb-4 sm:mb-6 opacity-90">
                Earn ratings and reviews that help you stand out and attract more clients.
              </p>
              <motion.button
                className="text-white font-semibold hover:translate-x-2 transition-transform flex items-center gap-2 text-sm sm:text-base"
                whileHover={{ x: 5 }}
              >
                Know More
                <span>→</span>
              </motion.button>
            </motion.div>

            <motion.div
              className="lg:col-span-2 bg-primary-dark rounded-2xl p-6 sm:p-8 text-white hover:opacity-90 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🚀</div>
              <h3 className="text-xl sm:text-2xl lg:text-[28px] font-semibold mb-2 sm:mb-3">Zero Platform Fees for the First Month</h3>
              <p className="text-sm sm:text-base lg:text-[16px] mb-3 sm:mb-4 opacity-90">
                Start growing your practice without any upfront costs. Join today and experience the difference.
              </p>
              <motion.button
                className="bg-white text-primary px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-sm sm:text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Join as a Lawyer
              </motion.button>
            </motion.div>
          </div>
        </div>

        {/* Text and Download Section */}
        <motion.div
          className="text-center mt-8 sm:mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p className="text-[14px] font-semibold text-secondary mb-6 sm:mb-8">
            Verification takes less than 24 hours. Start growing your practice today.
          </p>
          <h3 className="text-2xl sm:text-3xl lg:text-[32px] font-semibold mb-6 sm:mb-8">
            Download our app for best experience
          </h3>

          {/* App Download Buttons */}
          <div className="flex items-center justify-center gap-3 sm:gap-4 flex-wrap">
            {/* Google Play Store Button */}
            <motion.a
              href="#"
              className="hover:opacity-80 transition-opacity"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ImageWithFallback 
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Get it on Google Play"
                className="h-10 sm:h-12"
              />
            </motion.a>

            {/* App Store Button */}
            <motion.a
              href="#"
              className="hover:opacity-80 transition-opacity"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ImageWithFallback 
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="Download on the App Store"
                className="h-10 sm:h-12"
              />
            </motion.a>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-[#EFEFEF] mt-12 sm:mt-20" style={{ borderTopLeftRadius: '50px', borderTopRightRadius: '50px', boxShadow: 'inset 0 2px 8px rgba(0, 0, 0, 0.1)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-12 mb-6 sm:mb-8">
            {/* Left Section - Logo and Navigation */}
            <div className="md:col-span-7 flex flex-col sm:flex-row gap-8 sm:gap-12 lg:gap-16">
              {/* Logo */}
              <div className="flex justify-center sm:justify-start">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary"></div>
              </div>

              {/* Navigation Links - Two Columns */}
              <div className="grid grid-cols-2 gap-8 sm:gap-12 flex-1">
                {/* First Column of Links */}
                <div className="flex flex-col gap-2 sm:gap-3">
                  <a href="#how-it-works" className="text-foreground hover:text-primary transition-colors text-[14px] font-semibold">
                    How It Works
                  </a>
                  <a href="#case-types" className="text-foreground hover:text-primary transition-colors text-[14px] font-semibold">
                    Case Types
                  </a>
                  <a href="#why-us" className="text-foreground hover:text-primary transition-colors text-[14px] font-semibold">
                    Why US
                  </a>
                  <a href="#join-as-lawyer" className="text-foreground hover:text-primary transition-colors text-[14px] font-semibold">
                    Join as Lawyer
                  </a>
                  <a href="#" className="text-foreground hover:text-primary transition-colors text-[14px] font-semibold">
                    File a case
                  </a>
                </div>

                {/* Second Column of Links */}
                <div className="flex flex-col gap-2 sm:gap-3">
                  <a href="#" className="text-foreground hover:text-primary transition-colors text-[14px] font-semibold">
                    Terms & Conditions
                  </a>
                  <a href="#" className="text-foreground hover:text-primary transition-colors text-[14px] font-semibold">
                    Privacy Policy
                  </a>
                  <a href="#" className="text-foreground hover:text-primary transition-colors text-[14px] font-semibold">
                    Careers
                  </a>
                  <a href="#" className="text-foreground hover:text-primary transition-colors text-[14px] font-semibold">
                    Track your status
                  </a>
                </div>
              </div>
            </div>

            {/* Right Section - Download App */}
            <div className="md:col-span-5 flex flex-col items-center">
              <h3 className="text-sm sm:text-[16px] font-semibold mb-3 sm:mb-4">Download our app from</h3>
              
              {/* App Store Buttons */}
              <div className="flex gap-2 sm:gap-3 mb-3 sm:mb-4 flex-wrap justify-center">
                <a href="#" className="hover:opacity-80 transition-opacity">
                  <ImageWithFallback 
                    src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                    alt="Get it on Google Play"
                    className="h-8 sm:h-10"
                  />
                </a>
                <a href="#" className="hover:opacity-80 transition-opacity">
                  <ImageWithFallback 
                    src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                    alt="Download on the App Store"
                    className="h-8 sm:h-10"
                  />
                </a>
              </div>

              <p className="text-foreground text-xs sm:text-sm mb-1 sm:mb-2">or</p>
              <p className="text-foreground font-medium text-xs sm:text-sm mb-2 sm:mb-3">scan the QR code</p>
              
              {/* QR Code with Orange Border */}
              <div className="border-4 border-primary rounded-lg p-2 bg-white">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white flex items-center justify-center">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <rect width="100" height="100" fill="white"/>
                    <rect x="10" y="10" width="30" height="30" fill="black"/>
                    <rect x="60" y="10" width="30" height="30" fill="black"/>
                    <rect x="10" y="60" width="30" height="30" fill="black"/>
                    <rect x="15" y="15" width="20" height="20" fill="white"/>
                    <rect x="65" y="15" width="20" height="20" fill="white"/>
                    <rect x="15" y="65" width="20" height="20" fill="white"/>
                    <rect x="20" y="20" width="10" height="10" fill="black"/>
                    <rect x="70" y="20" width="10" height="10" fill="black"/>
                    <rect x="20" y="70" width="10" height="10" fill="black"/>
                    <rect x="50" y="15" width="5" height="5" fill="black"/>
                    <rect x="45" y="20" width="5" height="5" fill="black"/>
                    <rect x="50" y="25" width="5" height="5" fill="black"/>
                    <rect x="50" y="50" width="5" height="5" fill="black"/>
                    <rect x="55" y="55" width="5" height="5" fill="black"/>
                    <rect x="60" y="50" width="5" height="5" fill="black"/>
                    <rect x="65" y="45" width="5" height="5" fill="black"/>
                    <rect x="70" y="50" width="5" height="5" fill="black"/>
                    <rect x="75" y="55" width="5" height="5" fill="black"/>
                    <rect x="80" y="60" width="5" height="5" fill="black"/>
                    <rect x="15" y="50" width="5" height="5" fill="black"/>
                    <rect x="20" y="45" width="5" height="5" fill="black"/>
                    <rect x="25" y="50" width="5" height="5" fill="black"/>
                    <rect x="30" y="45" width="5" height="5" fill="black"/>
                    <rect x="35" y="50" width="5" height="5" fill="black"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Bottom Text */}
          <div className="border-t border-gray-300 pt-4 sm:pt-6">
            <p className="text-secondary text-xs sm:text-sm mb-1">
              © 2025 [Your Brand Name]. All rights reserved.
            </p>
            <p className="text-secondary text-xs sm:text-sm">
              Making legal help simple, secure, and accessible for every Indian.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}