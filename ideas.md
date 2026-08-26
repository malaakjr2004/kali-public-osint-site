# Kali Public OSINT — Website Design Directions

## Approach 1
**Theme Name:** Command Deck

**Very Brief Intro:** A high-clarity operations manual styled like a calm, technical control surface: pale paper, disciplined type, and terminal-inspired code cards. It is designed to make security guidance feel useful rather than theatrical.

**Probability:** 0.06

## Approach 2
**Theme Name:** Field Notes / Signal Map

**Very Brief Intro:** An editorial field-guide experience that combines annotated documentation with abstract network cartography. It emphasizes trustworthy process, progressive disclosure, and a sense of carefully organized intelligence.

**Probability:** 0.08

## Approach 3
**Theme Name:** Archive Room

**Very Brief Intro:** A tactile archival layout with index tabs, restrained ink colors, and structured evidence cards. It turns a technical guide into a durable reference document.

**Probability:** 0.04

## Chosen Approach — Field Notes / Signal Map

**Design Movement:** Contemporary technical editorial design with Swiss typographic discipline and cartographic information design.

**Core Principles:** First, every important action must be easy to locate, copy, and understand at a glance. Second, the page should visually separate passive, authorized, and optional API capabilities without sounding alarmist. Third, editorial hierarchy must lead the eye from the quick start to deeper configuration rather than presenting an undifferentiated wall of documentation. Fourth, decorative material must behave as a navigational and conceptual aid, never as cyberpunk ornament.

**Color Philosophy:** The page uses a warm near-white canvas as the trusted field paper, deep graphite for the primary reading layer, slate blue for system structure, and signal lime as the ownable action color. The lime appears only at moments of confirmation, copy affordances, and safety state—not as a flood fill—so the interface feels considered rather than noisy.

**Layout Paradigm:** An asymmetric document shell: a wide reading column is paired with a narrow, sticky “route map” rail on desktop. The hero is a tilted signal-map panel rather than a centered marketing block. Tutorial content follows a stepped path of numbered “stations,” while detailed reference content lives in a later accordion and troubleshooting matrix.

**Signature Elements:** A small translucent grid-and-orbit map behind the hero; station-number diamonds that mark the install journey; dark terminal strips with a left-side command-state pill. These recur consistently from overview through API setup.

**Interaction Philosophy:** Users should be able to move from orientation to execution with one decisive click. Copy buttons provide immediate feedback; the route rail highlights the current section; accordions expand only for dense material. All interactions remain brisk, keyboard accessible, and secondary to reading.

**Animation:** In normal motion contexts, hero map layers drift only a few pixels over 10–14 seconds. Section elements use short 180–240ms opacity/transform entrances. Buttons compress slightly on press, code-copy feedback resolves in under 160ms, and the route rail moves with a 180ms eased transition. Reduced-motion users receive no ambient drift and instant state changes.

**Typography System:** Use `Space Grotesk` for headings, navigation, and compact labels; use `IBM Plex Sans` for documentation prose; use `IBM Plex Mono` for commands and metadata. Headings use tight tracking and strong scale jumps; body copy remains calm at a generous line length; code never shares a font with interface labels.

**Brand Essence:** A trustworthy Kali Linux field guide for authorized OSINT and careful web assessment, built for people who need to go from download to defensible workflow without unnecessary complexity. **Disciplined, legible, grounded.**

**Brand Voice:** Headlines are direct, operational, and calm; CTAs use action verbs and explain the outcome; microcopy makes safety constraints specific rather than vague. Examples: “Start with a passive check.” and “Keep the scope narrow. Keep the evidence useful.” Generic filler such as “Welcome to our website” and “Get started today” is banned.

**Wordmark & Logo:** A geometric “signal lock” mark: a simplified offset square field with one clipped orbit line and a central protected dot, suggesting a bounded assessment. It is paired with a custom uppercase wordmark treatment using Space Grotesk with a widened tracking rhythm—not a default-font logo.

**Signature Brand Color:** **Signal Lime — #C8F35A**.

## Style Decisions

- Use dark, low-key generated imagery only as the hero’s framed visual panel; all overlaid text must remain outside the image or be set in high-contrast light ink.
- Avoid gradients that read as generic technology marketing. Use layered paper, transparent grids, and restrained halo texture instead.
- Do not claim that findings are confirmed vulnerabilities; retain the guide’s language about observations, authorization, and non-destructive checks.
- Imagery outside the hero should favor abstract signal maps, scoped-route diagrams, evidence artifacts, and annotated document fragments; avoid generic device, desk, or cybersecurity stock photography.
- The signal-map system must recur on every major section through route lines, station diamonds, bounded-map geometry, or evidence-card notation so decoration also functions as navigation.
- The Kali Public OSINT wordmark should always use the custom tracked uppercase treatment with the signal-lock mark; never present the brand as plain text in a default header style.
