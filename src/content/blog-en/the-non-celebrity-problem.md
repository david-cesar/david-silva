---
title: "The 'Non-Celebrity Problem' in AI Workflows"
description: 'Why advanced AI development workflows depend on foundations, controls, and structures many companies still need to build.'
pubDate: 2026-11-17
tags: ['ai', 'software engineering', 'agents', 'software development']
translationKey: 'the-non-celebrity-problem'
draft: false
---

Recently, I stepped into a tech lead role. In our first conversations, we
started discussing the project stack, the technologies we might use, and how
to organize development with AI.

This article is part of the reflections I have been having as we prepare.

## The problem

New AI development workflows seem to appear every week, and model capabilities
are moving at a dizzying pace. It is hard not to be impressed, to want to try
the tools, and to be part of the movement.

In some [demos](https://www.youtube.com/watch?v=vlfCjWuv4es), dozens of
sessions run for hours, splitting work among agents, writing code, checking
their own results, and returning something that looks finished. And to be
clear, that is great. I did not write this to criticize it.

But if agents can do so much on their own, what becomes the work of the people
building software? Part of the answer is hidden in the demos themselves.

Getting to these workflows takes more than a capable model. It involves
setting permissions, isolating the environment, providing reliable tests and
automated checks, and maintaining continuous integration. Those foundations
can be left implicit, or the demo may come with a familiar caveat: "We should
review this, but I'll skip that step because of A, B, or C."

Autonomy in an AI workflow does not appear out of nowhere. Delegating work
means granting freedom within clear boundaries. Even a better model still
depends on a structured environment and enough context to do the work. Many
companies have strict compliance requirements, approval flows, sensitive
data, legacy systems, and documentation that is incomplete or missing
altogether.

It is not that these teams cannot adopt AI workflows. We just cannot assume
that a workflow that works for one person or company will fit everyone else's
day-to-day context.

## Autonomy shifts the effort

I am borrowing the name of a familiar software architecture problem that has
nothing to do with AI to draw an analogy. Classic, right?

In the "Celebrity Problem," imagine a social network when an account with
millions of followers publishes a post. If the system tries to copy that post
to every follower's feed immediately, it can overload the system and turn a
celebrity's post into a potential "incident" to handle.

One possible solution is to store the post once and shift the heavy work to
the moment followers request their feeds, with clear limits on that work.

The effort does not disappear. It moves.

In our day-to-day work, when a developer stops approving every command an
agent runs, the effort reappears in context preparation, permission settings,
and environment isolation.

When no one reviews every line of generated code, tests, acceptance criteria,
and review processes need to catch the problems. The workflow becomes more
autonomous because those other parts take on more responsibility.

Demos of powerful workflows often come from teams that already have these
layers in place or are starting a project from scratch. A team maintaining an
older system may not have reliable tests or even know why some rules exist.
Running more agents in parallel will not fill those gaps. It may simply
increase the number of changes someone has to understand later.

## Generating code is not the same as evolving a system

In [“Software Fundamentals Matter More Than Ever”](https://www.youtube.com/watch?v=v4F1gFy-hqg),
Matt Pocock argues that generating code quickly does not automatically make
a system cheaper to maintain. If the process also makes the system harder to
understand and change, that can offset the apparent savings.

He describes trying an approach that generated code from clear specifications
without following the implementation. He found that repeated changes made the
codebase worse. Specifications can guide implementation, but they do not make
the structure of the software irrelevant.

Pocock returns to familiar practices: align on the problem, create a shared
language between the domain and the team, work in smaller steps, and design
modules with clear interfaces. These foundations help people and AI
understand what can change and how to check whether a change is right.

In a legacy system, understanding may exist only in the experience of the
people who operate it. A change made by an agent may seem technically sound
but violate an undocumented regulatory requirement or remove an exception
the business intentionally depends on.

Addy Osmani calls the gap between the code a system contains and what its team
can understand [comprehension debt](https://medium.com/@addyosmani/comprehension-debt-the-hidden-cost-of-ai-generated-code).
He describes [intent debt](https://addyosmani.com/blog/intent-debt/) as the
absence of a recorded reason for a rule or decision.

We cannot expect an agent to safely infer context that was never recorded.
Before delegating more, we may need to make that knowledge visible to the team
and to AI tools. When possible, I like using the repository itself as a
source of truth.

Even when business rules have to live elsewhere, keep them structured and
easy to find. Do not scatter snippets into the context of a random session
that you will have to search for later.

That does not mean every idea needs months of planning.

Prototyping early and getting feedback are useful ways to learn what users
actually need. This is one idea behind [Rapid Application Development
(RAD)](https://www.atlassian.com/agile/software-development/rapid-application-development),
a methodology described by James Martin in his book
[*Application Development Without Programmers*](https://books.google.com.br/books/about/Application_development_without_programm.html?id=QnO4AAAAIAAJ).
The title alone made me want to start reading it.

The important thing is not to confuse a prototype or MVP with a
production-ready product. What we learn during prototyping can be turned into
requirements, acceptance criteria, and tests before the application goes
into production.

AI lowers the effort required to get started, but we still need to integrate,
secure, maintain, and support what we build. If the team has no time for that
work, generating code faster can leave it with a pile of unused MVPs and
unresolved decisions.

## The human job is to understand

Alongside the familiar question, "How quickly can we deliver this solution?"
we need to ask, "What parts of this work can our team and other teams verify
and maintain?"

The problem is not which tools celebrity companies use. It is trying to fit
workflows that depend on foundations we do not yet have into our day-to-day
work.

AI can expand what we are able to do, but it cannot decide what we should
build or replace the understanding needed to sustain it.

Waiting to adopt these tools and workflows until we understand their limits
and how to use them is not a sign of falling behind. Often, it is the first
step toward using them well.

In the next article, [Building AI Workflows](/blog/building-workflows-with-ai/),
I outline a practical approach to mapping processes, deciding how AI will be
used in development and in the product, and evaluating the results rather
than stopping at criticism.

## Further reading

- [Rethinking Claude Code Best Practices](https://www.youtube.com/watch?v=vlfCjWuv4es), Lydia Hallie, Anthropic.
- [The Celebrity Problem: How X Builds Your Feed](https://www.youtube.com/watch?v=miCXLs0CFwQ), The Freshers.
- [Comprehension Debt: The Hidden Cost of AI-Generated Code](https://medium.com/@addyosmani/comprehension-debt-the-hidden-cost-of-ai-generated-code-285a25dac57e), Addy Osmani.
- [The Intent Debt](https://addyosmani.com/blog/intent-debt/), Addy Osmani.
- [Software Fundamentals Matter More Than Ever](https://www.youtube.com/watch?v=v4F1gFy-hqg), Matt Pocock, AI Engineer.
- [What Is Rapid Application Development (RAD) and How Does It Work?](https://www.atlassian.com/agile/software-development/rapid-application-development), Atlassian.
- [What Is Rapid Application Development?](https://www.ibm.com/think/topics/rapid-application-development), Cole Stryker, IBM.
- [What Is RAD? Why It Matters in the Age of AI Coding](https://www.youtube.com/watch?v=J0zbWsutyA8), IBM.
- [Application Development Without Programmers](https://books.google.com.br/books/about/Application_development_without_programm.html?id=QnO4AAAAIAAJ), James Martin.
