/**
 * Design philosophy: Field Notes / Signal Map — calm technical editorial design,
 * asymmetric navigation, graphite terminal surfaces, and restrained signal-lime actions.
 */
import { useEffect, useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  ArrowUpRight,
  Check,
  ChevronRight,
  Clipboard,
  FileJson,
  KeyRound,
  Network,
  Radar,
  Search,
  ShieldCheck,
  Terminal,
  Wrench,
} from "lucide-react";

const NAV_ITEMS = [
  ["Quick start", "install"],
  ["Web assessment", "assessment"],
  ["Integrations", "integrations"],
  ["Troubleshooting", "troubleshooting"],
] as const;

const INSTALL_COMMAND = `sudo apt update
sudo apt install -y python3 python3-venv python3-pip unzip ca-certificates
cd ~/Downloads
unzip kali_public_osint.zip
cd kali_public_osint
chmod +x install.sh
./install.sh
source .venv/bin/activate`;

const PASSIVE_COMMAND = `kali-public-osint webscan https://your-site.example \\
  --authorized \\
  --no-ports`;

const PORT_COMMAND = `kali-public-osint webscan https://your-site.example \\
  --authorized \\
  --ports 80,443,8080,8443 \\
  --json \\
  --output reports/assessment.json`;

function jumpTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function CommandBlock({ command, label, id }: { command: string; label: string; id: string }) {
  const [copied, setCopied] = useState(false);

  async function copyCommand() {
    try {
      await navigator.clipboard.writeText(command);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div className="terminal-panel group">
      <div className="terminal-bar">
        <div className="flex items-center gap-2">
          <span className="terminal-dot bg-[#c8f35a]" />
          <span className="terminal-dot bg-white/20" />
          <span className="terminal-dot bg-white/10" />
          <span className="ml-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/45">{label}</span>
        </div>
        <button aria-label={`Copy ${label}`} onClick={copyCommand} className="copy-button">
          {copied ? <Check size={14} /> : <Clipboard size={14} />}
          <span>{copied ? "Copied" : "Copy"}</span>
        </button>
      </div>
      <pre id={id} className="terminal-code"><code>{command}</code></pre>
    </div>
  );
}

function FeatureCard({ icon, title, text, kicker }: { icon: React.ReactNode; title: string; text: string; kicker: string }) {
  return (
    <article className="feature-card">
      <div className="flex items-start justify-between gap-4">
        <div className="feature-icon">{icon}</div>
        <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">{kicker}</span>
      </div>
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  );
}

function SectionHeading({ eyebrow, title, detail }: { eyebrow: string; title: string; detail: string }) {
  return (
    <div className="section-heading">
      <span className="eyebrow"><span className="eyebrow-dot" />{eyebrow}</span>
      <h2>{title}</h2>
      <p>{detail}</p>
    </div>
  );
}

export default function Home() {
  const [activeSection, setActiveSection] = useState("install");

  useEffect(() => {
    const sections = NAV_ITEMS.map(([, id]) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible?.target.id) setActiveSection(visible.target.id);
      },
      { rootMargin: "-25% 0px -62% 0px" },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#f4f4ef] text-[#17202b]">
      <header className="site-header">
        <div className="header-inner">
          <button onClick={() => jumpTo("top")} className="brand-mark" aria-label="Back to the top">
            <img src="/manus-storage/kali-osint-signal-lock_bd178023.png" alt="Kali Public OSINT signal lock mark" />
            <span><b>KALI PUBLIC</b><em>OSINT FIELD SYSTEM</em></span>
          </button>
          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
            {NAV_ITEMS.map(([label, id]) => (
              <button key={id} onClick={() => jumpTo(id)} className="nav-link">{label}</button>
            ))}
          </nav>
          <button className="header-action" onClick={() => jumpTo("install")}>Open field guide <ArrowUpRight size={15} /></button>
        </div>
      </header>

      <main id="top">
        <section className="hero-shell">
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-content">
            <div className="hero-copy">
              <div className="hero-identity"><img src="/manus-storage/kali-osint-signal-lock_bd178023.png" alt="" /><span>KALI PUBLIC OSINT <i>— FIELD SYSTEM / 01</i></span></div>
              <span className="eyebrow text-[#c8f35a]"><span className="eyebrow-dot bg-[#c8f35a]" />Kali Linux field guide</span>
              <h1>Move from download to a <i>defensible</i> workflow.</h1>
              <p>Install and operate Kali Public OSINT with a clear, authorized path for identifier checks, non-destructive web assessment, API enrichment, and evidence-ready reports.</p>
              <div className="hero-actions">
                <Button onClick={() => jumpTo("install")} className="lime-button">Start the quick setup <ChevronRight size={17} /></Button>
                <button className="text-button" onClick={() => jumpTo("assessment")}>View assessment scope <ArrowUpRight size={16} /></button>
              </div>
              <div className="hero-meta">
                <span><ShieldCheck size={16} />Authorized checks only</span>
                <span><FileJson size={16} />JSON-first reporting</span>
                <span><Terminal size={16} />Kali-ready CLI</span>
              </div>
            </div>
            <div className="hero-art-wrap">
              <div className="hero-art-frame">
                <img src="/manus-storage/kali-osint-hero_4cfd0b3a.png" alt="Editorial illustration of a technical field notebook and terminal with a signal map" />
              </div>
              <div className="art-caption"><span className="caption-dot" />Bounded assessment route <span>01 / 04</span></div>
            </div>
          </div>
        </section>

        <section className="capability-strip" aria-label="Tool capabilities">
          <div><span className="strip-index">01</span><b>Identifier analysis</b><p>Email, phone, username, and domain context.</p></div>
          <div><span className="strip-index">02</span><b>Web reconnaissance</b><p>DNS, HTTP, TLS, headers, and bounded ports.</p></div>
          <div><span className="strip-index">03</span><b>Evidence enrichment</b><p>Optional Shodan, HIBP, and AI summaries.</p></div>
        </section>

        <div className="document-shell">
          <aside className="route-rail" aria-label="Guide sections">
            <p>Route map</p>
            <div className="rail-map" aria-hidden="true"><span className="rail-orbit" /><span className="rail-node one" /><span className="rail-node two" /><span className="rail-node three" /></div>
            <ol>
              {NAV_ITEMS.map(([label, id], index) => (
                <li key={id} className={activeSection === id ? "active" : ""}>
                  <button onClick={() => jumpTo(id)}><span>0{index + 1}</span>{label}</button>
                </li>
              ))}
            </ol>
            <div className="rail-note"><span className="caption-dot" />Keep the scope narrow. Keep the evidence useful.</div>
          </aside>

          <div className="document-content">
            <section id="install" className="document-section scroll-mt-28">
              <SectionHeading eyebrow="Station 01 — Installation" title="Set up the tool without touching your system Python." detail="A local virtual environment keeps the package isolated, repeatable, and easy to remove. Run the system packages once, then install the project inside its own workspace." />
              <div className="install-layout">
                <div>
                  <div className="station-label"><span>1</span>Before you begin</div>
                  <div className="prose-note">
                    <p>Use a current 64-bit Kali installation with network access for optional public checks. Run the CLI as your normal user; root is needed only for the operating-system packages.</p>
                    <div className="inline-safety"><ShieldCheck size={18} />The installer creates <code>.venv</code>; do not install the project globally.</div>
                  </div>
                </div>
                <div className="setup-route-visual" aria-label="Installation route diagram">
                  <div className="route-title"><span className="caption-dot" />Setup route / bounded workspace</div>
                  <div className="route-path"><span className="route-stop active">01<em>packages</em></span><span className="route-stop">02<em>archive</em></span><span className="route-stop active">03<em>venv</em></span><span className="route-stop">04<em>ready</em></span></div>
                  <div className="route-evidence"><span>LOCAL ONLY</span><span>NO GLOBAL PIP</span><span>CLI READY</span></div>
                </div>
              </div>
              <CommandBlock id="install-command" label="Kali setup" command={INSTALL_COMMAND} />
              <div className="activate-row">
                <span className="station-label"><span>2</span>Every new terminal</span>
                <code>cd ~/Downloads/kali_public_osint &amp;&amp; source .venv/bin/activate</code>
              </div>
              <div className="feature-grid mt-7">
                <FeatureCard icon={<Terminal size={22} />} kicker="Local" title="Identifier mode" text="Run offline parsing first, then authorize selected public lookups only when you have a valid reason and scope." />
                <FeatureCard icon={<Search size={22} />} kicker="Scoped" title="Webscan mode" text="Start with a passive route, then add a bounded port list when an active connect check is appropriate." />
                <FeatureCard icon={<FileJson size={22} />} kicker="Portable" title="JSON output" text="Write reports to a dedicated folder so the underlying evidence can be reviewed or shared with authorized teams." />
              </div>
            </section>

            <section id="assessment" className="document-section scroll-mt-28">
              <SectionHeading eyebrow="Station 02 — Authorized assessment" title="Start passive. Expand only when the scope calls for it." detail="The web scanner observes configuration and response metadata. Its findings are hardening signals, not proof that a system is vulnerable." />
              <div className="assessment-panel">
                <div className="assessment-panel-copy">
                  <span className="eyebrow text-[#c8f35a]"><span className="eyebrow-dot bg-[#c8f35a]" />Passive-first route</span>
                  <h3>Reconnaissance without exploitation.</h3>
                  <p>DNS records, HTTP metadata, TLS certificate details, response headers, cookie attributes, and well-known files are collected in a bounded, transparent workflow.</p>
                  <ul>
                    <li><Check size={16} />No form submission or authentication attempts</li>
                    <li><Check size={16} />No fuzzing, brute force, or injection payloads</li>
                    <li><Check size={16} />No automatic redirect following into private targets</li>
                  </ul>
                </div>
                <img src="/manus-storage/kali-osint-assessment-station_4515ab4f.png" alt="Abstract authorized web assessment route map" />
              </div>
              <div className="command-stack">
                <CommandBlock id="passive-command" label="Recommended first pass" command={PASSIVE_COMMAND} />
                <CommandBlock id="ports-command" label="Bounded TCP check" command={PORT_COMMAND} />
              </div>
              <div className="scope-callout">
                <Network size={20} />
                <div><b>Internal staging asset?</b><p>Private and loopback targets are rejected by default. Use <code>--allow-private</code> only for an internal system that you own or are explicitly authorized to assess.</p></div>
              </div>
            </section>

            <section id="integrations" className="document-section scroll-mt-28">
              <SectionHeading eyebrow="Station 03 — Optional enrichment" title="Add external context without hiding what leaves your machine." detail="Every provider is opt-in. Environment variables keep API keys out of command history and report output." />
              <Accordion type="single" collapsible className="integration-accordion">
                <AccordionItem value="shodan">
                  <AccordionTrigger><span className="integration-title"><Radar size={18} />Shodan — indexed host context</span></AccordionTrigger>
                  <AccordionContent>
                    <p>Use InternetDB for a public indexed overview of resolved IPs, or provide <code>SHODAN_API_KEY</code> for the authenticated host endpoint. The report labels the provider data separately from local observations.</p>
                    <CommandBlock id="shodan-command" label="InternetDB query" command={`kali-public-osint webscan https://your-site.example \\
  --authorized --no-ports --shodan --json \\
  --output report-shodan.json`} />
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="hibp">
                  <AccordionTrigger><span className="integration-title"><KeyRound size={18} />HIBP — authorized exposure checks</span></AccordionTrigger>
                  <AccordionContent>
                    <p>Set <code>HIBP_API_KEY</code> in your shell, then check an email you are authorized to assess or a domain that has been verified with HIBP. The explicit email flow sends the normalized address to HIBP.</p>
                    <CommandBlock id="hibp-command" label="Authorized HIBP email check" command={`export HIBP_API_KEY='your-key'
kali-public-osint webscan https://your-site.example \\
  --authorized --no-ports \\
  --hibp-email security@your-site.example`} />
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="ai">
                  <AccordionTrigger><span className="integration-title"><Wrench size={18} />AI — evidence-first remediation summary</span></AccordionTrigger>
                  <AccordionContent>
                    <p>Install the optional AI extra and set an OpenAI-compatible key. The summary receives structured findings, is asked to cite evidence, and is instructed not to invent vulnerabilities or produce exploit instructions.</p>
                    <CommandBlock id="ai-command" label="Optional AI summary" command={`python -m pip install -e '.[ai]'
export OPENAI_API_KEY='your-key'
kali-public-osint webscan https://your-site.example \\
  --authorized --no-ports --ai-summary`} />
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </section>

            <section id="troubleshooting" className="document-section scroll-mt-28">
              <SectionHeading eyebrow="Station 04 — Keep moving" title="Short fixes for common setup and scope issues." detail="Use the narrowest correction first. A scanner error is evidence to investigate, not a confirmed vulnerability finding." />
              <div className="troubleshoot-table" role="table" aria-label="Troubleshooting guide">
                <div className="tr-head" role="row"><span>Signal</span><span>What to do next</span></div>
                {[
                  ["kali-public-osint: command not found", "Activate the virtual environment: source .venv/bin/activate."],
                  ["externally-managed-environment", "Use ./install.sh; Kali protects the system Python environment."],
                  ["Network check refuses to run", "Add --authorized, or use --no-network for offline identifier analysis."],
                  ["Private target rejected", "For your own internal asset only, add --allow-private."],
                  ["Shodan / HIBP key missing", "Export SHODAN_API_KEY or HIBP_API_KEY in the current shell, never in the command itself."],
                  ["AI summary disabled", "Install the optional .[ai] extra and configure OPENAI_API_KEY."],
                ].map(([signal, response]) => <div className="tr-row" role="row" key={signal}><span role="cell">{signal}</span><span role="cell">{response}</span></div>)}
              </div>
              <div className="reporting-card">
                <div><span className="eyebrow"><span className="eyebrow-dot" />Report handling</span><h3>Share the conclusion, not unnecessary infrastructure detail.</h3></div>
                <p>JSON reports can contain hostnames, IPs, response headers, DNS records, and provider results. Treat them as sensitive operational material and share them only with approved owners or teams.</p>
              </div>
            </section>
          </div>
        </div>
      </main>

      <footer className="site-footer">
        <div className="footer-brand"><img src="/manus-storage/kali-osint-signal-lock_bd178023.png" alt="" /><span>KALI PUBLIC OSINT</span></div>
        <p>Built as a clear field guide for authorized, non-destructive security work.</p>
        <div className="footer-links"><a href="https://developer.shodan.io/api" target="_blank" rel="noreferrer">Shodan docs <ArrowUpRight size={13} /></a><a href="https://haveibeenpwned.com/API/V3" target="_blank" rel="noreferrer">HIBP docs <ArrowUpRight size={13} /></a><a href="https://owasp.org/www-project-web-security-testing-guide/" target="_blank" rel="noreferrer">OWASP WSTG <ArrowUpRight size={13} /></a></div>
      </footer>
    </div>
  );
}
