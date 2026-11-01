# Project Documentation Template

A reusable documentation foundation for software, systems, research, and engineering projects.

This repository is intended to be used as a GitHub repository template. Each new project should copy the structure, then tailor the documents to its actual scope and architecture.

## Documentation principles

1. **One source of truth:** each fact has one authoritative home.
2. **Right-sized documentation:** keep the core set; add specialist documents only when complexity justifies them.
3. **Evidence over assumptions:** label decisions, hypotheses, constraints, and verified behaviour distinctly.
4. **Architecture before implementation:** resolve major system boundaries and interfaces before building dependent components.
5. **Measurable verification:** requirements and design claims should map to tests or other evidence.
6. **Keep docs current:** update documentation in the same change that alters behaviour, interfaces, constraints, or decisions.

## Standard documentation set

| File | Responsibility |
|---|---|
| `01_PRD.md` | Product/problem definition, users, scope, requirements, success metrics |
| `02_TRD.md` | Technical constraints, technology choices, platform/runtime requirements |
| `03_Architecture.md` | System context, components, deployment/runtime views, key flows |
| `04_App_Flow.md` | User journeys, states, transitions, error and recovery flows |
| `05_UI_Design_Brief.md` | UX principles, screen inventory, interaction and accessibility specifications |
| `06_Protocol_and_Data_Schema.md` | API/message contracts, schemas, events, persistence model if applicable |
| `07_Implementation.md` | Development phases, dependencies, milestones, exit criteria |
| `08_Security.md` | Threat model, trust boundaries, identity, permissions, data protection |
| `09_Testing.md` | Test strategy, acceptance criteria, performance/reliability validation |
| `10_Development_Log.md` | Chronological progress notes and links to meaningful changes |

Architecture Decision Records live in `ADR/`. Start with `ADR/README.md` and create one numbered record per significant decision.

## Start a new project

1. Use **Use this template** on GitHub, or clone this repository and create a new repository.
2. Replace all `[PLACEHOLDER]` values and remove guidance that does not apply.
3. Write the PRD first; agree on scope and measurable outcomes.
4. Record technical constraints and choices in the TRD.
5. Design the architecture and document consequential trade-offs as ADRs.
6. Define protocol/data contracts before implementing components that depend on them.
7. Add app flows and UI specifications only where the project has a user-facing interface.
8. Define security and test strategy early, not after implementation.
9. Build the implementation roadmap from dependencies and acceptance criteria.
10. Keep the development log concise; link commits, PRs, issues, experiments, and ADRs rather than duplicating them.

## Tailor the template

- **No backend/database:** explicitly state that in the protocol/data schema document; describe local or ephemeral state only if relevant. Do not invent a database.
- **No UI:** mark the UI/app-flow documents as not applicable with a short rationale, or replace them with operator/workflow specifications.
- **Research project:** adapt PRD to research objectives and hypotheses; include methodology, reproducibility, datasets, and limitations in TRD/Testing or add a focused research methodology document.
- **Small project:** retain only the documents that add value; link to the relevant section in another document rather than copying content.

## Repository conventions

- Keep numbered core filenames stable for predictable navigation.
- Use relative links between documents.
- Use ISO dates (`YYYY-MM-DD`) in logs and ADR metadata.
- Use `TBD` only with an owner or next action; otherwise state the uncertainty explicitly.
- Never commit secrets, private credentials, or real personal data.
- Avoid duplicating requirements, schemas, and decisions across files.

## Suggested workflow

For a significant change:
1. Update the owning document.
2. Update or create an ADR if a decision changes.
3. Update impacted interfaces, flows, implementation steps, and tests.
4. Include documentation changes in the same pull request as the implementation where practical.

See [CONTRIBUTING.md](CONTRIBUTING.md) for review expectations.
