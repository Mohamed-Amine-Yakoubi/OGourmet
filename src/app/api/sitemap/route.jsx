import { NextResponse } from "next/server";
import generateSitemap from "../../../lib/generate-sitemap";

export async function GET() {
  const sitemap = generateSitemap();

  const xml = `
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${sitemap
        .map(
          (item) => `
        <url>
          <loc>${item.url}</loc>
          <lastmod>${item.lastModified}</lastmod>
        </url>
      `
        )
        .join("")}
    </urlset>
  `.trim();

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
