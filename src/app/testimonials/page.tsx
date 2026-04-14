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
    attribution: "- R.R., Davie FL, September 2022",
  },
  {
    quote:
      "Joel Did a great Job very detail, and very customer focus. He is great p/professional.",
    attribution: "- R.R., Davie FL, October 2021",
  },
];

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
          marginBottom: 40,
        }}
      >
        See what our clients are saying.
      </p>

      <div
        style={{
          maxWidth: 1080,
          margin: "0 auto",
          backgroundColor: "white",
          padding: 40,
          borderRadius: 0,
        }}
      >
        {testimonials.map((t, i) => (
          <div
            key={i}
            style={{
              borderBottom:
                i < testimonials.length - 1 ? "1px solid #eee" : "none",
              paddingBottom: i < testimonials.length - 1 ? 20 : 0,
              marginBottom: i < testimonials.length - 1 ? 20 : 0,
            }}
          >
            <span
              style={{ fontSize: 24, color: "#333", fontWeight: "bold" }}
              aria-hidden="true"
            >
              &ldquo;
            </span>
            <p
              style={{
                fontSize: 16,
                lineHeight: "27px",
                color: "#666",
                fontStyle: "italic",
                margin: "4px 0 8px",
              }}
            >
              {t.quote}
            </p>
            <p
              style={{
                fontSize: 14,
                color: "#333",
                fontWeight: "bold",
                fontStyle: "italic",
                margin: 0,
              }}
            >
              {t.attribution}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
