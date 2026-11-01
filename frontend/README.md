# Frontend

React + TypeScript + Vite client application.

## Setup

```bash
npm install
cp .env.example .env
npm run dev
```

On Windows PowerShell, use `Copy-Item .env.example .env` instead of `cp`.

The development server runs at http://localhost:5173. Set `VITE_API_BASE_URL` in `.env` to the backend API prefix. Values prefixed with `VITE_` are bundled into browser code and must never contain secrets.

## Commands

- `npm run dev`: start Vite with network access.
- `npm run lint`: run ESLint.
- `npm run typecheck`: run TypeScript project checks.
- `npm run test`: run Vitest tests once.
- `npm run test:watch`: run Vitest in watch mode.
- `npm run build`: type-check and create a production build.
- `npm run preview`: serve the production build locally.
