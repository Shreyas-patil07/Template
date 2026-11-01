# Technical Requirements Document (TRD)

> **Status:** Draft  
> **Owner:** [OWNER]  
> **Last updated:** [YYYY-MM-DD]  
> **Version:** [VERSION]

## 1. Technical overview

Summarise the engineering approach and the constraints that shape it. Do not repeat the product rationale from the PRD.

## 2. Platform and runtime constraints

| Area | Requirement / constraint | Rationale | Verification |
|---|---|---|---|
| Client platforms | [OS / VERSION / DEVICE] | [WHY] | [HOW VERIFIED] |
| Server / runtime | [RUNTIME / VERSION] | [WHY] | [HOW VERIFIED] |
| Hardware | [CPU / MEMORY / SENSORS / ETC.] | [WHY] | [HOW VERIFIED] |
| Network | [TRANSPORT / BANDWIDTH / LATENCY] | [WHY] | [HOW VERIFIED] |
| Offline operation | [REQUIREMENT] | [WHY] | [HOW VERIFIED] |

## 3. Technology decisions

| Layer | Selected technology | Version / range | Purpose | Alternatives / rationale |
|---|---|---|---|---|
| [LAYER] | [TECHNOLOGY] | [VERSION] | [PURPOSE] | [RATIONALE] |

Mark unvalidated choices as **Proposed**. Major architectural trade-offs belong in [ADR/](../ADR/README.md).

## 4. External dependencies and APIs

| Dependency | Version / API | Used for | Failure behaviour | Licence / constraints |
|---|---|---|---|---|
| [DEPENDENCY] | [VERSION] | [PURPOSE] | [FALLBACK] | [NOTES] |

## 5. Engineering constraints

- **Latency / throughput:** [TARGETS AND CONDITIONS]
- **Resource limits:** [CPU / RAM / STORAGE / BATTERY]
- **Compatibility:** [SUPPORTED ENVIRONMENTS]
- **Scalability:** [EXPECTED LOAD / SCALE]
- **Maintainability:** [RELEVANT CONSTRAINTS]

## 6. Build, tooling, and delivery

- Languages and SDKs: [DETAILS]
- Build system: [DETAILS]
- Package management: [DETAILS]
- CI checks: [DETAILS]
- Release / deployment targets: [DETAILS]

## 7. Code conventions

- Follow the language's established formatter and linter.
- Keep modules cohesive and interfaces explicit.
- Prefer clear names and small, testable units.
- Validate untrusted inputs at boundaries.
- Handle errors explicitly; do not silently swallow failures.
- Keep configuration separate from source code.
- Do not commit secrets or environment-specific credentials.
- Add comments for non-obvious decisions, not line-by-line narration.

**Project-specific rules:** [FORMATTER / LINTER / NAMING / MODULE RULES]

## 8. Technical risks and unresolved decisions

| Topic | Current position | Confidence | Validation / decision required |
|---|---|---|---|
| [TOPIC] | [POSITION] | [HIGH/MEDIUM/LOW] | [NEXT ACTION] |

## 9. Links

- Product requirements: [01_PRD.md](01_PRD.md)
- Architecture: [03_Architecture.md](03_Architecture.md)
- Decisions: [../ADR/README.md](../ADR/README.md)
