import { useHead, useSeoMeta } from "#imports";

export const SITE_URL = "https://vartech.id";
export const SITE_NAME = "Vartech.id";
export const SITE_LOGO = `${SITE_URL}/images/logo.png`;
export const DEFAULT_OG_IMAGE = SITE_LOGO;

export const withSiteUrl = (path = "/") => {
  if (!path) {
    return SITE_URL;
  }

  if (/^https?:\/\//i.test(path)) {
    return encodeURI(path);
  }

  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return encodeURI(`${SITE_URL}${normalizedPath}`);
};

export const jsonLdScript = (key, data) => ({
  key,
  type: "application/ld+json",
  textContent: JSON.stringify(data),
});

export const breadcrumbSchema = (items) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: withSiteUrl(item.path),
  })),
});

export const usePageSeo = ({
  title,
  description,
  path,
  image = DEFAULT_OG_IMAGE,
  type = "website",
  robots = "index,follow",
  scripts = [],
}) => {
  const pageUrl = withSiteUrl(path);
  const imageUrl = withSiteUrl(image);

  useSeoMeta({
    title,
    description,
    robots,
    ogTitle: title,
    ogDescription: description,
    ogType: type,
    ogUrl: pageUrl,
    ogImage: imageUrl,
    ogImageAlt: title,
    ogSiteName: SITE_NAME,
    twitterTitle: title,
    twitterDescription: description,
    twitterCard: "summary_large_image",
    twitterImage: imageUrl,
  });

  useHead({
    link: [
      {
        key: "canonical",
        rel: "canonical",
        href: pageUrl,
      },
    ],
    script: scripts,
  });
};
