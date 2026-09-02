# Threat Model

## System boundary

The public repository contains a static React documentation website. It renders authored content in a browser and links to official external documentation. It does not receive target URLs, execute the companion CLI, store API keys, or proxy Shodan, HIBP, or AI requests.

The companion CLI is a separate local Kali artifact. It may make outbound requests only when an operator explicitly enables authorized checks and provides optional provider credentials. The CLI’s security boundary is therefore the operator’s machine, shell environment, network resolver, HTTP client, and report directory.

## Assets

| Asset | Security property |
|---|---|
| Provider credentials | Confidentiality; never exposed in source or reports |
| Target URLs and host metadata | Controlled disclosure; only assessed with permission |
| Generated JSON reports | Integrity and controlled sharing |
| Website source and CI configuration | Integrity and supply-chain trust |
| Contributor accounts and GitHub tokens | Account security and least privilege |

## Threats and mitigations

| Threat | Mitigation |
|---|---|
| A visitor mistakes documentation for authorization to scan someone else | Repeated explicit-use boundaries, scope language, and a dedicated security policy |
| A target redirects a scanner toward an internal service | Companion CLI blocks automatic redirect following and gates private addresses |
| Credentials enter Git history or shell-visible source | Environment-variable examples use placeholders; secret scanning and push protection are expected on GitHub |
| A contributor adds exploitative or uncontrolled scanning | Pull-request review requires a scope analysis, bounded defaults, safe tests, and data-egress documentation |
| A compromised dependency affects the site build | Frozen-lockfile CI, dependency audit, Dependabot, and CodeQL |
| Reports expose infrastructure or personal information | Documentation instructs operators to redact and share only with authorized recipients |
| AI summary invents a finding or creates offensive guidance | The companion workflow sends structured evidence, labels summaries as advisory, and restricts output to remediation-oriented guidance |

## Residual risk

No static website or documentation policy can prevent misuse of copied commands, compromised contributor accounts, or vulnerable dependencies with absolute certainty. Repository owners should retain branch protection, require review for workflow changes, enable two-factor authentication, and rotate credentials if they are ever exposed.
