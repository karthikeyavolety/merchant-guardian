import { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import HowItWorks from './components/HowItWorks.jsx'
import Demo from './components/Demo.jsx'
import TransactionLedger from './components/TransactionLedger.jsx'
import ReliabilityScore from './components/ReliabilityScore.jsx'
import FutureCredit from './components/FutureCredit.jsx'
import FakeVsReal from './components/FakeVsReal.jsx'

const initialLedger = [
  { time: '10:30 AM', amount: 250 },
  { time: '10:15 AM', amount: 180 },
  { time: '09:55 AM', amount: 500 },
]

function formatTime(date) {
  return date.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' })
}

export default function App() {
  const [status, setStatus] = useState('WAITING')
  const [amount, setAmount] = useState(0)
  const [lastVerifiedAt, setLastVerifiedAt] = useState(null)
  const [ledger, setLedger] = useState(initialLedger)

  const simulateFake = () => {
    setStatus('UNVERIFIED')
    setAmount(500)
  }

  const simulateReal = () => {
    const now = new Date()
    setStatus('VERIFIED')
    setAmount(10)
    setLastVerifiedAt(now.getTime())
    setLedger((prev) => [{ time: formatTime(now), amount: 10 }, ...prev])
  }

  const verifiedSales = ledger.reduce((sum, row) => sum + row.amount, 0)

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <Demo
          status={status}
          amount={amount}
          lastVerifiedAt={lastVerifiedAt}
          onFake={simulateFake}
          onReal={simulateReal}
        />
        <TransactionLedger ledger={ledger} verifiedSales={verifiedSales} />
        <ReliabilityScore />
        <FutureCredit />
        <FakeVsReal />
      </main>
      <footer style={{ padding: '32px 24px', textAlign: 'center', color: 'var(--muted)', fontSize: 13 }}>
        Merchant Guardian — hackathon prototype. No real payments are processed.
      </footer>
    </>
  )
}
