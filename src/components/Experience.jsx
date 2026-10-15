import { experience } from '../data.js'

export default function Experience() {
  return (
    <section className="section" id="work" aria-labelledby="work-title">
      <div className="section-head">
        <p className="section-index">02</p>
        <h2 id="work-title">Experience</h2>
      </div>
      <div className="jobs">
        {experience.map((job) => (
          <article className="job" key={job.company}>
            <p className="job-meta">
              <time>{job.dates}</time>
            </p>
            <div>
              <h3>{job.company}</h3>
              <p className="role">{job.role}</p>
              <ul>
                {job.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
