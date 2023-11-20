---
title: Bots
subtitle: beep boop
description: Some of my bots
---

Some of the bots I've made for Discord, usually for utility or moderation. There's even more I've written for personal things (28k scam sites logged 😔)

{% import "macros/cards.njk" as cards %}

{{ cards.card(
  title="RobotOtter!",
  description="A public utility and moderation bot, filled with tools I've needed (and made) over the years",
  link="https://github.com/AtoraSuunva/smolbot/tree/development",
  linkText="Read More on GitHub",
  icon="bots/robototter.png") }}

{{ cards.card(
  title="BooruBot",
  description="Uses my booru package to search up 15 different boorus directly from within Discord",
  link="https://github.com/AtoraSuunva/BooruBot",
  linkText="View on GitHub",
  icon="bots/boorubot.png") }}

{{ cards.card(
  title="BulbaTrivia",
  description="Mostly utility and moderation tools for Discord, with some 'fun' commands thrown in too.",
  link="/bots",
  linkText="View bots",
  icon="bots/bulbatrivia.png") }}
