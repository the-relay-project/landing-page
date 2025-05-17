'use client'

import React from 'react';
import { motion } from 'framer-motion';

interface FloatingParticlesProps {
  count?: number;
  color?: string;
  maxSize?: number;
  minSize?: number;
}

export function FloatingParticles({ 
  count = 20, 
  color = "rgba(255, 255, 255, 0.8)",
  maxSize = 8,
  minSize = 2
}: FloatingParticlesProps) {
  // Generate particles once on component mount
  const particles = React.useMemo(() => {
    return Array.from({ length: count }).map((_, index) => ({
      id: index,
      size: Math.random() * (maxSize - minSize) + minSize,
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: Math.random() * 10 + 20,
      delay: Math.random() * 5,
    }));
  }, [count, maxSize, minSize]);

  return (
    <div className="fixed inset-0 -z-10 opacity-20 pointer-events-none">
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full"
            style={{
              width: particle.size + "px",
              height: particle.size + "px",
              top: particle.y + "%",
              left: particle.x + "%",
              backgroundColor: color,
            }}
            animate={{
              y: [0, Math.random() * -500 - 100],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
            }}
          />
        ))}
      </div>
    </div>
  );
}