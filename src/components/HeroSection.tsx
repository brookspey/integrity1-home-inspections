"use client";

export function HeroSection() {
  return (
    <section
      data-hero=""
      className="relative w-full bg-white"
      style={{
        backgroundImage: "url('/images/herobanner5.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "50% 50%",
      }}
    >
      {/* Desktop padding */}
      <div
        className="mx-auto text-center px-5 md:px-0"
        style={{ maxWidth: 1280, padding: "220px 0" }}
      >
        <h1
          className="text-white"
          style={{
            fontFamily: "var(--font-heading), 'Libre Franklin', sans-serif",
            fontSize: 82,
            lineHeight: "82px",
            fontWeight: 900,
            paddingBottom: 10,
          }}
        >
          Integrity1 Home Inspections
        </h1>

        <p
          className="text-white"
          style={{
            fontFamily: "var(--font-sans), 'Open Sans', sans-serif",
            fontSize: 42,
            lineHeight: "42px",
            fontWeight: 500,
            letterSpacing: 5,
            paddingBottom: 10,
            margin: 0,
          }}
        >
          Integrity comes first!
        </p>

        <a
          href="https://www.homegauge.com/appointment/schedule.htmls?companyId=47338"
          className="inline-block text-center text-white no-underline uppercase"
          style={{
            backgroundColor: "rgb(62, 100, 175)",
            fontFamily: "var(--font-sans), 'Open Sans', sans-serif",
            fontSize: 16,
            fontWeight: 700,
            letterSpacing: 2,
            padding: "15px 25px",
            borderRadius: 5,
            boxShadow: "rgba(0, 0, 0, 0.5) 1px 1px 2px 0px",
            transition: "background-color 0.5s",
          }}
          onMouseEnter={(e) => {
            if (window.matchMedia("(hover: hover)").matches) {
              (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "transparent";
            }
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "rgb(62, 100, 175)";
          }}
        >
          REQUEST INSPECTION
        </a>
      </div>

      {/* Responsive overrides */}
      <style>{`
        @media (max-width: 768px) {
          [data-hero] > div {
            padding: 80px 20px !important;
          }
          [data-hero] h1 {
            font-size: 36px !important;
            line-height: 40px !important;
          }
          [data-hero] > div > p {
            font-size: 20px !important;
            line-height: 24px !important;
          }
        }
      `}</style>
    </section>
  );
}
