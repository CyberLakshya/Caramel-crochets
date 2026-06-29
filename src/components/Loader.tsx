import { motion, AnimatePresence } from 'motion/react';
import { useEffect, useState } from 'react';

export default function Loader({ onComplete }: { onComplete: () => void }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 800); // Wait for fade-out animation to complete
    }, 2800);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          id="loader-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-secondary"
        >
          <div className="relative flex flex-col items-center">
            {/* Spinning/pulsing delicate crochet flower icon */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="relative mb-6 flex h-24 w-24 items-center justify-center"
            >
              <svg
                viewBox="0 0 100 100"
                className="h-20 w-20 text-gold fill-none stroke-current"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {/* 6 beautiful minimal crochet petals */}
                <motion.path
                  d="M 50 50 C 35 30, 35 10, 50 10 C 65 10, 65 30, 50 50"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5, delay: 0.2, ease: "easeInOut" }}
                />
                <motion.path
                  d="M 50 50 C 70 35, 90 35, 90 50 C 90 65, 70 65, 50 50"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5, delay: 0.4, ease: "easeInOut" }}
                />
                <motion.path
                  d="M 50 50 C 65 70, 65 90, 50 90 C 35 90, 35 70, 50 50"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5, delay: 0.6, ease: "easeInOut" }}
                />
                <motion.path
                  d="M 50 50 C 30 65, 10 65, 10 50 C 10 35, 30 35, 50 50"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5, delay: 0.8, ease: "easeInOut" }}
                />
                {/* Center circle */}
                <motion.circle
                  cx="50"
                  cy="50"
                  r="6"
                  className="fill-gold"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.2 }}
                />
              </svg>
              {/* Delicate expanding ring */}
              <motion.div
                initial={{ scale: 0.6, opacity: 0 }}
                animate={{ scale: 1.4, opacity: [0, 0.4, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 2.2,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 rounded-full border border-gold/30"
              />
            </motion.div>

            {/* Premium Brand Logo Fading In */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
              className="text-center"
            >
              <h1 className="font-serif text-3xl font-light tracking-[0.25em] text-brand-text uppercase">
                Caramel Crochets
              </h1>
              <p className="mt-2 font-sans text-xs tracking-[0.4em] text-brand-muted uppercase">
                Forever Flowers. Forever Feelings.
              </p>
            </motion.div>

            {/* Subtle premium progress slider */}
            <div className="absolute -bottom-16 left-1/2 h-[1px] w-36 -translate-x-1/2 overflow-hidden bg-brand-text/10">
              <motion.div
                initial={{ left: "-100%" }}
                animate={{ left: "100%" }}
                transition={{ duration: 2.5, ease: "easeInOut" }}
                className="absolute top-0 bottom-0 w-1/2 bg-gold"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
