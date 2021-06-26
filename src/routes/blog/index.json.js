import { promises as fs } from 'fs';
// import Markdown from 'markdown-it';
import frontmatter from 'front-matter';

// const md = new Markdown({ linkify: true });

export async function get() {
  const files = await fs.readdir(`src/static/tips/`);

  const posts = await Promise.all(
    files
      .filter((file) => file.endsWith('.md'))
      .map(async (file) => {
        const contents = await fs.readFile(`src/static/tips/${file}`, 'utf8');

        // const { body, attributes } = frontmatter(contents);
        const { attributes } = frontmatter(contents);

        // const rendered = md.render(body);

        return { attributes };
      })
  );

  console.log('posts', posts);

  return {
    body: {
      posts: posts.map((post) => post.attributes)
    }
  };
}
