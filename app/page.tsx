import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Education from '@/components/Education'
import Experience from '@/components/Experience'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Education />
      <Experience />
      <Contact />
      <Footer />
    </main>
  )
}
