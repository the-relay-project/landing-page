'use client'

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface MotionCardProps {
  children: React.ReactNode;
  className?: string;
  index?: number;
  delay?: number;
}

export function MotionCard({ 
  children, 
  className,
  index = 0,
  delay = 0.1
}: MotionCardProps) {
  return (
    <motion.div
      className={cn(
        "rounded-xl p-6 bg-white shadow-md",
        className
      )}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delay + (index * 0.1) }}
      whileHover={{ scale: 1.03, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
    >
      {children}
    </motion.div>
  );
}