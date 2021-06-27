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

### Why Svelte tho?

My initial foray with Svelte was at the end of 2019. At the time I was working at [Hyperlab][1], and had spent the last years building an e-commerce framework ([Jetshop Flight][2]) with React.

Our focus was always on pushing performance as far as possible, and we were hitting limits with React, especially when server rendering.

At the time we had a very custom SSR configuration, and decided to evaluate whether it was worthwhile migrating to [Next.js][3], or whether we should give Svelte (and specifically Sapper) a spin. This was, of course, a risk. Though Svelte had already been around for a while, we'd not yet hit the rapid swell in popularity that occurred [around the beginning of 2020][4]. We decided to take the risk.

Sapper was (and still is, though now it is superseded by SvelteKit) in beta, and we ended up frequently contributing to the framework in order to fix bugs that we encountered while we were building what would become the groundwork for the [Crown ecommerce framework][5]. The first ecommerce store
we launched on Svelte/Sapper was [Johnells][6], which was recently named the [fastest ecommerce website in Sweden][7].

Apart from being significantly more performant than React, Svelte is simply a pleasure to work with. All engineers at Hyperlab were able to pick it up very quickly and become productive with it. The [official tutorial][8] is a masterclass in documentation, and the core abstractions ([reactive assignment][9], [stores][10]) are easy to grok and fast to work with.

So, that’s why I chose Svelte, and will likely choose Svelte for anything I do outside of my day job. (My day job is all React everywhere). I do mention Svelte at least once a week at my day job though, just to make sure my colleagues are prepared for the day I rewrite the entire banking app.

### SvelteKit

This blog is built with SvelteKit and hosted on Vercel.

The [source is here][11], so go ahead and peruse it. I will write more on this soon.

I am actually writing this on my phone right now via Working Copy. The blog gets prerendered and deployed on every push, so I can play around with words whenever I have my phone with me.

[1]:	https://hyperlab.se/en/
[2]:	https://www.jetshop.io/jetshop-flight/
[3]:	https://nextjs.org
[4]:	https://trends.builtwith.com/javascript/Svelte
[5]:	https://crownframework.com/
[6]:	https://www.johnells.se/
[7]:	https://improove.se/top-100-fastest-swedish-ecommerce
[8]:	https://svelte.dev/tutorial/basics
[9]:	https://svelte.dev/examples#reactive-assignments
[10]:	https://svelte.dev/examples#auto-subscriptions
[11]:	https://github.com/Jayphen/jayphen.com