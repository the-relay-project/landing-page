'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface AnimatedGradientProps {
  className?: string;
  children?: React.ReactNode;
}

export function AnimatedGradient({ className, children }: AnimatedGradientProps) {
  return (
    <div className={cn("relative overflow-hidden", className)}>
      <motion.div 
        className="absolute inset-0 opacity-20"
        animate={{ 
          background: [
            "radial-gradient(circle at 0% 0%, rgba(255,255,255,0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 100% 0%, rgba(255,255,255,0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 100% 100%, rgba(255,255,255,0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 0% 100%, rgba(255,255,255,0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 0% 0%, rgba(255,255,255,0.1) 0%, transparent 50%)",
          ]
        }}
        transition={{ 
          duration: 20,
          repeat: Infinity,
          ease: "linear" 
        }}
      />
      <motion.div 
        className="absolute inset-0 opacity-10"
        animate={{ 
          background: [
            "radial-gradient(circle at 100% 100%, rgba(255,255,255,0.1) 0%, transparent 60%)",
            "radial-gradient(circle at 0% 100%, rgba(255,255,255,0.1) 0%, transparent 60%)",
            "radial-gradient(circle at 0% 0%, rgba(255,255,255,0.1) 0%, transparent 60%)",
            "radial-gradient(circle at 100% 0%, rgba(255,255,255,0.1) 0%, transparent 60%)",
            "radial-gradient(circle at 100% 100%, rgba(255,255,255,0.1) 0%, transparent 60%)",
          ]
        }}
        transition={{ 
          duration: 15,
          repeat: Infinity,
          ease: "linear",
          delay: 2
        }}
      />
      {children}
    </div>
  );
}