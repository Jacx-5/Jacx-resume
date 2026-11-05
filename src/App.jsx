import ScrollProgress from './components/ScrollProgress'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import About from './components/About'
import Experience from './components/Experience'
import Strengths from './components/Strengths'
import Contact from './components/Contact'
import SplashCursor from './components/reactbits/SplashCursor/SplashCursor'
import Noise from './components/reactbits/Noise/Noise'
import { prefersReducedMotion } from './lib/gsap'

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-ink-950 font-sans text-zinc-300">
      {/* 全局鼠标互动 + 质感层（React Bits） */}
      {!prefersReducedMotion && (
        <>
          <SplashCursor
            colors={['#6fa8ff', '#a8cdff', '#2268e8']}
            rainbow={false}
            quality="low"
            glow={0}
            size={0.9}
            intensity={0.9}
            zIndex={30}
            className="hidden md:block"
          />
          <Noise
            fixed
            opacity={0.05}
            size={1.5}
            fps={14}
            blendMode="overlay"
            contrast={0.5}
            className="z-[80]"
          />
        </>
      )}
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Experience />
        <Strengths />
      </main>
      <Contact />
    </div>
  )
}
