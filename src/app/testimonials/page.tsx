import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reviews & Testimonials | 5-Star Home Inspector | Palm Beach County",
  description:
    "Read reviews from satisfied clients. Perfect 5.0-star rating across all Google reviews. Trusted home inspector in Palm Beach County, FL.",
  openGraph: {
    title: "Reviews & Testimonials | 5-Star Home Inspector | Palm Beach County",
    description:
      "Read reviews from satisfied clients. Perfect 5.0-star rating across all Google reviews. Trusted home inspector in Palm Beach County, FL.",
    url: "https://integrity1-home-inspections.vercel.app/testimonials",
  },
};

const testimonials = [
  {
    quote:
      "Joel, Is a great inspector very thorough and explains everything to buyers. As a Broker / Realtor I fully recommend Joel.",
    attribution: "R.R., Davie FL",
    date: "September 2022",
  },
  {
    quote:
      "Joel Did a great Job very detail, and very customer focus. He is great p/professional.",
    attribution: "R.R., Davie FL",
    date: "October 2021",
  },
];

const GOLD = "#D4A017";

function StarRating() {
  return (
    <div
      aria-label="5 out of 5 stars"
      style={{ color: GOLD, fontSize: 22, letterSpacing: 2, marginBottom: 12 }}
    >
      {"★★★★★"}
    </div>
  );
}

export default function TestimonialsPage() {
  return (
    <section
      style={{
        backgroundImage: "url(/images/bluebanner3.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "50% 0%",
        backgroundColor: "rgb(38, 53, 86)",
        padding: "54px 0 80px",
        minHeight: "60vh",
      }}
    >
      {/* Page heading */}
      <h1
        style={{
          fontFamily: "var(--font-heading)",
          fontSize: 62,
          lineHeight: "62px",
          fontWeight: 900,
          color: "white",
          textAlign: "center",
          textTransform: "uppercase",
          marginBottom: 10,
        }}
      >
        Reviews
      </h1>

      <p
        style={{
          fontSize: 16,
          lineHeight: "27px",
          color: "rgba(255,255,255,0.8)",
          textAlign: "center",
          marginBottom: 36,
        }}
      >
        See what our clients are saying.
      </p>

      {/* Trust badge */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 4,
          marginBottom: 40,
        }}
      >
        <div
          style={{
            backgroundColor: "rgba(255,255,255,0.08)",
            border: "1px solid rgba(215,211,166,0.35)",
            borderRadius: 12,
            padding: "14px 32px",
            display: "inline-flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 6,
          }}
        >
          <span
            style={{
              color: GOLD,
              fontSize: 28,
              letterSpacing: 4,
              lineHeight: 1,
            }}
            aria-hidden="true"
          >
            ★★★★★
          </span>
          <span
            style={{
              color: "white",
              fontSize: 15,
              fontWeight: 700,
              letterSpacing: 0.5,
              textTransform: "uppercase",
            }}
          >
            5.0 Google Rating
          </span>
        </div>
      </div>

      {/* Review cards */}
      <div
        style={{
          maxWidth: 860,
          margin: "0 auto",
          padding: "0 20px",
          display: "flex",
          flexDirection: "column",
          gap: 24,
        }}
      >
        {testimonials.map((t, i) => (
          <div
            key={i}
            style={{
              backgroundColor: "#f5f7fa",
              borderRadius: 8,
              padding: "28px 32px",
              boxShadow: "0 2px 12px rgba(0,0,0,0.18)",
            }}
          >
            <StarRating />

            <p
              style={{
                fontSize: 16,
                lineHeight: "27px",
                color: "#444",
                fontStyle: "italic",
                margin: "0 0 16px",
              }}
            >
              &ldquo;{t.quote}&rdquo;
            </p>

            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: "50%",
                  backgroundColor: "rgb(38, 53, 86)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "rgb(215,211,166)",
                  fontWeight: 700,
                  fontSize: 15,
                  flexShrink: 0,
                }}
                aria-hidden="true"
              >
                {t.attribution.charAt(0)}
              </div>
              <div>
                <p
                  style={{
                    fontSize: 14,
                    color: "rgb(38, 53, 86)",
                    fontWeight: 700,
                    margin: 0,
                    lineHeight: "18px",
                  }}
                >
                  {t.attribution}
                </p>
                <p
                  style={{
                    fontSize: 12,
                    color: "#888",
                    margin: 0,
                    lineHeight: "16px",
                  }}
                >
                  {t.date} &middot; Google Review
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
