import { motion } from 'framer-motion';
import { useState } from 'react';

interface LoginProps {
  onBackToHome?: () => void;
  onNavigateToSignUp?: () => void;
  onNavigateToLawyersListings?: () => void;
}

export default function Login({ onBackToHome, onNavigateToSignUp, onNavigateToLawyersListings }: LoginProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check for test user
    if (email === 'pleatesting@gmail.com' && password === '12345') {
      setIsLoading(true);
      // Store user session in localStorage
      localStorage.setItem('userSession', JSON.stringify({
        email: email,
        loggedIn: true,
        timestamp: new Date().toISOString()
      }));
      setTimeout(() => {
        setIsLoading(false);
        onNavigateToLawyersListings?.();
      }, 1500);
      return;
    }
    
    // Check localStorage for existing users
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find((u: any) => u.email === email && u.password === password);
    
    if (user) {
      setIsLoading(true);
      // Store user session in localStorage
      localStorage.setItem('userSession', JSON.stringify({
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        loggedIn: true,
        timestamp: new Date().toISOString()
      }));
      setTimeout(() => {
        setIsLoading(false);
        onNavigateToLawyersListings?.();
      }, 1500);
    } else {
      alert('Invalid email or password. Please try again or sign up.');
    }
  };

  const handleGoogleLogin = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      onNavigateToLawyersListings?.();
    }, 1500);
  };

  const handleAppleLogin = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      onNavigateToLawyersListings?.();
    }, 1500);
  };

  return (
    <motion.div 
      className="min-h-screen bg-background flex items-center justify-center px-4 py-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="w-full max-w-xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Logo/Back Button */}
        <div className="mb-8 sm:mb-12">
          <button 
            onClick={onBackToHome}
            className="text-primary hover:text-primary-dark transition-colors inline-flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span className="font-medium">Back to Home</span>
          </button>
        </div>

        {/* Heading */}
        <motion.div
          className="text-center mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h1 className="text-[28px] sm:text-[32px] font-light">
            Justice at your <span className="text-primary">fingertips.</span>
          </h1>
        </motion.div>

        {/* Social Login Buttons */}
        <motion.div
          className="flex flex-col items-center gap-[47px] mb-8 sm:mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {/* Continue with Google */}
          <motion.button
            onClick={handleGoogleLogin}
            className="w-full max-w-[505px] h-[50px] bg-white border-2 border-border flex items-center justify-center gap-3 hover:bg-gray-50 transition-all duration-300 shadow-sm"
            style={{ borderRadius: '26px' }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            <span className="text-foreground font-medium">Continue with Google</span>
          </motion.button>

          {/* Continue with Apple */}
          <motion.button
            onClick={handleAppleLogin}
            className="w-full max-w-[505px] h-[50px] bg-foreground border-2 border-foreground flex items-center justify-center gap-3 hover:bg-[#333333] transition-all duration-300 shadow-sm"
            style={{ borderRadius: '26px' }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="white">
              <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
            </svg>
            <span className="text-white font-medium">Continue with Apple</span>
          </motion.button>
        </motion.div>

        {/* OR Divider */}
        <motion.div
          className="flex items-center justify-center mb-8 sm:mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex-1 max-w-[240px] h-[1px]" style={{ backgroundColor: '#6B6B6B', opacity: 0.5 }}></div>
          <span className="px-4 text-[16px]" style={{ color: '#6B6B6B' }}>OR</span>
          <div className="flex-1 max-w-[240px] h-[1px]" style={{ backgroundColor: '#6B6B6B', opacity: 0.5 }}></div>
        </motion.div>

        {/* Login Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="flex flex-col items-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {/* Email Input */}
          <div className="w-full max-w-[505px]">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full h-[45px] px-4 focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
              style={{ 
                backgroundColor: '#F0F0F0',
                boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.1)',
                borderRadius: '26px'
              }}
              required
            />
          </div>

          {/* Password Input */}
          <div className="w-full max-w-[505px]">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full h-[45px] px-4 focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
              style={{ 
                backgroundColor: '#F0F0F0',
                boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.1)',
                borderRadius: '26px'
              }}
              required
            />
          </div>

          {/* Forgot Password Link */}
          <div className="w-full max-w-[505px] flex justify-end">
            <a href="#" className="text-sm text-secondary hover:text-primary transition-colors">
              Forgot password?
            </a>
          </div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            className="w-full max-w-[505px] h-[50px] bg-primary hover:bg-primary-dark text-white font-semibold transition-all duration-300 shadow-md"
            style={{ borderRadius: '26px' }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {isLoading ? 'Loading...' : 'Sign In'}
          </motion.button>

          {/* Sign Up Link */}
          <p className="text-sm text-secondary mt-4">
            Don't have an account?{' '}
            <button 
              type="button"
              onClick={onNavigateToSignUp}
              className="text-primary hover:text-primary-dark font-semibold transition-colors"
            >
              Sign Up
            </button>
          </p>
        </motion.form>
      </motion.div>
    </motion.div>
  );
}