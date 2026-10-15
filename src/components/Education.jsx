import { additionalSkills, education } from '../data.js'

export default function Education() {
  return (
    <section className="section" id="education" aria-labelledby="education-title">
      <div className="section-head">
        <p className="section-index">04</p>
        <h2 id="education-title">Education</h2>
      </div>
      <div className="edu-grid">
        {education.map((item) => (
          <article className="edu" key={item.credential}>
            <h3>{item.credential}</h3>
            <p>{item.school}</p>
          </article>
        ))}
      </div>
      <div className="also">
        <h3>Additional skills</h3>
        <ul className="chips">
          {additionalSkills.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}
