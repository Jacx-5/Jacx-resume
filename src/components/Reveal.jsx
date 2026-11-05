import { useRef } from 'react'
import { gsap, useGSAP, ScrollTrigger, prefersReducedMotion } from '../lib/gsap'

/**
 * 滚动进入视口时的淡入上移动画。
 * gsap-scrolltrigger 技能：gsap.from + scrollTrigger（once），
 * useGSAP 自动在卸载时清理（gsap-react 技能）。
 */
export function FadeIn({ children, delay = 0, y = 28, className = '', ...rest }) {
  const ref = useRef(null)

  useGSAP(
    () => {
      if (prefersReducedMotion) return
      gsap.from(ref.current, {
        autoAlpha: 0,
        y,
        duration: 0.8,
        delay,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 85%',
          once: true,
        },
      })
    },
    { scope: ref }
  )

  return (
    <div ref={ref} className={className} {...rest}>
      {children}
    </div>
  )
}

/**
 * 批量入场：ScrollTrigger.batch 把同一批进入视口的元素收集起来，
 * 统一错峰动画（gsap-scrolltrigger 技能：batch 模式）。
 */
export function StaggerGroup({
  children,
  className = '',
  stagger = 0.12,
  start = 'top 88%',
  ...rest
}) {
  const ref = useRef(null)

  useGSAP(
    () => {
      if (prefersReducedMotion) return
      const items = gsap.utils.toArray('.gsap-item', ref.current)
      gsap.set(items, { autoAlpha: 0, y: 34 })
      ScrollTrigger.batch(items, {
        start,
        once: true,
        onEnter: (els) =>
          gsap.to(els, {
            autoAlpha: 1,
            y: 0,
            duration: 0.7,
            ease: 'power3.out',
            stagger,
            overwrite: true,
          }),
      })
    },
    { scope: ref }
  )

  return (
    <div ref={ref} className={className} {...rest}>
      {children}
    </div>
  )
}

/** StaggerGroup 的动画单元 */
export function StaggerItem({ children, className = '', ...rest }) {
  return (
    <div className={`gsap-item ${className}`} {...rest}>
      {children}
    </div>
  )
}

/** 统一的区块标题：终端括号式英文眉题 + 大标题 + 描述 */
export function SectionHeading({ eyebrow, title, description, className = '' }) {
  return (
    <div className={`mb-14 md:mb-20 ${className}`}>
      <FadeIn>
        <div className="flex items-center gap-3">
          <span className="text-sm font-medium text-zinc-700">[</span>
          <span className="font-mono text-[11px] font-medium tracking-[0.4em] text-blue-400">
            {eyebrow}
          </span>
          <span className="text-sm font-medium text-zinc-700">]</span>
          <span className="ml-2 h-px w-16 bg-gradient-to-r from-blue-400/50 to-transparent" />
        </div>
      </FadeIn>
      <FadeIn delay={0.08}>
        <h2 className="mt-6 text-4xl font-semibold tracking-tight text-zinc-50 md:text-5xl lg:text-6xl">
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
