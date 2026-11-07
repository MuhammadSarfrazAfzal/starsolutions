import './Problems.css'

const PROBLEMS = [
  {
    n: '01',
    icon: '⚡',
    badge: 'POS & Retail Ops',
    title: 'Lagging POS & Inventory Chaos?',
    body: 'Legacy POS systems crash during peak hours and fail at multi-store inventory sync. Having run physical iPhone stores in the USA for 15 years, we engineer lightning-fast POS solutions that never miss a sale.',
  },
  {
    n: '02',
    icon: '📱',
    badge: 'App & Web Engineering',
    title: 'Disconnected Mobile & Web Systems?',
    body: 'Off-the-shelf templates limit growth and frustrate customers. We develop custom iOS, Android, and high-conversion web platforms built specifically for your unique operations and omnichannel retail.',
  },
  {
    n: '03',
    icon: '📈',
    badge: 'Growth & Strategy',
    title: 'Weak Foot Traffic & Marketing ROI?',
    body: 'Struggling to drive customers into physical stores or online checkout? We combine targeted digital marketing, local SEO, and conversion optimization to turn visitors into repeat buyers.',
  },
]

export default function Problems() {
  return (
    <section className="problems">
      <div className="problems__header">
        <span className="problems__badge">Why Star Solutions?</span>
        <h2 className="t-h2 problems__title">Solving Real Challenges with Battle-Tested Tech</h2>
        <p className="problems__subtitle">
          From our tech headquarters in Citi Housing, Jhelum to our physical retail operations in the United States, we understand what makes businesses succeed.
        </p>
      </div>

      <div className="problems__grid">
        {PROBLEMS.map((p) => (
          <article key={p.n} className="problem-card">
            <div className="problem-card__top">
              <span className="problem-card__num">{p.n}</span>
              <span className="problem-card__category">{p.badge}</span>
            </div>
            <div className="problem-card__icon">{p.icon}</div>
            <h3 className="t-h3 problem-card__title">{p.title}</h3>
            <p className="t-body-l problem-card__body">{p.body}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
