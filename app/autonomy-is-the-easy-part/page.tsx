import type { Metadata } from "next";
import Link from "next/link";
import { ReadingProgress, ShareButton } from "../components/ArticleTools";
import { SiteFooter, SiteHeader } from "../components/SiteChrome";
import { post, sections, trustLayers } from "../content/post";

export const metadata: Metadata = {
  title: post.title,
  description: post.description,
  alternates: { canonical: `/${post.slug}` },
  openGraph: {
    type: "article",
    title: post.title,
    description: post.description,
    publishedTime: post.dateIso,
    url: `/${post.slug}`,
  },
};

export default function ArticlePage() {
  return (
    <main className="site-shell article-page">
      <ReadingProgress />
      <SiteHeader />

      <article>
        <header className="article-hero">
          <Link className="back-link" href="/"><span aria-hidden="true">&lt;-</span> All writing</Link>
          <p className="eyebrow">Field note 01 / {post.category}</p>
          <h1>{post.title}</h1>
          <p className="article-dek">{post.description}</p>
          <div className="article-byline">
            <div className="author-mark" aria-hidden="true">AC</div>
            <div><strong>AgentCorp</strong><span>Editorial</span></div>
            <div className="byline-meta">
              <time dateTime={post.dateIso}>{post.date}</time>
              <span>{post.readingTime}</span>
            </div>
          </div>
        </header>

        <div className="article-layout">
          <aside className="article-sidebar" aria-label="Article navigation">
            <p>In this essay</p>
            <nav>
              {sections.map((section) => (
                <a href={`#${section.id}`} key={section.id}>{section.shortTitle}</a>
              ))}
            </nav>
            <ShareButton />
          </aside>

          <div className="article-content">
            <section className="article-section opening">
              <p>There's a quiet thing that happens after a founder buys their first AI agent.</p>
              <p>They give it something small. A draft. A summary. A task that doesn't really matter. And then they stop. Not because the agent failed, because the next thing on the list is the sales pipeline, or the books, or a reply to their biggest customer, and no sane operator hands that to software they met last week.</p>
              <p>The agent can do the work. The operator just won't let it.</p>
              <p>That gap, between what an agent is capable of and what you're actually willing to let it touch, is the real story of AI in 2026. And almost nobody is building for it.</p>
            </section>

            <blockquote className="pull-quote">
              The gate is what lets you delegate without abdicating: to hand over the doing while keeping the deciding.
            </blockquote>

            {sections.map((section) => (
              <section className="article-section" id={section.id} key={section.id}>
                <h2>{section.heading}</h2>
                {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </section>
            ))}

            <section className="trust-system" aria-label="How the approval gate works">
              <p className="eyebrow">The approval gate</p>
              <h2>Autonomy that earns its way forward.</h2>
              <div className="trust-layers">
                {trustLayers.map(([number, label, description]) => (
                  <div className="trust-layer" key={label}>
                    <span>{number}</span>
                    <h3>{label}</h3>
                    <p>{description}</p>
                  </div>
                ))}
              </div>
            </section>

            <footer className="article-end">
              <p className="eyebrow">Continue the conversation</p>
              <h2>See what trustworthy autonomy looks like in practice.</h2>
              <a href="https://agentcorp.work">Meet Alex <span aria-hidden="true">-&gt;</span></a>
            </footer>
          </div>
        </div>
      </article>

      <SiteFooter />
    </main>
  );
}
