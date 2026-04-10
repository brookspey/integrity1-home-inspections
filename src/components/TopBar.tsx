export function TopBar() {
  const links = [
    { label: "Your Report", href: "/your-report" },
    { label: "Reviews", href: "/testimonials" },
    { label: "Contact Us", href: "/contact-us" },
  ] as const;

  return (
    <div
      className="w-full"
      style={{ backgroundColor: "rgb(38, 53, 86)", height: 47 }}
    >
      <div
        className="mx-auto flex h-full items-center justify-between"
        style={{ maxWidth: 1280, padding: "0 20px" }}
      >
        {/* Phone */}
        <a
          href="tel:1-561-565-8513"
          className="flex items-center gap-2 text-white no-underline"
          style={{
            fontFamily: "'Open Sans', sans-serif",
            fontSize: 15,
            fontWeight: 600,
            lineHeight: "12px",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
          (561) 565-8513
        </a>

        {/* Nav links */}
        <nav className="hidden items-center gap-0 sm:flex">
          {links.map((link, i) => (
            <span key={link.label} className="flex items-center">
              {i > 0 && (
                <span
                  className="mx-2 text-white/50"
                  style={{ fontSize: 12, lineHeight: "12px" }}
                >
                  |
                </span>
              )}
              <a
                href={link.href}
                className="text-white no-underline"
                style={{
                  fontSize: 12,
                  fontWeight: 500,
                  lineHeight: "12px",
                  transition: "background-color 0.4s, color 0.4s ease-in-out",
                }}
              >
                {link.label}
              </a>
            </span>
          ))}
        </nav>
      </div>
    </div>
  );
}
