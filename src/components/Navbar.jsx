import { useRef, useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { gsap, useGSAP, ScrollTrigger } from '../lib/gsap'
import Magnet from './reactbits/Magnet/Magnet'

const links = [
  { href: '#about', label: '关于' },
  { href: '#projects', label: '经历' },
  { href: '#strengths', label: '优势' },
  { href: '#contact', label: '联系' },
]

export default function Navbar() {
  const headerRef = useRef(null)
  const menuRef = useRef(null)
  const contextSafeRef = useRef(null)
  const [scrolled, setScrolled] = useState(false)
  const [menuState, setMenuState] = useState('closed') // open | closing | closed

  useGSAP(
    (context, contextSafe) => {
      contextSafeRef.current = contextSafe

      gsap.from(headerRef.current, {
        y: -72,
        autoAlpha: 0,
        duration: 0.8,
        ease: 'power3.out',
        delay: 0.1,
      })

      ScrollTrigger.create({
        start: 24,
        end: 'max',
        onToggle: (self) => setScrolled(self.isActive),
      })
    },
    { scope: headerRef }
  )

  useGSAP(
    () => {
      if (menuState === 'open') {
        gsap.fromTo(
          menuRef.current,
          { height: 0, autoAlpha: 0 },
          {
            height: 'auto',
            autoAlpha: 1,
            duration: 0.35,
            ease: 'power3.out',
            overwrite: 'auto',
          }
        )
      }
    },
    { dependencies: [menuState] }
  )

  const closeMenu = () => {
    if (menuState !== 'open') return
    setMenuState('closing')
    const safe = contextSafeRef.current
    safe?.(() => {
      gsap.to(menuRef.current, {
        height: 0,
        autoAlpha: 0,
        duration: 0.3,
        ease: 'power2.in',
        overwrite: 'auto',
        onComplete: () => setMenuState('closed'),
      })
    })
  }

  return (
    <header
      ref={headerRef}
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled || menuState !== 'closed'
          ? 'border-b border-white/5 bg-ink-950/75 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-[72px] w-full max-w-[1700px] items-center justify-between px-6 md:px-10 lg:px-20">
        {/* Logo */}
        <a href="#home" className="group flex items-center gap-3">
          <span className="grid size-9 place-items-center rounded-lg bg-blue-400 text-base font-bold text-ink-950 transition-transform duration-500 group-hover:rotate-6">
            锦
          </span>
          <span className="flex flex-col leading-none">
            <span className="text-[15px] font-semibold tracking-wide text-white">曹锦翔</span>
            <span className="mt-1 font-mono text-[9px] font-medium tracking-[0.3em] text-zinc-500">
              JACX
            </span>
          </span>
        </a>

        {/* 桌面端导航（磁吸） */}
        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <Magnet key={l.href} padding={44} magnetStrength={2.2}>
              <a
                href={l.href}
                className="relative text-sm text-zinc-400 transition-colors duration-300 after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-blue-400 after:transition-transform after:duration-300 hover:text-white hover:after:scale-x-100"
              >
                {l.label}
              </a>
            </Magnet>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Magnet padding={60} magnetStrength={2.5}>
            <a
              href="#contact"
              className="group hidden items-center gap-2 rounded-full bg-blue-400 px-5 py-2.5 text-sm font-medium text-ink-950 transition-all duration-300 hover:shadow-[0_0_32px_rgba(111,168,255,0.4)] sm:inline-flex"
            >
              联系我
              <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </Magnet>
          <button
            onClick={() => {
              if (menuState === 'open') closeMenu()
              else setMenuState('open')
            }}
            className="grid size-10 place-items-center rounded-full border border-white/10 text-zinc-300 lg:hidden"
            aria-label="菜单"
          >
            {menuState !== 'closed' ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* 移动端菜单 */}
      {menuState !== 'closed' && (
        <nav
          ref={menuRef}
          className="overflow-hidden border-t border-white/5 bg-ink-950/95 backdrop-blur-xl lg:hidden"
        >
          <div className="flex flex-col gap-1 px-6 py-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={closeMenu}
                className="rounded-lg px-3 py-3 text-sm text-zinc-300 transition-colors hover:bg-white/5 hover:text-white"
              >
                {l.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}
