# Contributing

## Before opening a pull request

- Keep changes focused and explain the reasoning.
- Update the document that owns any changed requirement, interface, or architectural decision.
- Add or update tests for changed behaviour.
- Run the relevant frontend/backend checks.
- Update environment examples when configuration changes.
- Never commit secrets, credentials, private keys, or real personal data.
- Link related issues and ADRs.

## Frontend checks

From `frontend/`:

```bash
npm run lint
npm run typecheck
npm run test
npm run build
```

## Backend checks

From `backend/`:

```bash
ruff check .
ruff format --check .
pytest
```

## Documentation conventions

See [README.md](README.md) for the repository structure and [docs/](docs/) for the documentation system. Keep each fact in one authoritative place. Distinguish confirmed behaviour from assumptions and proposals.
