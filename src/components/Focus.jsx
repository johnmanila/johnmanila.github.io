import { focus } from '../data.js'

export default function Focus() {
  return (
    <section className="section" aria-labelledby="focus-title">
      <div className="section-head">
        <p className="section-index">01</p>
        <h2 id="focus-title">Focus</h2>
      </div>
      <div className="focus-grid">
        {focus.map((item) => (
          <article className="focus-card" key={item.index}>
            <span>{item.index}</span>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
