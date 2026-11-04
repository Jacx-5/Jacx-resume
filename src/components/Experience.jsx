import { Briefcase, Check, Mic, Trophy } from 'lucide-react'
import { FadeIn, SectionHeading } from './Reveal'
import SpotlightCard from './SpotlightCard'
import { awards, experiences, tutoring } from '../data/resume'

export default function Experience() {
  return (
    <section id="projects" className="relative scroll-mt-24 py-28 md:py-36">
      {/* 背景光斑 */}
      <div className="pointer-events-none absolute right-[-15%] top-[10%] h-[500px] w-[500px] rounded-full bg-blue-600/[0.07] blur-[150px]" />

      <div className="mx-auto max-w-[1700px] px-6 md:px-12 lg:px-20">
        <SectionHeading
          index="02"
          eyebrow="Experience"
          title="精选经历"
          description="把每一段经历都当成项目来做 —— 从一对一英语教学到一线市场实战，用结果说话。"
        />

        {/* ===== 精选大卡片：英语家教 ===== */}
        <FadeIn>
          <SpotlightCard className="overflow-hidden">
            <div className="grid lg:grid-cols-[1fr_1.2fr]">
              {/* 左：视觉面板 */}
              <div className="relative flex min-h-[300px] flex-col justify-between overflow-hidden border-b border-white/[0.06] bg-gradient-to-br from-cyan-500/[0.10] via-blue-600/[0.05] to-violet-600/[0.10] p-10 md:p-12 lg:border-b-0 lg:border-r">
                {/* 幽灵文字 */}
                <div className="pointer-events-none absolute -right-4 -top-12 select-none text-[11rem] font-bold leading-none text-white/[0.035]">
                  EN
                </div>
                <div className="pointer-events-none absolute -bottom-6 -left-4 h-40 w-40 rounded-full bg-cyan-400/[0.08] blur-3xl" />

                <div className="relative">
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-cyan-400/25 bg-cyan-400/10 text-cyan-300">
                      <Mic className="h-4 w-4" />
                    </span>
                    <span className="text-xs tracking-[0.3em] text-cyan-300/90">
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
                      <div className="text-lg font-semibold text-cyan-300 md:text-xl">{m.value}</div>
                      <div className="mt-1 text-[10px] tracking-wider text-zinc-500">{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 右：内容 */}
              <div className="flex flex-col justify-center p-10 md:p-12 lg:p-14">
                <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-zinc-500">
                  <span className="inline-flex items-center gap-2">
                    <Briefcase className="h-4 w-4 text-cyan-400/80" />
                    {tutoring.role}
                  </span>
                  <span className="h-4 w-px bg-white/10" />
                  <span>{tutoring.period}</span>
                </div>

                <p className="mt-7 text-base leading-loose text-zinc-400">{tutoring.summary}</p>

                <ul className="mt-8 space-y-4">
                  {tutoring.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-3.5">
                      <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cyan-400/10 ring-1 ring-cyan-400/30">
                        <Check className="h-3 w-3 text-cyan-300" />
                      </span>
                      <span className="text-sm leading-relaxed text-zinc-300">{h}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-9 flex flex-wrap gap-2.5">
                  {tutoring.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-cyan-400/20 bg-cyan-400/[0.05] px-4 py-1.5 text-xs text-cyan-300/90"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </SpotlightCard>
        </FadeIn>

        {/* ===== 实习经历卡片 ===== */}
        <div className="mt-8 grid gap-8 md:grid-cols-3">
          {experiences.map((exp, i) => (
            <FadeIn key={exp.company} delay={i * 0.1} className="h-full">
              <SpotlightCard className="flex h-full flex-col p-8 md:p-9">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/[0.07] text-cyan-300">
                    <Briefcase className="h-5 w-5" />
                  </div>
                  <span className="shrink-0 rounded-full border border-white/[0.08] bg-white/[0.03] px-3.5 py-1 text-xs text-zinc-500">
                    {exp.period}
                  </span>
                </div>

                <h3 className="mt-6 text-xl font-semibold text-zinc-100">{exp.company}</h3>
                <p className="mt-1 text-sm tracking-wider text-zinc-500">{exp.role}</p>

                <ul className="mt-6 flex-1 space-y-3.5">
                  {exp.points.map((p) => (
                    <li key={p} className="flex items-start gap-3">
                      <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400/70" />
                      <span className="text-sm leading-relaxed text-zinc-400">{p}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-7 flex flex-wrap gap-2 border-t border-white/[0.06] pt-6">
                  {exp.tags.map((t) => (
                    <span key={t} className="rounded-full border border-white/[0.08] px-3 py-1 text-[11px] text-zinc-500">
                      {t}
                    </span>
                  ))}
                </div>
              </SpotlightCard>
            </FadeIn>
          ))}
        </div>

        {/* ===== 荣誉奖项 ===== */}
        <div className="mt-8 grid gap-8 md:grid-cols-3">
          {awards.map((award, i) => (
            <FadeIn key={award.name} delay={i * 0.1} className="h-full">
              <div className="group relative h-full overflow-hidden rounded-[1.75rem] border border-white/[0.05] bg-gradient-to-b from-white/[0.03] to-transparent p-8 transition-all duration-500 hover:border-violet-400/25 md:p-9">
                <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-violet-500/[0.08] blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-violet-400/20 bg-violet-400/[0.07] text-violet-300">
                    <Trophy className="h-5 w-5" />
                  </div>
                  <span className="text-xs tracking-[0.2em] text-zinc-600">{award.year}</span>
                </div>
                <h3 className="mt-6 text-lg font-semibold leading-snug text-zinc-100">{award.name}</h3>
                <p className="mt-2 text-sm font-medium text-gradient">{award.result}</p>
                <p className="mt-4 text-sm leading-relaxed text-zinc-500">{award.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
