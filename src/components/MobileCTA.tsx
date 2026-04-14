"use client";

import { usePathname } from "next/navigation";

export function MobileCTA() {
  const pathname = usePathname();
  if (pathname === "/contact-us") return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 lg:hidden"
      style={{
        zIndex: 40,
        backgroundColor: "rgb(38, 53, 86)",
        borderTop: "1px solid rgba(255,255,255,0.15)",
        boxShadow: "0 -2px 10px rgba(0,0,0,0.2)",
        padding: 12,
        display: "flex",
        gap: 10,
      }}
    >
      <a
        href="tel:1-561-565-8513"
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 8,
          backgroundColor: "transparent",
          border: "2px solid white",
          color: "white",
          padding: "10px 0",
          borderRadius: 5,
          fontSize: 15,
          fontWeight: 700,
          textDecoration: "none",
          textTransform: "uppercase",
          letterSpacing: 1,
        }}
      >
        <span aria-hidden="true">&#9742;</span> Call Now
      </a>
      <a
        href="https://www.homegauge.com/appointment/schedule.htmls?companyId=47338"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 8,
          backgroundColor: "#2EA3F2",
          border: "2px solid #2EA3F2",
          color: "white",
          padding: "10px 0",
          borderRadius: 5,
          fontSize: 15,
          fontWeight: 700,
          textDecoration: "none",
          textTransform: "uppercase",
          letterSpacing: 1,
        }}
      >
        Book Online
      </a>
    </div>
  );
}
