import { motion } from 'framer-motion';

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 bg-background flex items-center justify-center z-50">
      <motion.div
        className="relative w-16 h-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {/* Rotating Circle */}
        <motion.svg
          className="w-full h-full"
          viewBox="0 0 50 50"
          animate={{ rotate: 360 }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          {/* Gray background circle */}
          <circle
            cx="25"
            cy="25"
            r="20"
            fill="none"
            stroke="#6B6B6B"
            strokeWidth="4"
            strokeLinecap="round"
          />
          {/* Orange segment */}
          <circle
            cx="25"
            cy="25"
            r="20"
            fill="none"
            stroke="#FF6B00"
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray="31.4 125.6"
          />
        </motion.svg>
      </motion.div>
    </div>
  );
}
