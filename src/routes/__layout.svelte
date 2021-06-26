<nav>
  <a href="/">Home</a>
  <a href="/blog">Words</a>
  <span>That's it. That's the whole nav.</span>
</nav>

<main>
  <slot />
</main>

<style global>
  nav,
  main {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
      'Open Sans', 'Helvetica Neue', sans-serif;
    line-height: 1.5;
    max-width: 65ch;
  }

  nav {
    border-bottom: 1px solid silver;
    display: flex;
  }
  nav > * {
    font-size: 0.875rem;
    padding: 1em;
  }
  nav span {
    margin-left: auto;
    text-align: right;
  }

  h1 span {
    border-bottom: 1px dotted #c0c0c0;
  }

  a {
    color: #3f51b5;
  }
  a:hover {
    color: #9c27b0;
  }
</style>
