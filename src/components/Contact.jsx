import { motion } from 'framer-motion'
import { ArrowUp, Mail, MapPin, Phone, Send } from 'lucide-react'
import { FadeIn } from './Reveal'
import { profile } from '../data/resume'

const channels = [
  {
    icon: Mail,
    label: '电子邮箱',
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    icon: Phone,
    label: '联系电话',
    value: profile.phone,
    href: `tel:${profile.phone}`,
  },
  {
    icon: MapPin,
    label: '所在城市',
    value: profile.location,
  },
]

export default function Contact() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <section id="contact" className="relative flex min-h-screen scroll-mt-24 flex-col overflow-hidden">
      {/* 背景 */}
      <motion.div
        className="absolute left-[10%] top-[20%] h-[520px] w-[520px] rounded-full bg-cyan-500/[0.09] blur-[150px]"
        animate={{ x: [0, 50, 0], y: [0, -40, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-[0%] right-[5%] h-[480px] w-[480px] rounded-full bg-violet-600/[0.08] blur-[150px]"
        animate={{ x: [0, -40, 0], y: [0, 40, 0] }}
        transition={{ duration: 24, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.04)_1px,transparent_1px)] bg-[size:76px_76px] [mask-image:radial-gradient(ellipse_60%_55%_at_50%_50%,black_10%,transparent_75%)]" />

      {/* 主内容 */}
      <div className="relative z-10 mx-auto flex w-full max-w-[1700px] flex-1 flex-col items-center justify-center px-6 py-36 text-center md:px-12 lg:px-20">
        <FadeIn>
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium tracking-[0.3em] text-cyan-400/90">04</span>
            <span className="h-px w-14 bg-gradient-to-r from-cyan-400/70 to-transparent" />
            <span className="text-xs uppercase tracking-[0.35em] text-zinc-500">Contact</span>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2 className="mt-8 text-5xl font-semibold leading-tight tracking-tight text-zinc-100 md:text-7xl lg:text-8xl">
            让我们<span className="text-gradient">聊聊</span>
          </h2>
        </FadeIn>

        <FadeIn delay={0.18}>
          <p className="mt-9 max-w-xl text-base leading-relaxed text-zinc-500 md:text-lg">
            实习机会、项目合作或任何想法，欢迎随时联系 ——
            <br />
            我通常会在 24 小时内回复。
          </p>
        </FadeIn>

        {/* 联系方式卡片 */}
        <FadeIn delay={0.26}>
          <div className="mt-14 flex flex-wrap justify-center gap-5">
            {channels.map((c) => {
              const Icon = c.icon
              const inner = (
                <>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/[0.07] text-cyan-300">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="mt-5 text-xs uppercase tracking-[0.25em] text-zinc-600">
                    {c.label}
                  </div>
                  <div className="mt-2 text-base font-medium text-zinc-200">{c.value}</div>
                </>
              )
              const cls =
                'w-[300px] rounded-3xl border border-white/[0.06] bg-white/[0.02] px-8 py-9 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:shadow-[0_16px_48px_rgba(0,0,0,0.35)]'
              return c.href ? (
                <a key={c.label} href={c.href} className={cls}>
                  {inner}
                </a>
              ) : (
                <div key={c.label} className={cls}>
                  {inner}
                </div>
              )
            })}
          </div>
        </FadeIn>

        {/* 主 CTA */}
        <FadeIn delay={0.34}>
          <a
            href={`mailto:${profile.email}`}
            className="group mt-16 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-12 py-4.5 text-lg font-medium text-ink-950 shadow-[0_0_40px_rgba(34,211,238,0.25)] transition-all duration-300 hover:shadow-[0_0_64px_rgba(34,211,238,0.42)] hover:brightness-110"
          >
            发送邮件
            <Send className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </FadeIn>
      </div>

      {/* 底部栏 */}
      <footer className="relative z-10 border-t border-white/[0.06]">
        <div className="mx-auto flex max-w-[1700px] flex-col items-center justify-between gap-5 px-6 py-8 md:flex-row md:px-12 lg:px-20">
          <p className="text-sm text-zinc-600">
            © 2026 曹锦翔 · 东莞理工学院 · 经济与金融
          </p>
          <div className="flex items-center gap-7">
            <span className="hidden text-xs tracking-wider text-zinc-700 md:block">
              React · Tailwind CSS · Framer Motion
            </span>
            <button
              onClick={scrollTop}
              className="group inline-flex items-center gap-2 rounded-full border border-white/[0.08] px-4 py-2 text-xs text-zinc-500 transition-all duration-300 hover:border-cyan-400/40 hover:text-cyan-300"
            >
              回到顶部
              <ArrowUp className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>
      </footer>
    </section>
  )
}
