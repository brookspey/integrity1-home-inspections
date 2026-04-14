import type { Metadata } from "next";
import Link from "next/link";
import { AreaOfOperationSection } from "@/components/AreaOfOperationSection";

export const metadata: Metadata = {
  title: "Home Inspector in Boca Raton, FL | Integrity1 Home Inspections",
  description:
    "Professional home inspection services in Boca Raton, FL. 4-point, wind mitigation, buyer's & pre-listing inspections. 5-star rated, InterNACHI certified. Call (561) 565-8513.",
};

const services = [
  {
    title: "Buyer's Inspection",
    slug: "/services/buyers-inspection",
    description:
      "A comprehensive visual inspection of your prospective home, reporting anything in disrepair or potentially problematic for the future.",
  },
  {
    title: "Pre-Listing / Seller's Inspection",
    slug: "/services/pre-listing-inspection",
    description:
      "Know the true condition of your home before listing it for sale. Avoid surprises during the buyer's inspection process.",
  },
  {
    title: "4-Point Inspection",
    slug: "/services/4-point-inspection",
    description:
      "Examines roof, electrical, plumbing, and HVAC systems to determine liability and potential problems for insurance purposes.",
  },
  {
    title: "Wind Mitigation",
    slug: "/services/wind-mitigation",
    description:
      "Evaluates features that reduce wind damage during hurricanes and storms, which can qualify you for insurance discounts.",
  },
  {
    title: "11-Month Builder's Warranty",
    slug: "/services/builders-warranty-inspection",
    description:
      "Uncover any issues in your new construction before the builder's 12-month warranty expires.",
  },
  {
    title: "Commercial Property Inspection",
    slug: "/services/commercial-inspection",
    description:
      "Thorough inspection of light and heavy commercial buildings, providing operators with detailed condition reports.",
  },
  {
    title: "Pool Inspection",
    slug: "/services/pool-inspection",
    description:
      "Ensures your pool meets Florida state regulations and industry safety standards with a detailed report.",
  },
  {
    title: "Home Maintenance Inspection",
    slug: "/services/home-maintenance-inspection",
    description:
      "For current homeowners who want to maintain their home's condition and value by catching problems early.",
  },
];

export default function BocaRatonPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HomeInspector",
            name: "Integrity1 Home Inspections LLC",
            telephone: "(561) 565-8513",
            areaServed: {
              "@type": "City",
              name: "Boca Raton, FL",
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "5.0",
              reviewCount: "35",
            },
          }),
        }}
      />

      {/* Hero */}
      <section
        style={{
          backgroundImage: "url(/images/bluebanner3.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "50% 0%",
          backgroundColor: "rgb(38, 53, 86)",
          padding: "80px 0",
          textAlign: "center",
        }}
      >
        <div className="mx-auto" style={{ maxWidth: 1080, padding: "0 20px" }}>
          <h1
            className="font-heading"
            style={{
              fontSize: 48,
              lineHeight: "54px",
              fontWeight: 900,
              color: "white",
              marginBottom: 16,
            }}
          >
            Home Inspections in Boca Raton, Florida
          </h1>
          <p
            style={{
              fontSize: 20,
              lineHeight: "30px",
              color: "rgba(255,255,255,0.9)",
              maxWidth: 700,
              margin: "0 auto",
            }}
          >
            Trusted, certified home inspector serving Boca Raton and surrounding
            neighborhoods
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section style={{ backgroundColor: "white", padding: "54px 0" }}>
        <div className="mx-auto" style={{ maxWidth: 1080, padding: "0 20px" }}>
          <h2
            className="font-heading"
            style={{
              backgroundColor: "rgb(62, 100, 175)",
              color: "white",
              fontSize: 36,
              lineHeight: "36px",
              fontWeight: 900,
              padding: "20px 20px 20px 38px",
              marginBottom: 27,
            }}
          >
            Your Local Home Inspector in Boca Raton
          </h2>

          <div style={{ fontSize: 16, lineHeight: "27px", color: "#666" }}>
            <p style={{ marginBottom: 20 }}>
              Boca Raton is one of South Florida&apos;s most sought-after
              communities, known for its master-planned neighborhoods, strict
              architectural standards, and resort-style living. The city&apos;s
              real estate landscape is dominated by planned communities like
              Boca West, Woodfield Country Club, and The Bridges — gated
              developments where HOA-maintained exteriors can sometimes mask
              underlying structural or mechanical issues that only a
              professional inspection will reveal. Integrity1 Home Inspections
              brings detailed, impartial evaluations to Boca Raton buyers and
              sellers who need to understand the true condition of their property
              beyond the curb appeal.
            </p>

            <p style={{ marginBottom: 20 }}>
              Much of Boca Raton&apos;s housing was built during the construction
              booms of the 1980s and 1990s, and these properties are now reaching
              the age where major systems — roofing, air conditioning, water
              heaters, and electrical panels — approach the end of their expected
              lifespan. Condominium buyers along the A1A corridor in communities
              like Mizner Grand or Townsend Place face additional considerations
              such as balcony waterproofing, shared plumbing risers, and the
              structural integrity concerns that have gained statewide attention
              since Florida&apos;s updated condo safety legislation. For single-family
              homes in neighborhoods like Royal Palm Yacht &amp; Country Club or the
              tree-lined streets of Boca Raton Square, our inspectors evaluate
              everything from hurricane impact window installations to pool
              barrier compliance, giving you a complete picture of the property.
            </p>

            <p style={{ marginBottom: 40 }}>
              Boca Raton&apos;s real estate market remains competitive, with
              strong demand from relocating families, seasonal residents, and
              investors. Homes in the Boca Raton area frequently sell quickly,
              and buyers sometimes feel pressure to waive inspections to stay
              competitive. This is precisely when an inspection matters most.
              With Integrity1, you receive a thorough HomeGauge report that
              documents every finding with photos and descriptions, helping
              you negotiate effectively or simply move forward with peace of
              mind. Joel Donoghue&apos;s knowledge of Boca Raton building
              practices and common deficiencies in the area&apos;s housing stock
              means nothing gets overlooked.
            </p>
          </div>

          {/* Services Grid */}
          <h2
            className="font-heading"
            style={{
              backgroundColor: "rgb(62, 100, 175)",
              color: "white",
              fontSize: 36,
              lineHeight: "36px",
              fontWeight: 900,
              padding: "20px 20px 20px 38px",
              marginBottom: 27,
            }}
          >
            Inspection Services Available in Boca Raton
          </h2>

          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            style={{ marginBottom: 40 }}
          >
            {services.map((service) => (
              <div
                key={service.title}
                style={{
                  backgroundColor: "white",
                  padding: 24,
                  borderRadius: 8,
                  boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
                  borderLeft: "4px solid #2EA3F2",
                }}
              >
                <h3
                  className="font-heading"
                  style={{
                    fontSize: 22,
                    fontWeight: 900,
                    color: "rgb(38, 53, 86)",
                    marginBottom: 8,
                  }}
                >
                  {service.title}
                </h3>
                <p
                  style={{
                    fontSize: 16,
                    lineHeight: "27px",
                    color: "#666",
                    marginBottom: 12,
                  }}
                >
                  {service.description}
                </p>
                <Link
                  href={service.slug}
                  style={{
                    color: "#2EA3F2",
                    fontSize: 16,
                    fontWeight: 700,
                    textDecoration: "none",
                  }}
                >
                  Learn More →
                </Link>
              </div>
            ))}
          </div>

          {/* Why Choose Us */}
          <h2
            className="font-heading"
            style={{
              backgroundColor: "rgb(62, 100, 175)",
              color: "white",
              fontSize: 36,
              lineHeight: "36px",
              fontWeight: 900,
              padding: "20px 20px 20px 38px",
              marginBottom: 27,
            }}
          >
            Why Choose Integrity1 in Boca Raton?
          </h2>

          <ul
            style={{
              fontSize: 16,
              lineHeight: "32px",
              color: "#666",
              paddingLeft: 0,
              marginBottom: 40,
              listStyle: "none",
            }}
          >
            <li><span style={{ color: "#2EA3F2", fontWeight: 700, marginRight: 8 }}>✓</span>InterNACHI Certified Professional Inspector</li>
            <li><span style={{ color: "#2EA3F2", fontWeight: 700, marginRight: 8 }}>✓</span>Florida Licensed — HI13212</li>
            <li><span style={{ color: "#2EA3F2", fontWeight: 700, marginRight: 8 }}>✓</span>Perfect 5.0-star Google rating (35 reviews)</li>
            <li><span style={{ color: "#2EA3F2", fontWeight: 700, marginRight: 8 }}>✓</span>E&amp;O and General Liability insured</li>
            <li>
              <span style={{ color: "#2EA3F2", fontWeight: 700, marginRight: 8 }}>✓</span>Military, veteran, teacher &amp; first-time buyer discounts
            </li>
            <li><span style={{ color: "#2EA3F2", fontWeight: 700, marginRight: 8 }}>✓</span>Detailed digital reports via HomeGauge</li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          backgroundColor: "rgb(38, 53, 86)",
          padding: "54px 0",
          textAlign: "center",
        }}
      >
        <div className="mx-auto" style={{ maxWidth: 1080, padding: "0 20px" }}>
          <h2
            className="font-heading"
            style={{
              fontSize: 36,
              lineHeight: "42px",
              fontWeight: 900,
              color: "white",
              marginBottom: 16,
            }}
          >
            Schedule Your Boca Raton Home Inspection Today
          </h2>

          <p style={{ fontSize: 28, fontWeight: 900, color: "white", marginBottom: 8 }}>
            <a
              href="tel:1-561-565-8513"
              style={{ color: "#2EA3F2", textDecoration: "none", fontSize: 28, fontWeight: 900 }}
            >
              (561) 565-8513
            </a>
          </p>

          <p
            style={{
              fontSize: 16,
              lineHeight: "27px",
              color: "rgba(255,255,255,0.85)",
              marginBottom: 24,
            }}
          >
            Discounts available for military, veterans, first responders,
            teachers, and first-time homebuyers.
          </p>

          <a
            className="area-btn-book"
            href="https://www.homegauge.com/appointment/schedule.htmls?companyId=47338"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              backgroundColor: "#2EA3F2",
              color: "white",
              padding: "14px 32px",
              borderRadius: 5,
              fontSize: 16,
              fontWeight: 700,
              letterSpacing: 2,
              textTransform: "uppercase",
              textDecoration: "none",
            }}
          >
            Book Online
          </a>
        </div>
      </section>

      <AreaOfOperationSection />
    </>
  );
}
