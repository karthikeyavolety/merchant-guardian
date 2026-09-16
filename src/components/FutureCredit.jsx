export default function FutureCredit() {
  return (
    <section id="future-credit" className="section">
      <div className="container">
        <div className="eyebrow">Future scope</div>
        <h2 className="section-heading">What a reliable track record could unlock</h2>
        <p className="section-sub">
          A future-facing concept only. No real lending, credit decisions, or financial data
          collection happen in this prototype.
        </p>

        <div className="card" style={{ padding: 32, maxWidth: 460 }}>
          <span className="pill pill-verified" style={{ marginBottom: 18 }}>30 days completed ✓</span>
          <div style={{ fontSize: 13, color: 'var(--muted)', marginBottom: 6 }}>Simulated credit offer</div>
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 34, marginBottom: 4 }}>
            ₹10,000
          </div>
          <div style={{ fontSize: 14, color: 'var(--muted)', marginBottom: 22 }}>Inventory credit</div>
          <button className="btn btn-secondary">Explore</button>

          <div style={{ marginTop: 24, paddingTop: 20, borderTop: '1px solid var(--border)', fontSize: 12.5, color: 'var(--muted)', lineHeight: 1.6 }}>
            Hackathon prototype. Future integration with regulated lending partners only.
          </div>
        </div>
      </div>
    </section>
  )
}
