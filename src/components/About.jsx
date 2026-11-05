import { useRef } from 'react'
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
import { FadeIn, SectionHeading, StaggerGroup, StaggerItem } from './Reveal'
import { gsap, useGSAP, prefersReducedMotion } from '../lib/gsap'
import { profile } from '../data/resume'
import TrueFocus from './reactbits/TrueFocus/TrueFocus'
import ShinyText from './reactbits/ShinyText/ShinyText'

const infoIcons = {
  学校: GraduationCap,
  专业: BookOpen,
  绩点: BadgeCheck,
  英语: Languages,
  语言: MessageCircle,
  课程: BookMarked,
}

export default function About() {
  const scopeRef = useRef(null)

  // 悬浮数据徽章上下漂浮（gsap-core 技能：repeat + yoyo）
  useGSAP(
    () => {
      if (prefersReducedMotion) return
      gsap.to('.about-float-1', {
        y: -10,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      })
      gsap.to('.about-float-2', {
        y: 10,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: 0.6,
      })
    },
    { scope: scopeRef }
  )

  return (
    <section id="about" ref={scopeRef} className="relative scroll-mt-24 py-28 md:py-36">
      <div className="pointer-events-none absolute left-[-12%] top-[30%] h-[420px] w-[420px] rounded-full bg-blue-400/[0.05] blur-[140px]" />

      <div className="mx-auto max-w-[1700px] px-6 md:px-12 lg:px-20">
        <SectionHeading
          eyebrow="ABOUT"
          title="关于我"
          description="东莞理工学院经济与金融专业在读，用金融的理性与英语的表达力，构建自己的成长路径。"
        />

        <div className="grid gap-14 lg:grid-cols-[400px_1fr] lg:gap-20">
          {/* 左：身份面板 */}
          <FadeIn>
            <div className="relative mx-auto w-full max-w-[400px]">
              <div className="absolute -inset-6 rounded-[2.5rem] bg-blue-400/[0.05] blur-3xl" />

              <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-b from-white/[0.05] to-transparent p-8 md:p-10">
                {/* 头像：蓝光环 + 字母徽记 */}
                <div className="relative mx-auto aspect-square w-full max-w-[260px]">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400/15 to-blue-600/10 ring-1 ring-white/10" />
                  <div className="animate-spin-slow absolute inset-[-1px] rounded-full bg-[conic-gradient(from_0deg,transparent_0%,rgba(111,168,255,0.5)_20%,transparent_40%)]" />
                  <div className="absolute inset-2.5 rounded-full bg-ink-900" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-5xl font-semibold tracking-tight text-blue-400 md:text-6xl">
                      Jacx
                    </span>
                  </div>
                </div>

                {/* 姓名与身份 */}
                <div className="mt-9 text-center">
                  <div className="text-2xl font-semibold text-zinc-100">曹锦翔</div>
                  <div className="mt-1.5 text-sm tracking-wider text-zinc-500">
                    {profile.major} · {profile.grade}
                  </div>
                  <div className="mt-1 font-mono text-[10px] tracking-[0.25em] text-zinc-600">
                    {profile.school} · {profile.college}
                  </div>
                </div>

                {/* 状态（纯文字，无装饰圆点） */}
                <div className="mt-7">
                  <ShinyText
                    text="开放实习机会 · 期待与你合作"
                    speed={3}
                    className="block rounded-full border border-blue-400/15 bg-blue-400/[0.05] py-2.5 text-center font-mono text-xs tracking-[0.15em] text-blue-300"
                  />
                </div>
              </div>

              {/* 悬浮数据徽章 */}
              <div className="about-float-1 absolute -left-4 top-16 rounded-2xl border border-blue-400/25 bg-ink-800/95 px-5 py-3.5 shadow-[0_16px_48px_rgba(0,0,0,0.5)] backdrop-blur-md will-change-transform md:-left-10">
                <div className="font-mono text-xl font-semibold text-blue-400">GPA 3.55</div>
                <div className="mt-0.5 text-[11px] text-zinc-500">专业前 10%</div>
              </div>
              <div className="about-float-2 absolute -right-4 bottom-28 rounded-2xl border border-blue-400/25 bg-ink-800/95 px-5 py-3.5 shadow-[0_16px_48px_rgba(0,0,0,0.5)] backdrop-blur-md will-change-transform md:-right-10">
                <div className="font-mono text-xl font-semibold text-blue-400">雅思口语 7.0</div>
                <div className="mt-0.5 text-[11px] text-zinc-500">每日口语练习</div>
              </div>
            </div>
          </FadeIn>

          {/* 右：TrueFocus 焦点句 + 介绍 + 信息 */}
          <div className="flex flex-col justify-center">
            <FadeIn>
              <div className="truefocus-head text-3xl text-zinc-50 md:text-4xl">
                <TrueFocus
                  sentence="金融的理性 英语的表达力 市场的实战"
                  focusStyle="brackets"
                  borderColor="#6fa8ff"
                  blurAmount={4}
                  animationDuration={0.4}
                  pauseBetweenAnimations={0.8}
                  cornerSize={14}
                  borderWidth={2}
                />
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <p className="mt-8 text-base leading-loose text-zinc-400 md:text-lg">
                {profile.intro}
              </p>
            </FadeIn>

            {/* 信息网格 */}
            <StaggerGroup className="mt-10 grid gap-x-10 gap-y-6 sm:grid-cols-2">
              {profile.infoItems.map((item) => {
                const Icon = infoIcons[item.label] ?? BookOpen
                return (
                  <StaggerItem key={item.label}>
                    <div className="flex items-start gap-4">
                      <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-blue-400/25 bg-blue-400/[0.07] text-blue-400">
                        <Icon className="h-4 w-4" />
                      </div>
                      <div>
                        <div className="font-mono text-[10px] tracking-[0.25em] text-zinc-600">
                          {item.label}
                        </div>
                        <div className="mt-1.5 text-sm leading-relaxed text-zinc-300">
                          {item.value}
                        </div>
                      </div>
                    </div>
                  </StaggerItem>
                )
              })}
            </StaggerGroup>

            {/* 技能标签 */}
            <FadeIn delay={0.15}>
              <div className="mt-9 flex flex-wrap gap-2.5">
                {profile.skills.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-1.5 text-xs text-zinc-400 transition-colors duration-300 hover:border-blue-400/50 hover:text-blue-300"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </FadeIn>

            {/* 快速联系 */}
            <FadeIn delay={0.2}>
              <div className="mt-11 flex flex-wrap items-center gap-4 border-t border-white/[0.06] pt-8">
                <a
                  href={`mailto:${profile.email}`}
                  className="group inline-flex items-center gap-2.5 text-sm text-zinc-300 transition-colors duration-300 hover:text-blue-300"
                >
                  <Mail className="h-4 w-4 text-blue-400/80" />
                  {profile.email}
                </a>
                <span className="h-4 w-px bg-white/10" />
                <a
                  href={`tel:${profile.phone}`}
                  className="inline-flex items-center gap-2.5 text-sm text-zinc-300 transition-colors duration-300 hover:text-blue-300"
                >
                  <Phone className="h-4 w-4 text-blue-400/80" />
                  {profile.phone}
                </a>
                <span className="h-4 w-px bg-white/10" />
                <span className="inline-flex items-center gap-2.5 text-sm text-zinc-500">
                  <MapPin className="h-4 w-4 text-blue-400/80" />
                  {profile.location}
                </span>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  )
}
