'use client';

import { motion } from 'framer-motion';
import type { Game } from '@/data/games';

interface GameCardProps {
  game: Game;
  index: number;
}

export default function GameCard({ game, index }: GameCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group relative"
    >
      {/* Glow effect behind card */}
      <div className="absolute -inset-2 bg-gradient-to-r from-neon-blue/0 via-neon-purple/0 to-neon-pink/0 rounded-2xl blur-xl opacity-0 group-hover:opacity-60 transition-all duration-500 group-hover:via-neon-purple/20" />

      <div className="glass-card glass-card-hover rounded-2xl p-6 relative cursor-pointer">
        <div className="flex flex-col items-center text-center gap-3">
          <span className="text-4xl transition-transform duration-300 group-hover:scale-110 group-hover:animate-neon-float">
            {game.icon}
          </span>
          <div>
            <h3 className="font-display font-semibold text-base tracking-wide text-white/90">
              {game.name}
            </h3>
            <p className="text-xs text-white/30 mt-1">{game.nameEn}</p>
          </div>
          <p className="text-xs text-white/40 leading-relaxed line-clamp-2">
            {game.description}
          </p>
          {game.hasAI && (
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-display tracking-wider bg-neon-purple/10 text-neon-purple border border-neon-purple/20">
              AI引擎
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}
