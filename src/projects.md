---
title: Projects
subtitle: Software!
description: A preview of select projects that Atora has worked on
---

This list is non-exhaustive, and likely always will be. Many of my personal projects are interesting only really to me and people who are super invested into things like serverless functions and automation. Most of my public code is on [GitHub](https://github.com/AtoraSuunva), but here's some highlights:

{% import "macros/cards.njk" as cards %}

{{ cards.card(
  title="This site!",
  description="I wrote all of this from scratch myself",
  link="/",
  linkText="You're already on it!",
  icon="feather.png") }}

{{ cards.card(
  title="Booru",
  description="booru is a Node.js package to easily interface with the APIs of several boorus",
  link="https://github.com/AtoraSuunva/booru",
  linkText="View on GitHub",
  icon="boo") }}

{{ cards.card(
  title="Bots",
  description="Mostly utility and moderation tools for Discord, with some 'fun' commands thrown in too.",
  link="/bots",
  linkText="View bots",
  icon="b!") }}
