'use client';

import { motion } from 'framer-motion';
import { Shield, Lock, Eye, Database, Mail, Cookie } from 'lucide-react';

const sections = [
  {
    icon: <Shield size={18} />,
    title: '信息收集',
    content:
      'TinyGames 尊重您的隐私。我们仅收集改善用户体验所必需的信息，包括应用使用数据（如游戏时长、偏好设置）和崩溃日志。我们不会收集任何个人身份信息，除非您主动通过邮件联系我们。',
  },
  {
    icon: <Database size={18} />,
    title: '数据存储',
    content:
      '您的游戏进度和偏好设置仅存储在您的设备本地，不会上传至任何服务器。崩溃日志可能通过应用商店提供的匿名统计服务收集，其中不包含任何可识别个人身份的信息。',
  },
  {
    icon: <Lock size={18} />,
    title: '数据安全',
    content:
      '由于 TinyGames 所有游戏均离线运行且无需注册账户，您的数据天然受到保护。我们采取行业标准的安全措施保护通过邮件等渠道提供的有限信息。',
  },
  {
    icon: <Eye size={18} />,
    title: '第三方服务',
    content:
      'TinyGames 不含任何第三方分析工具、广告SDK或追踪器。应用可能通过 Apple App Store 或 Google Play Store 分发，这些平台有自己的隐私政策，我们建议您查阅相关条款。',
  },
  {
    icon: <Cookie size={18} />,
    title: 'Cookies',
    content:
      '本网站（TinyGames 官方网站）可能使用必要的 Cookies 以确保网站正常运行。我们不会使用追踪型 Cookies 或第三方 Cookies。您可以通过浏览器设置管理 Cookies 偏好。',
  },
  {
    icon: <Mail size={18} />,
    title: '联系我们',
    content:
      '如您对本隐私政策有任何疑问，或希望删除您可能已提供的任何个人信息，请通过邮件与我们联系。我们将在合理时间内回复您的请求。',
  },
];

export default function PrivacyPage() {
  return (
    <main className="min-h-screen pt-24 pb-20">
      {/* Header */}
      <section className="relative">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-neon-blue/8 rounded-full blur-[120px]" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 pt-12 pb-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl glass-card mb-6">
              <Shield size={28} className="text-neon-blue" />
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold">
              <span className="neon-text-blue">隐私政策</span>
            </h1>
            <p className="mt-3 text-sm text-white/30 font-display tracking-wider">
              PRIVACY POLICY
            </p>
            <div className="mt-6 w-16 h-px bg-gradient-to-r from-neon-blue/40 to-neon-purple/40 mx-auto" />
            <p className="mt-6 text-sm text-white/40 max-w-lg mx-auto leading-relaxed">
              最后更新：2026年7月
              <br />
              TinyGames 致力于保护您的隐私。本政策说明了我们如何收集、使用和保护您的信息。
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-6 mt-4">
        <div className="space-y-6">
          {sections.map((section, i) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <div className="glass-card glass-card-hover rounded-xl p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg glass-card flex items-center justify-center shrink-0 text-neon-blue">
                    {section.icon}
                  </div>
                  <div className="min-w-0">
                    <h2 className="text-base font-display font-semibold text-white/80 mb-2">
                      {section.title}
                    </h2>
                    <p className="text-sm text-white/40 leading-relaxed">
                      {section.content}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mt-12 glass-card rounded-xl p-6 text-center"
        >
          <p className="text-sm text-white/30 leading-relaxed">
            本隐私政策可能随时更新。如有重大变更，我们将在本页面显著位置通知。
            继续使用 TinyGames 即表示您同意本隐私政策的条款。
          </p>
          <p className="mt-4 text-xs text-white/20">
            联系邮箱：hello@tinygames.app
          </p>
        </motion.div>
      </section>
    </main>
  );
}
