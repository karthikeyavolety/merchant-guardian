import { ShieldMark } from './Navbar.jsx'

const features = [
  {
    icon: '🛡️',
    title: 'Payment verification',
    desc: 'Detects a trusted, simulated payment-notification signal instead of trusting what a customer\u2019s screen shows.',
  },
  {
    icon: '🔴',
    title: 'Anti-spoofing alert',
    desc: 'Warns the merchant clearly when no verified signal has arrived, before goods are handed over.',
  },
  {
    icon: '📊',
    title: 'Transaction ledger',
    desc: 'Keeps a running record of every verified sale, so the merchant has proof beyond a single screen.',
  },
]

export default function Hero() {
  return (
    <section id="top" className="section" style={{ paddingTop: 72, borderBottom: '1px solid var(--border)' }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 28 }}>
          <span className="pill" style={{ background: 'var(--surface-2)', color: 'var(--muted)', border: '1px solid var(--border)' }}>
            <span className="dot" style={{ background: 'var(--waiting)' }} />
            Hackathon prototype
          </span>
        </div>

        <div style={{ textAlign: 'center', maxWidth: 720, margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 20 }}>
            <ShieldMark size={48} />
          </div>
          <h1 style={{
            fontFamily: 'var(--font-display)', fontWeight: 700,
            fontSize: 'clamp(34px, 6vw, 56px)', lineHeight: 1.08, margin: '0 0 18px',
            letterSpacing: '-0.01em',
          }}>
            Merchant Guardian
          </h1>
          <p style={{ fontSize: 20, color: 'var(--text)', margin: '0 0 14px', fontWeight: 500 }}>
            Don't trust the screen. Verify the payment.
          </p>
          <p style={{ fontSize: 16, color: 'var(--muted)', lineHeight: 1.65, margin: '0 auto 34px', maxWidth: 540 }}>
            An affordable payment-verification concept designed to help small merchants
            identify unverified payment claims before goods leave the counter.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#demo" className="btn btn-primary">Try the demo</a>
            <a href="#how-it-works" className="btn btn-secondary">See how it works</a>
          </div>
        </div>

        <div style={{
          marginTop: 64, display: 'grid', gap: 16,
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
        }}>
          {features.map((f) => (
            <div key={f.title} className="card" style={{ padding: 24 }}>
              <div style={{ fontSize: 22, marginBottom: 12 }}>{f.icon}</div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 16, margin: '0 0 8px' }}>{f.title}</h3>
              <p style={{ fontSize: 14, color: 'var(--muted)', lineHeight: 1.6, margin: 0 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
