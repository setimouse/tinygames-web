'use client';

import { motion } from 'framer-motion';
import {
  Shield,
  Wifi,
  Cpu,
  Sparkles,
  Palette,
  Smartphone,
  Heart,
  Download,
  Gamepad2,
} from 'lucide-react';
import Link from 'next/link';

const highlights = [
  {
    icon: <Gamepad2 size={20} />,
    title: '九款经典游戏',
    description: '数独、扫雷、2048、俄罗斯方块、打砖块、五子棋、国际象棋、中国象棋、西洋跳棋',
  },
  {
    icon: <Cpu size={20} />,
    title: 'AI引擎对战',
    description: '棋类游戏内置AI引擎，采用Alpha-Beta剪枝算法，三档难度离线对战',
  },
  {
    icon: <Wifi size={20} />,
    title: '完全离线',
    description: '所有游戏无需联网即可畅玩，随时随地享受游戏乐趣',
  },
  {
    icon: <Shield size={20} />,
    title: '无广告无内购',
    description: '纯净游戏体验，没有任何广告干扰和付费内容',
  },
  {
    icon: <Palette size={20} />,
    title: '霓虹玻璃拟态',
    description: '深色基底配合发光线条和毛玻璃质感，支持深色/浅色模式',
  },
  {
    icon: <Smartphone size={20} />,
    title: '流畅触控',
    description: '触控响应流畅，为移动设备优化操作体验',
  },
];

const stats = [
  { number: '9', label: '经典游戏' },
  { number: '4', label: '棋类AI引擎' },
  { number: '3', label: 'AI难度等级' },
  { number: '0', label: '广告·内购' },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-24 pb-20">
      {/* Hero */}
      <section className="relative">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-neon-purple/8 rounded-full blur-[120px]" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 pt-12 pb-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl glass-card mb-6">
              <Heart size={28} className="text-neon-pink" />
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold">
              <span className="neon-text-purple">关于 TinyGames</span>
            </h1>
            <p className="mt-4 text-base text-white/40 max-w-lg mx-auto leading-relaxed">
              TinyGames 是一款经典游戏合集应用，将九款广受欢迎的经典游戏汇聚于一身，
              为喜欢益智和棋类游戏的玩家提供一站式娱乐体验。
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-4xl mx-auto px-6 -mt-4 mb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="glass-card rounded-xl p-4 text-center"
            >
              <div className="text-3xl font-display font-bold neon-text-blue">
                {stat.number}
              </div>
              <div className="mt-1 text-xs text-white/30 font-display tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Highlights */}
      <section className="max-w-5xl mx-auto px-6 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-display font-bold text-white/80">
            功能特色
          </h2>
          <div className="mt-4 w-12 h-px bg-gradient-to-r from-neon-blue/40 to-neon-pink/40 mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="glass-card glass-card-hover rounded-xl p-5"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg glass-card flex items-center justify-center shrink-0 text-neon-blue">
                  {item.icon}
                </div>
                <div className="min-w-0">
                  <h3 className="text-sm font-display font-semibold text-white/80">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-xs text-white/40 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Design section */}
      <section className="relative py-16 mb-16">
        <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/[0.02] via-transparent to-neon-pink/[0.02]" />
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card rounded-2xl p-8 md:p-12 text-center"
          >
            <Sparkles
              size={24}
              className="mx-auto mb-4 text-neon-blue animate-neon-pulse"
            />
            <h2 className="text-2xl md:text-3xl font-display font-bold text-white/80 mb-4">
              霓虹玻璃拟态设计
            </h2>
            <p className="text-sm text-white/40 max-w-lg mx-auto leading-relaxed">
              以深色基底配合发光线条和毛玻璃质感，营造沉浸式视觉体验。
              同时支持浅色和深色模式自动适配，让游戏时光更加舒适。
            </p>
          </motion.div>
        </div>
      </section>

      {/* Download CTA */}
      <section className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl glass-card mb-6">
            <Download size={28} className="text-neon-blue" />
          </div>
          <h2 className="text-2xl md:text-3xl font-display font-bold text-white/80">
            立即下载
          </h2>
          <p className="mt-3 text-sm text-white/40 max-w-md mx-auto">
            TinyGames 现已上线各大应用商店，即刻下载开启游戏之旅。
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/"
              className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-xl glass-card glass-card-hover font-display text-sm tracking-wider text-white/80"
            >
              <Download size={16} />
              前往首页
            </Link>
          </div>

          <p className="mt-6 text-xs text-white/20">
            支持 iOS / Android · 完全免费 · 无广告无内购
          </p>
        </motion.div>
      </section>
    </main>
  );
}
