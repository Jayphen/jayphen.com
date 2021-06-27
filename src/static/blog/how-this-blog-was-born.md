---
title: How this blog was born
description: A brief history of my history with Svelte
date: 2021-06-26
tags:
  - svelte
  - sveltekit
  - web
  - dev
  - wip
---

My initial foray with Svelte was at the end of 2019. At the time I was working at [Hyperlab](https://hyperlab.se/en/), and had spent the last years building an e-commerce framework ([Jetshop Flight](https://www.jetshop.io/jetshop-flight/)) with React.

Our focus was always on pushing performance as far as possible, and we were hitting limits with React, especially when server rendering.

At the time we had a very custom SSR configuration, and decided to evaluate whether it was worthwhile migrating to [Next.js](https://nextjs.org), or whether we should give Svelte (and specifically Sapper) a spin. This was, of course,
a risk. Though Svelte had already been around for a while, we'd not yet hit the rapid swell in popularity that occurred [around the beginning of 2020](https://trends.builtwith.com/javascript/Svelte).

Sapper was (and still is) in beta, and we ended up frequently contributing to the framework in order to fix bugs that we encountered while we were building what would become the groundwork for the [Crown ecommerce framework](https://crownframework.com/). The first ecommerce store
we launched on Svelte/Sapper was [Johnells](https://www.johnells.se/), which was recently named the [fastest ecommerce website in Sweden](https://improove.se/top-100-fastest-swedish-ecommerce).

---------


This blog is built with SvelteKit and hosted on Vercel.

The [source is here](https://github.com/Jayphen/jayphen.com), so go ahead and peruse it. I will write more on this soon.

I am actually writing this on my phone right now via Working Copy. The blog gets prerendered and deployed on every push, so I can play around with words whenever I have my phone with me.
