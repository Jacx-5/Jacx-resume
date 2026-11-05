/**
 * GSAP 统一入口 —— 按 gsap-skills 最佳实践：
 * 插件只在应用层注册一次，组件统一从这里导入。
 */
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP)

// 项目级默认值（gsap-core 技能），个别动画可覆盖
gsap.defaults({ ease: 'power3.out', duration: 0.7 })

/** 尊重系统「减少动态效果」偏好（gsap-core 技能：无障碍） */
export const prefersReducedMotion =
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

export { gsap, ScrollTrigger, SplitText, useGSAP }
