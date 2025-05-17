'use client'

import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';

interface AnimatedButtonProps extends HTMLMotionProps<"button"> {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
  className?: string;
}

export function AnimatedButton({ 
  variant = 'primary', 
  children, 
  className,
  ...props 
}: AnimatedButtonProps) {
  
  const baseStyles = "px-6 py-3 rounded-md font-medium flex items-center justify-center";
  
  const variantStyles = {
    primary: "bg-white text-black",
    secondary: "border border-white bg-transparent text-white"
  };
  
  return (
    <motion.button 
      className={cn(baseStyles, variantStyles[variant], className)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      {...props}
    >
      {children}
    </motion.button>
  );
}