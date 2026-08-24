# Musiverse

A React-based music streaming web app with a persistent player, song library, and authentication pages.

## Features

- 🎵 Persistent bottom player strip with track playback state managed via Context API
- 📚 Library page for browsing songs
- 🔐 Login / Sign Up UI (frontend only — not yet wired to auth logic)
- 📱 Collapsible sidebar navigation
- 📞 Contact page

## Tech Stack

- **Frontend:** React 18, React Router DOM
- **Build Tool:** Vite
- **Linting:** ESLint (React + Hooks rules)

## Architecture

```
App.jsx
 └── PlayerProvider (Context API — manages songs, currentSongIndex, playback state)
      └── MainLayout
           ├── Sidebar (collapsible)
           ├── Navbar
           ├── Routes: / (Home) · /library (Library) · /contact (ContactUs) · /login · /signup
           └── BottomStrip (song player — renders only when a song is active)
```

## Project Structure

```
src/
  ├── components/
  │   ├── Navbar.jsx
  │   ├── Sidebar.jsx
  │   ├── SongItem.jsx
  │   ├── BottomStrip.jsx
  │   └── auth/            # Login / Signup components
  ├── context/
  │   └── PlayerContext.jsx  # Global playback state
  ├── pages/
  │   ├── Home.jsx
  │   ├── Library.jsx
  │   └── ContactUs.jsx
  ├── styles/
  ├── assets/
  └── App.jsx
```

## Getting Started

### Prerequisites
- Node.js

### Setup

```bash
git clone https://github.com/SaurabhGarg6174/Musiverse.git
cd Musiverse
npm install
npm run dev
```

### Other commands

```bash
npm run build      # production build
npm run preview    # preview production build
npm run lint        # run ESLint
```
