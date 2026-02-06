# Merchant Management Dashboard

## Setup Instructions

1. Clone the repo: `git clone <your-repo-url>`
2. Install dependencies: `npm install`
3. Run the app: `npm run dev`
4. Open http://localhost:3000

## Assumptions

- Merchants hardcoded.
- Branches from mock API with simulated delay.
- QR codes generated via `qrcode` library.
- Simple Tailwind styling.

## How to Run

- Select a merchant on the home page.
- Click "Fetch POS Branch" (disabled until selected).
- View branches table with QR codes and downloads.
