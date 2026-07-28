const siteUrl = "https://www.habglobalmanagement.co.uk";
const apiUrl =
  process.env.NEXT_PUBLIC_API_URL ||
  "https://habglobaldb.onrender.com/api";

const staticPages = [
  { path: "", priority: 1, changeFrequency: "weekly" },
  { path: "/about", priority: 0.8, changeFrequency: "monthly" },
  { path: "/services", priority: 0.9, changeFrequency: "weekly" },
  { path: "/contact", priority: 0.8, changeFrequency: "monthly" },
  { path: "/privacy", priority: 0.3, changeFrequency: "yearly" },
  { path: "/terms", priority: 0.3, changeFrequency: "yearly" },
  { path: "/cookies", priority: 0.3, changeFrequency: "yearly" },
];

export default async function sitemap() {
  const now = new Date();
  const pages = staticPages.map((page) => ({
    url: `${siteUrl}${page.path}`,
    lastModified: now,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));

  try {
    const response = await fetch(`${apiUrl}/services?page=1&limit=100`, {
      next: { revalidate: 3600 },
    });

    if (!response.ok) return pages;

    const payload = await response.json();
    const services = Array.isArray(payload?.data)
      ? payload.data
      : Array.isArray(payload)
        ? payload
        : [];

    return [
      ...pages,
      ...services
        .filter((service) => service?.slug && service.active !== false)
        .map((service) => ({
          url: `${siteUrl}/services/${service.slug}`,
          lastModified: service.updatedAt ? new Date(service.updatedAt) : now,
          changeFrequency: "monthly",
          priority: service.featured ? 0.9 : 0.8,
          images: service.heroImage ? [service.heroImage] : undefined,
        })),
    ];
  } catch {
    return pages;
  }
}
