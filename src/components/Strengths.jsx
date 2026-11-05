import {
  BarChart3,
  Clapperboard,
  Headset,
  Languages,
  TrendingUp,
  Users,
} from 'lucide-react'
import { SectionHeading, StaggerGroup, StaggerItem } from './Reveal'
import { counters, strengths } from '../data/resume'
import CountUp from './reactbits/CountUp/CountUp'
import SpotlightCard from './reactbits/SpotlightCard/SpotlightCard'

const iconMap = {
  languages: Languages,
  finance: TrendingUp,
  comm: Headset,
  lead: Users,
  media: Clapperboard,
  data: BarChart3,
}

/** 每项优势的量化锚点（等宽数字点睛） */
const metrics = {
  languages: 'IELTS 7.0',
  finance: '25% 收益',
  comm: '350+ 外呼',
  lead: '省级奖项',
  media: '30万+ 播放',
  data: '5 项工具',
}

/** 锯齿形 Bento 布局：4+2 / 2+4 / 2+4 */
const spans = ['xl:col-span-4', 'xl:col-span-2', 'xl:col-span-2', 'xl:col-span-4', 'xl:col-span-2', 'xl:col-span-4']

export default function Strengths() {
  return (
    <section id="strengths" className="relative scroll-mt-24 py-28 md:py-36">
      <div className="pointer-events-none absolute bottom-[0%] left-[-12%] h-[460px] w-[460px] rounded-full bg-blue-400/[0.04] blur-[150px]" />

      <div className="mx-auto max-w-[1700px] px-6 md:px-12 lg:px-20">
        <SectionHeading
          eyebrow="STRENGTHS"
          title="个人优势"
          description="六大能力维度，支撑我在金融、市场与教育领域持续产出可衡量的结果。"
        />

        <div className="overflow-hidden rounded-2xl border border-white/[0.06] bg-ink-900/40 p-8 backdrop-blur-md md:p-14">
          {/* 数据面板（React Bits CountUp，等宽数字） */}
          <StaggerGroup className="grid grid-cols-2 gap-y-12 border-b border-white/[0.06] pb-14 lg:grid-cols-4">
            {counters.map((c) => (
              <StaggerItem key={c.label}>
                <div className="text-center">
                  <CountUp
                    to={c.value}
                    suffix={c.suffix}
                    duration={2.4}
                    className="font-mono text-4xl font-medium text-blue-400 md:text-5xl"
                  />
                  <div className="mt-3 font-mono text-[10px] tracking-[0.25em] text-zinc-600">
                    {c.label}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>

          {/* 能力 Bento 卡片（聚光跟随鼠标） */}
          <StaggerGroup className="mt-12 grid gap-6 xl:grid-cols-6">
            {strengths.map((s, i) => {
              const Icon = iconMap[s.icon] ?? TrendingUp
              return (
                <StaggerItem key={s.title} className={`h-full ${spans[i] ?? ''}`}>
                  <SpotlightCard
                    spotlightColor="rgba(111,168,255,0.15)"
                    className="group h-full !rounded-2xl p-7 md:p-8"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-blue-400/25 bg-blue-400/[0.08] text-blue-400 transition-transform duration-300 group-hover:scale-110">
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="font-mono text-sm font-medium text-blue-400/90">
                        {metrics[s.icon] ?? ''}
                      </span>
                    </div>
                    <h3 className="mt-5 text-lg font-semibold text-zinc-100">{s.title}</h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-zinc-500">{s.desc}</p>
                  </SpotlightCard>
                </StaggerItem>
              )
            })}
          </StaggerGroup>
        </div>
      </div>
    </section>
  )
}
