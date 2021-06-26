import { promises as fs } from 'fs';
import frontmatter from 'front-matter';
import { BLOG_PATH } from '../../static/constants/paths';

export async function get() {
  const files = await fs.readdir(BLOG_PATH);

  const posts = await Promise.all(
    files
      .filter((file) => file.endsWith('.md'))
      .map(async (file) => {
        const contents = await fs.readFile(`${BLOG_PATH}/${file}`, 'utf8');

        const { attributes } = frontmatter(contents);

        const [slug] = file.split('.');

        return { attributes, slug };
      })
  );

  return {
    body: {
      posts: posts.map((post) => ({ ...post.attributes, slug: post.slug }))
    }
  };
}
