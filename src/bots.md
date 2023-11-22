---
title: Bots
subtitle: beep boop
description: Discord bots that I have worked on, including some publicly usable ones.
---

Some of the bots I've made for Discord, usually for utility or moderation. There's even more I've written for personal things (29k scam sites logged 😔)

{% import "macros/cards.njk" as cards %}

{{ cards.card(
  title="Sleetcord",
  description="Not a bot, but a bot framework built on Discord.js. Used in all my bots, it handles interaction/event registering, routing, and handling, massively simplifying building modular bots. Publicly available, but is mainly meant for personal use.",
  link="https://github.com/AtoraSuunva/sleetcord",
  linkText="View on GitHub") }}

{{ cards.card(
  title="RobotOtter",
  description="A public utility and moderation bot, filled with tools I've needed (and made) over the years",
  link="https://github.com/AtoraSuunva/smolbot/tree/development",
  linkText="View on GitHub",
  icon="bots/robototter.png") }}

{{ cards.card(
  title="SmolBot",
  description="A private version of RobotOtter, which I personally use for moderation tasks. Usually the same as RobotOtter, but occasionally holds more 'experimental' or bleeding-edge features",
  link="https://github.com/AtoraSuunva/smolbot/tree/development",
  linkText="View on GitHub") }}

{{ cards.card(
  title="BooruBot",
  description="Uses my booru package to search up 15 different boorus directly from within Discord",
  link="https://github.com/AtoraSuunva/BooruBot",
  linkText="View on GitHub",
  icon="bots/boorubot.png") }}

{{ cards.card(
  title="BulbaTrivia",
  description="Pull Pokemon info and (useful) trivia and posts it on Discord",
  link="https://github.com/AtoraSuunva/BulbaTrivia",
  linkText="View on GitHub",
  icon="bots/bulbatrivia.png") }}
