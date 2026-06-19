import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CircuitBoard,
  Github,
  Globe,
  Handshake,
  Hammer,
  Radar,
  Users,
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

const githubUrl = "https://github.com/Don-Works";
const mcplexerUrl = "https://github.com/Don-Works/mcplexer";
const brwUrl = "https://github.com/Don-Works/brw";
const siteRepoUrl = "https://github.com/Don-Works/donworks.co.uk";
const revittUrl =
  "https://revitt.co/?utm_source=donworks.co.uk&utm_medium=referral&utm_campaign=don_works_open_source";

const products: ProductItem[] = [
  {
    label: "mcplexer",
    title: "MCPlexer",
    meta: "agent gateway for MCP tools",
    body: "The gateway every Revitt agent runs through. It decides which tools an agent can reach based on the folder you're working in, keeps your secrets out of the model, asks before anything risky, and keeps a record of every call. A bit like direnv, but for AI tools.",
    icon: CircuitBoard,
    href: mcplexerUrl,
    action: "View MCPlexer",
  },
  {
    label: "brw",
    title: "Brw",
    meta: "a real browser for AI agents",
    body: "Brw drives a real, visible Chrome window so an agent can work on the actual web — signed-in tabs, real clicks and forms, and a check after every step that what it tried to do actually happened.",
    icon: Radar,
    href: brwUrl,
    action: "View Brw",
  },
  {
    label: "next",
    title: "More on the way",
    meta: "the rest of the bench",
    body: "We build a lot of tooling at Revitt to keep our own work running. As each piece proves itself, we open it up here. Everything lives on GitHub, so you can watch the next ones land.",
    icon: Globe,
    href: githubUrl,
    action: "Don Works on GitHub",
  },
];

const ethos: PanelItem[] = [
  {
    label: "people",
    title: "We start with people",
    body: "Every tool here exists because it made someone's actual work easier — ours, a client's, or both. We build for the person doing the job, not for a demo or a screenshot.",
    icon: Users,
  },
  {
    label: "tools",
    title: "We build things that work",
    body: "These aren't experiments we threw over the wall. They're the tools we run our own delivery on, every day, with the rough edges sanded down because we have to live with them too.",
    icon: Hammer,
  },
  {
    label: "open",
    title: "We share so it gets better",
    body: "Good tools go stale when you keep them to yourself. Open them up and people find the bugs, the missing pieces, and the better ideas you'd never have had on your own. We'd rather build in the open and get there faster.",
    icon: Handshake,
  },
];

const facts = [
  ["from", "Revitt"],
  ["licence", "AGPL-3.0"],
  ["cost", "free & open"],
  ["source", "GitHub"],
];

const footerGroups = [
  {
    title: "Tools",
    links: [
      ["MCPlexer", mcplexerUrl],
      ["Brw", brwUrl],
    ],
  },
  {
    title: "Revitt",
    links: [
      ["Revitt", `${revittUrl}&utm_content=footer_revitt`],
      ["Don Works on GitHub", githubUrl],
    ],
  },
  {
    title: "Source",
    links: [
      ["This site's code", siteRepoUrl],
      ["llms.txt", "/llms.txt"],
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
          <span className="brand-wordmark">DON WORKS</span>
        </Link>
        <nav className="main-nav" aria-label="Main navigation">
          <a href="#tools">Tools</a>
          <a href="#why">Why</a>
          <a href="#contribute">Contribute</a>
          <Link href={githubUrl} target="_blank" rel="noopener noreferrer">
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
              <h1 className="hero-title">Don Works</h1>
              <p className="hero-lede">
                Don Works is where we open up the tools we build at Revitt. We
                make them to do our own work properly, and when one turns out to
                be useful beyond our own projects, we share it here for anyone to
                pick up and run with. It starts with MCPlexer and Brw, and it
                grows as we open up more.
              </p>
              <div className="hero-actions">
                <Link
                  href={mcplexerUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button button-primary"
                >
                  <Github aria-hidden="true" />
                  MCPlexer
                </Link>
                <Link href={brwUrl} target="_blank" rel="noopener noreferrer" className="button button-secondary">
                  <Radar aria-hidden="true" />
                  Brw
                </Link>
              </div>
            </div>

            <aside className="hero-console" aria-label="About Don Works">
              <div className="asset-frame">
                <Image
                  src="/hero-control-panel.png"
                  alt="Abstract control panel with acid-lime indicators, the Don Works visual mark"
                  fill
                  priority
                  sizes="(min-width: 1024px) 44vw, 92vw"
                />
                <div className="asset-readout" aria-hidden="true">
                  <span>DON WORKS</span>
                  <span>OPEN SOURCE</span>
                </div>
              </div>
              <dl className="facts-grid">
                {facts.map(([term, detail]) => (
                  <div key={term}>
                    <dt>{term}</dt>
                    <dd>{detail}</dd>
                  </div>
                ))}
              </dl>
            </aside>
          </div>
        </section>

        <section id="tools" className="section section-alt">
          <div className="section-inner">
            <div className="section-header">
              <p className="section-kicker">what&apos;s here</p>
              <h2>The tools we use, opened up</h2>
              <p>
                Everything here is something we built to get our own work done,
                then decided was worth sharing. Right now that&apos;s MCPlexer
                and Brw. We&apos;ll keep adding to it as more of our internal
                tools prove useful enough to hand over.
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
                  <Link href={item.href} target="_blank" rel="noopener noreferrer" className="panel-link">
                    {item.action}
                    <ArrowRight aria-hidden="true" />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="why" className="section">
          <div className="section-inner split-layout">
            <div className="section-header section-header-sticky">
              <p className="section-kicker">why we do this</p>
              <h2>We look after people, and we build tools</h2>
              <p>
                That&apos;s the whole idea behind Revitt, and it&apos;s the whole
                idea behind Don Works. We&apos;d rather not be the kind of shop
                that keeps everything locked away and cut off from everyone else.
                Good tools get better when more people use them, poke at them,
                and send fixes back — so we open up the ones we think can help.
              </p>
            </div>
            <div className="stacked-panels">
              {ethos.map(({ icon: Icon, ...item }) => (
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

        <section id="contribute" className="section section-band">
          <div className="section-inner closing-shell">
            <div>
              <p className="section-kicker">contributing</p>
              <h2>Use it, build on it, send the good bits back</h2>
              <p>
                Don Works is released under the AGPL-3.0 licence. In plain terms:
                you can use these tools, change them, and build on them however
                you like, for free. The one thing we ask is that if you improve
                them, you share those improvements back — even if you&apos;re
                running a changed version as a service. That way everyone&apos;s
                copy keeps getting better instead of quietly forking off into a
                dozen private versions. If that doesn&apos;t fit how your
                business works,{" "}
                <Link
                  href={`${revittUrl}&utm_content=contribute_commercial`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  talk to us at Revitt
                </Link>{" "}
                about a commercial licence — that&apos;s one of the ways the open
                work and the paid work look after each other.
              </p>
            </div>
            <Link
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="button button-secondary"
            >
              <Github aria-hidden="true" />
              Browse the code
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
              <p>Open-source tools from Revitt — the ones we think might help you too.</p>
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
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
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
          <span>Made by Revitt · open for everyone</span>
        </div>
      </footer>
    </>
  );
}
