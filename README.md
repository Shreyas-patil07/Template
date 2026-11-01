# Full-Stack Project Template

A reusable starting point for software engineering projects. This repository combines a maintainable documentation system with a working **React + Vite frontend** and **FastAPI backend**.

Use it as a GitHub repository template, then remove or replace parts that do not fit the next project. The stack is a practical default, not a requirement.

## What's included

- **Frontend:** React, TypeScript, Vite, ESLint, Vitest, React Testing Library.
- **Backend:** FastAPI, Pydantic Settings, Uvicorn, Pytest, Ruff.
- **API example:** `GET /api/v1/health`, consumed by the frontend.
- **Local development:** independent frontend and backend processes.
- **Containers:** Dockerfiles and Docker Compose.
- **Quality checks:** GitHub Actions CI for linting, type checking, tests, and production builds.
- **Repository hygiene:** MIT License, security policy, contribution guide, issue and pull-request templates, Dependabot, editor settings.
- **Documentation:** 10 core project documents plus Architecture Decision Records (ADRs).

## Repository structure

```text
.
├── .github/
│   ├── ISSUE_TEMPLATE/
│   ├── workflows/ci.yml
│   ├── dependabot.yml
│   └── PULL_REQUEST_TEMPLATE.md
├── ADR/
├── backend/
│   ├── app/api/routes/
│   ├── app/core/
│   ├── tests/
│   ├── Dockerfile
│   └── pyproject.toml
├── docs/
│   ├── 01_PRD.md
│   ├── 02_TRD.md
│   ├── 03_Architecture.md
│   ├── 04_App_Flow.md
│   ├── 05_UI_Design_Brief.md
│   ├── 06_Protocol_and_Data_Schema.md
│   ├── 07_Implementation.md
│   ├── 08_Security.md
│   ├── 09_Testing.md
│   └── 10_Development_Log.md
├── frontend/
│   ├── src/
│   ├── Dockerfile
│   └── package.json
├── .editorconfig
├── CHANGELOG.md
├── CONTRIBUTING.md
├── LICENSE
├── SECURITY.md
└── compose.yaml
```

## Quick start

### Prerequisites

- Node.js 22.12+ and npm.
- Python 3.12+.
- Git.

### 1. Clone and configure

```bash
git clone <YOUR_NEW_REPOSITORY_URL>
cd <YOUR_NEW_REPOSITORY>
```

Copy the example environment files:

**Windows PowerShell**
```powershell
Copy-Item backend/.env.example backend/.env
Copy-Item frontend/.env.example frontend/.env
```

**macOS / Linux**
```bash
cp backend/.env.example backend/.env
cp frontend/.env.example frontend/.env
```

### 2. Start the backend

```bash
cd backend
python -m venv .venv
```

Activate the virtual environment:

**Windows PowerShell**
```powershell
.venv\Scripts\Activate.ps1
```

**macOS / Linux**
```bash
source .venv/bin/activate
```

Install and run:

```bash
python -m pip install --upgrade pip
pip install -e ".[dev]"
uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
```

Backend endpoints:
- Health: http://localhost:8000/api/v1/health
- Swagger UI: http://localhost:8000/docs
- OpenAPI schema: http://localhost:8000/openapi.json

### 3. Start the frontend

Open a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Open http://localhost:5173. The starter screen checks the backend health endpoint.

### 4. Run checks

Frontend, from `frontend/`:

```bash
npm run lint
npm run typecheck
npm run test
npm run build
```

Backend, from `backend/` with the virtual environment activated:

```bash
ruff check .
ruff format --check .
pytest
```

## Run with Docker

From the repository root:

```bash
docker compose up --build
```

- Frontend: http://localhost:5173
- Backend: http://localhost:8000
- API docs: http://localhost:8000/docs

Stop containers with `docker compose down`. The frontend container serves a production build through Nginx; use the separate commands above for hot-reload development.

## Configuration

| File | Purpose |
|---|---|
| `backend/.env.example` | Backend name, environment, API prefix, allowed CORS origins |
| `frontend/.env.example` | Browser-visible API base URL |
| `backend/pyproject.toml` | Python dependencies and Ruff/Pytest configuration |
| `frontend/package.json` | JavaScript dependencies and npm scripts |
| `compose.yaml` | Local container orchestration |

Only variables prefixed with `VITE_` are exposed to browser code. Never put secrets in frontend environment variables.

## Documentation

Start with [docs/01_PRD.md](docs/01_PRD.md), then use the remaining documents according to their responsibilities:

1. [Product Requirements](docs/01_PRD.md)
2. [Technical Requirements](docs/02_TRD.md)
3. [Architecture](docs/03_Architecture.md)
4. [Application Flow](docs/04_App_Flow.md)
5. [UI Design Brief](docs/05_UI_Design_Brief.md)
6. [Protocol and Data Schema](docs/06_Protocol_and_Data_Schema.md)
7. [Implementation Plan](docs/07_Implementation.md)
8. [Security](docs/08_Security.md)
9. [Testing](docs/09_Testing.md)
10. [Development Log](docs/10_Development_Log.md)

Significant architectural decisions belong in [ADR/](ADR/README.md).

## Reusing this repository

1. Enable **Template repository** under GitHub Settings → General.
2. Use **Use this template → Create a new repository** for each project.
3. Rename the project, update this README, and replace placeholders in `docs/`.
4. Keep the React/FastAPI scaffold only when it suits the project. Remove unused layers rather than preserving dead boilerplate.
5. Review the MIT license and replace it if the new project requires different licensing.
6. Commit `frontend/package-lock.json` after installing dependencies for reproducible npm installs.
7. Update CI, security policy, deployment, and environment configuration to match the new project's actual requirements.

## Important defaults

- No database, authentication provider, or cloud backend is included. Add them only when requirements justify them.
- The sample health endpoint is not a production readiness or security check.
- CORS is configured for local development by default. Set explicit production origins before deployment.
- The MIT license is a default choice. Confirm it matches the licensing needs of each project.

## Contributing and security

See [CONTRIBUTING.md](CONTRIBUTING.md) and [SECURITY.md](SECURITY.md).
