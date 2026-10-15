import { skillGroups } from '../data.js'

export default function Skills() {
  return (
    <section className="section" id="skills" aria-labelledby="skills-title">
      <div className="section-head">
        <p className="section-index">03</p>
        <h2 id="skills-title">Skills</h2>
      </div>
      <div className="skill-list">
        {skillGroups.map((group) => (
          <div className="skill-row" key={group.label}>
            <h3>{group.label}</h3>
            <ul className="chips">
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
