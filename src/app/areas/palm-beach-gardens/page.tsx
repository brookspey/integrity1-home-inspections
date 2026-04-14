import type { Metadata } from "next";
import Link from "next/link";
import { AreaOfOperationSection } from "@/components/AreaOfOperationSection";

export const metadata: Metadata = {
  title:
    "Home Inspector in Palm Beach Gardens, FL | Integrity1 Home Inspections",
  description:
    "Professional home inspection services in Palm Beach Gardens, FL. 4-point, wind mitigation, buyer's & pre-listing inspections. 5-star rated, InterNACHI certified. Call (561) 565-8513.",
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

export default function PalmBeachGardensPage() {
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
              name: "Palm Beach Gardens, FL",
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
            Home Inspections in Palm Beach Gardens, Florida
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
            Trusted, certified home inspector serving Palm Beach Gardens and
            surrounding neighborhoods
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
            Your Local Home Inspector in Palm Beach Gardens
          </h2>

          <div style={{ fontSize: 16, lineHeight: "27px", color: "#666" }}>
            <p style={{ marginBottom: 20 }}>
              Palm Beach Gardens is one of northern Palm Beach County&apos;s
              most prestigious communities, anchored by world-class golf
              courses, upscale shopping at The Gardens Mall and Downtown at the
              Gardens, and a residential landscape defined by meticulously
              planned neighborhoods. From the gated luxury of Old Palm Golf
              Club and BallenIsles Country Club to the family-friendly
              communities of Evergrene, Mirasol, and Frenchman&apos;s Reserve,
              Palm Beach Gardens offers a wide spectrum of properties that each
              require careful professional inspection. Integrity1 Home
              Inspections serves Palm Beach Gardens buyers and sellers who
              expect the same standard of quality in their inspection report
              that they expect from the community itself.
            </p>

            <p style={{ marginBottom: 20 }}>
              The majority of Palm Beach Gardens residential development
              occurred from the late 1980s through the 2000s, with many of the
              city&apos;s premier neighborhoods built during the early 2000s
              construction boom. This means a large portion of the housing
              stock is now 15 to 25 years old — an age where roofing systems,
              particularly barrel tile with underlayment, frequently need
              attention. In communities like PGA National, where homes cluster
              around the championship golf courses, we commonly find aging
              pool equipment, lanai screen enclosures with corroding frames,
              and HVAC systems operating beyond their efficient lifespan. The
              newer Avenir development on the city&apos;s western edge
              presents different inspection priorities, including builder
              warranty evaluations and ensuring new-construction homes meet
              Florida&apos;s current energy code and hurricane protection
              standards before the builder&apos;s warranty period closes.
            </p>

            <p style={{ marginBottom: 40 }}>
              Palm Beach Gardens continues to attract high-earning
              professionals and families drawn to its excellent schools in the
              Palm Beach Gardens school zone, safe neighborhoods, and
              convenient access to I-95 and the Florida Turnpike. The city&apos;s
              real estate values reflect this desirability, with median home
              prices well above the county average. At these price points,
              a thorough home inspection is not optional — it is essential
              financial protection. Joel Donoghue and Integrity1 Home
              Inspections deliver comprehensive evaluations of Palm Beach
              Gardens properties, from the mechanical systems to the building
              envelope, ensuring you have complete knowledge of your
              investment before you commit.
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
            Inspection Services Available in Palm Beach Gardens
          </h2>

          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            style={{ marginBottom: 40 }}
          >
            {services.map((service) => (
              <div
                key={service.title}
                style={{
                  border: "1px solid #e0e0e0",
                  padding: 24,
                  borderRadius: 4,
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
            Why Choose Integrity1 in Palm Beach Gardens?
          </h2>

          <ul
            style={{
              fontSize: 16,
              lineHeight: "32px",
              color: "#666",
              paddingLeft: 20,
              marginBottom: 40,
            }}
          >
            <li>InterNACHI Certified Professional Inspector</li>
            <li>Florida Licensed — HI13212</li>
            <li>Perfect 5.0-star Google rating (35 reviews)</li>
            <li>E&amp;O and General Liability insured</li>
            <li>
              Military, veteran, teacher &amp; first-time buyer discounts
            </li>
            <li>Detailed digital reports via HomeGauge</li>
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
            Schedule Your Palm Beach Gardens Home Inspection Today
          </h2>

          <p style={{ fontSize: 24, color: "white", marginBottom: 8 }}>
            <a
              href="tel:1-561-565-8513"
              style={{ color: "#2EA3F2", textDecoration: "none" }}
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
