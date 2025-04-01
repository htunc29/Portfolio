export default function sitemap() {
    return [
      {
        url: "https://tuncyazilim.web.tr",
        lastModified: new Date().toISOString(),
        priority: 1.0,
      },
      {
        url: "https://tuncyazilim.web.tr/about",
        lastModified: new Date().toISOString(),
        priority: 0.8,
      },
      {
        url: "https://tuncyazilim.web.tr/contact",
        lastModified: new Date().toISOString(),
        priority: 0.7,
      },
    ];
  }
  