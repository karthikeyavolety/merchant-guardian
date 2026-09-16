# Merchant Guardian

**"Don't Trust the Screen. Verify the Payment."**

## ⚠️ Prototype Status

**THIS PROJECT IS A BASIC OVERVIEW / HACKATHON PROTOTYPE.**

It is a frontend-only demonstration built to communicate a product idea, not a production
payment system. Specifically:

- All payment events shown are **simulated** — no real transaction ever occurs.
- All "payment notifications" are **simulated** — there is no connection to any bank or UPI network.
- **No real money is processed** anywhere in this project.
- **No real bank connection exists.** The app does not talk to any financial institution.
- The Merchant Reliability Score and Future Credit sections are **simulated concepts**, not real
  credit scoring or lending.
- The project exists to demonstrate the **concept and user flow**, so judges can quickly
  understand the idea — not to be deployed as-is.

## Problem Statement

Small roadside merchants in India are targeted by fake payment scams. A common pattern:

1. A scammer shows the merchant a fake "Payment Successful" screen on their own phone.
2. The screen displays the merchant's name and an amount (e.g. ₹500).
3. The scammer may also play a fake payment-success audio clip.
4. In a busy, noisy environment, the merchant trusts what they see or hear and hands
   over goods — without the money ever actually arriving.

The core problem: **a customer's phone screen is not proof that the merchant received
the money.** Screenshots, success screens, and audio clips can all be faked; they are not
under the merchant's control and cannot be independently verified in the moment.

## Proposed Solution

Merchant Guardian is a conceptual payment-verification system for merchants. Instead of
relying on anything shown or played from the *customer's* device, it is built around a
notification that arrives directly on the *merchant's* device from a trusted source. If
that verified signal hasn't arrived, the merchant is warned — regardless of what the
customer's screen claims.

## Core Concept

```
Trusted payment notification
            ↓
        Verification
            ↓
       Merchant alert
            ↓
      Transaction ledger
            ↓
     Reliability profile
```

## Key Features

1. **Payment verification** — checks for a trusted (simulated) payment notification signal
   before treating a transaction as complete.
2. **Anti-spoofing warning** — clearly flags "unverified" transactions and tells the merchant
   not to release goods until a verified signal arrives.
3. **Verify Last Payment** — lets the merchant re-check the status of the most recent
   transaction on demand.
4. **Transaction ledger** — a running, timestamped record of verified sales, with daily totals.
5. **Merchant Reliability Score** — a prototype metric summarizing verified activity over time
   (not an official credit score).
6. **Future inventory credit concept** — a mockup of how a strong reliability history could,
   in the future, unlock small inventory credit through regulated partners.

## How The Prototype Works

The demo uses simple in-memory React state — there is no backend, database, or real
notification system:

1. The **Live Demo** panel starts in a `WAITING` state with ₹0 shown.
2. Clicking **"Simulate fake ₹500 payment"** sets the state to `UNVERIFIED` with ₹500 shown,
   a red warning, and a "DO NOT RELEASE GOODS" message. Nothing is added to the ledger.
3. Clicking **"Simulate real ₹10 payment"** sets the state to `VERIFIED` with ₹10 shown, a
   green confirmation, and adds a new row to the transaction ledger with the current time.
4. **"Verify Last Payment"** re-checks the current in-memory status and shows either
   "No verified notification detected" or "Verified notification detected N seconds ago."
5. The **Transaction Ledger** section reflects all simulated verified transactions,
   including the ones seeded for the demo and any new ones you add.

## Demo Flow

**Scenario 1 — Fake ₹500 payment**
Click "Simulate fake ₹500 payment" → the panel turns red, shows `UNVERIFIED`, and displays
"No verified payment signal detected" plus "DO NOT RELEASE GOODS."

**Scenario 2 — Real simulated ₹10 payment**
Click "Simulate real ₹10 payment" → the panel turns green, shows `VERIFIED`, displays
"Verified notification received," and the ledger updates with the new transaction.

## Architecture

```
Customer Payment
      ↓
Payment Notification
      ↓
Merchant Guardian
      ↓
Verification Engine
      ↓
 ┌───────────────┐
 │               │
VERIFIED     UNVERIFIED
 │               │
GREEN            RED
 │               │
Ledger          Warning
```

## Technology Stack

- React 18
- Vite
- JavaScript (JSX)
- Plain CSS (no UI framework)

## Project Structure

```
merchant-guardian/
│
├── src/
│   ├── components/
│   │   ├── Navbar.jsx            # Top nav + shield logo mark
│   │   ├── Hero.jsx              # Landing hero + feature cards
│   │   ├── HowItWorks.jsx        # Verification flow diagram
│   │   ├── Demo.jsx              # Live demo panel + Verify Last Payment
│   │   ├── TransactionLedger.jsx # Ledger table + summary stats
│   │   ├── ReliabilityScore.jsx  # Reliability score + factors
│   │   ├── FutureCredit.jsx      # Future inventory credit concept
│   │   └── FakeVsReal.jsx        # Fake vs real comparison section
│   │
│   ├── App.jsx      # Shared demo state, page composition
│   ├── main.jsx     # React entry point
│   └── index.css    # Design tokens + global styles
│
├── index.html
├── package.json
├── vite.config.js
└── .gitignore
```

## Installation

```bash
git clone <repository-url>
cd merchant-guardian
npm install
npm run dev
```

Vite will print a local URL (typically `http://localhost:5173`). Open it in your browser
to view the app. Any code change will hot-reload automatically.

To build a production bundle instead:

```bash
npm run build
npm run preview
```

## Demo Instructions

1. Open the website.
2. Scroll to (or click) **Live Demo**.
3. Click **"Simulate fake ₹500 payment."**
4. Observe the red, unverified warning and "DO NOT RELEASE GOODS" message.
5. Click **"Simulate real ₹10 payment."**
6. Observe the green, verified confirmation.
7. Click **"Verify Last Payment"** to see the on-demand re-check.
8. Scroll to **Transaction Ledger** to see the updated record and totals.
9. Scroll to **Merchant Reliability** and **Future Credit** to see the longer-term concept.

## Prototype Limitations

This prototype does **not**:

- Connect to any real bank, UPI network, or payment gateway.
- Access any real bank account or transaction database.
- Perform real UPI or payment verification.
- Process real money in any form.
- Provide real loans or make real credit decisions.
- Include authentication, a backend, or persistent storage — refreshing the page resets
  all state.
- Detect real-world fraud or spoofing; the "fake" and "real" buttons simply set demo state.

## Future Scope

- Authorized banking / UPI API integration for genuine notification verification.
- Stronger cryptographic verification of notification authenticity.
- A secure, cloud-hosted transaction ledger with backups.
- Merchant-facing analytics and trend reporting.
- Real fraud-detection models trained on transaction patterns.
- Integration with regulated lending partners for real inventory credit.
- Regional-language voice alerts for accessibility.
- Offline-friendly operation for low-connectivity areas.
- Production-grade security hardening across the stack.

## Security Considerations

A production version of Merchant Guardian would require, at minimum:

- Secure, authenticated APIs for any bank/UPI integration.
- Cryptographic validation of notification authenticity (to prevent spoofed signals).
- Encryption of data in transit and at rest.
- Secure, access-controlled storage for transaction and merchant data.
- Proper user authentication and authorization.
- Fraud-prevention and anomaly-detection mechanisms.
- Privacy protections for merchant and transaction data.
- Compliance with applicable financial and data-protection regulations.

## Disclaimer

This is a hackathon prototype intended to demonstrate a product concept. It does not
process real payments, access bank accounts, verify real UPI transactions, or provide
financial/credit services.

## Future Architecture

```
Android Merchant App
        ↓
Authorized Payment / Bank Integration
        ↓
Verification Service
        ↓
Fraud Detection
        ↓
Secure Ledger
        ↓
Analytics
        ↓
Regulated Financial Partners
```

## Team Contribution

Team Members:
- Member 1
- Member 2
- Member 3
- Member 4
- Member 5
- Member 6
