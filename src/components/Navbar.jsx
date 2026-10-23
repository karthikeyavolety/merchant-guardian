export default function Navbar() {
  const links = [
    { href: '#how-it-works', label: 'How it works' },
    { href: '#demo', label: 'Live demo' },
    { href: '#ledger', label: 'Ledger' },
    { href: '#reliability', label: 'Reliability' },
    { href: '#future-credit', label: 'Future credit' },
  ]

  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 50,
      background: 'rgba(10, 15, 28, 0.85)', backdropFilter: 'blur(8px)',
      borderBottom: '1px solid var(--border)',
    }}>
      <div className="container" style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        height: 64,
      }}>
        <a href="#top" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <ShieldMark />
          <span style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 16 }}>
            Merchant Guardian
          </span>
        </a>
        <nav style={{ display: 'flex', gap: 22 }} className="nav-links">
          {links.map((l) => (
            <a key={l.href} href={l.href} style={{ fontSize: 14, color: 'var(--muted)' }}>
              {l.label}
            </a>
          ))}
        </nav>
      </div>
      <style>{`
        @media (max-width: 720px) {
          .nav-links { display: none !important; }
        }
      `}</style>
    </header>
  )
}

export function ShieldMark({ size = 24 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M12 2L4 5v6c0 5 3.4 8.7 8 9.9 4.6-1.2 8-4.9 8-9.9V5l-8-3z"
        fill="var(--brand-soft)" stroke="var(--brand)" strokeWidth="1.5" />
      <path d="M8.5 12.2l2.3 2.3 4.7-4.9" stroke="var(--brand)" strokeWidth="1.7"
        strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
