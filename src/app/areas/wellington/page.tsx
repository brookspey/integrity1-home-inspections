import type { Metadata } from "next";
import Link from "next/link";
import { AreaOfOperationSection } from "@/components/AreaOfOperationSection";

export const metadata: Metadata = {
  title: "Home Inspector in Wellington, FL",
  description:
    "Professional home inspection services in Wellington, FL. 4-point, wind mitigation, buyer's & pre-listing inspections. InterNACHI certified.",
  openGraph: {
    title: "Home Inspector in Wellington, FL",
    description:
      "Professional home inspection services in Wellington, FL. 4-point, wind mitigation, buyer's & pre-listing inspections. InterNACHI certified.",
    url: "https://integrity1-home-inspections.vercel.app/areas/wellington",
  },
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

export default function WellingtonPage() {
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
              name: "Wellington, FL",
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
            Home Inspections in Wellington, Florida
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
            Trusted, certified home inspector serving Wellington and surrounding
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
            Your Local Home Inspector in Wellington
          </h2>

          <div style={{ fontSize: 16, lineHeight: "27px", color: "#666" }}>
            <p style={{ marginBottom: 20 }}>
              Wellington is internationally recognized as the &quot;Winter
              Equestrian Capital of the World,&quot; and its real estate market
              reflects that unique identity. The village is home to a remarkable
              mix of properties — from equestrian estates with private barns
              and riding arenas in the equestrian preserve west of South Shore
              Boulevard to traditional single-family homes in established
              neighborhoods like Olympia, Madison Green, and The Isles at
              Wellington. This diversity means that a home inspection in
              Wellington may involve evaluating a 5,000-square-foot estate on
              several acres just as readily as a family home in a guard-gated
              community, and Integrity1 Home Inspections brings the expertise
              to handle both with equal thoroughness.
            </p>

            <p style={{ marginBottom: 20 }}>
              Wellington&apos;s housing stock is predominantly CBS (concrete
              block and stucco) construction from the 1990s through the 2010s,
              which means many homes are now in the window where original
              roofing, HVAC systems, and water heaters are reaching end of
              life. Communities like Wellington Shores and Sugar Pond Manor
              feature homes built in the early 1990s where barrel tile roofs
              may need underlayment replacement even if the tiles themselves
              appear sound. In newer developments like Versailles and Paloma,
              builder-grade finishes and fast-track construction timelines
              can result in issues like improper flashing, insufficient attic
              insulation, or stucco cracks around window openings. The
              equestrian properties in Wellington present additional
              considerations including well water systems, septic tanks,
              outbuilding electrical service, and drainage on large lots
              adjacent to the Acme Improvement District canal system.
            </p>

            <p style={{ marginBottom: 40 }}>
              Families consistently rank Wellington among the best places to
              live in Palm Beach County thanks to highly rated schools like
              Wellington Landings Middle and Wellington High, extensive park
              systems, and a strong sense of community. The village&apos;s
              western location provides some protection from direct coastal
              storm surge, but wind damage remains a real concern — making
              wind mitigation inspections valuable for Wellington homeowners
              looking to reduce insurance premiums. Whether you are buying your
              first home in Wellington or investing in one of the prestigious
              equestrian properties, Integrity1&apos;s detailed HomeGauge
              reports equip you with everything you need to make a confident,
              informed purchase decision.
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
            Inspection Services Available in Wellington
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
            Why Choose Integrity1 in Wellington?
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
            Schedule Your Wellington Home Inspection Today
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
