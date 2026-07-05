'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import GameDetailCard from '@/components/GameDetailCard';
import { singleGames, boardGames } from '@/data/games';

export default function GamesPage() {
  const [activeTab, setActiveTab] = useState<'single' | 'board'>('single');

  const tabs = [
    { id: 'single' as const, label: '单人游戏', count: singleGames.length },
    { id: 'board' as const, label: '棋类对战', count: boardGames.length },
  ];

  const currentGames = activeTab === 'single' ? singleGames : boardGames;

  return (
    <main className="min-h-screen pt-24 pb-20">
      {/* Page header */}
      <section className="relative">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute top-0 left-1/3 w-72 h-72 bg-neon-blue/8 rounded-full blur-[100px]" />
        <div className="absolute top-0 right-1/3 w-72 h-72 bg-neon-purple/8 rounded-full blur-[100px]" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 pt-12 pb-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-display font-bold">
              <span className="neon-text-blue">游戏介绍</span>
            </h1>
            <p className="mt-3 text-sm text-white/30 font-display tracking-wider">
              GAMES
            </p>
            <div className="mt-6 w-16 h-px bg-gradient-to-r from-neon-blue/40 to-neon-purple/40 mx-auto" />
          </motion.div>
        </div>
      </section>

      {/* Tabs */}
      <section className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-center gap-2 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative px-6 py-3 rounded-xl text-sm font-display tracking-wider transition-all duration-300 ${
                activeTab === tab.id
                  ? 'text-white bg-white/8 border border-white/10'
                  : 'text-white/30 hover:text-white/50 border border-transparent'
              }`}
            >
              {tab.label}
              <span className="ml-2 text-xs opacity-60">({tab.count})</span>
              {activeTab === tab.id && (
                <span className="absolute -bottom-px left-1/2 -translate-x-1/2 w-8 h-px bg-neon-blue shadow-[0_0_8px_rgba(0,212,255,0.5)]" />
              )}
            </button>
          ))}
        </div>

        {/* Games list */}
        <div className="space-y-6 max-w-4xl mx-auto">
          {currentGames.map((game, i) => (
            <GameDetailCard key={game.id} game={game} index={i} />
          ))}
        </div>
      </section>
    </main>
  );
}
