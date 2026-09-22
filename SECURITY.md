# Security policy

Never commit API keys, access tokens, customer contact data, payment identifiers, database exports, or private client assets.

Use environment variables locally and the deployment provider's secret manager in production. If sensitive data is discovered in this repository, remove it from the working tree and rotate the credential immediately.
