'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, Wifi, Cpu, Gamepad2 } from 'lucide-react';
import GameCard from '@/components/GameCard';
import FeatureCard from '@/components/FeatureCard';
import games from '@/data/games';

function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Animated grid background */}
      <div className="absolute inset-0 grid-bg opacity-50" />

      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-blue/10 rounded-full blur-[120px] animate-neon-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-purple/10 rounded-full blur-[120px] animate-neon-float" style={{ animationDelay: '-3s' }} />

      {/* Gradient overlays */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0a0a1a] to-transparent" />
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#0a0a1a] to-transparent" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card text-xs text-neon-blue/80 font-display tracking-wider mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-neon-blue animate-neon-pulse" />
            九款经典游戏 · 纯粹体验
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight leading-none">
            <span className="neon-text-blue">TINYGAMES</span>
            <br />
            <span className="text-white/80 text-3xl md:text-4xl lg:text-5xl mt-4 block font-light tracking-wider">
              经典游戏汇聚一盒
            </span>
          </h1>

          <p className="mt-6 text-base md:text-lg text-white/40 max-w-xl mx-auto leading-relaxed">
            数独、扫雷、2048、俄罗斯方块、打砖块单人挑战思维极限，
            <br className="hidden sm:block" />
            五子棋、国际象棋、中国象棋、西洋跳棋内置AI引擎离线对战。
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/games"
              className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-xl glass-card glass-card-hover font-display text-sm tracking-wider text-white/80"
            >
              浏览游戏
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
            <Link
              href="/about"
              className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-xl border border-white/10 hover:border-white/20 text-white/40 hover:text-white/60 font-display text-sm tracking-wider transition-all duration-300"
            >
              了解更多
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function GamesGrid() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-blue/[0.02] to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white/80">
            游戏合集
          </h2>
          <p className="mt-3 text-sm text-white/30 font-display tracking-wider">
            GAME COLLECTION
          </p>
          <div className="mt-6 w-16 h-px bg-gradient-to-r from-neon-blue/40 to-neon-purple/40 mx-auto" />
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6">
          {games.map((game, i) => (
            <GameCard key={game.id} game={game} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Features() {
  const features = [
    {
      icon: <Shield size={22} />,
      title: '无广告无内购',
      description: '纯净游戏体验，没有任何广告干扰，所有功能完全免费。',
    },
    {
      icon: <Wifi size={22} />,
      title: '离线畅快玩',
      description: '无需联网即可畅玩所有游戏，随时随地享受纯粹乐趣。',
    },
    {
      icon: <Cpu size={22} />,
      title: '内置AI引擎',
      description: '棋类游戏内置AI引擎，离线与电脑对战，三档难度可选。',
    },
  ];

  return (
    <section className="relative py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white/80">
            核心特色
          </h2>
          <p className="mt-3 text-sm text-white/30 font-display tracking-wider">
            CORE FEATURES
          </p>
          <div className="mt-6 w-16 h-px bg-gradient-to-r from-neon-pink/40 to-neon-blue/40 mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, i) => (
            <FeatureCard key={feature.title} {...feature} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-neon-blue/[0.04] via-neon-purple/[0.04] to-neon-pink/[0.04] rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl glass-card mb-6">
            <Gamepad2 size={28} className="text-neon-blue" />
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white/80">
            准备好开始游戏了吗？
          </h2>
          <p className="mt-4 text-base text-white/40 max-w-md mx-auto">
            立即下载 TinyGames，九款经典游戏等你来挑战。
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/about"
              className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-xl glass-card glass-card-hover font-display text-sm tracking-wider text-white/80"
            >
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
              查看下载方式
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <GamesGrid />
      <Features />
      <CTASection />
    </main>
  );
}
