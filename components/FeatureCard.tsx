'use client';

import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  index: number;
}

export default function FeatureCard({
  icon,
  title,
  description,
  index,
}: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="group relative"
    >
      <div className="absolute -inset-[1px] bg-gradient-to-r from-neon-blue/20 via-neon-purple/20 to-neon-pink/20 rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="glass-card rounded-2xl p-6 md:p-8 relative h-full">
        <div className="flex flex-col items-center text-center gap-4">
          <div className="w-12 h-12 rounded-xl glass-card flex items-center justify-center text-neon-blue group-hover:scale-110 transition-transform duration-300">
            {icon}
          </div>
          <h3 className="text-lg font-display font-semibold text-white/80">
            {title}
          </h3>
          <p className="text-sm text-white/40 leading-relaxed">{description}</p>
        </div>
      </div>
    </motion.div>
  );
}
