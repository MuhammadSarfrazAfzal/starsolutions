import './Problems.css'

const PROBLEMS = [
  {
    n: '01',
    title: 'Slow POS & Checkout Delays?',
    body: 'Outdated Point of Sale software and hardware cause lost sales and inventory discrepancies. With 15 years operating iPhone stores in the USA, we engineer POS systems that ensure split-second checkouts and real-time multi-store sync.',
  },
  {
    n: '02',
    title: 'Disjointed Apps & Web Systems?',
    body: 'Generic off-the-shelf software fails to match your custom retail workflows. We build tailored mobile apps (iOS & Android) and high-performance web applications designed to streamline every operation.',
  },
  {
    n: '03',
    title: 'Low Foot Traffic & Marketing Gaps?',
    body: 'Struggling to scale retail store visits or convert online traffic? We deploy high-converting digital marketing, local SEO, and brand campaigns tested and refined across 15 years of physical and digital business.',
  },
]

export default function Problems() {
  return (
    <section className="problems">
      <h2 className="t-h2 problems__title">Are You Facing These Retail & Software Challenges?</h2>
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
