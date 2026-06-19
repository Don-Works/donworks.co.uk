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
  Wrench,
  type LucideIcon,
} from "lucide-react";

type PanelItem = {
  label: string;
  title: string;
  body: string;
  icon: LucideIcon;
};

type ProductItem = PanelItem & {
  href: string;
  meta: string;
  action: string;
};

const buildNotes: PanelItem[] = [
  {
    label: "runtime",
    title: "MCPlexer runs the harness",
    body: "Tasks, skills, memory, Telegram updates, browser control, routed MCP tools, and audit all sit behind one operating layer.",
    icon: Wrench,
  },
  {
    label: "browser",
    title: "Brw works in real tabs",
    body: "It finds logged-in Chrome tabs, reads awkward dashboards, clicks through vendor flows, and verifies the result without pretending the web is clean.",
    icon: Blocks,
  },
  {
    label: "ops",
    title: "Website launch skills",
    body: "Cloudflare, Vercel, and 123-reg notes capture the weird bits: hidden tabs, stale refs, nameserver panels, Domain Connect, and final DNS checks.",
    icon: ShieldCheck,
  },
];

const githubUrl = "https://github.com/Don-Works";
const mcplexerUrl = "https://github.com/Don-Works/mcplexer";
const brwUrl = "https://github.com/Don-Works/brw";
const siteRepoUrl = "https://github.com/Don-Works/donworks.co.uk";
const revittUrl =
  "https://revitt.co/?utm_source=donworks.co.uk&utm_medium=referral&utm_campaign=don_works_open_source";

const products: ProductItem[] = [
  {
    label: "mcpx",
    title: "MCPlexer",
    meta: "agent runtime / MCP gateway",
    body: "The control plane Revitt uses for serious agent work: task state, skills, memory, secret-safe tool calls, browser automation, and routed MCP access.",
    icon: CircuitBoard,
    href: mcplexerUrl,
    action: "Open MCPlexer",
  },
  {
    label: "brw",
    title: "Brw",
    meta: "browser automation for AI harnesses",
    body: "Chrome automation that works where launches actually happen: logged-in tabs, semantic actions, screenshots, stale refs, and outcome checks.",
    icon: Radar,
    href: brwUrl,
    action: "Open Brw",
  },
  {
    label: "site",
    title: "donworks.co.uk",
    meta: "public landing page / launch notes",
    body: "This site, the launch path, and the first website-ops skill pack for Cloudflare, Vercel, and 123-reg setup runs.",
    icon: Route,
    href: siteRepoUrl,
    action: "Open site repo",
  },
];

const telemetry = [
  ["scope", "public product bench"],
  ["parent", "revitt.co"],
  ["surface", "MCPlexer / Brw / skills"],
  ["stance", "ship the tool and the runbook"],
];

const footerGroups = [
  {
    title: "Products",
    links: [
      ["MCPlexer", mcplexerUrl],
      ["Brw", brwUrl],
      ["Site repo", siteRepoUrl],
    ],
  },
  {
    title: "Revitt",
    links: [
      ["Revitt", `${revittUrl}&utm_content=footer_revitt`],
      ["Don Works GitHub", githubUrl],
    ],
  },
  {
    title: "Protocol",
    links: [
      ["LLM index", "/llms.txt"],
      ["Source", siteRepoUrl],
    ],
  },
];

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
          <a href="#release-bay">Products</a>
          <a href="#principles">Built</a>
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
                Revitt&apos;s public bench for MCPlexer, Brw, and the small
                operating skills that make agents useful in logged-in, messy
                accounts.
              </p>
              <div className="hero-actions">
                <Link
                  href={mcplexerUrl}
                  target="_blank"
                  className="button button-primary"
                >
                  <Github aria-hidden="true" />
                  MCPlexer repo
                </Link>
                <Link href={brwUrl} target="_blank" className="button button-secondary">
                  <Radar aria-hidden="true" />
                  Brw repo
                </Link>
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
              <p className="section-kicker">products</p>
              <h2>Concrete tools, not a vibe.</h2>
              <p>
                The first Don Works drop is the operating layer Revitt uses
                while building systems: MCPlexer for routed tools and state,
                Brw for browser work, and the launch notes that make the next
                run faster.
              </p>
            </div>
            <div className="panel-grid">
              {products.map(({ icon: Icon, ...item }) => (
                <article key={item.title} className="info-panel">
                  <div className="panel-topline">
                    <span>{item.label}</span>
                    <Icon aria-hidden="true" />
                  </div>
                  <p className="panel-meta">{item.meta}</p>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                  <Link href={item.href} target="_blank" className="panel-link">
                    {item.action}
                    <ArrowRight aria-hidden="true" />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="principles" className="section">
          <div className="section-inner split-layout">
            <div className="section-header section-header-sticky">
              <p className="section-kicker">built here</p>
              <h2>Products with the rough edges included.</h2>
              <p>
                Don Works should read like a bench with real parts on it:
                product repos, launch notes, and the weird operational details
                that usually get lost.
              </p>
            </div>
            <div className="stacked-panels">
              {buildNotes.map(({ icon: Icon, ...item }) => (
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
                MCPlexer gives agents a serious operating layer. Brw gives
                harnesses the browser automation they need for real accounts,
                real tabs, and real verification loops. The repos are public;
                the runbooks follow the work.
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
        <div className="footer-inner">
          <div className="footer-brand">
            <span className="footer-mark" aria-hidden="true">
              DW
            </span>
            <div>
              <span>DON WORKS</span>
              <p>Open-source products and launch notes from Revitt.</p>
            </div>
          </div>
          <nav className="footer-nav" aria-label="Footer navigation">
            {footerGroups.map((group) => (
              <div key={group.title}>
                <h2>{group.title}</h2>
                {group.links.map(([label, href]) => (
                  <Link
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                  >
                    {label}
                  </Link>
                ))}
              </div>
            ))}
          </nav>
        </div>
        <div className="footer-bottom">
          <span>revitt.co / donworks.co.uk</span>
          <span>MCPlexer + Brw are the first public drops.</span>
        </div>
      </footer>
    </>
  );
}
