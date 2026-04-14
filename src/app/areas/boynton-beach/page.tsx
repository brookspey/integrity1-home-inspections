import type { Metadata } from "next";
import Link from "next/link";
import { AreaOfOperationSection } from "@/components/AreaOfOperationSection";
import { Breadcrumb } from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Home Inspector in Boynton Beach, FL | Integrity1 Home Inspections",
  description:
    "Professional home inspection services in Boynton Beach, FL. 4-point, wind mitigation, buyer's & pre-listing inspections. 5-star rated, InterNACHI certified. Call (561) 565-8513.",
};

const services = [
  {
    title: "Buyer's Inspection",
    slug: "/services",
    description:
      "A comprehensive visual inspection of your prospective home, reporting anything in disrepair or potentially problematic for the future.",
  },
  {
    title: "Pre-Listing / Seller's Inspection",
    slug: "/services",
    description:
      "Know the true condition of your home before listing it for sale. Avoid surprises during the buyer's inspection process.",
  },
  {
    title: "4-Point Inspection",
    slug: "/services",
    description:
      "Examines roof, electrical, plumbing, and HVAC systems to determine liability and potential problems for insurance purposes.",
  },
  {
    title: "Wind Mitigation",
    slug: "/services",
    description:
      "Evaluates features that reduce wind damage during hurricanes and storms, which can qualify you for insurance discounts.",
  },
  {
    title: "11-Month Builder's Warranty",
    slug: "/services",
    description:
      "Uncover any issues in your new construction before the builder's 12-month warranty expires.",
  },
  {
    title: "Commercial Property Inspection",
    slug: "/services",
    description:
      "Thorough inspection of light and heavy commercial buildings, providing operators with detailed condition reports.",
  },
  {
    title: "Pool Inspection",
    slug: "/services",
    description:
      "Ensures your pool meets Florida state regulations and industry safety standards with a detailed report.",
  },
  {
    title: "Home Maintenance Inspection",
    slug: "/services",
    description:
      "For current homeowners who want to maintain their home's condition and value by catching problems early.",
  },
];

export default function BoyntonBeachPage() {
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
              name: "Boynton Beach, FL",
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
            Home Inspections in Boynton Beach, Florida
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
            Trusted, certified home inspector serving Boynton Beach and
            surrounding neighborhoods
          </p>
        </div>
      </section>

      <Breadcrumb items={[
        { label: "Home", href: "/" },
        { label: "Service Areas", href: "/areas" },
        { label: "Boynton Beach" },
      ]} />

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
            Your Local Home Inspector in Boynton Beach
          </h2>

          <div style={{ fontSize: 16, lineHeight: "27px", color: "#666" }}>
            <p style={{ marginBottom: 20 }}>
              Boynton Beach offers some of the most accessible entry points into
              Palm Beach County homeownership, making it a popular destination
              for first-time buyers, growing families, and investors alike.
              Situated between Delray Beach to the south and Lantana to the
              north, Boynton Beach features a wide range of housing from
              affordable single-family homes in neighborhoods like Heart of
              Boynton and Leisureville to newer gated communities in the
              western reaches along Boynton Beach Boulevard near the
              Everglades. This diversity in housing stock means inspection
              needs vary significantly from one Boynton Beach property to the
              next, and Integrity1 Home Inspections tailors every evaluation
              to the specific property and its unique conditions.
            </p>

            <p style={{ marginBottom: 20 }}>
              The eastern side of Boynton Beach, particularly the neighborhoods
              near the marina district and along Federal Highway, includes many
              CBS homes built in the 1960s and 1970s that are now undergoing
              renovation as the area attracts new development. These older
              properties commonly present issues such as aging cast-iron drain
              lines, original terrazzo-over-slab construction with potential
              moisture concerns, Federal Pacific or Zinsco electrical panels
              that insurers flag, and roofing systems well past their rated
              lifespan. In the western communities like Canyon Lakes, Valencia
              Isles, and Heron Bay, the construction is more recent but still
              warrants inspection — builder-grade materials, stucco cracking
              from soil settlement, and HVAC systems reaching the 15-year
              mark are common findings that our Boynton Beach inspections
              regularly uncover.
            </p>

            <p style={{ marginBottom: 40 }}>
              Boynton Beach is experiencing renewed investment in its
              downtown area, with the Town Square development bringing new
              civic buildings, residential units, and retail to the city
              center. For buyers entering this revitalizing market, a
              professional inspection from Integrity1 protects your purchase
              whether you are buying a fixer-upper near Schoolhouse Children&apos;s
              Museum or a move-in-ready home in one of the western
              developments. Our HomeGauge reports provide detailed
              documentation with photos that make it easy to prioritize repairs,
              request seller concessions, or simply understand the maintenance
              needs of your new Boynton Beach home from day one.
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
            Inspection Services Available in Boynton Beach
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
            Why Choose Integrity1 in Boynton Beach?
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
            Schedule Your Boynton Beach Home Inspection Today
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
