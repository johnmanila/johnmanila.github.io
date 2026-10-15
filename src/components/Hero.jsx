import { profile, ticker } from '../data.js'
import ProfileCard from './ProfileCard.jsx'
import ResumeButton from './ResumeButton.jsx'

export default function Hero() {
  const loop = [ticker, ticker]

  return (
    <section id="top">
      <div className="hero">
        <p className="kicker">
          <span>{profile.role}</span>
          <span>{profile.locationShort}</span>
        </p>
        <h1>
          <span>{profile.firstLine}</span>
          <span>{profile.secondLine}</span>
        </h1>
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="lede">{profile.summary}</p>
            <div className="actions">
              <ResumeButton />
              <a className="btn btn-ghost" href={profile.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a className="btn btn-ghost" href={profile.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </div>
          </div>
          <aside className="hero-card">
            <ProfileCard
              name={profile.name}
              title={profile.role}
              handle={profile.handle}
              status={profile.locationShort}
              contactText="Contact"
              avatarUrl="/portrait.png"
              // miniAvatarUrl="/portrait.png"
              holo={0.8}
              glare={0.5}
              tiltStrength={12}
              parallax={8}
              radius={16}
              enableTilt
              intro
              showUserInfo
              enableMobileTilt={false}
              theme="dark"
              onContactClick={() => {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
              }}
            />
          </aside>
        </div>
      </div>

      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          {loop.map((group, groupIndex) => (
            <div className="marquee-group" key={groupIndex}>
              {group.map((item) => (
                <span className="tick" key={item}>
                  <i />
                  {item}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
