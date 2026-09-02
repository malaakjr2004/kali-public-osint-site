# Kali Public OSINT

> A calm, evidence-first field guide and documentation site for authorized public OSINT and non-destructive web assessment.

## What this repository is

This repository contains the React website for the Kali Public OSINT field guide. The site turns the companion Kali Linux CLI workflow into a readable, navigable reference: installation, identifier analysis, passive-first web reconnaissance, optional Shodan and Have I Been Pwned enrichment, AI-assisted evidence summaries, report handling, and troubleshooting.

The repository is intentionally documentation-led. The website explains an authorized assessment workflow; it is not an exploitation framework and it does not contain a backend for scanning arbitrary users or targets.

## Security posture

The supported workflow is deliberately bounded:

| Allowed capability | Explicitly excluded |
|---|---|
| Public DNS, HTTP, TLS, header, cookie, and well-known-file observations | Exploitation, payload delivery, fuzzing, or injection testing |
| Bounded TCP connect checks for an authorized asset | Brute force, credential testing, or authentication bypass |
| Optional provider enrichment using the operator’s own credentials | Private-data acquisition, deanonymization, or exact-person location tracking |
| Evidence-based remediation summaries | Automated form submission or uncontrolled crawling |

Use the tool and documentation only on systems and identifiers you own or have explicit permission to assess. A missing header, exposed service, provider result, or AI-generated suggestion is an observation to verify—not proof of a vulnerability.

## Website development

The project uses React, TypeScript, Vite, Tailwind CSS, and the repository’s shared UI primitives. The page is a static frontend with no application database, authentication layer, or server-side scan endpoint.

```bash
pnpm install
pnpm dev
```

Open the local URL printed by Vite. For a production build:

```bash
pnpm check
pnpm build
```

The site uses project-lifecycle asset URLs for its generated visual identity. Do not move those media files into `client/public` or commit large binary assets without a deliberate review.

## Repository map

| Path | Responsibility |
|---|---|
| `client/src/pages/Home.tsx` | Main field-guide experience and interactive documentation sections |
| `client/src/index.css` | Field Notes / Signal Map design system and responsive layout |
| `client/src/components/ui/` | Shared accessible UI primitives from the project template |
| `ideas.md` | Chosen visual direction and design decisions |
| `INSTALL_GUIDE.md` | Full Kali Linux CLI installation and operations reference |
| `.github/` | Issue templates, contribution guidance, and dependency update configuration |
| `SECURITY.md` | Vulnerability reporting and supported security posture |
| `THREAT_MODEL.md` | Assets, trust boundaries, abuse cases, and mitigations |

## Companion CLI workflow

The companion CLI is distributed separately as `kali_public_osint.zip`. A typical Kali setup is:

```bash
sudo apt update
sudo apt install -y python3 python3-venv python3-pip unzip ca-certificates
unzip kali_public_osint.zip
cd kali_public_osint
chmod +x install.sh
./install.sh
source .venv/bin/activate
kali-public-osint --help
```

Start web assessment in passive mode:

```bash
kali-public-osint webscan https://your-site.example \
  --authorized \
  --no-ports \
  --json \
  --output report.json
```

A private or loopback target requires an explicit, authorized `--allow-private` acknowledgement. Keep port checks narrow and use a specific list when possible:

```bash
kali-public-osint webscan http://127.0.0.1:8080 \
  --authorized \
  --allow-private \
  --ports 8080
```

Read [`INSTALL_GUIDE.md`](INSTALL_GUIDE.md) for transfer methods, provider keys, AI configuration, testing, troubleshooting, and report sharing.

## External providers

Shodan and Have I Been Pwned are optional. API keys belong in environment variables and must never be committed:

```bash
export SHODAN_API_KEY='your-key'
export HIBP_API_KEY='your-key'
export OPENAI_API_KEY='your-key'
```

Provider terms, rate limits, authorization requirements, and data handling obligations remain the operator’s responsibility. The website does not proxy these services.

## Quality and security checks

Run TypeScript validation, the production build, and a production dependency audit before merging. Dependabot monitors npm dependencies. GitHub’s secret scanning, push protection, and CodeQL analysis should remain enabled on the public repository when available to the repository owner.

Run the local checks before opening a pull request:

```bash
pnpm check
pnpm build
pnpm audit --prod --audit-level=high
```

## Contributing

Read [`CONTRIBUTING.md`](CONTRIBUTING.md) before opening a pull request. Contributions should improve clarity, accessibility, correctness, or defensive safety. New scanning behavior must include an explicit scope analysis, a bounded default, offline tests where possible, and documentation of what data leaves the machine.

Do not open a public issue for a suspected security vulnerability. Follow [`SECURITY.md`](SECURITY.md) instead.

## License

This project is released under the MIT License. See [`LICENSE`](LICENSE).

## References

The project’s security guidance is informed by the [OWASP Web Security Testing Guide](https://owasp.org/www-project-web-security-testing-guide/) and the official [Shodan API documentation](https://developer.shodan.io/api) and [Have I Been Pwned API documentation](https://haveibeenpwned.com/API/V3). These references describe external services and testing concepts; they do not expand this project’s supported scope.
