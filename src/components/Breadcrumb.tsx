import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

export function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      ...(item.href
        ? { item: `https://integrity1homeinspections.com${item.href}` }
        : {}),
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav
        aria-label="Breadcrumb"
        style={{
          backgroundColor: "#f5f5f5",
          borderBottom: "1px solid #e5e5e5",
        }}
      >
        <ol
          style={{
            maxWidth: 1080,
            margin: "0 auto",
            padding: "10px 20px",
            listStyle: "none",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            fontSize: 14,
            lineHeight: "20px",
            color: "#666",
          }}
        >
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <li key={item.label} style={{ display: "flex", alignItems: "center" }}>
                {index > 0 && (
                  <span aria-hidden="true" style={{ margin: "0 6px", color: "#999" }}>
                    {" › "}
                  </span>
                )}
                {isLast ? (
                  <span aria-current="page" style={{ color: "#444" }}>
                    {item.label}
                  </span>
                ) : (
                  <Link
                    href={item.href!}
                    style={{ color: "#3E64AF", textDecoration: "none" }}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
