import { motion, useScroll, useSpring } from 'framer-motion'

/** 顶部细线阅读进度条 */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[70] h-[2px] origin-left bg-gradient-to-r from-sky-400 via-indigo-400 to-sky-400"
      aria-hidden="true"
    />
  )
}
