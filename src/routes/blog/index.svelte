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

<h1>Some words</h1>

<p>I have said something at least {posts.length} times.</p>
<p>Here follows a list of those things.</p>

<ol>
  {#each posts as post}
    <li><a href={`blog/${post.slug}`}>{post.title}</a></li>
  {/each}
</ol>
