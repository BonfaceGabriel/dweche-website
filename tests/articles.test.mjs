import { test } from "node:test";
import assert from "node:assert/strict";
import { parseArticle, getArticle, getArticles } from "../src/lib/articles.ts";

const source = (extra = "", body = "A readable article.") => `---
title: "A title"
description: "A summary"
author: "Dweche AI"
date: "2026-11-17"
tags: ["AI"]
${extra}
---
${body}`;

test("published Markdown retains content and metadata", () => {
  const article = parseArticle("a-title", source("draft: false"));
  assert.equal(article.title, "A title");
  assert.equal(article.date, "2026-11-17");
  assert.equal(article.content.trim(), "A readable article.");
  assert.equal(article.readingMinutes, 1);
});

test("drafts and invalid URL paths cannot be retrieved", () => {
  assert.equal(parseArticle("a-draft", source("draft: true")), null);
  assert.equal(getArticle("../package"), undefined);
  assert.equal(getArticle("a-post-that-does-not-exist"), undefined);
});

test("publishing requires an explicit draft flag and valid metadata", () => {
  assert.throws(() => parseArticle("a-title", source()), /draft/);
  assert.throws(() => parseArticle("a-title", source("draft: false").replace('"2026-11-17"', '"2026-02-30"')), /date/);
  assert.throws(() => parseArticle("a-title", source("draft: false").replace('title: "A title"', 'title: ""')), /title/);
  assert.throws(() => parseArticle("a-title", source("draft: false", "")), /body/);
});

test("the first article is discoverable with citations and a stable URL", () => {
  const articles = getArticles();
  const article = getArticle("from-ai-agents-that-answer-to-agents-that-act");
  assert.ok(articles.some(({ slug }) => slug === article.slug));
  assert.match(article.content, /https:\/\/aiagentrank.io/);
  assert.match(article.content, /BF SUMA Eagle Shop/);
  assert.match(article.content, /M-Pesa/);
});
