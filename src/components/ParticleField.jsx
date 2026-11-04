import { useEffect, useRef } from 'react'

/**
 * Canvas 粒子网络背景：
 * 冷青色粒子缓慢漂移，距离近的粒子间以细线连接，
 * 鼠标靠近时粒子轻微向外散开，形成呼吸感。
 */
export default function ParticleField({ className = '', density = 26000, maxCount = 110 }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const parent = canvas.parentElement
    const ctx = canvas.getContext('2d')
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    const mouse = { x: -9999, y: -9999 }
    let raf = 0
    let particles = []
    let w = 0
    let h = 0

    const resize = () => {
      w = parent.offsetWidth
      h = parent.offsetHeight
      canvas.width = w * dpr
      canvas.height = h * dpr
      canvas.style.width = `${w}px`
      canvas.style.height = `${h}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      const count = Math.min(Math.floor((w * h) / density), maxCount)
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.22,
        vy: (Math.random() - 0.5) * 0.22,
        r: Math.random() * 1.4 + 0.5,
      }))
    }

    const step = () => {
      ctx.clearRect(0, 0, w, h)

      for (const p of particles) {
        p.x += p.vx
        p.y += p.vy
        if (p.x < -10 || p.x > w + 10) p.vx *= -1
        if (p.y < -10 || p.y > h + 10) p.vy *= -1

        const dx = p.x - mouse.x
        const dy = p.y - mouse.y
        const md = Math.hypot(dx, dy)
        if (md < 140 && md > 0.01) {
          p.x += (dx / md) * 0.35
          p.y += (dy / md) * 0.35
        }

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(125, 211, 252, 0.55)'
        ctx.fill()
      }

      ctx.lineWidth = 0.6
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i]
          const b = particles[j]
          const d = Math.hypot(a.x - b.x, a.y - b.y)
          if (d < 110) {
            ctx.strokeStyle = `rgba(103, 232, 249, ${(1 - d / 110) * 0.13})`
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        }
      }

      raf = requestAnimationFrame(step)
    }

    const onMove = (e) => {
      const rect = canvas.getBoundingClientRect()
      mouse.x = e.clientX - rect.left
      mouse.y = e.clientY - rect.top
    }
    const onLeave = () => {
      mouse.x = -9999
      mouse.y = -9999
    }

    resize()
    raf = requestAnimationFrame(step)
    window.addEventListener('resize', resize)
    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseout', onLeave)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseout', onLeave)
    }
  }, [density, maxCount])

  return <canvas ref={canvasRef} className={className} aria-hidden="true" />
}
