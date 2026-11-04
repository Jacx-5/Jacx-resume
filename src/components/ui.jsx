import { motion } from 'framer-motion'

/** 主版心容器：严格控制在 1700px */
export function Container({ className = '', children }) {
  return (
    <div className={`mx-auto w-full max-w-[1700px] px-6 md:px-10 lg:px-20 ${className}`}>
      {children}
    </div>
  )
}

/** 滚动进入视口时的入场动画 */
export function Reveal({ children, delay = 0, y = 36, className = '' }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

/** 区块标题：编号 + 英文标签 + 大标题 + 描述 */
export function SectionHeader({ index, label, title, desc, className = '' }) {
  return (
    <Reveal className={`mb-14 lg:mb-20 ${className}`}>
      <div className="flex items-center gap-4">
        <span className="h-px w-12 bg-gradient-to-r from-sky-400/80 to-transparent" />
        <span className="text-xs font-medium uppercase tracking-[0.4em] text-sky-400/90">
          {index} · {label}
        </span>
      </div>
      <h2 className="mt-6 text-4xl font-semibold tracking-tight text-white lg:text-6xl">{title}</h2>
      {desc && (
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-400 lg:text-lg">{desc}</p>
      )}
    </Reveal>
  )
}

/** 冷色调渐变文字 */
export function GradientText({ children }) {
  return (
    <span className="bg-gradient-to-r from-sky-300 via-sky-400 to-indigo-400 bg-clip-text text-transparent">
      {children}
    </span>
  )
}
