import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-[#060612]">
      {/* Glow line */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-neon-blue/20 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <span className="text-lg font-display font-bold tracking-wider neon-text-blue">
              TINYGAMES
            </span>
            <p className="mt-3 text-sm text-white/30 leading-relaxed max-w-xs">
              九款经典游戏汇聚一盒，无广告无内购，回归纯粹游戏乐趣。
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-xs font-display tracking-widest text-white/40 mb-4 uppercase">
              快速导航
            </h4>
            <ul className="space-y-2">
              {[
                { href: '/', label: '首页' },
                { href: '/games', label: '游戏列表' },
                { href: '/about', label: '关于我们' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/30 hover:text-neon-blue transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-display tracking-widest text-white/40 mb-4 uppercase">
              联系方式
            </h4>
            <ul className="space-y-2 text-sm text-white/30">
              <li>邮箱：hello@tinygames.app</li>
              <li>微博：@TinyGames官方</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <p className="text-xs text-white/20">
              &copy; {new Date().getFullYear()} TinyGames. All rights reserved.
            </p>
            <span className="text-white/10 hidden sm:inline">|</span>
            <Link
              href="/privacy"
              className="text-xs text-white/20 hover:text-neon-blue transition-colors duration-300"
            >
              隐私政策
            </Link>
          </div>
          <p className="text-xs text-white/20">
            霓虹玻璃拟态设计 · 纯粹游戏体验
          </p>
        </div>
      </div>
    </footer>
  );
}
