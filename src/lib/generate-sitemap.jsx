// lib/generate-sitemap.ts
export default function generateSitemap() {
    const baseUrl = "https://ogourmet.com";
  
    return [
      {
        url: `${baseUrl}/`,
        lastModified: new Date().toISOString(),
      },
      {
        url: `${baseUrl}/Menu`,
        lastModified: new Date().toISOString(),
      },
      {
        url: `${baseUrl}/#Contact`,
        lastModified: new Date().toISOString(),
      },
      {
        url: `${baseUrl}/#À Propos`,
        lastModified: new Date().toISOString(),
      },
    ];
  }
  