import { GlowBackdrop } from './components/GlowBackdrop'
import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
import { About } from './sections/About'
import { AuditCTA } from './sections/AuditCTA'
import { Contact } from './sections/Contact'
import { Hero } from './sections/Hero'
import { Process } from './sections/Process'
import { Projects } from './sections/Projects'
import { Packages } from './sections/Packages'
import { Services } from './sections/Services'
import { Skills } from './sections/Skills'
import { Stats } from './sections/Stats'
import { Testimonials } from './sections/Testimonials'
import { WhyMe } from './sections/WhyMe'
import { FAQ } from './sections/FAQ'

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#070A12]">
      <GlowBackdrop />
      <div className="relative">
        <Navbar />
        <main>
          <Hero />
          <Stats />
          <About />
          <Skills />
          <Projects />
          <Process />
          <Services />
          <Packages />
          <WhyMe />
          {/* <Testimonials /> */}
          <FAQ />
          <AuditCTA />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  )
}