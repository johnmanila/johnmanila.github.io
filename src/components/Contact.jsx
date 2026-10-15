import { profile } from '../data.js'
import ResumeButton from './ResumeButton.jsx'

export default function Contact() {
  return (
    <section className="section" id="contact" aria-labelledby="contact-title">
      <div className="section-head">
        <p className="section-index">05</p>
        <h2 id="contact-title">Contact</h2>
      </div>
      <div className="contact-panel">
        <a className="contact-email" href={`mailto:${profile.email}`}>
          {profile.email}
        </a>
        <p className="contact-meta">
          <a href={profile.phoneHref}>{profile.phone}</a>
          <span>{profile.location}</span>
        </p>
        <div className="actions">
          <ResumeButton />
          <a className="btn btn-ghost" href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a className="btn btn-ghost" href={profile.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
