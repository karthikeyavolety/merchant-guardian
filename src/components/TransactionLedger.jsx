export default function TransactionLedger({ ledger, verifiedSales }) {
  return (
    <section id="ledger" className="section">
      <div className="container">
        <div className="eyebrow">Transaction ledger</div>
        <h2 className="section-heading">Every verified sale, kept in one place</h2>
        <p className="section-sub">
          Simulated data for this demo. A real deployment would sync this to secure cloud storage.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 16, marginBottom: 20 }}>
          <Stat label="Today's transactions" value={ledger.length} />
          <Stat label="Verified sales" value={`₹${verifiedSales.toLocaleString('en-IN')}`} />
        </div>

        <div className="card" style={{ overflow: 'hidden' }}>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 420 }}>
              <thead>
                <tr style={{ borderBottom: '1px solid var(--border)' }}>
                  {['Time', 'Amount', 'Status'].map((h) => (
                    <th key={h} style={{
                      textAlign: 'left', padding: '14px 20px', fontSize: 12.5,
                      color: 'var(--muted)', fontFamily: 'var(--font-display)', fontWeight: 600,
                    }}>
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {ledger.length === 0 && (
                  <tr>
                    <td colSpan={3} style={{ padding: '24px 20px', color: 'var(--muted)', fontSize: 14 }}>
                      No verified transactions yet. Simulate a real payment in the demo above.
                    </td>
                  </tr>
                )}
                {ledger.map((row, i) => (
                  <tr key={i} style={{ borderBottom: i === ledger.length - 1 ? 'none' : '1px solid var(--border)' }}>
                    <td style={{ padding: '14px 20px', fontSize: 14 }}>{row.time}</td>
                    <td style={{ padding: '14px 20px', fontSize: 14 }}>₹{row.amount}</td>
                    <td style={{ padding: '14px 20px', fontSize: 14, color: 'var(--verified)', fontWeight: 600 }}>
                      ✓ Verified
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}

function Stat({ label, value }) {
  return (
    <div className="card" style={{ padding: 20 }}>
      <div style={{ fontSize: 13, color: 'var(--muted)', marginBottom: 6 }}>{label}</div>
      <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 26 }}>{value}</div>
    </div>
  )
}
