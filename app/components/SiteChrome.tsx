import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="topbar">
      <Link className="brand" href="/" aria-label="AgentCorp Blog home">
        <span className="brand-mark" aria-hidden="true" />
        <span>AgentCorp</span>
        <span className="brand-divider" aria-hidden="true" />
        <span className="brand-section">Blog</span>
      </Link>
      <nav className="nav-links" aria-label="Main navigation">
        <a href="https://agentcorp.work">Product</a>
        <a href="https://agentcorp.work/#company">Company</a>
        <Link aria-current="page" href="/">Blog</Link>
        <a className="nav-cta" href="https://agentcorp.work/#get-started">Get started</a>
      </nav>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div>
        <a className="brand footer-brand" href="https://agentcorp.work">
          <span className="brand-mark" aria-hidden="true" />
          <span>AgentCorp</span>
        </a>
        <p>An AI workforce you operate through one conversation.</p>
      </div>
      <nav aria-label="Footer navigation">
        <Link href="/">Blog</Link>
        <a href="https://agentcorp.work">Product</a>
        <a href="https://agentcorp.work/#company">Company</a>
      </nav>
      <p className="copyright">AgentCorp / 2026</p>
    </footer>
  );
}
