import { useRef } from 'react'
import { ArrowUp, Mail, MapPin, Phone, Send } from 'lucide-react'
import { FadeIn } from './Reveal'
import { gsap, useGSAP, prefersReducedMotion } from '../lib/gsap'
import { profile } from '../data/resume'
import DecryptedText from './reactbits/DecryptedText/DecryptedText'
import Magnet from './reactbits/Magnet/Magnet'
import SpotlightCard from './reactbits/SpotlightCard/SpotlightCard'

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
  const scopeRef = useRef(null)
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  // 背景光斑漂浮（gsap-core 技能：repeat + yoyo）
  useGSAP(
    () => {
      if (prefersReducedMotion) return
      gsap.to('.contact-blob-a', {
        x: 50,
        y: -40,
        duration: 10,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      })
      gsap.to('.contact-blob-b', {
        x: -40,
        y: 40,
        duration: 12,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      })
    },
    { scope: scopeRef }
  )

  return (
    <section
      id="contact"
      ref={scopeRef}
      className="relative flex min-h-[100dvh] scroll-mt-24 flex-col overflow-hidden"
    >
      {/* 背景 */}
      <div className="contact-blob-a absolute left-[10%] top-[20%] h-[520px] w-[520px] rounded-full bg-blue-400/[0.05] blur-[150px] will-change-transform" />
      <div className="contact-blob-b absolute bottom-[0%] right-[5%] h-[480px] w-[480px] rounded-full bg-blue-600/[0.05] blur-[150px] will-change-transform" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:76px_76px] [mask-image:radial-gradient(ellipse_60%_55%_at_50%_50%,black_10%,transparent_75%)]" />

      {/* 主内容 */}
      <div className="relative z-10 mx-auto flex w-full max-w-[1700px] flex-1 flex-col items-center justify-center px-6 py-36 text-center md:px-12 lg:px-20">
        <FadeIn>
          <div className="flex items-center gap-3">
            <span className="text-sm font-medium text-zinc-700">[</span>
            <span className="font-mono text-[11px] font-medium tracking-[0.4em] text-blue-400">
              CONTACT
            </span>
            <span className="text-sm font-medium text-zinc-700">]</span>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <DecryptedText
            text="让我们聊聊"
            animateOn="view"
            speed={45}
            sequential
            scrambleColor="#6fa8ff"
            className="mt-8 text-5xl font-semibold leading-tight tracking-tight text-zinc-50 md:text-7xl lg:text-8xl"
          />
        </FadeIn>

        <FadeIn delay={0.18}>
          <p className="mt-9 max-w-xl text-base leading-relaxed text-zinc-500 md:text-lg">
            实习机会、项目合作或任何想法，欢迎随时联系，我通常会在 24 小时内回复。
          </p>
        </FadeIn>

        {/* 联系方式卡片（聚光跟随鼠标） */}
        <FadeIn delay={0.26}>
          <div className="mt-14 flex flex-wrap justify-center gap-5">
            {channels.map((c) => {
              const Icon = c.icon
              const inner = (
                <>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-blue-400/25 bg-blue-400/[0.08] text-blue-400">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="mt-5 font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-600">
                    {c.label}
                  </div>
                  <div className="mt-2 text-base font-medium text-zinc-200">{c.value}</div>
                </>
              )
              const cls = "w-[300px] !rounded-2xl px-8 py-9"
              return c.href ? (
                <a key={c.label} href={c.href} className="block">
                  <SpotlightCard
                    spotlightColor="rgba(111,168,255,0.16)"
                    className={cls}
                  >
                    {inner}
                  </SpotlightCard>
                </a>
              ) : (
                <div key={c.label}>
                  <SpotlightCard
                    spotlightColor="rgba(111,168,255,0.16)"
                    className={cls}
                  >
                    {inner}
                  </SpotlightCard>
                </div>
              )
            })}
          </div>
        </FadeIn>

        {/* 主 CTA（磁吸） */}
        <FadeIn delay={0.34}>
          <Magnet padding={100} magnetStrength={3}>
            <a
              href={`mailto:${profile.email}`}
              className="group mt-16 inline-flex items-center gap-3 rounded-full bg-blue-400 px-12 py-4.5 text-lg font-medium text-ink-950 shadow-[0_0_40px_rgba(111,168,255,0.25)] transition-shadow duration-300 hover:shadow-[0_0_64px_rgba(111,168,255,0.45)]"
            >
              发送邮件
              <Send className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </Magnet>
        </FadeIn>
      </div>

      {/* 底部栏 */}
      <footer className="relative z-10 border-t border-white/[0.06]">
        <div className="mx-auto flex max-w-[1700px] flex-col items-center justify-between gap-5 px-6 py-8 md:flex-row md:px-12 lg:px-20">
          <p className="font-mono text-xs text-zinc-600">
            © 2026 曹锦翔 · 东莞理工学院 · 经济与金融
          </p>
          <div className="flex items-center gap-7">
            <span className="hidden font-mono text-[10px] tracking-wider text-zinc-700 md:block">
              React · Tailwind · GSAP · React Bits
            </span>
            <Magnet padding={40} magnetStrength={2}>
              <button
                onClick={scrollTop}
                className="group inline-flex items-center gap-2 rounded-full border border-white/[0.08] px-4 py-2 text-xs text-zinc-500 transition-colors duration-300 hover:border-blue-400/40 hover:text-blue-300"
              >
                回到顶部
                <ArrowUp className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5" />
              </button>
            </Magnet>
          </div>
        </div>
      </footer>
    </section>
  )
}
