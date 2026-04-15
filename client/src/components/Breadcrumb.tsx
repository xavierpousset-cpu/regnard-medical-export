/**
 * Breadcrumb Component - SEO Optimization
 * Provides hierarchical navigation and structured data for search engines
 */

import { ChevronRight } from "lucide-react";
import { Link } from "wouter";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  // Generate structured data for search engines
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: item.href ? `https://www.regnardmedical.com${item.href}` : undefined,
    })),
  };

  return (
    <>
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>

      {/* Breadcrumb Navigation */}
      <nav className="py-4 px-4 bg-secondary text-sm" aria-label="Breadcrumb">
        <ol className="flex flex-wrap items-center gap-2 max-w-7xl mx-auto">
          {items.map((item, index) => (
            <li key={index} className="flex items-center gap-2">
              {item.href ? (
                <Link href={item.href}>
                  <a className="text-primary hover:underline">{item.label}</a>
                </Link>
              ) : (
                <span className="text-foreground font-medium">{item.label}</span>
              )}
              {index < items.length - 1 && (
                <ChevronRight className="h-4 w-4 text-muted-foreground" />
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
