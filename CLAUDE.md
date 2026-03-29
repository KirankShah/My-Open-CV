# Kiran Portfolio — CLAUDE.md

## Project Overview
Personal portfolio website for **Kiran Kumar Shah**, a Senior Financial Crime & Compliance Technology Leader based in Dubai, UAE. Built with React + Vite + Tailwind CSS.

## Tech Stack
- **Framework:** React 18 + Vite 5
- **Styling:** Tailwind CSS 3
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Dev server:** `npm run dev`
- **Build:** `npm run build`
- **Preview:** `npm run preview`

## Project Structure
```
src/
├── App.jsx                  # Root layout — orders all sections
├── components/
│   ├── Hero.jsx             # Hero/landing section
│   ├── About.jsx            # Executive profile/summary
│   ├── Differentiators.jsx  # Key differentiators
│   ├── FeaturedDemo.jsx     # Featured AI demo section
│   ├── Projects.jsx         # Projects & technical demos
│   ├── Experience.jsx       # Professional experience
│   ├── Publications.jsx     # Articles & publications
│   ├── Videos.jsx           # Video portfolio
│   ├── Certifications.jsx   # Certifications & education
│   ├── Skills.jsx           # Skills & expertise
│   ├── Contact.jsx          # Contact section
│   └── Footer.jsx           # Footer (email, location, social links)
└── data/                    # All content lives here — edit data files, not components
    ├── profile.js           # Name, title, email, location, tagline, bio, badges
    ├── projects.js          # Projects list
    ├── experience.js        # Work history
    ├── publications.js      # Articles & publications
    ├── videos.js            # Video links
    ├── skills.js            # Skills list
    └── certifications.js    # Certifications & education
```

## Content Update Rules
- **All personal content** (bio, links, contact info, experience, etc.) lives in `src/data/`. Edit data files directly — do not hardcode content into components.
- **Profile data** (`src/data/profile.js`): name, title, email, location, social links, tagline, value proposition, executive summary, badges.
- **Phone number** has been intentionally removed from the footer. Do not add it back.

## Key Decisions
- Phone number removed from `Footer.jsx` (user preference).
- `Contact.jsx` imports `Phone` from lucide-react — check if it also displays the phone number before editing.
- CV PDF should be placed at `public/cv/Kiran_Shah_CV.pdf`.
- Profile image at `public/images/profile.png`.
- Publication thumbnails live in `public/images/publications/`.

## Publications (current entries in `src/data/publications.js`)
| id | Title | Source | Thumbnail |
|----|-------|--------|-----------|
| 1 | What OFAC's Crypto Mixer Sanctions Mean for Financial Crime Compliance | ACAMS Today | `/images/publications/acams-today-ofac.png` |
| 2 | Agentic AI for AML Screening: How Autonomous Technology Is Transforming Sanctions Compliance in UAE and other international Banks | LinkedIn Pulse | `/images/publications/Agentic_AI1.png` |
| 3 | The Coin That No King Could Control | Amazon Kindle | `/images/publications/book-coin-no-king.png` |
