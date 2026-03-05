# AWS Infrastructure Notes

Target services:
- Cognito (authentication)
- Lambda + API Gateway (backend)
- RDS (primary relational DB)
- S3 (assets, uploads)

Recommendation:
- Start as modular monolith.
- Split into microservices after clear scaling bottlenecks.
