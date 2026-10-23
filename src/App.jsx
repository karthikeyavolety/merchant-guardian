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
  { time: '10:30 AM', amount: 250, isSample: true },
  { time: '10:15 AM', amount: 180, isSample: true },
  { time: '09:55 AM', amount: 500, isSample: true },
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

  // Only count transactions simulated during this browser session in the live metrics.
  const sessionLedger = ledger.filter((row) => !row.isSample)
  const verifiedSales = sessionLedger.reduce((sum, row) => sum + row.amount, 0)

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
        <TransactionLedger ledger={ledger} verifiedSales={verifiedSales} sessionCount={sessionLedger.length} />
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
