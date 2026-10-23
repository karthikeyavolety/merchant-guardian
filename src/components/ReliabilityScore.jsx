const factors = [
  { label: 'Payment consistency', value: 92 },
  { label: 'Verified transactions', value: 88 },
  { label: 'Daily activity', value: 81 },
  { label: '30-day history', value: 87 },
]

const days = ['Day 1', 'Day 7', 'Day 15', 'Day 30']

export default function ReliabilityScore() {
  return (
    <section id="reliability" className="section">
      <div className="container">
        <div className="eyebrow">Merchant reliability</div>
        <h2 className="section-heading">A track record built from verified activity</h2>
        <p className="section-sub">
          Prototype metric — not an official bank or credit-bureau score. It's a conceptual
          score based on simulated verified transaction activity.
        </p>

        <div className="card" style={{ padding: 32 }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, marginBottom: 28 }}>
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 48 }}>87</span>
            <span style={{ color: 'var(--muted)', fontSize: 16 }}>/ 100</span>
          </div>

          <div style={{ display: 'grid', gap: 16, marginBottom: 32 }}>
            {factors.map((f) => (
              <div key={f.label}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13.5, marginBottom: 6 }}>
                  <span style={{ color: 'var(--muted)' }}>{f.label}</span>
                  <span style={{ fontWeight: 600 }}>{f.value}</span>
                </div>
                <div style={{ height: 6, borderRadius: 999, background: 'var(--surface-2)', overflow: 'hidden' }}>
                  <div style={{ height: '100%', width: `${f.value}%`, borderRadius: 999, background: 'var(--brand)' }} />
                </div>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid var(--border)', paddingTop: 20 }}>
            {days.map((d) => (
              <div key={d} style={{ textAlign: 'center', fontSize: 12.5, color: 'var(--muted)' }}>
                <div style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--brand)', margin: '0 auto 8px' }} />
                {d}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
