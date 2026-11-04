import { motion } from 'framer-motion'
import {
  BadgeCheck,
  BookMarked,
  BookOpen,
  GraduationCap,
  Languages,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from 'lucide-react'
import { FadeIn, SectionHeading } from './Reveal'
import SpotlightCard from './SpotlightCard'
import { profile } from '../data/resume'

const infoIcons = {
  学校: GraduationCap,
  专业: BookOpen,
  绩点: BadgeCheck,
  英语: Languages,
  语言: MessageCircle,
  课程: BookMarked,
}

export default function About() {
  return (
    <section id="about" className="relative scroll-mt-24 py-28 md:py-36">
      <div className="mx-auto max-w-[1700px] px-6 md:px-12 lg:px-20">
        <SectionHeading
          index="01"
          eyebrow="About"
          title="关于我"
          description="东莞理工学院经济与金融专业在读，正在用金融的理性与英语的表达力，构建自己的成长路径。"
        />

        <SpotlightCard className="p-8 md:p-14 lg:p-16">
          <div className="grid gap-14 lg:grid-cols-[400px_1fr] lg:gap-20">
            {/* 左侧：头像面板 */}
            <FadeIn>
              <div className="relative mx-auto w-full max-w-[400px]">
                <div className="absolute -inset-8 rounded-[2.5rem] bg-cyan-500/[0.06] blur-3xl" />

                <div className="relative overflow-hidden rounded-[1.75rem] border border-white/[0.08] bg-gradient-to-b from-white/[0.05] to-transparent p-8 md:p-10">
                  {/* 头像：渐变光环 + 字母徽记 */}
                  <div className="relative mx-auto aspect-square w-full max-w-[280px]">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400/20 via-blue-500/15 to-violet-500/25 ring-1 ring-white/10" />
                    <div className="animate-spin-slow absolute inset-[-1px] rounded-full bg-[conic-gradient(from_0deg,transparent_0%,rgba(34,211,238,0.55)_20%,transparent_40%)]" />
                    <div className="absolute inset-2.5 rounded-full bg-ink-900" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-gradient text-7xl font-semibold tracking-tight md:text-8xl">
                        CJX
                      </span>
                    </div>
                  </div>

                  {/* 姓名与身份 */}
                  <div className="mt-9 text-center">
                    <div className="text-2xl font-semibold text-zinc-100">曹锦翔</div>
                    <div className="mt-1.5 text-sm tracking-wider text-zinc-500">
                      {profile.major} · {profile.grade}
                    </div>
                    <div className="mt-1 text-xs tracking-[0.2em] text-zinc-600">
                      {profile.school} · {profile.college}
                    </div>
                  </div>

                  {/* 状态 */}
                  <div className="mt-7 flex items-center justify-center gap-2.5 rounded-full border border-white/[0.06] bg-white/[0.02] py-2.5 text-xs text-zinc-400">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                    </span>
                    开放实习机会 · 期待与你合作
                  </div>
                </div>

                {/* 悬浮数据徽章 */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -left-5 top-16 rounded-2xl border border-white/10 bg-ink-800/90 px-5 py-3.5 shadow-[0_16px_48px_rgba(0,0,0,0.5)] backdrop-blur-md md:-left-10"
                >
                  <div className="text-xl font-semibold text-cyan-300">GPA 3.55</div>
                  <div className="mt-0.5 text-[11px] text-zinc-500">专业前 10%</div>
                </motion.div>
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                  className="absolute -right-5 bottom-28 rounded-2xl border border-white/10 bg-ink-800/90 px-5 py-3.5 shadow-[0_16px_48px_rgba(0,0,0,0.5)] backdrop-blur-md md:-right-10"
                >
                  <div className="text-xl font-semibold text-cyan-300">雅思口语 7.0</div>
                  <div className="mt-0.5 text-[11px] text-zinc-500">每日口语练习</div>
                </motion.div>
              </div>
            </FadeIn>

            {/* 右侧：介绍 + 信息 */}
            <div className="flex flex-col justify-center">
              <FadeIn delay={0.08}>
                <h3 className="text-3xl font-semibold tracking-tight text-zinc-100 md:text-4xl">
                  你好，我是<span className="text-gradient">曹锦翔</span>
                </h3>
              </FadeIn>
              <FadeIn delay={0.16}>
                <p className="mt-7 text-base leading-loose text-zinc-400 md:text-lg">
                  {profile.intro}
                </p>
              </FadeIn>

              {/* 信息网格 */}
              <FadeIn delay={0.22}>
                <div className="mt-10 grid gap-x-10 gap-y-6 sm:grid-cols-2">
                  {profile.infoItems.map((item) => {
                    const Icon = infoIcons[item.label] ?? BookOpen
                    return (
                      <div key={item.label} className="flex items-start gap-4">
                        <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-cyan-400/20 bg-cyan-400/[0.06] text-cyan-300">
                          <Icon className="h-4 w-4" />
                        </div>
                        <div>
                          <div className="text-xs uppercase tracking-[0.2em] text-zinc-600">
                            {item.label}
                          </div>
                          <div className="mt-1.5 text-sm leading-relaxed text-zinc-300">
                            {item.value}
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </FadeIn>

              {/* 技能标签 */}
              <FadeIn delay={0.28}>
                <div className="mt-9 flex flex-wrap gap-2.5">
                  {profile.skills.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-1.5 text-xs text-zinc-400 transition-colors duration-300 hover:border-cyan-400/40 hover:text-cyan-300"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </FadeIn>

              {/* 快速联系 */}
              <FadeIn delay={0.34}>
                <div className="mt-11 flex flex-wrap items-center gap-4 border-t border-white/[0.06] pt-8">
                  <a
                    href={`mailto:${profile.email}`}
                    className="group inline-flex items-center gap-2.5 text-sm text-zinc-300 transition-colors duration-300 hover:text-cyan-300"
                  >
                    <Mail className="h-4 w-4 text-cyan-400/80" />
                    {profile.email}
                  </a>
                  <span className="h-4 w-px bg-white/10" />
                  <a
                    href={`tel:${profile.phone}`}
                    className="inline-flex items-center gap-2.5 text-sm text-zinc-300 transition-colors duration-300 hover:text-cyan-300"
                  >
                    <Phone className="h-4 w-4 text-cyan-400/80" />
                    {profile.phone}
                  </a>
                  <span className="h-4 w-px bg-white/10" />
                  <span className="inline-flex items-center gap-2.5 text-sm text-zinc-500">
                    <MapPin className="h-4 w-4 text-cyan-400/80" />
                    {profile.location}
                  </span>
                </div>
              </FadeIn>
            </div>
          </div>
        </SpotlightCard>
      </div>
    </section>
  )
}
