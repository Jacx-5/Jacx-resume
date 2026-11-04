import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowDown, ArrowRight, Mail } from 'lucide-react'
import ParticleField from './ParticleField'
import { profile, heroStats } from '../data/resume'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.13, delayChildren: 0.3 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 34 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.21, 0.47, 0.32, 0.98] } },
}

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 140])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0])

  return (
    <section id="home" ref={ref} className="relative flex min-h-screen items-center overflow-hidden">
      {/* 渐变流体光斑 */}
      <motion.div
        className="absolute -left-48 top-[12%] h-[520px] w-[520px] rounded-full bg-cyan-500/[0.13] blur-[140px]"
        animate={{ x: [0, 70, -20, 0], y: [0, -50, 40, 0], scale: [1, 1.12, 0.94, 1] }}
        transition={{ duration: 24, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute right-[-10%] top-[30%] h-[560px] w-[560px] rounded-full bg-blue-600/[0.12] blur-[150px]"
        animate={{ x: [0, -60, 30, 0], y: [0, 60, -30, 0], scale: [1, 0.92, 1.1, 1] }}
        transition={{ duration: 28, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-[-20%] left-[30%] h-[480px] w-[480px] rounded-full bg-violet-600/[0.10] blur-[150px]"
        animate={{ x: [0, 40, -40, 0], y: [0, -30, 20, 0] }}
        transition={{ duration: 32, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* 科技网格（径向渐隐） */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.045)_1px,transparent_1px)] bg-[size:76px_76px] [mask-image:radial-gradient(ellipse_75%_65%_at_50%_38%,black_15%,transparent_78%)]" />

      {/* 高斯模糊暗色遮罩 */}
      <div className="absolute inset-0 bg-ink-950/60 backdrop-blur-[2px]" />

      {/* 粒子网络 */}
      <ParticleField className="absolute inset-0" />

      {/* 主内容 */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 mx-auto w-full max-w-[1700px] px-6 pb-44 pt-32 md:px-12 lg:px-20"
      >
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="mx-auto flex max-w-5xl flex-col items-center text-center"
        >
          {/* 身份徽章 */}
          <motion.div
            variants={fadeUp}
            className="flex items-center gap-3 rounded-full border border-white/[0.08] bg-white/[0.03] px-5 py-2 backdrop-blur-md"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
            </span>
            <span className="text-xs tracking-[0.25em] text-zinc-400">
              {profile.school} · {profile.major} · 本科在读
            </span>
          </motion.div>

          {/* 英文眉题 */}
          <motion.p
            variants={fadeUp}
            className="mt-10 text-xs font-medium tracking-[0.5em] text-zinc-600 md:text-sm"
          >
            CAO JINXIANG — PERSONAL PORTFOLIO
          </motion.p>

          {/* 大标题 */}
          <motion.h1
            variants={fadeUp}
            className="mt-5 text-7xl font-semibold leading-none tracking-tight text-zinc-100 md:text-8xl xl:text-9xl"
          >
            曹<span className="text-gradient">锦</span>翔
          </motion.h1>

          {/* 副标题 */}
          <motion.p
            variants={fadeUp}
            className="mt-9 max-w-2xl text-base leading-relaxed text-zinc-400 md:text-lg"
          >
            金融的理性 × 英语的表达力 × 市场的实战 ——
            <br className="hidden md:block" />
            目标导向、逻辑严谨、结果驱动，把每一件事做出可衡量的结果。
          </motion.p>

          {/* CTA 按钮 */}
          <motion.div
            variants={fadeUp}
            className="mt-12 flex flex-wrap items-center justify-center gap-5"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-8 py-3.5 text-base font-medium text-ink-950 shadow-[0_0_36px_rgba(34,211,238,0.28)] transition-all duration-300 hover:shadow-[0_0_56px_rgba(34,211,238,0.45)] hover:brightness-110"
            >
              查看我的经历
              <ArrowRight className="h-4.5 w-4.5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-3 rounded-full border border-white/[0.12] bg-white/[0.03] px-8 py-3.5 text-base text-zinc-200 backdrop-blur-md transition-all duration-300 hover:border-cyan-400/40 hover:text-cyan-200"
            >
              <Mail className="h-4.5 w-4.5" />
              联系我
            </a>
          </motion.div>

          {/* 数据条 */}
          <motion.div
            variants={fadeUp}
            className="mt-20 grid w-full max-w-4xl grid-cols-2 gap-y-8 rounded-3xl border border-white/[0.06] bg-white/[0.02] px-4 py-8 backdrop-blur-xl md:grid-cols-4 md:divide-x md:divide-white/[0.06]"
          >
            {heroStats.map((s) => (
              <div key={s.label} className="px-4 text-center">
                <div className="text-3xl font-semibold tracking-tight text-zinc-50 md:text-4xl">
                  {s.value}
                  <span className="text-cyan-400">{s.unit}</span>
                </div>
                <div className="mt-2 text-[11px] uppercase tracking-[0.25em] text-zinc-500">
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* 滚动提示 */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2 text-zinc-600 transition-colors duration-300 hover:text-cyan-300"
        >
          <span className="text-[10px] tracking-[0.4em]">SCROLL</span>
          <ArrowDown className="h-4 w-4" />
        </motion.div>
      </motion.a>
    </section>
  )
}
