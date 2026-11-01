# Architecture Decision Records

Use this directory to record significant technical and architectural decisions that are expensive to reverse or materially affect system structure, security, performance, compatibility, or operations.

## When to create an ADR

Create an ADR when a decision:
- Selects or rejects a major technology, protocol, storage model, or deployment topology.
- Establishes a component boundary or ownership model.
- Changes a security or trust assumption.
- Resolves a meaningful performance, reliability, or compatibility trade-off.

Do not create ADRs for routine implementation details.

## Naming

Use sequential numbers and a short kebab-case title:

`0001-use-local-peer-discovery.md`

Never reuse an ADR number. Supersede a decision with a new ADR; do not rewrite history to hide the earlier decision.

## Lifecycle

- **Proposed:** under discussion.
- **Accepted:** chosen and active.
- **Rejected:** considered but not selected.
- **Superseded:** replaced by a later ADR.

## Records

- [ADR template](0000-template.md)
