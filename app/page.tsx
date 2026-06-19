import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Blocks,
  CircuitBoard,
  Github,
  Radar,
  Route,
  ShieldCheck,
  Sparkles,
  TerminalSquare,
  Wrench,
  type LucideIcon,
} from "lucide-react";

type PanelItem = {
  label: string;
  title: string;
  body: string;
  icon: LucideIcon;
};

const principles: PanelItem[] = [
  {
    label: "01",
    title: "Useful before impressive",
    body: "Small tools, direct docs, and fewer moving parts. The point is work that survives contact with production.",
    icon: Wrench,
  },
  {
    label: "02",
    title: "Open where it helps",
    body: "Release the parts that improve the common operating layer: skills, launch notes, MCP utilities, and boring glue.",
    icon: Blocks,
  },
  {
    label: "03",
    title: "Guardrails included",
    body: "Examples and defaults should respect scope, audit, secrets, approval points, and the odd edges of real accounts.",
    icon: ShieldCheck,
  },
];

const releases: PanelItem[] = [
  {
    label: "mcpx",
    title: "MCPlexer",
    body: "A cross-harness MCP gateway for agents that need tasks, memory, skills, browser control, audit, approvals, and routed tool access.",
    icon: CircuitBoard,
  },
  {
    label: "brw",
    title: "Brw",
    body: "Ass-kicking browser automation for AI harnesses: visible Chrome control, semantic actions, page reads, and practical verification loops.",
    icon: Radar,
  },
  {
    label: "next",
    title: "Brw companion skills",
    body: "Terse Cloudflare, Vercel, and 123-reg exception rules that complement Brw: odd markup, hard clicks, and verification states.",
    icon: Route,
  },
];

const telemetry = [
  ["scope", "open source arm"],
  ["parent", "revitt.co"],
  ["surface", "MCPlexer / Brw / skills"],
  ["stance", "ship small, document the sharp bits"],
];

const githubUrl = "https://github.com/Don-Works";
const revittUrl =
  "https://revitt.co/?utm_source=donworks.co.uk&utm_medium=referral&utm_campaign=don_works_open_source";

export default function HomePage() {
  return (
    <>
      <header className="site-header">
        <Link href="/" className="brand-lockup" aria-label="Don Works home">
          <span className="brand-mark" aria-hidden="true">
            DW
          </span>
          <span className="brand-wordmark" data-text="DON WORKS">
            DON WORKS
          </span>
        </Link>
        <nav className="main-nav" aria-label="Main navigation">
          <a href="#release-bay">Release bay</a>
          <a href="#principles">Principles</a>
          <a href="#signal">Signal</a>
          <Link href={githubUrl} target="_blank">
            GitHub
          </Link>
        </nav>
      </header>

      <main id="main">
        <section className="hero-section">
          <div className="hero-grid-upright" aria-hidden="true" />
          <div className="hero-grid-plane" aria-hidden="true" />
          <div className="scanlines" aria-hidden="true" />

          <div className="hero-shell">
            <div className="hero-copy">
              <p className="eyebrow">
                <span aria-hidden="true" />
                open source by Revitt
              </p>
              <h1 className="hero-title" data-text="Don Works">
                Don Works
              </h1>
              <p className="hero-lede">
                Home of MCPlexer and Brw: practical open-source infrastructure
                for AI agents, browser automation, and awkward real-world
                systems.
              </p>
              <div className="hero-actions">
                <Link
                  href={githubUrl}
                  target="_blank"
                  className="button button-primary"
                >
                  <Github aria-hidden="true" />
                  View source
                </Link>
                <a href="#release-bay" className="button button-secondary">
                  <Radar aria-hidden="true" />
                  Scan releases
                </a>
              </div>
            </div>

            <aside className="hero-console" aria-label="Don Works control panel">
              <div className="asset-frame">
                <Image
                  src="/hero-control-panel.png"
                  alt="Abstract square control panel with acid-lime indicators and red hardware accents"
                  fill
                  priority
                  sizes="(min-width: 1024px) 44vw, 92vw"
                />
                <div className="asset-readout" aria-hidden="true">
                  <span>DW-OS</span>
                  <span>ARM / OPEN</span>
                </div>
              </div>
              <dl className="telemetry-grid">
                {telemetry.map(([term, detail]) => (
                  <div key={term}>
                    <dt>{term}</dt>
                    <dd>{detail}</dd>
                  </div>
                ))}
              </dl>
            </aside>
          </div>
        </section>

        <section id="release-bay" className="section section-alt">
          <div className="section-inner">
            <div className="section-header">
              <p className="section-kicker">release bay</p>
              <h2>Open, small, and built from live work.</h2>
              <p>
                Don Works is where Revitt publishes the reusable pieces that
                fall out of client delivery, internal toolbuilding, and agent
                infrastructure work.
              </p>
            </div>
            <div className="panel-grid">
              {releases.map(({ icon: Icon, ...item }) => (
                <article key={item.title} className="info-panel">
                  <div className="panel-topline">
                    <span>{item.label}</span>
                    <Icon aria-hidden="true" />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="principles" className="section">
          <div className="section-inner split-layout">
            <div className="section-header section-header-sticky">
              <p className="section-kicker">operating rules</p>
              <h2>Less theatre. More repeatable work.</h2>
              <p>
                The style is hard-edged and technical because the work is:
                launch systems, document exceptions, keep the boundary visible.
              </p>
            </div>
            <div className="stacked-panels">
              {principles.map(({ icon: Icon, ...item }) => (
                <article key={item.title} className="wide-panel">
                  <span>{item.label}</span>
                  <div>
                    <Icon aria-hidden="true" />
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="signal" className="section section-band">
          <div className="section-inner signal-shell">
            <div>
              <p className="section-kicker">signal</p>
              <h2>First drop: MCPlexer and Brw.</h2>
              <p>
                MCPlexer gives agents a serious operating layer. Brw gives AI
                harnesses the browser automation they keep needing in real
                accounts, real tabs, and real verification loops.
              </p>
            </div>
            <Link
              href={`${revittUrl}&utm_content=signal_cta`}
              target="_blank"
              className="button button-secondary"
            >
              Revitt
              <ArrowRight aria-hidden="true" />
            </Link>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div>
          <span>DON WORKS</span>
          <p>Open-source by Revitt. Built for the sharp edges.</p>
        </div>
        <div className="footer-links">
          <Link href={`${revittUrl}&utm_content=footer`} target="_blank">
            Revitt
          </Link>
          <Link href={githubUrl} target="_blank">
            GitHub
          </Link>
          <Link href="/llms.txt">
            LLM index
          </Link>
        </div>
        <TerminalSquare className="footer-glyph" aria-hidden="true" />
        <Sparkles className="footer-spark" aria-hidden="true" />
      </footer>
    </>
  );
}
