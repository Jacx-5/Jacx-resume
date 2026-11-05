import { useRef } from 'react'
import { gsap, useGSAP } from '../lib/gsap'

/** 顶部细线阅读进度条（GSAP ScrollTrigger scrub 绑定滚动进度） */
export default function ScrollProgress() {
  const barRef = useRef(null)

  useGSAP(
    () => {
      gsap.to(barRef.current, {
        scaleX: 1,
        ease: 'none',
        scrollTrigger: {
          start: 0,
          end: 'max',
          scrub: 0.3,
        },
      })
    },
    { scope: barRef }
  )

  return (
    <div
      ref={barRef}
      className="fixed inset-x-0 top-0 z-[70] h-[2px] origin-left scale-x-0 bg-blue-400 shadow-[0_0_12px_rgba(111,168,255,0.6)]"
      aria-hidden="true"
    />
  )
}
