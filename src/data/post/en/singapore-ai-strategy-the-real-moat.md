---
publishDate: 2026-03-20
title: "Where Is Singapore's AI Strait of Malacca?"
excerpt: 'Singapore turned itself from an island with no oil into the world''s third-largest refining hub in 30 years. Can it pull off the same trick in the AI era? The early "AI refining hub" strategy is being eroded by the evolution of large models, and GitHub data confirms it. But Singapore''s real competitive edge lies precisely in its institutional capacity to identify the problem fast and pivot decisively.'
category: 'Analysis'
lang: 'en'
tags:
  - Strategy
  - Opinion
  - Singapore
  - AI Governance
author: 'Singapore AI Observatory'
relatedPolicyIds:
  - national-ai-strategy-20-nais-20
  - smart-nation-20
  - national-ai-strategy-nais-10
  - singapore-consensus-on-global-ai-safety-research-priorities
relatedLeverNumbers:
  - 1
  - 2
  - 6
relatedTimelineYears:
  - 2024
  - 2026
relatedPersonIds:
  - lawrence-wong
  - josephine-teo
  - vivian-balakrishnan
---

> This piece lays out Singapore AI Observatory's core thesis — the lens we use to look at Singapore's AI ecosystem. We will keep refining this judgement over time.

---

## A Tempting Analogy

Singapore does not produce a single drop of oil, yet it is the world's third-largest refining centre. The cluster of refineries on Jurong Island processes more than 1.3 million barrels of crude a day; Shell and ExxonMobil have been entrenched here for half a century. The major commodity traders — Vitol, Trafigura, Glencore — run their Asia-Pacific headquarters out of Singapore. Platts' Asian oil price benchmark is set here.

The rise of this energy hub follows a clear path: **geography → refining capacity → trading and pricing → ecosystem → forward-looking transformation**. The Strait of Malacca provided the physical starting point, but what really made Singapore irreplaceable is decades of layered capacity, efficiency, and institutional density.

When we map the full data on Singapore's AI ecosystem, it appears to be following almost exactly the same path to build an AI hub:

| Energy value chain           | AI value chain            | Singapore's positioning                                       |
| ---------------------------- | ------------------------- | ------------------------------------------------------------- |
| Crude extraction             | Foundation model training | Doesn't play (that's OpenAI's and Google's game)              |
| Crude refining               | Regional adaptation       | SEA-LION: an LLM for 11 Southeast Asian languages             |
| Pricing & trading            | Governance standards      | AI Verify: the world's first testable AI governance framework |
| Refined product distribution | AI product deployment     | 5 National AI Programmes, 650+ AI startups                    |
| Bunkering                    | Talent & services         | AIAP, a 15,000 AI talent target, SkillsFuture                 |

The analogy is tempting. But we think it breaks down at one crucial point.

## Where the Analogy Breaks: There Is No Strait of Malacca for AI

Oil has to move physically. A third of the world's seaborne trade passes through the Strait of Malacca, and you can't "delete" that waterway off the map. Singapore sits astride it, and then layers value on top of that unavoidable physical chokepoint.

**Data and algorithms, however, don't need to pass through any strait.**

The training and deployment of an AI model can happen anywhere on earth. GPT-5 doesn't need to "transit" through Singapore to serve users in Jakarta. A Vietnamese AI startup doesn't need to go through Singapore to reach the Claude API.

Yemen's Aden and Egypt's Suez sit on equally important shipping chokepoints, yet neither became an energy hub — because they never layered refining and trading on top. With AI, the problem is more severe: **it's not that the layered capacity is insufficient — the "chokepoint" itself doesn't exist.**

So what, then, is Singapore's "Strait of Malacca" on the AI map?

## Four Candidate Answers, Each With a Fatal Weakness

### The "Data crossroads" thesis

Singapore is the convergence point for Southeast Asia's submarine cables, with 70+ data centres on the island. But that advantage is being diluted — Johor in Malaysia and Batam in Indonesia are both building data centres at scale, with lower costs and more abundant power. Singapore itself paused approvals of new data centres in 2022. Data centres can be relocated; they are not the Strait of Malacca.

### The "Institutional trust" thesis

Multinationals park sensitive AI work in Singapore because they trust its rule of law, IP protection, and political stability. But institutional advantages can be imitated, and companies are increasingly inclined to put AI close to their markets and data sources rather than in a "neutral third party".

### The "Talent confluence" thesis

Singapore attracts global AI talent. But compared with Silicon Valley, Beijing, or London, the depth of AI research and density of talent in Singapore are still orders of magnitude behind. And talent flows — it goes wherever the better opportunities are.

### The "Regulatory sandbox" thesis

Governance frameworks like AI Verify are relatively forward-looking and could become the "compliance certification centre" for AI products entering the Asian market. This is the closest thing to a "digital Strait of Malacca" — but only if Asia genuinely coalesces into a single AI market that needs a unified compliance gateway. That is far from happening.

**Bottom line: Singapore's hub status in AI doesn't have the geographic lock-in that energy does. It is fundamentally an "optional convenience", not an "unavoidable bottleneck".**

## A Deeper Danger: Large Models Are Eating the "Refining" Layer

The analysis above only addresses the "no strait" problem. The deeper danger is no longer theoretical: the two core "refining" capabilities Singapore previously bet on — **SEA-LION** and **AI Verify** — are being directly eaten by the evolution of large models.

### SEA-LION: the window for regional adaptation is closing

SEA-LION is a Southeast Asian multilingual LLM developed by AI Singapore, supporting 11 languages. Its logic is "AI refining": take the world's foundation AI capability and process it into a product fit for Southeast Asia, the way crude is refined into fuel suited for the Asia-Pacific market.

But oil refining is a physical step that cannot be skipped — you can't pour crude straight into a car. **The "refining" of an AI model, however, can be skipped entirely.** When GPT-4 was released, it was weak in Malay and Thai, so regional adaptation had real value. But GPT-5, Claude, and Gemini natively support these languages, and the quality keeps improving. If foundation models do the "refining" themselves, SEA-LION ends up paving a bicycle lane next to a freeway that already exists.

### AI Verify: governance frameworks can't keep up with model evolution

AI Verify was the world's first testable AI governance framework — 11 metrics, an open-source toolkit. In 2022, that was a genuine first-mover advantage. But:

- AI Verify tests "interpretability, fairness, transparency" — these are **problems defined in 2022**
- The risk dimensions of agentic AI, multimodal models, and autonomous decision systems **shift every six months**
- Governance frameworks iterate on a **yearly** cycle; model capabilities iterate on a **monthly** cycle

More fundamentally: the EU AI Act is hard law, the US is moving via executive orders, China has its own playbook. The competition over AI governance standards is essentially great-power politics, and Singapore — a country of 6 million — has a natural ceiling on how much voice it can have in setting them.

### The data already tells the story

This isn't just analysis. Open GitHub and the data answers directly.

The SEA-LION main repository has been live for more than two years and has accumulated 393 stars and 31 forks. The surrounding deployment tools and example projects mostly have only single-digit stars. AI Verify is more striking — the main repo has just 58 stars and 17 forks; the follow-up Moonshot testing tool does a bit better, at 316 stars.

For comparison: Meta's LLaMA has more than 70,000 stars; Mistral's open-source models routinely pull in thousands. Even after accounting for the smaller size of the Southeast Asian market, the level of community attention captured by a flagship national project should not be at this magnitude. **The "AI refining" route has not earned real recognition from the developer community.**

Oil doesn't evolve on its own; AI does. The "AI Jurong Island" Singapore set out to build now confronts the reality that the "crude oil" can already be used directly — refining is no longer required.

## A Fast Pivot: An Elite Government's Capacity to Self-Correct

If the story ended here, the conclusion would be that Singapore bet on the wrong thing. But what's worth watching is what happens next.

Anyone who knows Singapore's governance style knows that this government's defining trait isn't "draw up the perfect plan and execute it rigidly". It's **propose hypotheses fast, test them fast, and adjust fast when reality diverges.** This is an elite, agile government. SEA-LION and AI Verify are less a strategic mistake than one round of policy experimentation that was rapidly validated and digested.

Budget 2026 in early 2026 made the pivot unmistakable:

- Establishment of a National AI Council chaired personally by the Prime Minister — AI elevated from a technology issue to a top-level national governance issue
- Four AI Missions, all focused on concrete public service scenarios — no longer building "platforms" and "frameworks", but solving real problems
- Enterprise Innovation Scheme offering a 400% AI tax deduction — direct demand-pull on enterprise AI adoption
- The one-north AI Park and the National AI Literacy Programme — a systematic build-out from physical space to nationwide literacy

From "build AI tools for others to use" to "use AI to the maximum ourselves first." The speed and decisiveness of that pivot is itself proof of Singapore's institutional capacity. How many governments, on discovering that a policy direction is off, choose to double down to prove they were right? Singapore chose to turn the wheel.

## The Real Moat: The Institutional Capacity to Make AI Work in the Real World

If every technical advantage is temporary, what does Singapore have that large models can't eat?

**What is genuinely unique about Singapore is not its AI technology, but its institutional capacity to make AI run in the real world.**

Specifically:

- **ACE-AI** is not just a predictive model — behind it sits Synapxe wiring AI into the data pipelines of 1,100+ clinics nationwide, and the Ministry of Health's willingness to rebuild preventive medicine workflows around AI under the pressure of a super-aged society (over-65s above 21%)
- **Border-clearance AI** is not just an algorithm — behind it is ICA's institutional courage to redesign approval workflows as AI-native
- **DBS's 800+ AI models** isn't just technical capability — behind it is MAS's regulatory pathway from FEAT to Veritas, which gives banks the confidence to **dare** to use AI, not merely the ability to use it
- **SME AI adoption rising from 4.2% to 14.5% in a single year** — that isn't because Singapore has better models. It's the 400% tax deduction plus 105,000 people completing AI training
- **75% of workers regularly using AI tools** — the world's second-highest adoption rate (behind only the UAE) — isn't a tech problem, it's an organisational change problem

**Large models can replace SEA-LION; they cannot replace "a national health ministry willing to deploy AI across 1,100 clinics." These are institutional achievements, not technology achievements.**

## Our Judgement

Based on the analysis above, we think the right strategic positioning for Singapore on AI is **not**:

> Become the Asian monopolist of the "refining + certification" layer of the AI value chain.

That positioning rests on an unstable premise: that the AI value chain, like oil, has a fixed, unskippable middle step. The evidence already says it doesn't.

A more accurate strategic positioning is:

> **Become the world's first AI-native nation: the country that can demonstrate, end-to-end, what it looks like to bake AI into every public service and industry workflow at the national level.**

Not "AI's Jurong Island" (a processing transit point), but **"AI's Changi Airport"** — not the largest, but the most efficient, with the best experience. Other countries arrive and learn from it what AI-led governance should look like.

The pivot in Budget 2026 shows that the Singapore government is in fact already moving in this direction. This isn't wishful thinking on our part — it's a reality currently unfolding.

The core advantages of this positioning:

1. **It's not threatened by foundation-model evolution.** GPT-10 may be even more powerful, but it still needs a government bold enough to plug it into national clinics, a regulator able to give banks a compliant path, and an education system that has trained 75% of the workforce to use it. None of that can be substituted away by a model.

2. **The competitive moat is real.** Institutional capacity takes decades to build. Malaysia can build cheaper data centres, but it cannot replicate, in the short term, Singapore's full institutional arc from Smart Nation 2014 to NAIS 2.0 to Budget 2026.

3. **It can be exported and monetised.** Every country in the world faces the same "how do we deploy AI" problem. If Singapore solves it first, the playbook — from governance frameworks to talent pipelines to government procurement processes — is itself an exportable product.

## The Risks of This Judgement

We also have to be honest about the risks:

**Risk one: what does a 6-million-person "model" actually represent?** Singapore's institutional environment is unusually specific — a city-state, highly centralised, with engineered ethnic balance and no federal frictions. An AI solution that works in Singapore may not survive transplanting into Indonesia's 270 million people across 17,000 islands.

**Risk two: institutional capacity also decays.** If Singapore's executive capacity weakens, talent outflow accelerates, or major policy missteps occur (for example, compliance costs that overly restrict AI applications), the institutional moat will erode just like any other.

**Risk three: the "AI-native nation" label may not need a "first".** Unlike oil pricing — where the Platts benchmark, once established, is hard to displace — every country's "AI governance" path may be highly local, and there may be no single "template" that copies cleanly.

## Implications for Founders and Investors

If you're a founder or investor working on AI in Singapore, this analysis points to a clear direction: **the opportunity lies in the "institutional interface", not the technology itself.**

1. **Don't bank on a technology moat.** Model capability is global — the GPT you use in Singapore is no different from the one used in Bangkok. If your only moat is "technology", you don't have one.

2. **Look for opportunities created by institutional interfaces.** Singapore's distinctive edge is that the government is willing to plug you into real public services and regulated systems to test and deploy AI. In most Southeast Asian countries, you can't do that. The interface itself is the moat — an AI solution proven across 1,100 clinics is something you can't even pilot elsewhere.

3. **"Validate in Singapore, export to Southeast Asia" is a real and viable path.** But only if the problem you're solving is transferable at the institutional level, not just the technology level. A solution that helps a healthcare system deploy AI in compliance with regulation has more durable value than "a better Southeast Asian language model".

4. **Watch the government's signals on direction.** The direction in Budget 2026 is unambiguous: AI deployment is the main battlefield. Founders and investors who follow that direction will capture more real opportunities than those who stick to the "infrastructure" narrative.

If you study Singapore's AI ecosystem, there's one core question worth asking continuously:

> **For the AI companies that choose to stay in Singapore — what exactly is "locking" them here? And for those that leave — at what point did they conclude Singapore was no longer the optimum?**

If the answers cluster around "institutional environment" and "opportunities to partner with the government", that validates our thesis. If they cluster around "cost" and "distance from market", it means Singapore's lock-in is weaker than we think.

---

_This is a living article. As our interviews and data collection progress, we will revise, deepen, and even overturn the judgements here. If you see things differently, please get in touch._
