'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  index?: number;
  className?: string;
}

export function FeatureCard({ 
  title, 
  description, 
  icon, 
  index = 0,
  className 
}: FeatureCardProps) {
  return (
    <motion.div 
      className={cn("bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow", className)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.03 }}
    >
      <div className="bg-black text-white p-3 rounded-lg inline-block mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
}