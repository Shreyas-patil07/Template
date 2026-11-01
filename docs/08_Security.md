# Security and Privacy Design

> **Status:** Draft  
> **Owner:** [OWNER / SECURITY CONTACT]  
> **Last updated:** [YYYY-MM-DD]

## 1. Security objectives and scope

State the assets, security objectives, privacy requirements, and components in scope.

## 2. Assets and trust boundaries

| Asset | Why it matters | Classification | Protection requirement |
|---|---|---|---|
| [ASSET] | [IMPACT] | [PUBLIC / INTERNAL / SENSITIVE] | [CONTROL] |

Identify trust boundaries between users, devices, processes, networks, services, and storage.

## 3. Threat model

Use a lightweight STRIDE or equivalent threat analysis. Focus on realistic threats for this system.

| Threat | Affected asset / boundary | Likelihood | Impact | Mitigation | Residual risk |
|---|---|---|---|---|---|
| Spoofing | [BOUNDARY] | [H/M/L] | [H/M/L] | [CONTROL] | [RISK] |
| Tampering | [BOUNDARY] | [H/M/L] | [H/M/L] | [CONTROL] | [RISK] |
| Information disclosure | [BOUNDARY] | [H/M/L] | [H/M/L] | [CONTROL] | [RISK] |
| Denial of service | [BOUNDARY] | [H/M/L] | [H/M/L] | [CONTROL] | [RISK] |

## 4. Identity, authentication, and authorization

Document identity establishment, session membership, permissions, revocation, and privilege boundaries. If there is no user account system, explain how peers or operators are trusted.

## 5. Network and communication security

- Transport protection: [TLS / LOCAL LINK PROTECTION / N/A + RATIONALE]
- Peer discovery and trust: [DESIGN]
- Message integrity and replay resistance: [DESIGN]
- Rate limiting / abuse protection: [DESIGN]
- Network exposure: [LISTENERS / PORTS / FIREWALL]

Do not equate a local network with a trusted network.

## 6. Data protection and privacy

- Data minimisation: [DATA NOT NEEDED SHOULD NOT BE COLLECTED]
- Encryption at rest: [REQUIREMENT OR RATIONALE FOR N/A]
- Secrets management: [METHOD]
- Logging and telemetry: [REDACTION / CONSENT / RETENTION]
- Retention and deletion: [POLICY]
- User consent and permissions: [POLICY]

## 7. Platform and supply-chain security

Document OS permissions, dependency review, pinned versions, build integrity, signing, update mechanisms, and vulnerability handling.

## 8. Security verification

| Control | Verification method | Acceptance condition |
|---|---|---|
| [CONTROL] | [TEST / REVIEW] | [PASS CONDITION] |

## 9. Incident response

Define reporting, triage, containment, remediation, disclosure, and credential/session revocation appropriate to project scale.

## 10. Open security questions

| Question | Owner | Next action | Due date |
|---|---|---|---|
| [QUESTION] | [OWNER] | [ACTION] | [DATE] |
