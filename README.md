# FirstSignal

Validate your startup idea in seconds. Paste your concept and get instant clarity scores across three key dimensions — market positioning, target audience, and monetization strategy.

## Features

- **Instant Idea Analysis** — Keyword-weighted scoring across Market, Target User, and Monetization categories
- **Live Checklist** — Real-time tips that activate as you type, guiding you toward a stronger pitch
- **Score Cards** — Visual score rings with explanations and an overall verdict
- **Demo Ideas** — Pre-loaded startup ideas to try instantly
- **Light / Dark Theme** — Warm and dark themes with a smooth toggle, persisted in localStorage
- **Fully Responsive** — Works seamlessly on mobile, tablet, and desktop

## Tech Stack

- [React 19](https://react.dev/) — UI framework
- [Vite 7](https://vite.dev/) — Build tool with HMR
- [Tailwind CSS v4](https://tailwindcss.com/) — Utility-first styling with CSS variable-based theming
- [Framer Motion](https://www.framer.com/motion/) — Animations and transitions

## Getting Started

```bash
# Clone the repo
git clone <repo-url>
cd first-signal

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Scripts

| Command           | Description                  |
| ----------------- | ---------------------------- |
| `npm run dev`     | Start dev server with HMR    |
| `npm run build`   | Build for production          |
| `npm run preview` | Preview the production build  |
| `npm run lint`    | Run ESLint                    |

## Project Structure

```
src/
├── App.jsx                  # Main layout and app shell
├── main.jsx                 # Entry point
├── index.css                # Theme variables and global styles
├── components/
│   ├── Hero.jsx             # Landing hero section
│   ├── IdeaInput.jsx        # Textarea card with character count and CTA
│   ├── Tips.jsx             # Live keyword checklist
│   ├── ScoreCard.jsx        # Individual score ring card
│   ├── ScoreCards.jsx       # Score grid with overall verdict
│   └── ThemeSwitcher.jsx    # Light/dark toggle button
├── data/
│   └── demoIdeas.js         # Sample startup ideas
└── utils/
    └── analyzeIdea.js       # Keyword scoring engine
```

## Theming

The app uses CSS custom properties mapped to Tailwind tokens via the `@theme` directive. Two themes are available:

- **Warm** (default) — Cream backgrounds, coral accents
- **Dark** — Deep navy backgrounds, blue accents

Theme preference is saved to `localStorage` and applied on load.

