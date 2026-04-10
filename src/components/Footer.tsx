"use client";

export function Footer() {
  const linkStyle: React.CSSProperties = {
    color: "rgb(102, 102, 102)",
    textDecoration: "none",
    transition: "color 0.4s ease-in-out",
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.color = "#2EA3F2";
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.color = "rgb(102, 102, 102)";
  };

  return (
    <footer
      className="w-full text-center"
      style={{
        backgroundColor: "rgb(34, 34, 34)",
        fontSize: 14,
        color: "rgb(102, 102, 102)",
        padding: "20px 0",
      }}
    >
      <p className="m-0">
        Copyright &copy; 2026{" "}
        <a
          href="/"
          style={linkStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          Integrity1 Home Inspections
        </a>
        {" | Designed By "}
        <a
          href="https://www.homegauge.com/"
          style={linkStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          HomeGauge
        </a>
        {" Web Services | "}
        <a
          href="/privacy-policy"
          style={linkStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          PRIVACY POLICY
        </a>
      </p>
    </footer>
  );
}
