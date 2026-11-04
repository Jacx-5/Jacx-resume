import { useRef } from 'react'

/**
 * 鼠标跟随聚光灯卡片：
 * 悬停时在光标位置浮现一圈冷色光晕，边缘描边同步提亮。
 */
export default function SpotlightCard({
  children,
  className = '',
  spotlight = 'rgba(34, 211, 238, 0.07)',
}) {
  const ref = useRef(null)

  const handleMove = (e) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    el.style.setProperty('--spot-x', `${e.clientX - rect.left}px`)
    el.style.setProperty('--spot-y', `${e.clientY - rect.top}px`)
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      className={`group relative overflow-hidden rounded-[1.75rem] border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm transition-colors duration-500 hover:border-cyan-400/25 ${className}`}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `radial-gradient(560px circle at var(--spot-x, 50%) var(--spot-y, 50%), ${spotlight}, transparent 65%)`,
        }}
      />
      <div className="relative h-full">{children}</div>
    </div>
  )
}
