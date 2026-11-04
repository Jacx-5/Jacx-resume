import { useEffect, useRef } from 'react'

/**
 * 轻量 Canvas 粒子背景
 * 缓慢上浮的冷色光点 + 轻微鼠标视差，克制不喧宾夺主
 */
export default function Particles({ className = '', density = 16000 }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')

    let raf = 0
    let width = 0
    let height = 0
    const mouse = { x: 0.5, y: 0.5 }
    const dots = []

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      width = canvas.offsetWidth
      height = canvas.offsetHeight
      canvas.width = width * dpr
      canvas.height = height * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    const seed = () => {
      const count = Math.min(90, Math.floor((width * height) / density))
      dots.length = 0
      for (let i = 0; i < count; i++) {
        dots.push({
          x: Math.random() * width,
          y: Math.random() * height,
          r: Math.random() * 1.5 + 0.4,
          vx: (Math.random() - 0.5) * 0.08,
          vy: -(Math.random() * 0.14 + 0.03),
          a: Math.random() * 0.35 + 0.12,
          tw: Math.random() * Math.PI * 2,
        })
      }
    }

    const tick = () => {
      ctx.clearRect(0, 0, width, height)
      for (const d of dots) {
        d.x += d.vx + (mouse.x - 0.5) * 0.2
        d.y += d.vy
        d.tw += 0.02
        if (d.y < -12) {
          d.y = height + 12
          d.x = Math.random() * width
        }
        if (d.x < -12) d.x = width + 12
        if (d.x > width + 12) d.x = -12
        const alpha = d.a * (0.7 + 0.3 * Math.sin(d.tw))
        ctx.beginPath()
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(148, 197, 253, ${alpha})`
        ctx.fill()
      }
      raf = requestAnimationFrame(tick)
    }

    const onMove = (e) => {
      mouse.x = e.clientX / window.innerWidth
      mouse.y = e.clientY / window.innerHeight
    }

    resize()
    seed()
    tick()
    window.addEventListener('resize', resize)
    window.addEventListener('pointermove', onMove, { passive: true })
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      window.removeEventListener('pointermove', onMove)
    }
  }, [density])

  return <canvas ref={canvasRef} className={className} aria-hidden="true" />
}
