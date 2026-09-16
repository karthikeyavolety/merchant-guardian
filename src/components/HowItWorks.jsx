export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section">
      <div className="container">
        <div className="eyebrow">How it works</div>
        <h2 className="section-heading">One signal decides what happens next</h2>
        <p className="section-sub">
          Merchant Guardian doesn't look at the customer's phone at all. It waits for a
          simulated verified notification and only then tells the merchant it's safe to hand over goods.
        </p>

        <div className="card" style={{ padding: '36px 24px' }}>
          <FlowStep label="Customer pays" desc="A payment is attempted at the counter." />
          <FlowArrow />
          <FlowStep label="Payment notification" desc="A notification signal is simulated for this demo." />
          <FlowArrow />
          <FlowStep label="Merchant Guardian" desc="The signal is checked against what's expected." />
          <FlowArrow />
          <FlowStep label="Verification" desc="Simulated verified notification, or none at all." emphasise />

          <div style={{
            display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginTop: 28,
          }}>
            <Branch tone="verified" title="Verified" lines={['Green confirmation shown', 'Added to the ledger']} />
            <Branch tone="unverified" title="Unverified" lines={['Red warning shown', '\u201cDo not release goods\u201d']} />
          </div>
        </div>

        <p style={{ fontSize: 13, color: 'var(--muted)', marginTop: 20, lineHeight: 1.6 }}>
          This prototype does not connect to a real bank or UPI network. Every "verified notification" shown here is simulated for demonstration.
        </p>
      </div>
    </section>
  )
}

function FlowStep({ label, desc, emphasise }) {
  return (
    <div style={{ textAlign: 'center' }}>
      <div style={{
        display: 'inline-block', padding: '10px 18px', borderRadius: 999,
        border: `1px solid ${emphasise ? 'var(--brand)' : 'var(--border)'}`,
        background: emphasise ? 'var(--brand-soft)' : 'var(--surface-2)',
        fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 14.5,
      }}>
        {label}
      </div>
      <p style={{ margin: '8px 0 0', color: 'var(--muted)', fontSize: 13.5 }}>{desc}</p>
    </div>
  )
}

function FlowArrow() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', margin: '10px 0', color: 'var(--muted)' }}>
      ↓
    </div>
  )
}

function Branch({ tone, title, lines }) {
  const color = tone === 'verified' ? 'var(--verified)' : 'var(--unverified)'
  const bg = tone === 'verified' ? 'var(--verified-soft)' : 'var(--unverified-soft)'
  return (
    <div style={{
      borderRadius: 'var(--radius-sm)', border: `1px solid ${color}33`,
      background: bg, padding: '18px 16px', textAlign: 'center',
    }}>
      <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, color, marginBottom: 8 }}>{title}</div>
      {lines.map((l) => (
        <p key={l} style={{ margin: '2px 0', fontSize: 13, color: 'var(--muted)' }}>{l}</p>
      ))}
    </div>
  )
}
