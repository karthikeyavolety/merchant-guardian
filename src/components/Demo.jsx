import { useEffect, useState } from 'react'

const statusConfig = {
  WAITING: { label: 'Waiting for payment', emoji: '🟡', pillClass: 'pill-waiting' },
  UNVERIFIED: { label: 'Unverified transaction', emoji: '🔴', pillClass: 'pill-unverified' },
  VERIFIED: { label: 'Payment verified', emoji: '🟢', pillClass: 'pill-verified' },
}

export default function Demo({ status, amount, lastVerifiedAt, onFake, onReal }) {
  return (
    <section id="demo" className="section">
      <div className="container">
        <div className="eyebrow">Live demo</div>
        <h2 className="section-heading">See the difference in one tap</h2>
        <p className="section-sub">
          This is a simulation. Nothing here touches a real bank, UPI network, or actual money.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1.15fr) minmax(0,0.85fr)', gap: 20 }} className="demo-grid">
          <div className="card" style={{ padding: 28 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 24 }}>
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 15 }}>
                Merchant Guardian
              </span>
              <span className={`pill ${statusConfig[status].pillClass}`}>
                <span className="dot dot-pulse" />
                {statusConfig[status].emoji} {statusConfig[status].label}
              </span>
            </div>

            <div style={{
              borderRadius: 'var(--radius)', border: '1px solid var(--border)',
              background: 'var(--bg-elevated)', padding: '28px 20px', textAlign: 'center', marginBottom: 22,
            }}>
              <div style={{ fontSize: 13, color: 'var(--muted)', marginBottom: 6 }}>Amount</div>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 44 }}>
                ₹{amount}
              </div>
              {status !== 'WAITING' && (
                <p style={{
                  marginTop: 12, fontSize: 14, fontWeight: 600,
                  color: status === 'VERIFIED' ? 'var(--verified)' : 'var(--unverified)',
                }}>
                  {status === 'VERIFIED'
                    ? 'Verified notification received.'
                    : 'No verified payment signal detected.'}
                </p>
              )}
              {status === 'UNVERIFIED' && (
                <div style={{
                  marginTop: 14, padding: '10px 14px', borderRadius: 'var(--radius-sm)',
                  background: 'var(--unverified-soft)', color: 'var(--unverified)',
                  fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 13.5,
                }}>
                  DO NOT RELEASE GOODS
                </div>
              )}
            </div>

            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <button className="btn btn-danger" onClick={onFake}>
                Simulate fake ₹500 payment
              </button>
              <button className="btn btn-success" onClick={onReal}>
                Simulate real ₹10 payment
              </button>
            </div>
          </div>

          <VerifyLastPayment status={status} amount={amount} lastVerifiedAt={lastVerifiedAt} />
        </div>
      </div>

      <style>{`
        @media (max-width: 820px) {
          .demo-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}

function VerifyLastPayment({ status, amount, lastVerifiedAt }) {
  const [checking, setChecking] = useState(false)
  const [result, setResult] = useState(null)
  const [secondsAgo, setSecondsAgo] = useState(0)

  useEffect(() => {
    setResult(null)
  }, [status, amount])

  const runCheck = () => {
    setChecking(true)
    setResult(null)
    setTimeout(() => {
      setChecking(false)
      if (status === 'VERIFIED' && lastVerifiedAt) {
        setSecondsAgo(Math.max(1, Math.round((Date.now() - lastVerifiedAt) / 1000)))
        setResult('VERIFIED')
      } else {
        setResult('UNVERIFIED')
      }
    }, 900)
  }

  return (
    <div className="card" style={{ padding: 28, display: 'flex', flexDirection: 'column' }}>
      <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 16, margin: '0 0 6px' }}>
        Verify last payment
      </h3>
      <p style={{ fontSize: 13.5, color: 'var(--muted)', lineHeight: 1.6, margin: '0 0 18px' }}>
        Ask Merchant Guardian to re-check the most recent transaction signal.
      </p>

      <button className="btn btn-secondary" onClick={runCheck} disabled={checking} style={{ marginBottom: 18 }}>
        {checking ? 'Checking…' : 'Verify last payment'}
      </button>

      <div style={{
        flex: 1, borderRadius: 'var(--radius-sm)', border: '1px solid var(--border)',
        background: 'var(--bg-elevated)', padding: 18, display: 'flex',
        flexDirection: 'column', justifyContent: 'center', minHeight: 96,
      }}>
        {checking && (
          <p style={{ margin: 0, fontSize: 14, color: 'var(--muted)' }}>Checking signal…</p>
        )}
        {!checking && result === 'VERIFIED' && (
          <>
            <span className="pill pill-verified" style={{ width: 'fit-content', marginBottom: 8 }}>🟢 Verified</span>
            <p style={{ margin: 0, fontSize: 13.5, color: 'var(--muted)' }}>
              Verified notification detected {secondsAgo} second{secondsAgo === 1 ? '' : 's'} ago.
            </p>
          </>
        )}
        {!checking && result === 'UNVERIFIED' && (
          <>
            <span className="pill pill-unverified" style={{ width: 'fit-content', marginBottom: 8 }}>🔴 Unverified</span>
            <p style={{ margin: 0, fontSize: 13.5, color: 'var(--muted)' }}>
              No verified notification detected.
            </p>
          </>
        )}
        {!checking && result === null && (
          <p style={{ margin: 0, fontSize: 13.5, color: 'var(--muted)' }}>
            No check run yet. Tap the button above.
          </p>
        )}
      </div>
    </div>
  )
}
