---
title: "The 'Non-Celebrity Problem': How to Define a Workflow"
description: 'Why advanced AI development workflows depend on foundations, controls, and structures many companies still need to build.'
pubDate: 2026-11-17
tags: ['ai', 'software engineering', 'agents', 'software development']
translationKey: 'the-non-celebrity-problem'
draft: false
---

Recently, I stepped into a tech lead role. In our first conversations, we started
working through the stack for the next project: which technologies to use, how
to organize development, and where AI tools fit. This article grew out of those
preparations.

New AI development workflows seem to appear every week, and model capabilities
are moving quickly. It is hard not to be impressed, or to want to try the tools
and join the movement. Some demos show dozens of agents working for hours,
splitting tasks, writing code, checking their own results, and handing back
something that looks finished.

If agents can do so much on their own, what is left for the people building
software? Part of the answer is hidden in the demos themselves.

## The problem

Keeping agents working for longer takes more than a capable model. It takes
permissions, isolated environments, reliable tests, automated checks, and
continuous integration. It also takes resisting the familiar temptation to say,
"We should review this, but let's skip that part for now."

Autonomy does not appear on its own. Delegation requires freedom, but that
freedom needs clear boundaries. A better model still depends on a structured
environment and enough context to do the work. Many companies have strict
compliance requirements, approval flows, sensitive data, legacy systems, and
documentation that is incomplete or missing altogether.

These teams can use AI workflows. They just cannot assume that a workflow built
for a celebrity company will fit the reality of a non-celebrity.

## Autonomy moves the bill

One useful analogy comes from an architecture problem that has nothing to do
with AI. In [“The Celebrity Problem: How X Builds Your Feed”](https://www.youtube.com/watch?v=miCXLs0CFwQ),
The Freshers explains how copying a post from an account with millions of
followers into every follower's feed can overload a social network.

One alternative is to store the post once and shift some of the work to the
moment followers request their feeds, while placing firm limits on how much
work each request can trigger.

The cost does not vanish. It moves.

When people stop approving every command an agent runs, more of the work moves
into context preparation, permission settings, and environment isolation. When
no one reviews every line, tests, acceptance criteria, and review processes
need to catch more problems. The workflow becomes more autonomous because those
other parts take on more responsibility.

The demos often come from teams that already have these layers in place, or
from projects starting on a blank slate. Elsewhere, those foundations still
need to be built. A team maintaining an older system may not have reliable
tests or even know why some rules exist. Running more agents in parallel will
not fill those gaps. It may simply increase the number of changes someone has
to understand later.

## Generating code is not the same as evolving a system

In [“Software Fundamentals Matter More Than Ever”](https://www.youtube.com/watch?v=v4F1gFy-hqg),
Matt Pocock argues that generating code quickly does not make it cheap to
maintain a system that is hard to understand and change. He describes trying
an approach that generated code from specifications while avoiding the
implementation. With each iteration, the codebase got worse. A specification
can guide implementation, but it does not make software design irrelevant.

Pocock returns to familiar practices: align on the problem before building,
use a shared language across the domain and the team, work in smaller steps,
and design modules with clear interfaces. These foundations help people and
agents understand what can change and how to check whether a change is right.

As agents generate more code, we also need to watch for comprehension debt and
intent debt. Addy Osmani describes [comprehension debt](https://medium.com/@addyosmani/comprehension-debt-the-hidden-cost-of-ai-generated-code-285a25dac57e)
as the gap between the code a system contains and what its maintainers
understand. His writing on [intent debt](https://addyosmani.com/blog/intent-debt/)
focuses on a different gap: when the goals, constraints, and reasons behind
system decisions were never recorded.

In a legacy system, that intent may exist only in the experience of the people
who operate it. A technically sound change can still violate a regulatory
requirement or remove an exception the business depends on. We cannot expect an
agent to infer context that was never written down. Before delegating more, we
may need to make that knowledge available to the whole team, not just to one
agent session.

## The human job is understanding what the tests miss

This does not mean every idea needs months of planning. Prototyping early and
getting feedback are useful ways to learn what users actually need. That is a
central idea in [Rapid Application Development](https://www.atlassian.com/agile/software-development/rapid-application-development).
The important distinction is that a prototype is not automatically ready for
production. What the team learns during prototyping still needs to become
business rules, acceptance criteria, and tests before release.

AI lowers the effort required to get started. It does not remove the work of
integrating, securing, maintaining, and supporting what we build. When a team
cannot make time for those steps, faster prototyping can leave it with a
backlog of unused MVPs and unresolved decisions.

The question should not be only, "How much code can we generate?" It should
also be, "How much of that work can we verify and maintain?"

The problem is not that we use fewer tools than celebrity companies. It is
comparing our day-to-day work with workflows that depend on foundations we do
not yet have, as if the only difference were a lack of ambition. AI can expand
what we are able to do, but it cannot decide what we should build or replace
the understanding needed to sustain it. Waiting to adopt a tool until we
understand its limits is not falling behind. It may be the first step toward
using it well.

## Further reading

- [The Celebrity Problem: How X Builds Your Feed](https://www.youtube.com/watch?v=miCXLs0CFwQ), The Freshers.
- [Comprehension Debt: The Hidden Cost of AI-Generated Code](https://medium.com/@addyosmani/comprehension-debt-the-hidden-cost-of-ai-generated-code-285a25dac57e), Addy Osmani.
- [The Intent Debt](https://addyosmani.com/blog/intent-debt/), Addy Osmani.
- [What Is Loop Engineering? Building Better AI Agents](https://www.youtube.com/watch?v=DQBqh6gcx7U), IBM Technology.
- [Software Fundamentals Matter More Than Ever](https://www.youtube.com/watch?v=v4F1gFy-hqg), Matt Pocock, AI Engineer.
- [What Is Rapid Application Development (RAD) and How Does It Work?](https://www.atlassian.com/agile/software-development/rapid-application-development), Atlassian.
- [What Is Rapid Application Development?](https://www.ibm.com/think/topics/rapid-application-development), Cole Stryker, IBM.
- [What Is RAD? Why It Matters in the Age of AI Coding](https://www.youtube.com/watch?v=J0zbWsutyA8), IBM Technology.
