import { motion } from 'framer-motion'

const EASE = [0.21, 0.47, 0.32, 0.98]

/** 滚动进入视口时的淡入上移动画 */
export function FadeIn({ children, delay = 0, y = 28, className = '', ...rest }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay, ease: EASE }}
      {...rest}
    >
      {children}
    </motion.div>
  )
}

/** 统一的区块标题：编号 + 英文眉题 + 大标题 + 描述 */
export function SectionHeading({ index, eyebrow, title, description }) {
  return (
    <div className="mb-14 md:mb-20">
      <FadeIn>
        <div className="flex items-center gap-4">
          <span className="text-sm font-medium tracking-[0.3em] text-cyan-400/90">{index}</span>
          <span className="h-px w-14 bg-gradient-to-r from-cyan-400/70 to-transparent" />
          <span className="text-xs uppercase tracking-[0.35em] text-zinc-500">{eyebrow}</span>
        </div>
      </FadeIn>
      <FadeIn delay={0.08}>
        <h2 className="mt-6 text-4xl font-semibold tracking-tight text-zinc-100 md:text-5xl lg:text-6xl">
          {title}
        </h2>
      </FadeIn>
      {description && (
        <FadeIn delay={0.16}>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-zinc-500 md:text-lg">
            {description}
          </p>
        </FadeIn>
      )}
    </div>
  )
}
