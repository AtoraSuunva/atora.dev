# atora.dev

<https://atora.dev>

My personal website! Because I am a web developer and this is my kinda thing.

Built with [Astro](https://astro.build/) & deployed on [Cloudflare Pages](https://pages.cloudflare.com/).


## Note To Self

- It would be nice to remove `unsafe-inline` from the CSP, but you can't easily disable inline scripts in Astro
  - For now https://github.com/withastro/roadmap/issues/1149
  - Or using a worker to rewrite the csp header with nonces would work
  