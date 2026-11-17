---
title: "From AI Agents That Answer to Agents That Act"
description: "What our BI agent taught us about the gap between answering questions and completing real tasks, and why our next build focuses on Kenyan insurers."
author: "Dweche Africa"
date: "2026-11-17"
tags: ["Agentic AI", "InsurTech", "Kenya"]
draft: false
linkedinPost: |
  AI agents are getting easier to build. Getting them into production is still the hard part.

  A few figures that caught my attention:

  🔌 97 million monthly MCP SDK downloads in March 2026, with 10,000+ public servers connecting agents to tools.

  💸 Frontier model token prices fell 30–60% through 2025, while prompt caching can cut repeated-prompt costs by 50–90%.

  📈 Enterprise inquiries about AI agents surged 1,445% between Q1 2024 and Q2 2025.

  But here’s the gap: 79% of organizations report some agentic AI adoption, while only 31% have an agent in production—and just 21% have mature governance for autonomous agents.

  We’ve lived a small version of that gap.

  At Dweche AI, our BI agent for BF SUMA Eagle Shop answered management’s sales questions. Useful—but it couldn’t act independently or serve many users at once.

  Our next build raises the bar: helping Kenyan insurance customers request motor cover on WhatsApp, get a quote, pay through M-Pesa, and receive their certificate.

  The frameworks handle more of the plumbing. Our work is making local integrations, multi-user reliability, and human oversight work together.

  I’ve shared the lessons and sources in the full article:

  https://dweche.africa/articles/from-ai-agents-that-answer-to-agents-that-act

  If you work in insurance or fintech in Kenya, what would you want an agent to handle first?

  #AgenticAI #Kenya #InsurTech #MCP #DwecheAI
---

**Two years ago, building an AI agent meant hand-writing glue code for every tool, API, and database it touched. Today, a lot of that is plug-and-play.**

## The infrastructure is catching up

A few numbers that stopped me:

- **Connecting agents to tools:** MCP, the open protocol for connecting agents to tools, crossed 97 million monthly SDK downloads in March 2026, and there are over 10,000 public MCP servers. In December 2025, Anthropic donated it to the Linux Foundation’s Agentic AI Foundation, so no single vendor owns it. [Source: Algeria Tech](https://algeriatech.news/?p=21298)
- **Lower costs:** Frontier model token prices dropped 30–60% through 2025, and prompt caching cuts the cost of repeated prompts by 50–90%. [Source: AI Agent Rank](https://aiagentrank.io/blog/state-of-agentic-ai-may-2026)
- **Faster voice agents:** Voice agents now respond in under a second at roughly $0.10–$0.30 per call. [Source: AI Agent Rank](https://aiagentrank.io/blog/state-of-agentic-ai-may-2026)
- **Growing enterprise interest:** Gartner recorded a 1,445% surge in enterprise inquiries about AI agents between Q1 2024 and Q2 2025. [Source: Insoftex](https://new.insoftex.com/insights/ai-agents-enterprise-deployment/)

But the reality check matters more: 79% of organizations have adopted some form of agentic AI, yet only 31% have an agent in production. And only 21% have a mature governance model for autonomous agents. [Source: Insoftex](https://insoftex.com/insights/ai-agents-enterprise-deployment/)

## What our first BI agent taught us

I’ve lived a small version of that gap.

At Dweche AI, we built a BI agent for BF SUMA Eagle Shop. It had a handful of users, all in management, and it was good at answering questions: “How much did we make in sales this week?” Ask, get an answer, done. But it never *did* anything. It couldn’t act on its own, and it was never built for many people using it at once.

That’s the difference between a clever demo and a production agent.

## Our next build: insurance on WhatsApp

So our next build raises the bar: an AI agent for Kenyan insurers that serves many users in production and completes tasks end to end. A customer asks for motor cover on WhatsApp, gets a quote, pays via M-Pesa, and receives their certificate, with no queues and no paperwork. Banking and insurance lead agent deployment globally, at 47% of organizations with at least one agent live. Kenya shouldn’t wait for that wave to arrive. [Source: Insoftex](https://insoftex.com/insights/ai-agents-enterprise-deployment/)

The frameworks now handle the plumbing. Our work is the part no framework ships: M-Pesa flows, local insurer systems, approved policy documents as the source of truth, multi-user reliability, and guardrails that keep a human in the loop where the stakes are high.

**Moving from agents that answer to agents that act is the real shift.** I’m building it in the open. If you work in insurance or fintech in Kenya, what would you want an agent to handle first?
