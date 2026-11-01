# Protocol and Data Schema

> **Status:** Draft  
> **Owner:** [OWNER]  
> **Last updated:** [YYYY-MM-DD]  
> **Protocol / schema version:** [VERSION OR N/A]

## 1. Scope and applicability

Describe the information exchanged between components and any persistent or transient data structures.

If the system has no backend, network protocol, or persistent database, say so explicitly. This document can still define local domain models, file formats, IPC messages, or device-to-device messages. Do not create artificial database tables.

## 2. Communication topology

| Producer | Consumer | Channel / transport | Direction | Delivery / ordering expectations |
|---|---|---|---|---|
| [PRODUCER] | [CONSUMER] | [TRANSPORT] | [UNI / BI] | [GUARANTEE / LIMITATION] |

## 3. Message and API contracts

For each interface, document:

### [INTERFACE / MESSAGE NAME]

- **Purpose:** [PURPOSE]
- **Producer / consumer:** [COMPONENTS]
- **Transport:** [TRANSPORT]
- **Versioning:** [COMPATIBILITY RULE]
- **Authentication / integrity:** [CONTROL]
- **Timeout / retry:** [POLICY]
- **Ordering / idempotency:** [RULE]

| Field | Type | Required | Constraints | Meaning |
|---|---|---:|---|---|
| [FIELD] | [TYPE] | [YES/NO] | [RULE] | [DESCRIPTION] |

Example payload:

```json
{
  "type": "example.event",
  "version": 1,
  "message_id": "example-id"
}
```

## 4. Domain models

| Entity / model | Fields | Owner | Lifetime | Validation |
|---|---|---|---|---|
| [MODEL] | [FIELDS] | [OWNER] | [LIFETIME] | [RULES] |

## 5. Persistence model (only if applicable)

| Store | Data | Data owner | Retention | Encryption / access |
|---|---|---|---|---|
| [STORE OR N/A] | [DATA] | [OWNER] | [POLICY] | [CONTROL] |

Describe migrations, backup, restore, deletion, and offline behaviour where relevant.

## 6. Error model

| Error code / class | Meaning | Retryable | Recovery |
|---|---|---:|---|
| [ERROR] | [MEANING] | [YES/NO] | [ACTION] |

## 7. Compatibility and versioning

Define compatibility across app versions, devices, clients, and stored data. Describe how unknown fields and unsupported versions are handled.

## 8. Data lifecycle and privacy

Document collection, processing, storage, sharing, retention, export, and deletion. Link to [08_Security.md](08_Security.md).

## 9. Contract verification

List schema validation, protocol integration tests, compatibility tests, and test fixtures. Link to [09_Testing.md](09_Testing.md).
