import Link from "next/link";
import { SiteFooter, SiteHeader } from "./components/SiteChrome";
import { post } from "./content/post";

export default function BlogHome() {
  return (
    <main className="site-shell">
      <SiteHeader />

      <section className="blog-hero">
        <p className="eyebrow">Ideas for the agentic company</p>
        <h1>AgentCorp Blog</h1>
        <p className="blog-hero-copy">
          Field notes on building an AI workforce operators can trust with the
          work that actually matters.
        </p>
      </section>

      <section className="featured-wrap" aria-labelledby="featured-title">
        <div className="featured-label">
          <span>Featured essay</span>
          <span>01</span>
        </div>

        <Link className="featured-post" href={`/${post.slug}`}>
          <div className="featured-copy">
            <div className="post-details" aria-label="Post details">
              <span>{post.category}</span>
              <time dateTime={post.dateIso}>{post.date}</time>
              <span>{post.readingTime}</span>
            </div>
            <h2 id="featured-title">{post.title}</h2>
            <p>{post.description}</p>
            <span className="text-link">Read the essay <span aria-hidden="true">-&gt;</span></span>
          </div>

          <div className="featured-signal" aria-hidden="true">
            <span className="signal-kicker">The operator stays in control</span>
            <div className="signal-flow">
              <span>Propose</span>
              <i />
              <span>Approve</span>
              <i />
              <span>Act</span>
            </div>
            <p>Autonomy earns its way forward.</p>
          </div>
        </Link>
      </section>

      <section className="latest-wrap" aria-labelledby="latest-title">
        <div className="section-heading">
          <p className="eyebrow">The index</p>
          <h2 id="latest-title">Latest writing</h2>
        </div>

        <Link className="post-list-item" href={`/${post.slug}`}>
          <span className="post-index">01</span>
          <div>
            <div className="post-details">
              <span>{post.category}</span>
              <time dateTime={post.dateIso}>{post.date}</time>
            </div>
            <h3>{post.title}</h3>
            <p>{post.description}</p>
          </div>
          <span className="post-list-action" aria-hidden="true">{post.readingTime} <b>-&gt;</b></span>
        </Link>
      </section>

      <section className="home-cta" aria-label="About AgentCorp">
        <div>
          <p className="eyebrow">Beyond the writing</p>
          <h2>Meet the workforce behind the thesis.</h2>
        </div>
        <a href="https://agentcorp.work">Explore AgentCorp <span aria-hidden="true">-&gt;</span></a>
      </section>

      <SiteFooter />
    </main>
  );
}
