'use client'

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  initialDelay?: number;
}

export function GradientText({
  children,
  className,
  initialDelay = 0,
}: GradientTextProps) {
  return (
    <motion.span
      className={cn(
        "bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent",
        className
      )}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: initialDelay, duration: 0.8 }}
      style={{
        backgroundSize: "200% 100%",
      }}
    >
      {children}
    </motion.span>
  );
}