import {
  BarChart3,
  Clapperboard,
  Headset,
  Languages,
  TrendingUp,
  Users,
} from 'lucide-react'
import { FadeIn, SectionHeading } from './Reveal'
import SpotlightCard from './SpotlightCard'
import CountUp from './CountUp'
import { counters, strengths } from '../data/resume'

const iconMap = {
  languages: Languages,
  finance: TrendingUp,
  comm: Headset,
  lead: Users,
  media: Clapperboard,
  data: BarChart3,
}

export default function Strengths() {
  return (
    <section id="strengths" className="relative scroll-mt-24 py-28 md:py-36">
      <div className="pointer-events-none absolute left-[-12%] bottom-[0%] h-[460px] w-[460px] rounded-full bg-cyan-500/[0.06] blur-[150px]" />

      <div className="mx-auto max-w-[1700px] px-6 md:px-12 lg:px-20">
        <SectionHeading
          index="03"
          eyebrow="Strengths"
          title="个人优势"
          description="六大能力维度，支撑我在金融、市场与教育领域持续产出可衡量的结果。"
        />

        <FadeIn>
          <SpotlightCard className="p-8 md:p-14 lg:p-16">
            {/* 数据面板 */}
            <div className="grid grid-cols-2 gap-y-12 border-b border-white/[0.06] pb-14 lg:grid-cols-4">
              {counters.map((c, i) => (
                <FadeIn key={c.label} delay={i * 0.08}>
                  <div className="text-center">
                    <div className="text-4xl font-semibold tracking-tight text-zinc-50 md:text-5xl">
                      <CountUp value={c.value} suffix={c.suffix} />
                    </div>
                    <div className="mt-3 text-[11px] uppercase tracking-[0.25em] text-zinc-500">
                      {c.label}
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>

            {/* 能力卡片 */}
            <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {strengths.map((s, i) => {
                const Icon = iconMap[s.icon] ?? TrendingUp
                return (
                  <FadeIn key={s.title} delay={i * 0.06} className="h-full">
                    <div className="group h-full rounded-2xl border border-white/[0.05] bg-white/[0.02] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/25 hover:bg-cyan-400/[0.03] hover:shadow-[0_16px_48px_rgba(0,0,0,0.35)]">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/[0.08] text-cyan-300 transition-transform duration-300 group-hover:scale-110">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="mt-5 text-lg font-semibold text-zinc-100">{s.title}</h3>
                      <p className="mt-2.5 text-sm leading-relaxed text-zinc-500">{s.desc}</p>
                    </div>
                  </FadeIn>
                )
              })}
            </div>
          </SpotlightCard>
        </FadeIn>
      </div>
    </section>
  )
}
