import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Strengths from './components/Strengths'
import Contact from './components/Contact'

export default function App() {
  return (
    <div className="min-h-screen overflow-x-clip bg-ink-950 font-sans text-zinc-300">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Strengths />
      </main>
      <Contact />
    </div>
  )
}
