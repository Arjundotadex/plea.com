import { Search, Clock } from 'lucide-react';
import { useState, useEffect } from 'react';
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import { motion } from 'framer-motion';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [casesFiled, setCasesFiled] = useState(15847);
  const [timeSaved, setTimeSaved] = useState(23456);
  const [casesResolved, setCasesResolved] = useState(12394);

  const quickSearchOptions = [
    { id: 'divorce', label: 'Divorce' },
    { id: 'property', label: 'Property' },
    { id: 'tenant', label: 'Tenant' }
  ];

  const handleQuickSearch = (option: string) => {
    setSearchQuery(option);
  };

  // Real-time data updates
  useEffect(() => {
    const interval = setInterval(() => {
      setCasesFiled(prev => prev + Math.floor(Math.random() * 3) + 1);
      setTimeSaved(prev => prev + Math.floor(Math.random() * 15) + 5);
      setCasesResolved(prev => prev + Math.floor(Math.random() * 2) + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Navbar */}
      <nav className="">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo - Left */}
            <div className="text-primary">
              <h2>LegalEase</h2>
            </div>

            {/* Center Navigation Links - Rounded Container */}
            <div className="absolute left-1/2 -translate-x-1/2 bg-background rounded-full px-8 py-3 flex items-center gap-6">
              <a href="#how-it-works" className="text-foreground hover:text-primary transition-colors whitespace-nowrap font-medium">
                How it Works
              </a>
              <span className="text-border">|</span>
              <a href="#case-types" className="text-foreground hover:text-primary transition-colors whitespace-nowrap font-medium">
                Case Types
              </a>
              <span className="text-border">|</span>
              <a href="#why-us" className="text-foreground hover:text-primary transition-colors whitespace-nowrap font-medium">
                Why Us
              </a>
              <span className="text-border">|</span>
              <a href="#join-as-lawyer" className="text-foreground hover:text-primary transition-colors whitespace-nowrap font-medium">
                Join as a Lawyer
              </a>
            </div>

            {/* CTA Button - Right */}
            <motion.button 
              className="bg-primary hover:bg-primary-dark text-primary-foreground px-6 py-2.5 rounded-lg transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              File a Case
            </motion.button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative max-w-7xl mx-auto px-6 py-20 overflow-hidden">
        <div className="relative z-10 p-12 rounded-2xl overflow-hidden" style={{ backgroundColor: '#EFEFEF', boxShadow: 'inset 0 2px 8px rgba(0, 0, 0, 0.1)' }}>
          <div className="relative text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl max-w-3xl mx-auto flex items-center justify-center flex-wrap gap-2">
                <span className="font-semibold">Don't Stress About Legal Problems — Solve Them in</span>{' '}
                <span className="text-primary font-light italic underline decoration-solid inline-flex items-center gap-2">
                  10 Minutes
                  <Clock className="w-10 h-10" />
                </span>
              </h1>
              <p className="text-secondary text-[18px] font-medium max-w-2xl mx-auto">
                Instantly connect with verified lawyers, file your case online, and track everything securely — all from your phone.
              </p>
            </div>

            {/* Search Bar */}
            <motion.div 
              className="max-w-2xl mx-auto space-y-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <motion.div 
                className="relative"
                whileFocus={{ scale: 1.02 }}
              >
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5" style={{ color: '#FF6B00' }} />
                <input
                  type="text"
                  placeholder="Search your case"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-full focus:outline-none focus:ring-2 focus:ring-primary bg-background transition-all duration-300"
                  style={{ border: '1px solid rgba(0, 0, 0, 0.2)' }}
                />
              </motion.div>

              {/* Quick Search Options */}
              <motion.div 
                className="flex items-center justify-center gap-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <span className="text-secondary text-sm">Quick Search:</span>
                <div className="flex gap-2">
                  {quickSearchOptions.map((option, index) => (
                    <motion.button
                      key={option.id}
                      onClick={() => handleQuickSearch(option.label)}
                      className="px-4 py-2 border border-border rounded-full hover:border-primary hover:text-primary transition-colors text-sm bg-background"
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
            <div className="max-w-md mx-auto mt-12">
              <p className="text-foreground font-medium mb-4">Download Our App</p>
              <div className="flex items-center justify-center gap-4">
                {/* Google Play Store Button */}
                <a
                  href="#"
                  className="flex items-center gap-2 bg-foreground text-background px-5 py-3 rounded-lg hover:opacity-90 transition-opacity"
                >
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                  </svg>
                  <div className="text-left">
                    <div className="text-[10px] opacity-80">GET IT ON</div>
                    <div className="text-sm font-medium">Google Play</div>
                  </div>
                </a>

                {/* App Store Button */}
                <a
                  href="#"
                  className="flex items-center gap-2 bg-foreground text-background px-5 py-3 rounded-lg hover:opacity-90 transition-opacity"
                >
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
                  </svg>
                  <div className="text-left">
                    <div className="text-[10px] opacity-80">Download on the</div>
                    <div className="text-sm font-medium">App Store</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Real-time Stats Section */}
            <div className="mt-12 pt-8 border-t border-gray-300">
              <div className="grid grid-cols-3 gap-8 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2 transition-all duration-500">
                    {casesFiled.toLocaleString()}
                  </div>
                  <div className="text-secondary text-sm font-medium">Cases Filed</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2 transition-all duration-500">
                    {timeSaved.toLocaleString()}
                  </div>
                  <div className="text-secondary text-sm font-medium">Hours Saved</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2 transition-all duration-500">
                    {casesResolved.toLocaleString()}
                  </div>
                  <div className="text-secondary text-sm font-medium">Cases Resolved</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="max-w-7xl mx-auto px-6 py-20">
        <motion.h2 
          className="text-[32px] text-left mb-12"
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
        <div className="flex gap-6 justify-between">
          {/* Left Column - Box 1 and Box 3 */}
          <div className="flex flex-col gap-6 flex-1">
            {/* Box 1 */}
            <motion.div 
              className="rounded-2xl h-[235px] p-8" 
              style={{ backgroundColor: '#EAEAEA', boxShadow: 'inset 0 2px 8px rgba(0, 0, 0, 0.1)' }}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="text-[22px] font-semibold mb-4">Step 1 — Tell Us Your Legal Issue</h3>
              <p className="text-foreground text-[16px] font-medium mb-3">
                Select your case type and share a few quick details. We'll instantly understand what kind of lawyer you need.
              </p>
              <p className="text-foreground text-[16px] font-medium" style={{ opacity: 0.7 }}>
                💡 Takes less than 2 minutes.
              </p>
            </motion.div>
            
            {/* Box 3 */}
            <motion.div 
              className="rounded-2xl h-[235px] p-8" 
              style={{ backgroundColor: '#FF6B00', boxShadow: 'inset 0 2px 8px rgba(0, 0, 0, 0.1)' }}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="text-[22px] font-semibold mb-4 text-foreground">Step 3 — File or Fight Your Case Online</h3>
              <p className="text-foreground text-[16px] font-medium mb-3">
                Work directly with your lawyer to file your case digitally, review updates, and manage documents — all in one place.
              </p>
              <p className="text-foreground text-[16px] font-medium" style={{ opacity: 0.7 }}>
                📱 Fast. Secure. 100% online.
              </p>
            </motion.div>
          </div>

          {/* Right Column - Box 2 and CTA */}
          <div className="flex flex-col gap-6" style={{ width: '508px' }}>
            {/* Box 2 */}
            <motion.div 
              className="rounded-2xl h-[296px] p-8" 
              style={{ backgroundColor: '#1A1A1A', boxShadow: 'inset 0 2px 8px rgba(0, 0, 0, 0.1)' }}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-[22px] font-semibold mb-4 text-primary">Step 2 — Get Matched with the Right Lawyer</h3>
              <p className="text-white text-[16px] font-medium mb-3">
                Our system connects you to a verified, rated lawyer who specializes in your issue. No endless calls or confusion — just instant, expert help.
              </p>
              <p className="text-[16px] font-medium" style={{ color: '#FFFFFF', opacity: 0.7 }}>
                🔒 Every lawyer is screened for credibility and experience.
              </p>
            </motion.div>

            {/* CTA and Text */}
            <motion.div 
              className="text-center mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <motion.button 
                className="bg-primary hover:bg-primary-dark text-primary-foreground px-8 py-3 rounded-lg transition-colors mb-3"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                File a Case
              </motion.button>
              <p className="text-secondary font-semibold text-[14px]">
                100% secure. Trusted by users across India.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Case Types Section */}
      <section id="case-types" className="max-w-7xl mx-auto px-6 py-20">
        <motion.h2 
          className="text-[32px] text-right mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-semibold">From everyday disputes to complex cases — </span>
          <br />
          <span className="text-primary font-light">we've got the right lawyer for you.</span>
        </motion.h2>

        {/* Case Type Boxes - 3-3-1 Layout */}
        <div className="space-y-6">
          {/* First Row - 3 Boxes */}
          <div className="grid grid-cols-3 gap-6">
            <motion.div
              className="bg-background border-2 border-border rounded-2xl p-6 hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="text-[22px] font-semibold mb-3">🏠 Property & Land Disputes</h3>
              <p className="text-[16px] group-hover:text-white transition-colors duration-300">
                Resolve ownership, boundary, or tenant issues without endless court visits.
              </p>
            </motion.div>

            <motion.div
              className="bg-background border-2 border-border rounded-2xl p-6 hover:bg-[#2ECC71] hover:text-white transition-all duration-300 cursor-pointer group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-[22px] font-semibold mb-3">👨‍👩‍👧 Family & Divorce Cases</h3>
              <p className="text-[16px] group-hover:text-white transition-colors duration-300">
                Navigate custody, alimony, or separation with compassionate legal support.
              </p>
            </motion.div>

            <motion.div
              className="bg-background border-2 border-border rounded-2xl p-6 hover:bg-[#E74C3C] hover:text-white transition-all duration-300 cursor-pointer group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="text-[22px] font-semibold mb-3">⚖️ Criminal Defense</h3>
              <p className="text-[16px] group-hover:text-white transition-colors duration-300">
                Defend your rights with expert lawyers specializing in criminal law.
              </p>
            </motion.div>
          </div>

          {/* Second Row - 3 Boxes */}
          <div className="grid grid-cols-3 gap-6">
            <motion.div
              className="bg-background border-2 border-border rounded-2xl p-6 hover:bg-[#E65A00] hover:text-white transition-all duration-300 cursor-pointer group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h3 className="text-[22px] font-semibold mb-3">🛒 Consumer Rights</h3>
              <p className="text-[16px] group-hover:text-white transition-colors duration-300">
                Fight unfair practices, defective products, or service disputes effectively.
              </p>
            </motion.div>

            <motion.div
              className="bg-background border-2 border-border rounded-2xl p-6 hover:bg-[#1A1A1A] hover:text-white transition-all duration-300 cursor-pointer group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <h3 className="text-[22px] font-semibold mb-3"> Business & Contracts</h3>
              <p className="text-[16px] group-hover:text-white transition-colors duration-300">
                Handle partnership disputes, contract breaches, or business litigation.
              </p>
            </motion.div>

            <motion.div
              className="bg-background border-2 border-border rounded-2xl p-6 hover:bg-[#6B6B6B] hover:text-white transition-all duration-300 cursor-pointer group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <h3 className="text-[22px] font-semibold mb-3">💻 Cyber Crime & Fraud</h3>
              <p className="text-[16px] group-hover:text-white transition-colors duration-300">
                Combat online fraud, identity theft, or digital harassment with expert help.
              </p>
            </motion.div>
          </div>

          {/* Third Row - 2 Boxes Centered */}
          <div className="flex justify-center gap-6">
            <motion.div
              className="bg-background border-2 border-border rounded-2xl p-6 hover:bg-[#2ECC71] hover:text-white transition-all duration-300 cursor-pointer group w-[calc(33.333%-16px)]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <h3 className="text-[22px] font-semibold mb-3">💰 Financial & Tax Issues</h3>
              <p className="text-[16px] group-hover:text-white transition-colors duration-300">
                Get expert guidance on tax disputes, loan recovery, or financial fraud.
              </p>
            </motion.div>

            <motion.div
              className="bg-background border-2 border-border rounded-2xl p-6 hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer group w-[calc(33.333%-16px)]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              <h3 className="text-[22px] font-semibold mb-3">🔍 And More Cases</h3>
              <p className="text-[16px] group-hover:text-white transition-colors duration-300">
                Unable to find your case? Just use our search bar and look for it.
              </p>
            </motion.div>
          </div>

          {/* CTA Button Below Financial & Tax and More Cases */}
          <motion.div
            className="flex justify-center gap-4 mt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 1.0 }}
          >
            <motion.button 
              className="bg-primary hover:bg-primary-dark text-primary-foreground px-8 py-3 rounded-lg transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              File a Case
            </motion.button>
            <motion.button 
              className="bg-foreground hover:bg-[#333333] text-background px-8 py-3 rounded-lg transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Join as a Lawyer
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Why Us Section */}
      <section id="why-us" className="max-w-7xl mx-auto px-6 py-20">
        <motion.h2 
          className="text-[32px] text-left mb-12"
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

        {/* Feature Cards - Asymmetric Layout */}
        <div className="grid grid-cols-12 gap-6">
          {/* Row 1 - Two Cards */}
          <motion.div
            className="col-span-7 bg-primary rounded-2xl p-10 text-white relative overflow-hidden"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="relative z-10">
              <div className="text-6xl mb-4">✅</div>
              <h3 className="text-[28px] font-semibold mb-4">Verified Lawyers Only</h3>
              <p className="text-[16px] mb-6 opacity-90">
                Handpicked, rated, and background-checked for complete peace of mind.
              </p>
              <motion.button
                className="text-white font-semibold hover:translate-x-2 transition-transform flex items-center gap-2 border-b-2 border-white pb-1"
                whileHover={{ x: 5 }}
              >
                Know More
                <span>→</span>
              </motion.button>
            </div>
            <div className="absolute -bottom-10 -right-10 text-9xl opacity-10">✅</div>
          </motion.div>

          <motion.div
            className="col-span-5 bg-[#EFEFEF] rounded-2xl p-10 relative overflow-hidden"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative z-10">
              <div className="text-6xl mb-4">⚡</div>
              <h3 className="text-[28px] font-semibold mb-4">Matched in Minutes</h3>
              <p className="text-[16px] text-secondary mb-6">
                Instantly connect with the right lawyer for your specific case type.
              </p>
              <motion.button
                className="text-primary font-semibold hover:translate-x-2 transition-transform flex items-center gap-2 border-b-2 border-primary pb-1"
                whileHover={{ x: 5 }}
              >
                Know More
                <span>→</span>
              </motion.button>
            </div>
            <div className="absolute -bottom-10 -right-10 text-9xl opacity-5">⚡</div>
          </motion.div>

          {/* Row 2 - Two Cards (Reversed) */}
          <motion.div
            className="col-span-5 bg-foreground rounded-2xl p-10 text-white relative overflow-hidden"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="relative z-10">
              <div className="text-6xl mb-4">💰</div>
              <h3 className="text-[28px] font-semibold mb-4">Transparent Pricing</h3>
              <p className="text-[16px] mb-6 opacity-90">
                See costs upfront — no surprises, no hidden fees.
              </p>
              <motion.button
                className="text-white font-semibold hover:translate-x-2 transition-transform flex items-center gap-2 border-b-2 border-white pb-1"
                whileHover={{ x: 5 }}
              >
                Know More
                <span>→</span>
              </motion.button>
            </div>
            <div className="absolute -bottom-10 -right-10 text-9xl opacity-10">💰</div>
          </motion.div>

          <motion.div
            className="col-span-7 bg-[#2ECC71] rounded-2xl p-10 text-white relative overflow-hidden"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="relative z-10">
              <div className="text-6xl mb-4">🔒</div>
              <h3 className="text-[28px] font-semibold mb-4">Completely Online & Secure</h3>
              <p className="text-[16px] mb-6 opacity-90">
                File, track, and manage your case safely from anywhere.
              </p>
              <motion.button
                className="text-white font-semibold hover:translate-x-2 transition-transform flex items-center gap-2 border-b-2 border-white pb-1"
                whileHover={{ x: 5 }}
              >
                Know More
                <span>→</span>
              </motion.button>
            </div>
            <div className="absolute -bottom-10 -right-10 text-9xl opacity-10">🔒</div>
          </motion.div>
        </div>
      </section>

      {/* Join as Lawyer Section */}
      <section id="join-as-lawyer" className="max-w-7xl mx-auto px-6 py-20">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-[32px] font-semibold mb-6">
            <span>Join India's </span>
            <span className="text-primary font-light">fastest-growing legal platform</span>
            <br />
            <span>and connect with people actively seeking expert legal help.</span>
          </h2>
          <p className="text-secondary text-[22px] font-normal mb-12">
            We handle the marketing, tech, and trust — you focus on winning cases.
          </p>
        </motion.div>

        {/* Boxes Layout */}
        <div className="space-y-6">
          {/* Top Row - 3 Boxes */}
          <div className="grid grid-cols-3 gap-6">
            <motion.div
              className="bg-foreground rounded-2xl p-8 border-2 border-border hover:border-primary transition-all duration-300 text-white"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="text-4xl mb-4">💼</div>
              <h3 className="text-[22px] font-semibold mb-3">Get Quality Clients</h3>
              <p className="text-[16px] mb-6 opacity-90">
                We bring verified users directly to you—no more cold calls or wasted effort.
              </p>
              <motion.button
                className="text-white font-semibold hover:translate-x-2 transition-transform flex items-center gap-2"
                whileHover={{ x: 5 }}
              >
                Know More
                <span>→</span>
              </motion.button>
            </motion.div>

            <motion.div
              className="rounded-2xl p-8 border-2 border-border hover:border-primary transition-all duration-300"
              style={{ backgroundColor: '#D9D9D9' }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-[22px] font-semibold mb-3">Grow Your Practice</h3>
              <p className="text-[16px] text-secondary mb-6">
                Access a steady stream of cases matched to your expertise and location.
              </p>
              <motion.button
                className="text-primary font-semibold hover:translate-x-2 transition-transform flex items-center gap-2"
                whileHover={{ x: 5 }}
              >
                Know More
                <span>→</span>
              </motion.button>
            </motion.div>

            <motion.div
              className="bg-[#EFEFEF] rounded-2xl p-8 border-2 border-border hover:border-primary transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="text-4xl mb-4">⚙️</div>
              <h3 className="text-[22px] font-semibold mb-3">Easy Case Management</h3>
              <p className="text-[16px] text-secondary mb-6">
                Track cases, share documents, and communicate—all from one simple dashboard.
              </p>
              <motion.button
                className="text-primary font-semibold hover:translate-x-2 transition-transform flex items-center gap-2"
                whileHover={{ x: 5 }}
              >
                Know More
                <span>→</span>
              </motion.button>
            </motion.div>
          </div>

          {/* Bottom Row - 2 Boxes (5th box double width) */}
          <div className="grid grid-cols-3 gap-6">
            <motion.div
              className="bg-secondary rounded-2xl p-8 border-2 border-border hover:border-primary transition-all duration-300 text-white"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-[22px] font-semibold mb-3">Build Your Reputation</h3>
              <p className="text-[16px] mb-6 opacity-90">
                Earn ratings and reviews that help you stand out and attract more clients.
              </p>
              <motion.button
                className="text-white font-semibold hover:translate-x-2 transition-transform flex items-center gap-2"
                whileHover={{ x: 5 }}
              >
                Know More
                <span>→</span>
              </motion.button>
            </motion.div>

            <motion.div
              className="col-span-2 bg-primary-dark rounded-2xl p-8 text-white hover:opacity-90 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-[28px] font-semibold mb-3">Zero Platform Fees for the First Month</h3>
              <p className="text-[16px] mb-4 opacity-90">
                Start growing your practice without any upfront costs. Join today and experience the difference.
              </p>
              <motion.button
                className="bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Join as a Lawyer
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}