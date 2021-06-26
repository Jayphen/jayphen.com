import { promises as fs } from 'fs';
import Markdown from 'markdown-it';
import frontmatter from 'front-matter';
import { BLOG_PATH } from '../../../static/constants/paths';

const md = new Markdown({ linkify: true });

export async function get({ params: { slug } }) {
  const file = await fs.readFile(`${BLOG_PATH}/${slug}.md`, 'utf8');

  const { body, attributes } = frontmatter(file);

  const rendered = md.render(body);

  return {
    body: {
      post: { rendered, attributes }
    }
  };
}
