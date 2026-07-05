'use client';

import { motion } from 'framer-motion';
import { Sparkles, Cpu } from 'lucide-react';
import type { Game } from '@/data/games';

interface GameDetailCardProps {
  game: Game;
  index: number;
}

export default function GameDetailCard({ game, index }: GameDetailCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <div className="glass-card glass-card-hover rounded-2xl p-6 md:p-8 relative overflow-hidden">
        {/* Decorative glow */}
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-neon-blue/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-neon-purple/5 rounded-full blur-3xl" />

        <div className="flex flex-col md:flex-row items-start gap-6 relative z-10">
          {/* Icon */}
          <div className="w-16 h-16 rounded-2xl glass-card flex items-center justify-center shrink-0">
            <span className="text-3xl">{game.icon}</span>
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-3 flex-wrap">
              <h3 className="text-xl font-display font-semibold text-white/90">
                {game.name}
              </h3>
              <span className="text-sm text-white/30 font-light">
                {game.nameEn}
              </span>
              {game.hasAI && (
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-display tracking-wider bg-neon-purple/10 text-neon-purple border border-neon-purple/20">
                  <Cpu size={10} />
                  AI引擎
                </span>
              )}
            </div>

            <p className="mt-3 text-sm text-white/50 leading-relaxed">
              {game.description}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {game.features.map((feature) => (
                <span
                  key={feature}
                  className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs bg-white/5 text-white/40 border border-white/5"
                >
                  <Sparkles size={10} className="text-neon-blue/60" />
                  {feature}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
