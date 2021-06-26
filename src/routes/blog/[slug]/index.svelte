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

<h1>{attributes.title}</h1>

{@html rendered}
