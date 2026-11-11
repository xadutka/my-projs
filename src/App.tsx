import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Hero } from './sections/Hero'
import { About } from './sections/About'
import { Education } from './sections/Education'
import { Certificates } from './sections/Certificates'
import { Projects } from './sections/Projects'
import { Skills } from './sections/Skills'
import { Workflow } from './sections/Workflow'
import { Contact } from './sections/Contact'

export default function App() {
  return (
    <>
      <a href="#about" className="skip-link">
        Перейти к содержимому
      </a>
      <Header />
      <main>
        <Hero />
        <About />
        <Education />
        <Certificates />
        <Projects />
        <Skills />
        <Workflow />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
