export const post = {
  slug: "autonomy-is-the-easy-part",
  title: "Autonomy is the easy part.",
  description: "Every AI company is racing to take you out of the loop. We think that's the wrong race.",
  category: "Trust architecture",
  date: "July 10, 2026",
  dateIso: "2026-07-10",
  readingTime: "6 min read",
};

export const sections = [
  {
    id: "capability-and-trust",
    shortTitle: "Capability and trust",
    heading: "The capability problem is mostly solved. The trust problem isn't.",
    paragraphs: [
      "For two years the bottleneck was the model. Could it reason, could it use tools, could it string ten steps together without falling over. That fight is largely over. The models are good enough. The bottleneck moved, and most of the industry hasn't noticed it leave.",
      "Walk through the pitches and they rhyme: the agent does it for you. It writes the email, runs the campaign, reconciles the ledger, works the pipeline. Pure convenience. It's a good pitch. It's also saturated, and it's the easiest thing in the world to copy. Anyone with API access and a weekend can ship an agent that does X.",
      "Here's the part the convenience pitch skips: the work you most want off your plate is exactly the work you trust least to a black box. The low-stakes busywork is safe to automate and barely worth automating. The high-stakes work - money, customers, commitments made in your name - is worth real money to delegate and feels reckless to hand over. So you end up with agents doing trivia, or you babysit them through everything important. Either way, you don't have a workforce. You have an expensive intern you can't stop watching.",
    ],
  },
  {
    id: "trust-architecture",
    shortTitle: "Trust architecture",
    heading: "Trust isn't a vibe. It's an architecture.",
    paragraphs: [
      "You don't earn an operator's trust with a confident tone or a friendlier interface. You earn it structurally, or you don't earn it at all.",
      "The mechanism we built AgentCorp around is simple to describe and hard to retrofit: every consequential action is proposed, fully inspectable, and waits for your yes. Riley, the finance agent, does not move money. Riley proposes moving money - reconcile these 47 transactions, flag these 3 - and then stops, and waits. You approve, you edit, or you hold. Sam doesn't fire off outreach in your name; Sam shows you what it's about to send. Nothing that matters happens without a human decision at the moment it counts.",
      "We call it the approval gate, and it is not friction bolted onto autonomy. It is the thing that makes autonomy usable in the first place. The gate is what lets you delegate without abdicating - to hand over the doing while keeping the deciding. Remove it and you're left with the same choice every other agent product forces: trust it blindly, or don't trust it at all.",
    ],
  },
  {
    id: "friction",
    shortTitle: "The friction question",
    heading: "Isn't that just friction?",
    paragraphs: [
      "It's the fair objection, so let's take it head-on.",
      "For trivial tasks, yes - friction loses. If a thing doesn't matter, the last thing you want is a permission prompt, and the frictionless agent wins that work every time. We're not interested in winning that work.",
      "The valuable delegation is the high-stakes kind, and there the binding constraint was never the agent's ability. It's your willingness to let go. A frictionless agent you can't trust with anything that matters isn't a hire, it's a toy with good marketing. The gate is what moves an agent from toy to workforce, because it's what makes you comfortable enough to actually let it operate.",
      "And the gate is not static. It learns what you'll always wave through and stops asking. The first week, it checks with you constantly. By the second month, it's surfacing only the decisions that genuinely need you and handling the rest on standing instruction. Friction decays as trust is earned. You're not granting blanket autonomy on day one and hoping; you're letting it compound, on your terms, at a pace you set.",
      "That's the inversion. Most of the field treats the human in the loop as a temporary limitation to engineer away. We treat the loop as the permanent design center, and we make staying in it cost you almost nothing.",
    ],
  },
  {
    id: "company-not-feature",
    shortTitle: "Company, not feature",
    heading: "Why this is the company, not a feature",
    paragraphs: [
      "A competitor can copy the agent does X by next quarter. The surface is cheap and getting cheaper.",
      "What doesn't copy in a quarter is a system architected from the first commit around the gate, where approval, audit trails, and reversibility are the substrate everything else is built on, not a setting someone toggles. You can bolt a confirmation dialog onto a product. You cannot bolt on a trust model. It either runs through the foundation or it doesn't, and operators can feel the difference the first time something important is on the line.",
      "There's one more piece that makes the loop survivable at all: you supervise one conversation, not five dashboards. You talk to Alex, and Alex orchestrates the specialists behind the scenes. The reason that matters here is that staying in the loop across a dozen tools is exhausting, it's why people stop doing it. Staying in the loop at a single point of contact is something a busy operator can actually sustain. The architecture of trust and the architecture of one conversation are the same decision, made twice.",
      "Convenience can be copied. Trustworthy autonomy is the company.",
    ],
  },
  {
    id: "the-offer",
    shortTitle: "The offer",
    heading: "What we're actually offering",
    paragraphs: [
      "We didn't build AgentCorp to take you out of the loop. We built it so the loop finally costs you almost nothing, so you can hand over the pipeline, the books, the inbox, and the calendar, and still be the one who says yes to the things that carry your name.",
      "That's the difference between buying another tool and hiring a workforce you can trust. One you operate. The other operates for you, and asks before it matters.",
    ],
  },
];

export const trustLayers = [
  ["01", "Propose", "Consequential actions start as explicit, inspectable recommendations."],
  ["02", "Approve", "The operator edits, approves, or holds the decision at the moment it counts."],
  ["03", "Learn", "Standing instructions absorb obvious approvals while exceptions keep surfacing."],
];
