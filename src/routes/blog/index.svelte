<script context="module">
  export const prerender = true;

  export async function load({ page, fetch, session, context }) {
    const url = `/blog.json`;
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
  let posts = data.posts;
</script>

<h1>Some words</h1>

<p>I have said something at least {posts.length} times.</p>
<p>Here follows a list of those things.</p>

<ol>
  {#each posts.reverse() as post}
    <li class:wip={post.tags.includes('wip')}><a href={`blog/${post.slug}`}>{post.title}</a></li>
  {/each}
</ol>

<style>
  .wip,
  .wip a {
    position: relative;
    color: hsl(220, 60%, 80%);
  }
  .wip:after {
    content: 'WIP';
    font-size: 0.65em;
    font-weight: 700;
    top: -0.15em;
    letter-spacing: 0.1em;
    position: absolute;
    margin-left: 0.5em;
    background: hsl(230, 60%, 80%);
    color: white;
    padding: 0 0.25em;
    border-radius: 0.5em;
  }
</style>
