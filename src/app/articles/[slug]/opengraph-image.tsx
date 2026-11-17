import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { notFound } from "next/navigation";
import { getArticle } from "@/lib/articles";

export const alt = "An article from Dweche Africa";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function ArticleImage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();
  const logo = await readFile(path.join(process.cwd(), "public/logo.png"));
  return new ImageResponse(
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: "100%", height: "100%", padding: "56px 64px", background: "#f8fafc", color: "#0f172a", borderTop: "12px solid #2563eb" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        {/* ImageResponse renders this embedded image directly. */}
        <img src={`data:image/png;base64,${logo.toString("base64")}`} width={240} height={79} style={{ objectFit: "contain", flexShrink: 0 }} alt="Dweche Africa" />
        <span style={{ fontSize: 22, color: "#2563eb" }}>ARTICLES / {article.tags[0] || "INSIGHTS"}</span>
      </div>
      <div style={{ display: "flex", fontSize: 66, fontWeight: 700, lineHeight: 1.12, letterSpacing: "-2px" }}>{article.title}</div>
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 24, color: "#475569" }}>
        <span>{article.author}</span><span>dweche.africa</span>
      </div>
    </div>, size,
  );
}
