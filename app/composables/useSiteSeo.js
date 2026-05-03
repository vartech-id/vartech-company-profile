import { useHead, useSeoMeta, useRuntimeConfig } from "#imports";

export const getSiteUrl = () => {
  let url = "https://vartech.id";
  try {
    const config = useRuntimeConfig();
    if (config.public.siteUrl) {
      url = config.public.siteUrl;
    }
  } catch (e) {
    // Nuxt instance unavailable (e.g. async callback), safely fallback
  }
  return url;
};

export const SITE_NAME = "Vartech.id";

export const getFullUrl = (path = "/") => {
  const siteUrl = getSiteUrl();
  if (!path) {
    return siteUrl;
  }

  if (/^https?:\/\//i.test(path)) {
    return encodeURI(path);
  }

  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return encodeURI(`${siteUrl}${normalizedPath}`);
};

export const SITE_LOGO = getFullUrl("/images/logo.png");
export const DEFAULT_OG_IMAGE = SITE_LOGO;


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
    item: getFullUrl(item.path),
  })),
});

export const usePageSeo = ({
  title,
  description,
  path,
  image = "/images/logo.png",
  type = "website",
  robots = "index,follow",
  scripts = [],
}) => {
  const pageUrl = getFullUrl(path);
  const imageUrl = getFullUrl(image);

  useSeoMeta({
    title,
    description,
    robots,
    ogTitle: title,
    ogDescription: description,
    ogType: type,
    ogUrl: pageUrl,
    ogImage: imageUrl,
    ogImageWidth: "1200",
    ogImageHeight: "630",
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
