import Contact from './components/Contact.jsx'
import Education from './components/Education.jsx'
import Experience from './components/Experience.jsx'
import Focus from './components/Focus.jsx'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Skills from './components/Skills.jsx'
import { profile } from './data.js'
import './App.css'

export default function App() {
  return (
    <>
      <div className="frame" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
      </div>
      <div className="shell">
        <aside className="spine" aria-hidden="true">
          <span>{profile.name}</span>
          <span>{profile.locationShort}</span>
        </aside>
        <div className="page">
          <Header />
          <main>
            <Hero />
            <Focus />
            <Experience />
            <Skills />
            <Education />
            <Contact />
          </main>
          <footer className="footer">
            <p>© {new Date().getFullYear()} {profile.name}</p>
            <p>{profile.locationShort}</p>
          </footer>
        </div>
      </div>
    </>
  )
}
