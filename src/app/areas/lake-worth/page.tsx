import type { Metadata } from "next";
import Link from "next/link";
import { AreaOfOperationSection } from "@/components/AreaOfOperationSection";

export const metadata: Metadata = {
  title:
    "Home Inspector in Lake Worth Beach, FL | Integrity1 Home Inspections",
  description:
    "Professional home inspection services in Lake Worth Beach, FL. 4-point, wind mitigation, buyer's & pre-listing inspections. 5-star rated, InterNACHI certified. Call (561) 565-8513.",
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

export default function LakeWorthPage() {
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
              name: "Lake Worth Beach, FL",
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
            Home Inspections in Lake Worth Beach, Florida
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
            Trusted, certified home inspector serving Lake Worth Beach and
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
            Your Local Home Inspector in Lake Worth Beach
          </h2>

          <div style={{ fontSize: 16, lineHeight: "27px", color: "#666" }}>
            <p style={{ marginBottom: 20 }}>
              Lake Worth Beach — officially renamed from Lake Worth in 2019 —
              is one of Palm Beach County&apos;s most character-rich
              communities, known for its eclectic downtown, vibrant arts scene
              along Lake and Lucerne Avenues, and a housing market that
              attracts everyone from artists and young professionals to
              investors seeking renovation opportunities. The city&apos;s
              residential fabric is distinct from its neighbors: compact lots
              with frame and CBS cottages from the 1920s through 1950s define
              the historic core, while the areas east of Federal Highway toward
              the Lake Worth Beach pier feature a mix of mid-century
              apartments and oceanside condominiums. Integrity1 Home
              Inspections understands the specific challenges that Lake Worth
              Beach properties present and delivers inspections tailored to
              each property&apos;s age, construction type, and condition.
            </p>

            <p style={{ marginBottom: 20 }}>
              The historic districts of Lake Worth Beach, including the College
              Park and South Palm Park neighborhoods, contain some of the
              oldest residential construction in Palm Beach County. These homes
              frequently feature knob-and-tube or early cloth-wrapped wiring,
              galvanized steel water supply lines that corrode from the inside,
              original wood-frame construction vulnerable to termite damage,
              and roof structures that predate modern hurricane building codes.
              Many of these properties have been renovated over the decades,
              sometimes with a mix of permitted and unpermitted work that
              creates a patchwork of old and new systems. Our inspectors know
              exactly what to look for in Lake Worth Beach&apos;s older housing
              stock and can distinguish between cosmetic updates and genuine
              system upgrades. West of I-95, the unincorporated Lake Worth
              corridor includes communities like Palm Springs and Greenacres
              where 1970s and 1980s CBS ranch homes are common, each with
              their own age-related inspection priorities.
            </p>

            <p style={{ marginBottom: 40 }}>
              Lake Worth Beach has seen significant reinvestment in recent
              years, with its downtown designated as a Community Redevelopment
              Area and new mixed-use projects bringing fresh energy to the
              Lake Avenue corridor. For buyers entering this market, a
              professional home inspection is especially critical because
              the price-to-condition gap can be significant — a beautifully
              staged home may conceal aging infrastructure that requires
              substantial investment. Integrity1 provides Lake Worth Beach
              buyers with the full picture through detailed HomeGauge reports,
              and our 4-point and wind mitigation inspections help homeowners
              secure the insurance coverage they need in a market where
              carriers are increasingly selective about older properties.
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
            Inspection Services Available in Lake Worth Beach
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
            Why Choose Integrity1 in Lake Worth Beach?
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
            Schedule Your Lake Worth Beach Home Inspection Today
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
