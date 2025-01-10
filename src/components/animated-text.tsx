"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const words = [
  "a divjesschuiver - (c) a previous back-end dev colleague",
  "A FE dev that thinks that full-stack is knowing some CRUD",
  "someone who actually knows how to center a div, without googling.",
  "Being a code-monkey building sites for the local hair dresser or uncle Bobs gardenings service"
];

export function AnimatedText() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  return (
    <span className="inline-flex items-center perspective-[1000px]">
      <AnimatePresence mode="wait">
        <motion.span
          key={currentIndex}
          initial={{ 
            opacity: 0,
            rotateX: -120,
            scale: 0.9
          }}
          animate={{ 
            opacity: 1,
            rotateX: 0,
            scale: 1
          }}
          exit={{ 
            opacity: 0,
            rotateX: 120,
            scale: 0.9
          }}
          transition={{ 
            duration: 0.4,
            ease: [0.16, 1, 0.3, 1]
          }}
        >
          {words[currentIndex]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
} 
