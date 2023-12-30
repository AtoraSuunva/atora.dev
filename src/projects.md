---
title: Projects
subtitle: Software!
description: A preview of select projects that I have worked on
---

This list is non-exhaustive, and likely always will be. Many of my personal projects are interesting only really to me and people who are super invested into things like serverless functions and automation. Most of my public code is on [GitHub](https://github.com/AtoraSuunva), but here's some highlights:

{% import "macros/cards.njk" as cards %}

{{ cards.card(
  title="This site!",
  description="I wrote all of this from scratch myself",
  link="/",
  linkText="You're already on it!",
  icon="feather.png",
  iconAlt="A green, beige, and purple feather") }}

{{ cards.card(
  title="Sleetcord",
  description="A bot framework built on Discord.js. Used in all my bots, it handles interaction/event registering, routing, and handling, massively simplifying building modular bots. Publicly available, but is mainly meant for personal use.",
  link="https://github.com/AtoraSuunva/sleetcord",
  linkText="View on GitHub",
  icon="bots/robototter.png",
  iconAlt="Drawing of an otter floating in water") }}

{{ cards.card(
  title="Booru",
  description="booru is a Node.js package to easily interface with the APIs of several boorus",
  link="https://github.com/AtoraSuunva/booru",
  linkText="View on GitHub") }}

{{ cards.card(
  title="Create-a-Chart",
  description="A SPA to create a chart with labeled points, for alignment charts or whatever else. Made with Preact, hosted on Cloudflare pages.",
  link="https://create-a-chart.pages.dev",
  linkText="Visit Site") }}

{{ cards.card(
  title="Bots",
  description="Mostly utility and moderation tools for Discord, with some 'fun' commands thrown in too.",
  link="/bots",
  linkText="View bots") }}
