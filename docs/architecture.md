# Architecture Decision - Initial Phase

## Decision
Use **Modular Monolith** as phase 1 architecture.

## Why
- Faster delivery for diploma-to-product transition.
- Lower operational complexity on AWS.
- Easier transactional consistency around auth/courses/payments.

## Exit criteria for microservices
Move selected modules to independent services when:
- distinct scaling requirements emerge,
- team ownership boundaries stabilize,
- deployment cadence differs significantly per module.
