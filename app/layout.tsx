import type { Metadata } from 'next';
import { Inter, Orbitron } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import './globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

const orbitron = Orbitron({
  variable: '--font-orbitron',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'TinyGames - 经典游戏合集 | 数独·扫雷·2048·棋类AI对战',
  description:
    '九款经典游戏汇聚一盒，数独、扫雷、2048、俄罗斯方块、打砖块、五子棋、国际象棋、中国象棋、西洋跳棋。霓虹玻璃拟态设计，无广告无内购，内置AI引擎离线对战。',
  keywords: [
    'TinyGames',
    '经典游戏',
    '数独',
    '扫雷',
    '2048',
    '俄罗斯方块',
    '打砖块',
    '五子棋',
    '国际象棋',
    '中国象棋',
    '西洋跳棋',
    'AI对战',
    '游戏合集',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-CN"
      className={`${inter.variable} ${orbitron.variable}`}
    >
      <body className="min-h-screen flex flex-col bg-[#0a0a1a] antialiased">
        {/* Grain overlay */}
        <div className="grain-overlay" />

        <Navbar />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
