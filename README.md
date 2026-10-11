# React Practice — Mood Tracker

A React, TypeScript, and Bootstrap practice project covering components, props, events, conditional rendering, and array state updates.

## Features

- Add mood tags manually or from suggestions.
- Reject duplicate moods without case sensitivity.
- Remove individual tags or clear the list.
- Find and replace mood labels.
- Switch between list and grid views.

## Requirements

- Node.js `^20.19.0 || >=22.12.0` and npm.
- No backend or API credentials are required.

## Run locally

```sh
git clone https://github.com/PravatKumaraMishra/React-Practice.git
cd React-Practice
npm ci
```

Enter a mood and add it, try the quick suggestions, then remove or replace a label. The current screen is the mood tracker; earlier exercises are preserved in Git history.

```sh
npm run dev
```

Open the local URL printed by Vite (normally `http://localhost:5173`).

## Available commands

| Command | Script |
| --- | --- |
| `npm run dev` | `vite` |
| `npm run build` | `tsc -b && vite build` |
| `npm run lint` | `oxlint` |
| `npm run preview` | `vite preview` |

`npm run preview` serves the output of `npm run build`; it does not build the project itself.

## Project structure

- `src/App.tsx`: mood tracker and state operations.
- `src/Button.tsx`: reusable button.
- `src/Alert.tsx` and `src/ListGroup.tsx`: practice components.
- `src/main.tsx`: application entry.

## Notes

Mood data is held in React state and is reset on reload. This is an exercise repository. Some handlers and tag IDs have inconsistent TypeScript types, so a production build may report type errors; the README does not imply those issues are fixed.
