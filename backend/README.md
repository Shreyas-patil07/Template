# Backend

FastAPI service using Pydantic Settings and Uvicorn.

## Setup

```bash
python -m venv .venv
source .venv/bin/activate
python -m pip install --upgrade pip
pip install -e ".[dev]"
cp .env.example .env
uvicorn app.main:app --reload
```

On Windows PowerShell, activate with `.venv\Scripts\Activate.ps1` and copy the environment file with `Copy-Item .env.example .env`.

## Endpoints

- `GET /api/v1/health`: basic process health response.
- `GET /docs`: interactive OpenAPI documentation.
- `GET /openapi.json`: generated API schema.

## Quality checks

```bash
ruff check .
ruff format --check .
pytest
```

Add project-specific routers under `app/api/routes/`, shared configuration under `app/core/`, and tests under `tests/`. Keep business logic out of route handlers as the codebase grows.
