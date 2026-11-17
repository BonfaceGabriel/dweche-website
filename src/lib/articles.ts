import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const directory = path.join(process.cwd(), "content/articles");
const slugPattern = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

export type Article = {
  slug: string;
  title: string;
  description: string;
  author: string;
  date: string;
  tags: string[];
  readingMinutes: number;
  content: string;
  linkedinPost?: string;
};

export function parseArticle(slug: string, source: string): Article | null {
  if (!slugPattern.test(slug)) throw new Error(`Invalid article filename: ${slug}`);
  const { data, content } = matter(source);
  if (data.draft === true) return null;
  if (data.draft !== false) throw new Error(`${slug}: set draft to true or false`);
  for (const field of ["title", "description", "author", "date"] as const) {
    if (typeof data[field] !== "string" || !data[field].trim()) {
      throw new Error(`${slug}: ${field} must be a non-empty string`);
    }
  }
  const date = data.date as string;
  const timestamp = Date.parse(date);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date) || !Number.isFinite(timestamp) ||
      new Date(timestamp).toISOString().slice(0, 10) !== date) {
    throw new Error(`${slug}: date must be a quoted YYYY-MM-DD date`);
  }
  if (!Array.isArray(data.tags) || !data.tags.every((tag: unknown) => typeof tag === "string" && tag.trim())) {
    throw new Error(`${slug}: tags must be a list of strings`);
  }
  if (!content.trim()) throw new Error(`${slug}: article body is empty`);
  if (data.linkedinPost !== undefined && typeof data.linkedinPost !== "string") {
    throw new Error(`${slug}: linkedinPost must be plain text`);
  }
  return {
    slug, title: data.title.trim(), description: data.description.trim(),
    author: data.author.trim(), date, tags: data.tags,
    readingMinutes: Math.max(1, Math.ceil(content.trim().split(/\s+/).length / 200)),
    content, linkedinPost: data.linkedinPost?.trim() || undefined,
  };
}

export function getArticles(): Article[] {
  return fs.readdirSync(directory).filter((file) => file.endsWith(".md"))
    .map((file) => parseArticle(file.slice(0, -3), fs.readFileSync(path.join(directory, file), "utf8")))
    .filter((article): article is Article => article !== null)
    .sort((a, b) => b.date.localeCompare(a.date) || a.slug.localeCompare(b.slug));
}

export function getArticle(slug: string): Article | undefined {
  if (!slugPattern.test(slug)) return undefined;
  return getArticles().find((article) => article.slug === slug);
}

export function formatArticleDate(date: string): string {
  return new Intl.DateTimeFormat("en-KE", {
    day: "numeric", month: "long", year: "numeric", timeZone: "Africa/Nairobi",
  }).format(new Date(`${date}T12:00:00Z`));
}
