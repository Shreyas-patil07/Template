# Product Requirements Document (PRD)

> **Status:** Draft  
> **Owner:** [OWNER]  
> **Last updated:** [YYYY-MM-DD]  
> **Version:** [VERSION]

## 1. Overview

**Product name:** [PROJECT NAME]  
**One-line description:** [WHAT IT DOES]  
**Product type:** [APPLICATION / PLATFORM / LIBRARY / SYSTEM / RESEARCH]

## 2. Problem statement

- **Problem:** [WHAT IS BROKEN, MISSING, OR TOO COSTLY?]
- **Who experiences it:** [TARGET USERS / STAKEHOLDERS]
- **Current alternatives:** [HOW IS IT SOLVED TODAY?]
- **Why those alternatives are insufficient:** [EVIDENCE]

## 3. Goals and non-goals

### Goals
- [G-01] [MEASURABLE OUTCOME]

### Non-goals
- [NG-01] [EXPLICITLY OUT OF SCOPE]

## 4. Users and use cases

| User / stakeholder | Need | Context | Priority |
|---|---|---|---|
| [USER TYPE] | [NEED] | [CONTEXT] | [P0/P1/P2] |

### Primary use cases
1. [USER] wants to [ACTION] so that [OUTCOME].
2. [USER] wants to [ACTION] so that [OUTCOME].

## 5. Scope

### Minimum viable scope
- [FEATURE / CAPABILITY]

### Later scope
- [DEFERRED CAPABILITY]

### Out of scope
- [EXCLUDED CAPABILITY]

## 6. Functional requirements

Give every requirement a stable ID. Requirements should describe observable behaviour, not implementation choices.

| ID | Requirement | Priority | Acceptance condition |
|---|---|---|---|
| FR-001 | [SYSTEM SHALL...] | [MUST/SHOULD/MAY] | [VERIFIABLE CONDITION] |

## 7. Non-functional requirements

| ID | Quality attribute | Target / constraint | Verification |
|---|---|---|---|
| NFR-001 | Performance | [TARGET + CONDITIONS] | [TEST / MEASUREMENT] |
| NFR-002 | Reliability | [TARGET + CONDITIONS] | [TEST / MEASUREMENT] |
| NFR-003 | Privacy | [REQUIREMENT] | [REVIEW / TEST] |
| NFR-004 | Accessibility | [REQUIREMENT, IF APPLICABLE] | [AUDIT / TEST] |

## 8. Success metrics

| Metric | Baseline | Target | Measurement method | Evaluation window |
|---|---:|---:|---|---|
| [METRIC] | [VALUE] | [VALUE] | [METHOD] | [WINDOW] |

## 9. Constraints and dependencies

- **Business / time / budget:** [CONSTRAINTS]
- **Platform / hardware:** [CONSTRAINTS]
- **External dependencies:** [DEPENDENCIES]
- **Assumptions:** [ASSUMPTIONS TO VALIDATE]

## 10. Risks and open questions

| ID | Risk / question | Impact | Mitigation / next action | Owner |
|---|---|---|---|---|
| R-001 | [DESCRIPTION] | [H/M/L] | [ACTION] | [OWNER] |

## 11. Release acceptance

The release is acceptable when:
- [REQUIRED OUTCOME]
- [CRITICAL REQUIREMENTS VERIFIED]
- [KNOWN LIMITATIONS DOCUMENTED]

## 12. Traceability

Link requirements to architecture, protocol/schema, implementation milestones, and tests. The requirements table above remains the authoritative requirements list.

- Architecture: [../03_Architecture.md](03_Architecture.md)
- Testing: [../09_Testing.md](09_Testing.md)
