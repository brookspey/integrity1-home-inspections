import { Metadata } from "next";
import { AreaOfOperationSection } from "@/components/AreaOfOperationSection";

export const metadata: Metadata = {
  title:
    "Commercial Property Inspection in Palm Beach County | Integrity1 Home Inspections",
  description:
    "Commercial building inspection for offices, retail, warehouses & industrial properties in Palm Beach County. Protect your investment. Call (561) 565-8513.",
};

const inspectionItems = [
  "Roof system including commercial flat roofs, membrane condition, and drainage",
  "Structural components: steel framing, load-bearing walls, and column integrity",
  "Building envelope: exterior walls, windows, doors, and weatherproofing",
  "Electrical systems: panels, distribution, lighting, and emergency systems",
  "Plumbing systems: commercial fixtures, backflow preventers, and water heaters",
  "HVAC systems: rooftop units, split systems, and commercial ventilation",
  "Fire safety: sprinkler systems, fire exits, extinguishers, and alarm panels",
  "Parking lots, sidewalks, and ADA accessibility features",
  "Loading docks, overhead doors, and warehouse-specific features",
  "Interior finishes: flooring, walls, ceilings, and tenant improvements",
  "Elevators and escalators (visual assessment and maintenance records)",
  "Site drainage, grading, and stormwater management",
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Commercial Property Inspection",
  provider: {
    "@type": "HomeInspector",
    name: "Integrity1 Home Inspections LLC",
  },
  areaServed: "Palm Beach County, FL",
  description:
    "Comprehensive commercial property inspection for offices, retail spaces, warehouses, and industrial buildings in Palm Beach County.",
};

export default function CommercialInspectionPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section
        style={{
          backgroundImage: "url(/images/bluebanner3.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "rgb(38, 53, 86)",
          padding: "80px 0",
        }}
      >
        <div
          className="mx-auto"
          style={{ maxWidth: 1080, padding: "0 20px", textAlign: "center" }}
        >
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
            Commercial Property Inspection
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
            Thorough inspection of commercial buildings and properties to
            protect your business investment.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section style={{ backgroundColor: "white", padding: "54px 0" }}>
        <div
          className="mx-auto flex flex-col lg:flex-row gap-10"
          style={{ maxWidth: 1080, padding: "0 20px" }}
        >
          {/* Left Column */}
          <div className="lg:w-3/5">
            <h2
              className="font-heading"
              style={{
                fontSize: 32,
                lineHeight: "38px",
                fontWeight: 900,
                color: "rgb(38, 53, 86)",
                marginBottom: 16,
              }}
            >
              What Is a Commercial Property Inspection?
            </h2>

            <p
              style={{
                fontSize: 16,
                lineHeight: "27px",
                color: "#666",
                marginBottom: 16,
              }}
            >
              A commercial property inspection is a comprehensive evaluation
              of a non-residential building&apos;s physical condition,
              systems, and structural components. Whether you are purchasing
              a strip mall in Boca Raton, leasing warehouse space in West
              Palm Beach, or evaluating an office building in Jupiter, this
              inspection provides the detailed information you need to make
              a sound business decision. Commercial real estate transactions
              in Palm Beach County involve significant capital, and an
              independent inspection protects you from inheriting expensive
              problems that are not apparent during a standard property tour.
            </p>

            <p
              style={{
                fontSize: 16,
                lineHeight: "27px",
                color: "#666",
                marginBottom: 16,
              }}
            >
              Commercial buildings face unique challenges in South Florida.
              Flat roofing systems common on commercial structures are
              particularly vulnerable to ponding water, UV degradation, and
              hurricane wind uplift. Large-scale HVAC rooftop units operate
              under extreme demand in Florida&apos;s year-round heat, and
              commercial plumbing systems must handle higher volumes and
              comply with stricter backflow prevention requirements. The
              inspection also evaluates fire safety systems, ADA
              compliance features, parking infrastructure, and the building
              envelope, which are all critical for commercial operations and
              regulatory compliance in Palm Beach County.
            </p>

            <p
              style={{
                fontSize: 16,
                lineHeight: "27px",
                color: "#666",
                marginBottom: 16,
              }}
            >
              Joel Donoghue adapts the inspection scope to match the property
              type, whether it is a light commercial storefront in Delray
              Beach, a multi-tenant office complex in Boynton Beach, or a
              heavy industrial facility in the greater Wellington area. The
              inspection report documents the condition and estimated
              remaining useful life of major systems, identifies deferred
              maintenance, and flags code compliance concerns. This
              information is essential for commercial buyers negotiating
              purchase terms, property managers planning capital
              expenditures, and business owners evaluating lease spaces.
            </p>

            <p
              style={{
                fontSize: 16,
                lineHeight: "27px",
                color: "#666",
                marginBottom: 30,
              }}
            >
              The detailed HomeGauge report includes extensive photographic
              documentation and prioritized findings so you can focus on
              the most critical items first. As a licensed Florida home
              inspector (HI13212) and InterNACHI Certified Professional
              Inspector, Joel brings professional rigor and attention to
              detail to every commercial inspection. Integrity1 Home
              Inspections is fully insured with E&amp;O and General
              Liability coverage, providing the protection that commercial
              transactions demand.
            </p>

            <h2
              className="font-heading"
              style={{
                fontSize: 32,
                lineHeight: "38px",
                fontWeight: 900,
                color: "rgb(38, 53, 86)",
                marginBottom: 16,
              }}
            >
              What We Inspect
            </h2>

            <ul
              style={{
                fontSize: 16,
                lineHeight: "27px",
                color: "#666",
                paddingLeft: 20,
                margin: 0,
              }}
            >
              {inspectionItems.map((item) => (
                <li key={item} style={{ marginBottom: 6 }}>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: CTA Card */}
          <div className="lg:w-2/5">
            <div
              style={{
                backgroundColor: "rgb(38, 53, 86)",
                padding: 32,
                borderRadius: 8,
                position: "sticky" as const,
                top: 100,
              }}
            >
              <h3
                className="font-heading"
                style={{
                  fontSize: 24,
                  lineHeight: "30px",
                  fontWeight: 900,
                  color: "white",
                  marginBottom: 20,
                }}
              >
                Schedule Your Commercial Inspection
              </h3>

              <p
                style={{
                  fontSize: 16,
                  lineHeight: "27px",
                  color: "rgba(255,255,255,0.9)",
                  marginBottom: 8,
                }}
              >
                Call or text us today:
              </p>
              <a
                href="tel:1-561-565-8513"
                style={{
                  fontSize: 24,
                  fontWeight: 700,
                  color: "#2EA3F2",
                  textDecoration: "none",
                  display: "block",
                  marginBottom: 20,
                }}
              >
                (561) 565-8513
              </a>

              <a
                href="https://www.homegauge.com/appointment/schedule.htmls?companyId=47338"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "block",
                  textAlign: "center",
                  border: "2px solid #2EA3F2",
                  color: "#2EA3F2",
                  padding: "14px 24px",
                  borderRadius: 5,
                  fontSize: 16,
                  fontWeight: 700,
                  letterSpacing: 2,
                  textTransform: "uppercase",
                  textDecoration: "none",
                  marginBottom: 24,
                }}
              >
                Book Online
              </a>

              <p
                className="font-heading"
                style={{
                  fontSize: 18,
                  fontWeight: 700,
                  color: "white",
                  marginBottom: 12,
                }}
              >
                Serving Palm Beach County
              </p>
              <ul
                style={{
                  fontSize: 15,
                  lineHeight: "24px",
                  color: "rgba(255,255,255,0.85)",
                  paddingLeft: 18,
                  margin: 0,
                }}
              >
                <li>West Palm Beach</li>
                <li>Boca Raton</li>
                <li>Jupiter</li>
                <li>Delray Beach</li>
                <li>Boynton Beach</li>
                <li>Wellington</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section
        style={{
          backgroundColor: "rgb(62, 100, 175)",
          padding: "48px 0",
          textAlign: "center",
        }}
      >
        <div
          className="mx-auto"
          style={{ maxWidth: 1080, padding: "0 20px" }}
        >
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
            Ready to Schedule?
          </h2>
          <p
            style={{
              fontSize: 18,
              lineHeight: "28px",
              color: "rgba(255,255,255,0.9)",
              marginBottom: 24,
              maxWidth: 600,
              margin: "0 auto 24px",
            }}
          >
            We offer discounts for military and veterans, first responders,
            teachers, and first-time homebuyers.
          </p>
          <a
            href="https://www.homegauge.com/appointment/schedule.htmls?companyId=47338"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              border: "2px solid white",
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
            Book Inspection
          </a>
        </div>
      </section>

      <AreaOfOperationSection />
    </>
  );
}
