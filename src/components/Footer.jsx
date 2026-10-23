import { ShieldMark } from './Navbar.jsx'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <ShieldMark size={18} />
          <span>Merchant Guardian</span>
        </div>
        <p className="footer-disclaimer">
          Hackathon prototype. Payment events, notifications, and credit offers shown here are
          simulated — no real money is processed and no bank connection exists.
        </p>
      </div>

      <style>{`
        .site-footer {
          border-top: 1px solid var(--border);
          padding: 32px 0 48px;
        }
        .footer-inner {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .footer-brand {
          display: flex;
          align-items: center;
          gap: 8px;
          font-family: var(--font-display);
          font-weight: 600;
          font-size: 0.92rem;
        }
        .footer-disclaimer {
          color: var(--text-dim);
          font-size: 0.82rem;
          max-width: 60ch;
        }
      `}</style>
    </footer>
  )
}
