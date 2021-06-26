<script context="module">
  export async function load({ page, fetch, session, context }) {
    const url = `${page.params.slug}.json`;
    const res = await fetch(url);

    if (res.ok) {
      return {
        props: {
          data: await res.json()
        }
      };
    }

    return {
      status: res.status,
      error: new Error(`Could not load ${url}`)
    };
  }
</script>

<script>
  export let data;

  const {
    post: { rendered, attributes }
  } = data;
</script>

<svelte:head>
  {#if attributes.tags.includes('wip')}
    <meta name="robots" content="noindex" />
  {/if}
</svelte:head>

{#if attributes.tags.includes('wip')}
  <p class="construction">This post is under construction</p>
{/if}

<article class:wip={attributes.tags.includes('wip')}>
  <h1>{attributes.title}</h1>

  {@html rendered}
</article>

<style>
  .construction {
    color: hsl(110, 20%, 40%);
    font-size: 1em;
    text-transform: uppercase;
    text-align: center;
  }

  .wip {
    padding: 2em;
    border: 2px solid hsl(110, 20%, 40%);
    background: hsl(110, 20%, 90%);
    opacity: 0.5;
  }
</style>
