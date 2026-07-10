const sections = [
  {
    heading: "The capability problem is mostly solved. The trust problem isn't.",
    paragraphs: [
      "For two years the bottleneck was the model. Could it reason, could it use tools, could it string ten steps together without falling over. That fight is largely over. The models are good enough. The bottleneck moved, and most of the industry hasn't noticed it leave.",
      "Walk through the pitches and they rhyme: the agent does it for you. It writes the email, runs the campaign, reconciles the ledger, works the pipeline. Pure convenience. It's a good pitch. It's also saturated, and it's the easiest thing in the world to copy. Anyone with API access and a weekend can ship an agent that does X.",
      "Here's the part the convenience pitch skips: the work you most want off your plate is exactly the work you trust least to a black box. The low-stakes busywork is safe to automate and barely worth automating. The high-stakes work, money, customers, commitments made in your name, is worth real money to delegate and feels reckless to hand over. So you end up with agents doing trivia, or you babysit them through everything important. Either way, you don't have a workforce. You have an expensive intern you can't stop watching.",
    ],
  },
  {
    heading: "Trust isn't a vibe. It's an architecture.",
    paragraphs: [
      "You don't earn an operator's trust with a confident tone or a friendlier interface. You earn it structurally, or you don't earn it at all.",
      "The mechanism we built AgentCorp around is simple to describe and hard to retrofit: every consequential action is proposed, fully inspectable, and waits for your yes. Riley, the finance agent, does not move money. Riley proposes moving money, reconcile these 47 transactions, flag these 3, and then stops, and waits. You approve, you edit, or you hold. Sam doesn't fire off outreach in your name; Sam shows you what it's about to send. Nothing that matters happens without a human decision at the moment it counts.",
      "We call it the approval gate, and it is not friction bolted onto autonomy. It is the thing that makes autonomy usable in the first place. The gate is what lets you delegate without abdicating, to hand over the doing while keeping the deciding. Remove it and you're left with the same choice every other agent product forces: trust it blindly, or don't trust it at all.",
    ],
  },
  {
    heading: "Isn't that just friction?",
    paragraphs: [
      "It's the fair objection, so let's take it head-on.",
      "For trivial tasks, yes, friction loses. If a thing doesn't matter, the last thing you want is a permission prompt, and the frictionless agent wins that work every time. We're not interested in winning that work.",
      "The valuable delegation is the high-stakes kind, and there the binding constraint was never the agent's ability. It's your willingness to let go. A frictionless agent you can't trust with anything that matters isn't a hire, it's a toy with good marketing. The gate is what moves an agent from toy to workforce, because it's what makes you comfortable enough to actually let it operate.",
      "And the gate is not static. It learns what you'll always wave through and stops asking. The first week, it checks with you constantly. By the second month, it's surfacing only the decisions that genuinely need you and handling the rest on standing instruction. Friction decays as trust is earned. You're not granting blanket autonomy on day one and hoping; you're letting it compound, on your terms, at a pace you set.",
      "That's the inversion. Most of the field treats the human in the loop as a temporary limitation to engineer away. We treat the loop as the permanent design center, and we make staying in it cost you almost nothing.",
    ],
  },
  {
    heading: "Why this is the company, not a feature",
    paragraphs: [
      "A competitor can copy the agent does X by next quarter. The surface is cheap and getting cheaper.",
      "What doesn't copy in a quarter is a system architected from the first commit around the gate, where approval, audit trails, and reversibility are the substrate everything else is built on, not a setting someone toggles. You can bolt a confirmation dialog onto a product. You cannot bolt on a trust model. It either runs through the foundation or it doesn't, and operators can feel the difference the first time something important is on the line.",
      "There's one more piece that makes the loop survivable at all: you supervise one conversation, not five dashboards. You talk to Alex, and Alex orchestrates the specialists behind the scenes. The reason that matters here is that staying in the loop across a dozen tools is exhausting, it's why people stop doing it. Staying in the loop at a single point of contact is something a busy operator can actually sustain. The architecture of trust and the architecture of one conversation are the same decision, made twice.",
      "Convenience can be copied. Trustworthy autonomy is the company.",
    ],
  },
  {
    heading: "What we're actually offering",
    paragraphs: [
      "We didn't build AgentCorp to take you out of the loop. We built it so the loop finally costs you almost nothing, so you can hand over the pipeline, the books, the inbox, and the calendar, and still be the one who says yes to the things that carry your name.",
      "That's the difference between buying another tool and hiring a workforce you can trust. One you operate. The other operates for you, and asks before it matters.",
    ],
  },
];

const trustLayers = [
  ["01", "Propose", "Consequential actions start as explicit, inspectable recommendations."],
  ["02", "Approve", "The operator edits, approves, or holds the decision at the moment it counts."],
  ["03", "Learn", "Standing instructions absorb the obvious approvals while exceptions keep surfacing."],
];

export default function Home() {
  return (
    <main className="site-shell">
      <header className="topbar">
        <a className="brand" href="https://agentcorp.work" aria-label="AgentCorp home">
          <span className="brand-mark" />
          <span>AgentCorp</span>
        </a>
        <nav className="nav-links" aria-label="Main navigation">
          <a href="https://agentcorp.work">Product</a>
          <a href="https://agentcorp.work/#company">Company</a>
          <a aria-current="page" href="#blog">Blog</a>
          <a className="nav-cta" href="https://agentcorp.work/#get-started">
            Get started
          </a>
        </nav>
      </header>

      <section className="hero" id="blog">
        <div className="hero-copy">
          <p className="eyebrow">AgentCorp Blog / Post 01</p>
          <h1>Autonomy is the easy part.</h1>
          <p className="lede">
            Every AI company is racing to take you out of the loop. We think
            that's the wrong race.
          </p>
          <div className="post-meta">
            <span>01</span>
            <span>Trust architecture</span>
            <span>Native article</span>
          </div>
        </div>

        <aside className="issue-card" aria-label="Featured post">
          <div className="issue-number">01</div>
          <div>
            <p className="issue-label">Featured</p>
            <h2>Autonomy is the easy part</h2>
            <p>
              A field note on why approval gates, audit trails, and one
              conversation make agentic labor usable for real operations.
            </p>
          </div>
        </aside>
      </section>

      <section className="index-band" aria-label="Blog index">
        <div className="section-kicker">Latest</div>
        <article className="post-row">
          <div className="post-row-number">01</div>
          <div className="post-row-main">
            <h2>Autonomy is the easy part</h2>
            <p>
              Why the next agent bottleneck is not capability. It is operator
              trust, earned structurally through the approval gate.
            </p>
          </div>
          <a href="#post-01">Read post</a>
        </article>
      </section>

      <article className="article-wrap" id="post-01">
        <div className="article-heading">
          <p className="eyebrow">Post 01 / AgentCorp</p>
          <h2>Autonomy is the easy part</h2>
          <p>
            Adapted from the supplied Markdown source and rendered as a native
            AgentCorp article, not as embedded PDF pages.
          </p>
        </div>

        <div className="article-grid">
          <aside className="article-rail" aria-label="Article summary">
            <div className="rail-card">
              <p className="section-kicker">Core claim</p>
              <p>
                The work worth delegating is also the work operators least want
                to hand to a black box.
              </p>
            </div>
            <div className="rail-card muted">
              <p className="section-kicker">Design center</p>
              <p>Human approval at the consequential moment.</p>
            </div>
          </aside>

          <div className="article-body">
            <section className="article-section opening">
              <p>
                There's a quiet thing that happens after a founder buys their
                first AI agent.
              </p>
              <p>
                They give it something small. A draft. A summary. A task that
                doesn't really matter. And then they stop. Not because the agent
                failed, because the next thing on the list is the sales
                pipeline, or the books, or a reply to their biggest customer,
                and no sane operator hands that to software they met last week.
              </p>
              <p>The agent can do the work. The operator just won't let it.</p>
              <p>
                That gap, between what an agent is capable of and what you're
                actually willing to let it touch, is the real story of AI in
                2026. And almost nobody is building for it.
              </p>
            </section>

            <aside className="pull-quote">
              <p>
                The gate is what lets you delegate without abdicating: to hand
                over the doing while keeping the deciding.
              </p>
            </aside>

            {sections.map((section) => (
              <section className="article-section" key={section.heading}>
                <h3>{section.heading}</h3>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </section>
            ))}

            <section className="trust-system" aria-label="Approval gate system">
              <p className="section-kicker">Approval gate</p>
              <div className="trust-layers">
                {trustLayers.map(([number, label, description]) => (
                  <div className="trust-layer" key={label}>
                    <span>{number}</span>
                    <h4>{label}</h4>
                    <p>{description}</p>
                  </div>
                ))}
              </div>
            </section>

            <footer className="article-cta">
              <p>If you want to see the gate work, come meet Alex.</p>
              <a href="https://agentcorp.work">Meet Alex</a>
            </footer>
          </div>
        </div>
      </article>
    </main>
  );
}