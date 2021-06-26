<script context="module">
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

{#each posts as post}
  <a href="/">{post.title}</a>
{/each}
