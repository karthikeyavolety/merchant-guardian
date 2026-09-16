export default function FakeVsReal() {
  return (
    <section id="fake-vs-real" className="section" style={{ borderBottom: 'none' }}>
      <div className="container">
        <div className="eyebrow">Fake vs real</div>
        <h2 className="section-heading">The screen and the signal rarely lie the same way</h2>
        <p className="section-sub">
          A scammer can make a phone show almost anything. A verified notification is much harder to fake.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }} className="compare-grid">
          <CompareCard
            tone="unverified"
            title="Fake payment"
            phoneAmount="₹500"
            phoneLabel="Payment Successful"
            resultLabel="Unverified"
          />
          <CompareCard
            tone="verified"
            title="Real payment"
            phoneAmount="₹10"
            phoneLabel="Payment Completed"
            resultLabel="Verified"
          />
        </div>

        <div style={{ textAlign: 'center', marginTop: 32 }}>
          <p style={{ margin: '0 0 4px', fontSize: 16, fontWeight: 500 }}>Don't trust the customer's screen.</p>
          <p style={{ margin: 0, fontSize: 16, color: 'var(--muted)' }}>Verify the payment signal.</p>
        </div>
      </div>

      <style>{`
        @media (max-width: 720px) {
          .compare-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}

function CompareCard({ tone, title, phoneAmount, phoneLabel, resultLabel }) {
  const isVerified = tone === 'verified'
  const color = isVerified ? 'var(--verified)' : 'var(--unverified)'
  const soft = isVerified ? 'var(--verified-soft)' : 'var(--unverified-soft)'

  return (
    <div className="card" style={{ padding: 24 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 18 }}>
        <span>{isVerified ? '🟢' : '🔴'}</span>
        <span style={{ fontFamily: 'var(--font-display)', fontWeight: 600 }}>{title}</span>
      </div>

      <div style={{
        borderRadius: 'var(--radius-sm)', border: '1px solid var(--border)',
        background: 'var(--bg-elevated)', padding: '18px', marginBottom: 14, textAlign: 'center',
      }}>
        <div style={{ fontSize: 12, color: 'var(--muted)', marginBottom: 6 }}>Customer's phone</div>
        <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 26 }}>{phoneAmount}</div>
        <div style={{ fontSize: 13, color: 'var(--muted)' }}>{phoneLabel}</div>
      </div>

      <div style={{
        borderRadius: 'var(--radius-sm)', border: `1px solid ${color}55`,
        background: soft, padding: '14px 18px', textAlign: 'center',
      }}>
        <div style={{ fontSize: 12, color: 'var(--muted)', marginBottom: 4 }}>Merchant Guardian</div>
        <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color }}>{resultLabel}</div>
      </div>
    </div>
  )
}
