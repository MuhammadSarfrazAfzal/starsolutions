import './Problems.css'

const PROBLEMS = [
  {
    n: '01',
    title: 'Stagnant Growth?',
    body: "Unleash your business's true potential by identifying growth barriers and implementing strategic solutions.",
  },
  {
    n: '02',
    title: 'Operational Inefficiencies?',
    body: 'Streamline your operations with our consulting expertise, optimizing processes for enhanced efficiency.',
  },
  {
    n: '03',
    title: 'Market Challenges?',
    body: 'Overcome market challenges with tailored strategies designed to position your business for success.',
  },
]

export default function Problems() {
  return (
    <section className="problems">
      <h2 className="t-h2 problems__title">Are You Running Into These Problems?</h2>
      <div className="problems__grid">
        {PROBLEMS.map((p) => (
          <article key={p.n} className="problem-card">
            <span className="problem-card__num">{p.n}</span>
            <h3 className="t-h3 problem-card__title">{p.title}</h3>
            <p className="t-body-l problem-card__body">{p.body}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
