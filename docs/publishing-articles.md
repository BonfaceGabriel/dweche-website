# Publishing an article

Articles are Markdown files in `content/articles/`. No application-code edits or
admin login are needed for a new post.

## Publish through GitHub

1. Open the repository's **Code** tab and create a branch from the latest `main`,
   for example `article/your-topic`.
2. Copy `content/articles/template.md.example` to a new file ending in `.md`,
   such as `content/articles/your-topic.md`. Use lowercase words separated by
   hyphens. The filename becomes the URL: `/articles/your-topic`.
3. Fill in the title, description, author, date, topics (`tags`), and article body.
   Keep the date quoted as `"YYYY-MM-DD"`. Each article needs an explicit
   `draft: true` or `draft: false` value.
4. Set `draft: false` when the article is ready to be included on the website.
   `draft: true` excludes it from the list, article routes, and sitemap. Dates
   control sorting; they do not schedule publication. Draft files remain visible
   in this public GitHub repository, so do not use them for confidential content.
5. Commit the file with a message such as `Add article about your topic`.
6. Open a pull request into `main`. Review the Markdown in **Files changed** and
   check the page in a local build or a hosting preview, if your host provides one.
7. Merge the PR and deploy the site using your normal hosting workflow. Merging
   alone only updates the source; whether deployment starts automatically depends
   on the hosting setup.

## Share on LinkedIn

After deployment, use the full article URL in your LinkedIn post. Every published
article has a title, description, canonical URL, and generated 1200 × 630 preview
image. Use LinkedIn's Post Inspector to fetch or refresh its cached preview:
https://www.linkedin.com/post-inspector/

The article's **Share on LinkedIn** link also opens LinkedIn's sharing page. You
remain in control of writing and publishing the LinkedIn post.

## Writing and checks

Markdown supports paragraphs, headings (`##`), lists, bold, italics, images, and
links. Raw HTML is not rendered. Keep source links close to statistical claims
and verify the figures before publishing. Avoid a second `#` heading in the body:
the page already displays the title as its main heading.

Published articles appear newest first. The reading time, list entry, social
image, and sitemap entry are generated from the file. To update an article, edit
the same filename on a branch and open another PR; keep its original publication
date. To unpublish, change `draft` to `true` and redeploy.

Run `npm run test:articles`, `npm run lint`, and `npm run build` before publishing.
Local builds need the existing contact form's environment variables; see
`.env.example`. For local reading previews, run `npm run dev` and open
http://localhost:3000/articles.
