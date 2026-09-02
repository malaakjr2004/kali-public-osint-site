# Security Policy

## Supported versions

Security fixes are applied to the latest `main` branch and the latest published website checkpoint. This repository is a static documentation site; it does not accept target URLs or API credentials at runtime.

## Reporting a suspected vulnerability

Please do **not** disclose suspected vulnerabilities in a public issue, pull request, or discussion. Use GitHub’s private vulnerability reporting feature for this repository when available. If that channel is unavailable, contact the repository owner through the private contact method shown on the GitHub profile and include `Kali Public OSINT security report` in the subject.

Reports should include a concise description, affected path or commit, reproducible steps, impact, and a safe proof of concept that does not access private data or harm a system. Redact API keys, personal information, cookies, tokens, and target infrastructure details before sending.

## Scope

The website scope includes client-side content, build configuration, dependency usage, documentation, and repository automation. The following are not security vulnerabilities in this project by themselves: the absence of an active scan endpoint, the absence of exact-location capability, expected public documentation text, or a provider API response described by the companion CLI.

The companion CLI is designed for authorized, non-destructive checks. Reports about misuse of the CLI should include enough evidence to reproduce the behavior safely and must not include stolen credentials or private records.

## Response expectations

The maintainers will acknowledge a credible private report when practical, reproduce it in an isolated environment, determine affected versions, and publish a fix or mitigation when appropriate. Do not expect guaranteed response times or acceptance of reports that require exploitation of third-party systems.

## Secrets

Never commit provider credentials, personal access tokens, private keys, cookies, generated reports containing sensitive infrastructure data, or local environment files. Use environment variables locally and GitHub Actions secrets in automation.
