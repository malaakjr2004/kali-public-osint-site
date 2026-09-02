# Contributing

Thank you for helping improve Kali Public OSINT. The project values clear security communication, accessible documentation, and narrowly scoped defensive behavior over feature volume.

## Before opening a pull request

Read [`SECURITY.md`](SECURITY.md) and [`THREAT_MODEL.md`](THREAT_MODEL.md). Do not include real targets, real email addresses, API keys, cookies, tokens, private reports, or personal data in issues, examples, screenshots, fixtures, or commits.

For website changes, keep the Field Notes / Signal Map visual language consistent: calm technical editorial hierarchy, signal-lime used intentionally, readable command surfaces, and strong responsive behavior. For CLI documentation changes, preserve the distinction between observations, hypotheses, and verified findings.

## Security-sensitive changes

Any new reconnaissance or provider behavior must document its authorization boundary, default scope, network requests, rate limits, redirect behavior, private-address handling, and failure modes. The default path should remain passive or bounded. Do not add exploitation, brute force, credential testing, uncontrolled crawling, evasion, or exact-person tracking.

## Local checks

Run the following before submitting a pull request:

```bash
pnpm install --frozen-lockfile
pnpm check
pnpm build
pnpm audit --prod --audit-level=high
```

Keep commits focused and explain user-visible or security-relevant behavior in the pull-request description. Review the rendered website at desktop and mobile widths when changing layout.

## Pull requests

A good pull request explains the problem, the chosen solution, affected files, validation performed, and any remaining limitations. Maintainers may request changes when a proposal increases data collection, weakens scope controls, or introduces a dependency without a clear benefit.
