export const siteUrl = "https://cycladiclodge.gr";

export const defaultOgImage = "/hero.jpg";

export const defaultKeywords = [
  "Cycladic Lodge",
  "Cycladic Lodge Sifnos",
  "Sifnos apartments",
  "Sifnos accommodation",
  "stay in Sifnos",
  "boutique apartments Sifnos",
  "Katavati Sifnos",
  "Cycladic stay Greece",
];

export function buildMetadata({
  title,
  description,
  path = "/",
  keywords = defaultKeywords,
}) {
  const url = `${siteUrl}${path}`;

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: "Cycladic Lodge",
      type: "website",
      locale: "en_US",
      images: [
        {
          url: defaultOgImage,
          width: 1920,
          height: 650,
          alt: "Cycladic Lodge Sifnos",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [defaultOgImage],
    },
    category: "travel",
  };
}
