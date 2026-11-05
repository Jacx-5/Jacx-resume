import { useRef } from 'react'
import { ArrowRight, Mail } from 'lucide-react'
import { gsap, useGSAP, prefersReducedMotion } from '../lib/gsap'
import { profile, heroStats } from '../data/resume'
import Aurora from './reactbits/Aurora/Aurora'
import BlurText from './reactbits/BlurText/BlurText'
import RotatingText from './reactbits/RotatingText/RotatingText'
import ShinyText from './reactbits/ShinyText/ShinyText'
import CountUp from './reactbits/CountUp/CountUp'
import Magnet from './reactbits/Magnet/Magnet'
import TiltedCard from './reactbits/TiltedCard/TiltedCard'
import CircularText from './reactbits/CircularText/CircularText'

/** 从字符串推断小数点位数：'3.55'→2，'531'→0，'7.0'→1 */
const decimalsOf = (v) => {
  const s = String(v)
  const i = s.indexOf('.')
  return i === -1 ? 0 : s.length - i - 1
}

/** 身份卡数据（TiltedCard 面板） */
const cardData = [
  { label: 'GPA', value: '3.55' },
  { label: 'CET-4', value: '531' },
  { label: 'IELTS', value: '7.0' },
  { label: '收益率', value: '25%' },
]

export default function Hero() {
  const sectionRef = useRef(null)
  const contentRef = useRef(null)

  useGSAP(
    () => {
      if (prefersReducedMotion) return

      // 入场时间轴（React Bits 组件各自带动画，这里只处理普通元素）
      const tl = gsap.timeline({ delay: 0.55 })
      tl.from('.hero-badge', { y: 20, autoAlpha: 0, duration: 0.6 })
        .from('.hero-para', { y: 22, autoAlpha: 0, duration: 0.7 }, '-=0.35')
        .from('.hero-cta', { y: 24, autoAlpha: 0, duration: 0.6, stagger: 0.1 }, '-=0.4')
        .from('.hero-stat', { y: 26, autoAlpha: 0, duration: 0.6, stagger: 0.08 }, '-=0.3')
        .from('.hero-card-wrap', { y: 40, autoAlpha: 0, duration: 0.9, ease: 'power4.out' }, '-=0.5')
        .from('.hero-ring', { autoAlpha: 0, scale: 0.6, duration: 0.8, ease: 'back.out(1.7)' }, '-=0.4')

      // 滚动视差：内容上移淡出
      gsap.to(contentRef.current, {
        y: 120,
        autoAlpha: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      })
    },
    { scope: sectionRef }
  )

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative flex min-h-[100dvh] items-center overflow-hidden"
    >
      {/* 蓝极光背景（跟随鼠标漂移） */}
      <div className="absolute inset-0">
        <Aurora
          colorStops={['#1e3a8a', '#3f86ff', '#6fa8ff']}
          brightness={0.55}
          height={0.42}
          blend={0.5}
          glow={0.45}
          layers={2}
          speed={0.7}
          amplitude={1}
          opacity={0.9}
          className="!absolute inset-0"
        />
      </div>
      {/* 细网格 + 上下渐晕 */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_35%,black_10%,transparent_75%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-ink-950 to-transparent" />

      {/* 主内容（滚动视差目标） */}
      <div
        ref={contentRef}
        className="relative z-10 mx-auto w-full max-w-[1700px] px-6 pb-24 pt-36 will-change-transform md:px-12 lg:px-20"
      >
        <div className="grid items-center gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
          {/* 左：文字 */}
          <div className="max-w-2xl">
            <div className="hero-badge">
              <ShinyText
                text={`${profile.college} · ${profile.major} · 大二在读`}
                disabled={false}
                speed={3}
                className="rounded-full border border-white/[0.08] bg-ink-900/60 px-5 py-2 font-mono text-xs tracking-[0.25em] text-zinc-400 backdrop-blur-md"
              />
            </div>

            <h1 className="mt-9">
              <BlurText
                text="曹锦翔"
                delay={300}
                animateBy="words"
                direction="top"
                blur={14}
                distance={40}
                stepDuration={0.35}
                trigger="load"
                className="text-8xl font-bold leading-none tracking-tight text-zinc-50 md:text-9xl xl:text-[10.5rem]"
              />
            </h1>

            {/* 角色轮换 */}
            <div className="mt-8 flex items-baseline gap-4">
              <span className="shrink-0 font-mono text-[10px] tracking-[0.35em] text-zinc-600">
                FOCUS
              </span>
              <RotatingText
                texts={['经济与金融', '数据分析与投资研究', '英语表达与教学']}
                rotationInterval={2600}
                splitBy="words"
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                mainClassName="text-2xl font-semibold text-blue-400 md:text-3xl"
              />
            </div>

            <p className="hero-para mt-7 max-w-xl text-base leading-relaxed text-zinc-400 md:text-lg">
              目标导向、逻辑严谨、结果驱动。用金融的理性与英语的表达力，把每一段经历做成可衡量的结果。
            </p>

            {/* CTA（磁吸） */}
            <div className="mt-11 flex flex-wrap items-center gap-5">
              <Magnet padding={80} magnetStrength={2.6}>
                <a
                  href="#projects"
                  className="hero-cta group inline-flex items-center gap-3 rounded-full bg-blue-400 px-8 py-3.5 text-base font-medium text-ink-950 transition-shadow duration-300 hover:shadow-[0_0_44px_rgba(111,168,255,0.45)]"
                >
                  查看我的经历
                  <ArrowRight className="h-4.5 w-4.5 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </Magnet>
              <Magnet padding={80} magnetStrength={2.2}>
                <a
                  href="#contact"
                  className="hero-cta inline-flex items-center gap-3 rounded-full border border-white/[0.12] bg-ink-900/50 px-8 py-3.5 text-base text-zinc-200 backdrop-blur-md transition-colors duration-300 hover:border-blue-400/50 hover:text-blue-300"
                >
                  <Mail className="h-4.5 w-4.5" />
                  联系我
                </a>
              </Magnet>
            </div>

            {/* 数据条（React Bits CountUp，等宽数字） */}
            <div className="mt-16 grid grid-cols-2 gap-y-8 border-t border-white/[0.08] pt-8 md:grid-cols-4">
              {heroStats.map((s) => (
                <div key={s.label} className="hero-stat">
                  <CountUp
                    to={parseFloat(s.value)}
                    decimals={decimalsOf(s.value)}
                    suffix={s.unit}
                    duration={2.2}
                    className="font-mono text-3xl font-medium text-zinc-50 md:text-4xl"
                  />
                  <div className="mt-2 font-mono text-[10px] tracking-[0.25em] text-zinc-600">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 右：3D 身份卡（跟随鼠标倾斜） */}
          <div className="hero-card-wrap relative">
            <div className="hero-ring absolute -top-12 right-6 z-20 hidden lg:block">
              <CircularText
                text="OPEN TO INTERNSHIPS · DRIVEN BY RESULTS · "
                spinDuration={18}
                onHover="speedUp"
                size={132}
                fontSize={12}
                fontWeight={700}
                color="#6fa8ff"
              />
            </div>

            <TiltedCard
              radius={16}
              rotateAmplitude={10}
              scaleOnHover={1.02}
              glare={0.35}
              glareColor="#6fa8ff"
              shadow={0.45}
              parallax={0}
              floating={false}
              gyroscope={false}
              showTooltip={false}
              containerHeight="clamp(460px, 40vw, 580px)"
              containerWidth="100%"
              imageHeight="100%"
              imageWidth="100%"
              className="w-full"
            >
              <div className="absolute inset-0 flex flex-col justify-between bg-ink-900 p-8 md:p-10">
                {/* 顶栏 */}
                <div className="flex items-center justify-between font-mono text-[10px] tracking-[0.3em] text-zinc-500">
                  <span>PORTFOLIO / 2026</span>
                  <span className="text-blue-400">R 25.0%</span>
                </div>

                {/* 主字标 */}
                <div>
                  <div className="text-[7.5rem] font-bold leading-none tracking-tight text-blue-400 md:text-[9.5rem]">
                    锦
                  </div>
                  <div className="mt-3 font-mono text-[11px] tracking-[0.45em] text-zinc-500">
                    JACX
                  </div>
                </div>

                {/* 数据格 */}
                <div>
                  <div className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-white/[0.07] bg-white/[0.07]">
                    {cardData.map((d) => (
                      <div key={d.label} className="bg-ink-950/90 px-5 py-4">
                        <div className="font-mono text-[9px] tracking-[0.3em] text-zinc-600">
                          {d.label}
                        </div>
                        <div className="mt-1.5 font-mono text-xl font-medium text-zinc-50">
                          {d.value}
                        </div>
                      </div>
                    ))}
                  </div>
                  {/* 条码装饰 */}
                  <div
                    className="mt-5 h-7 opacity-30"
                    style={{
                      background:
                        'repeating-linear-gradient(90deg, rgba(168,205,255,0.7) 0 2px, transparent 2px 5px, rgba(168,205,255,0.35) 5px 8px, transparent 8px 12px)',
                    }}
                  />
                </div>

                {/* 四角括号 */}
                <span className="pointer-events-none absolute left-3 top-3 h-5 w-5 border-l-2 border-t-2 border-blue-400/50" />
                <span className="pointer-events-none absolute right-3 top-3 h-5 w-5 border-r-2 border-t-2 border-blue-400/50" />
                <span className="pointer-events-none absolute bottom-3 left-3 h-5 w-5 border-b-2 border-l-2 border-blue-400/50" />
                <span className="pointer-events-none absolute bottom-3 right-3 h-5 w-5 border-b-2 border-r-2 border-blue-400/50" />
              </div>
            </TiltedCard>
          </div>
        </div>
      </div>
    </section>
  )
}
