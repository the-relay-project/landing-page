'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface TestimonialCardProps {
  quote: string;
  author: string;
  title: string;
  index?: number;
  className?: string;
}

export function TestimonialCard({ 
  quote, 
  author, 
  title, 
  index = 0, 
  className 
}: TestimonialCardProps) {
  return (
    <motion.div 
      className={cn("bg-gray-50 p-8 rounded-xl", className)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <svg className="h-8 w-8 text-gray-400 mb-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
      </svg>
      <p className="text-lg mb-6">{quote}</p>
      <div>
        <p className="font-medium">{author}</p>
        <p className="text-gray-600 text-sm">{title}</p>
      </div>
    </motion.div>
  );
}