import { useRef } from 'react'
import { Briefcase, Check, Mic, Trophy } from 'lucide-react'
import { FadeIn, SectionHeading, StaggerGroup, StaggerItem } from './Reveal'
import { gsap, useGSAP, prefersReducedMotion } from '../lib/gsap'
import { awards, experiences, tutoring } from '../data/resume'
import SpotlightCard from './reactbits/SpotlightCard/SpotlightCard'
import AnimatedContent from './reactbits/AnimatedContent/AnimatedContent'

/** 实习卡通用内容 */
function InternCard({ exp, index }) {
  const initials = { 星火教育: 'XH', 高顿教育: 'GD', 国泰海通证券: 'GT' }[exp.company] ?? 'IN'
  return (
    <div className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-ink-900 p-8 shadow-[0_32px_80px_rgba(0,0,0,0.45)] md:p-12">
      {/* 幽灵字母 */}
      <span className="pointer-events-none absolute -right-4 -top-10 select-none font-mono text-[10rem] font-bold leading-none text-blue-400/[0.05]">
        {initials}
      </span>

      <div className="flex items-start justify-between gap-4">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-blue-400/25 bg-blue-400/[0.08] text-blue-400">
          <Briefcase className="h-5 w-5" />
        </div>
        <div className="text-right">
          <div className="font-mono text-[10px] tracking-[0.3em] text-zinc-600">
            INTERNSHIP 0{index + 1}
          </div>
          <div className="mt-1 font-mono text-xs text-zinc-500">{exp.period}</div>
        </div>
      </div>

      <h3 className="mt-8 text-4xl font-semibold tracking-tight text-zinc-50 md:text-5xl">
        {exp.company}
      </h3>
      <p className="mt-2 font-mono text-sm tracking-[0.2em] text-blue-400">{exp.role}</p>

      <ul className="mt-8 flex-1 space-y-4">
        {exp.points.map((p) => (
          <li key={p} className="flex items-start gap-3.5">
            <span className="mt-[9px] h-2 w-2 shrink-0 rotate-45 bg-blue-400/80" />
            <span className="text-sm leading-relaxed text-zinc-400 md:text-base">{p}</span>
          </li>
        ))}
      </ul>

      <div className="mt-8 flex flex-wrap gap-2 border-t border-white/[0.06] pt-6">
        {exp.tags.map((t) => (
          <span
            key={t}
            className="rounded-full border border-white/[0.08] px-3 py-1 font-mono text-[11px] text-zinc-500"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function Experience() {
  const scopeRef = useRef(null)

  useGSAP(
    () => {
      if (prefersReducedMotion) return

      // 幽灵文字随滚动轻微上浮（scrub 视差）
      gsap.fromTo(
        '.exp-ghost',
        { y: 0 },
        {
          y: -70,
          ease: 'none',
          scrollTrigger: {
            trigger: '.exp-featured',
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        }
      )

      // 粘性堆叠：下一张卡滑入盖住上一张，上一张缩小变暗（taste-skill 经典骨架）
      const cards = gsap.utils.toArray('.stack-card', scopeRef.current)
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '.stack-wrap',
          start: 'top top',
          end: 'bottom bottom',
          scrub: 0.5,
        },
      })
      cards.forEach((card, i) => {
        if (i === 0) return
        tl.fromTo(
          card,
          { yPercent: 104, scale: 0.92, autoAlpha: 0.25 },
          { yPercent: 0, scale: 1, autoAlpha: 1, duration: 1, ease: 'none' },
          i - 1
        )
        tl.to(
          cards[i - 1],
          { scale: 0.95, y: -18, autoAlpha: 0.35, duration: 1, ease: 'none' },
          i - 1
        )
      })
    },
    { scope: scopeRef }
  )

  return (
    <section id="projects" ref={scopeRef} className="relative scroll-mt-24 py-28 md:py-36">
      {/* 背景光斑 */}
      <div className="pointer-events-none absolute right-[-15%] top-[8%] h-[500px] w-[500px] rounded-full bg-blue-400/[0.04] blur-[150px]" />

      <div className="mx-auto max-w-[1700px] px-6 md:px-12 lg:px-20">
        <SectionHeading
          eyebrow="EXPERIENCE"
          title="精选经历"
          description="把每一段经历都当成项目来做，从一对一英语教学到一线市场实战，用结果说话。"
        />

        {/* ===== 精选大卡片：英语家教 ===== */}
        <AnimatedContent direction="vertical" distance={60} blur={6} duration={1}>
          <SpotlightCard
            spotlightColor="rgba(111,168,255,0.18)"
            className="exp-featured !rounded-2xl overflow-hidden"
          >
            <div className="grid lg:grid-cols-[1fr_1.2fr]">
              {/* 左：视觉面板 */}
              <div className="relative flex min-h-[300px] flex-col justify-between overflow-hidden border-b border-white/[0.06] bg-gradient-to-br from-blue-400/[0.09] via-transparent to-blue-600/[0.06] p-10 md:p-12 lg:border-b-0 lg:border-r">
                {/* 幽灵文字 */}
                <div className="exp-ghost pointer-events-none absolute -right-4 -top-12 select-none text-[11rem] font-bold leading-none text-blue-400/[0.05] will-change-transform">
                  EN
                </div>

                <div className="relative">
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-blue-400/30 bg-blue-400/10 text-blue-400">
                      <Mic className="h-4 w-4" />
                    </span>
                    <span className="font-mono text-[11px] tracking-[0.3em] text-blue-400/90">
                      {tutoring.tag}
                    </span>
                  </div>
                  <h3 className="mt-6 text-3xl font-semibold tracking-tight text-zinc-100 md:text-4xl">
                    {tutoring.title}
                  </h3>
                  <p className="mt-2 text-base tracking-wider text-zinc-500">{tutoring.subtitle}</p>
                </div>

                {/* 数据指标 */}
                <div className="relative mt-10 grid grid-cols-4 gap-3">
                  {tutoring.metrics.map((m) => (
                    <div
                      key={m.label}
                      className="rounded-xl border border-white/[0.07] bg-ink-950/50 px-3 py-3 text-center backdrop-blur-sm"
                    >
                      <div className="font-mono text-lg font-semibold text-blue-400 md:text-xl">
                        {m.value}
                      </div>
                      <div className="mt-1 text-[10px] tracking-wider text-zinc-500">{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 右：内容 */}
              <div className="flex flex-col justify-center p-10 md:p-12 lg:p-14">
                <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-zinc-500">
                  <span className="inline-flex items-center gap-2">
                    <Briefcase className="h-4 w-4 text-blue-400/80" />
                    {tutoring.role}
                  </span>
                  <span className="h-4 w-px bg-white/10" />
                  <span className="font-mono text-xs">{tutoring.period}</span>
                </div>

                <p className="mt-7 text-base leading-loose text-zinc-400">{tutoring.summary}</p>

                <ul className="mt-8 space-y-4">
                  {tutoring.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-3.5">
                      <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-400/10 ring-1 ring-blue-400/30">
                        <Check className="h-3 w-3 text-blue-400" />
                      </span>
                      <span className="text-sm leading-relaxed text-zinc-300">{h}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-9 flex flex-wrap gap-2.5">
                  {tutoring.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-blue-400/25 bg-blue-400/[0.06] px-4 py-1.5 text-xs text-blue-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </SpotlightCard>
        </AnimatedContent>

        {/* ===== 实习经历：粘性堆叠 ===== */}
        <div className="mt-24 md:mt-32">
          <FadeIn>
            <div className="mb-8 flex items-center gap-3">
              <span className="text-sm font-medium text-zinc-700">[</span>
              <span className="font-mono text-[11px] font-medium tracking-[0.4em] text-zinc-500">
                INTERNSHIPS
              </span>
              <span className="text-sm font-medium text-zinc-700">]</span>
            </div>
          </FadeIn>

          {prefersReducedMotion ? (
            <StaggerGroup className="grid gap-8 md:grid-cols-3">
              {experiences.map((exp, i) => (
                <StaggerItem key={exp.company} className="h-full">
                  <InternCard exp={exp} index={i} />
                </StaggerItem>
              ))}
            </StaggerGroup>
          ) : (
            <div className="stack-wrap relative h-[300vh]">
              <div className="sticky top-0 h-[100dvh] overflow-hidden">
                {experiences.map((exp, i) => (
                  <div
                    key={exp.company}
                    className="stack-card absolute left-0 right-0 top-[9dvh] z-10 mx-auto h-[min(560px,74dvh)] max-w-4xl will-change-transform"
                    style={{ zIndex: i + 1 }}
                  >
                    <InternCard exp={exp} index={i} />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* ===== 荣誉奖项 ===== */}
        <div className="mt-24 md:mt-32">
          <FadeIn>
            <div className="mb-8 flex items-center gap-3">
              <span className="text-sm font-medium text-zinc-700">[</span>
              <span className="font-mono text-[11px] font-medium tracking-[0.4em] text-zinc-500">
                AWARDS
              </span>
              <span className="text-sm font-medium text-zinc-700">]</span>
            </div>
          </FadeIn>

          <StaggerGroup className="grid gap-8 md:grid-cols-3">
            {awards.map((award) => (
              <StaggerItem key={award.name} className="h-full">
                <SpotlightCard
                  spotlightColor="rgba(111,168,255,0.16)"
                  className="group h-full !rounded-2xl p-8 md:p-9"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-blue-400/25 bg-blue-400/[0.08] text-blue-400 transition-transform duration-300 group-hover:scale-110">
                      <Trophy className="h-5 w-5" />
                    </div>
                    <span className="font-mono text-[11px] tracking-[0.2em] text-zinc-600">
                      {award.year}
                    </span>
                  </div>
                  <h3 className="mt-6 text-lg font-semibold leading-snug text-zinc-100">
                    {award.name}
                  </h3>
                  <p className="mt-2 font-mono text-sm font-medium text-blue-400">{award.result}</p>
                  <p className="mt-4 text-sm leading-relaxed text-zinc-500">{award.desc}</p>
                </SpotlightCard>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </div>
    </section>
  )
}
