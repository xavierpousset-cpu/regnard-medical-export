/**
 * Product Schema Component - SEO Optimization
 * Generates structured data for search engines (Schema.org)
 */

interface ProductSchemaProps {
  name: string;
  description: string;
  image: string;
  url: string;
  brand?: string;
  manufacturer?: string;
  category?: string;
  aggregateRating?: {
    ratingValue: number;
    reviewCount: number;
  };
}

export default function ProductSchema({
  name,
  description,
  image,
  url,
  brand = "Regnard Medical",
  manufacturer = "Regnard Medical",
  category = "Medical Device",
  aggregateRating,
}: ProductSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name,
    description,
    image,
    brand: {
      "@type": "Brand",
      name: brand,
    },
    manufacturer: {
      "@type": "Organization",
      name: manufacturer,
      url: "https://www.regnardmedical.com",
    },
    category,
    url,
    ...(aggregateRating && {
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: aggregateRating.ratingValue,
        reviewCount: aggregateRating.reviewCount,
      },
    }),
  };

  return (
    <script type="application/ld+json">
      {JSON.stringify(schema)}
    </script>
  );
}
