import { Metadata } from "next";
import { AreaOfOperationSection } from "@/components/AreaOfOperationSection";

export const metadata: Metadata = {
  title:
    "Buyer's Home Inspection in Palm Beach County | Integrity1 Home Inspections",
  description:
    "Comprehensive buyer's home inspection in West Palm Beach, Boca Raton & Jupiter. Detailed reports covering all major systems. Call (561) 565-8513 to schedule.",
};

const inspectionItems = [
  "Roof covering, flashing, and drainage systems",
  "Structural components including foundation, framing, and load-bearing walls",
  "Exterior siding, trim, windows, and doors",
  "Electrical panels, wiring, outlets, and GFCI protection",
  "Plumbing supply lines, drain lines, water heater, and fixtures",
  "HVAC system including air handler, condenser, and ductwork",
  "Attic structure, insulation, and ventilation",
  "Kitchen appliances, countertops, and cabinetry",
  "Bathrooms including tile, caulking, and moisture intrusion signs",
  "Garage structure, door operation, and fire separation",
  "Interior walls, ceilings, and flooring throughout",
  "Grading and drainage around the property",
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Buyer's Home Inspection",
  provider: {
    "@type": "HomeInspector",
    name: "Integrity1 Home Inspections LLC",
  },
  areaServed: "Palm Beach County, FL",
  description:
    "Comprehensive buyer's home inspection covering all major systems and components for homebuyers in Palm Beach County.",
};

export default function BuyersInspectionPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        .svc-btn-sidebar { transition: background-color 0.2s, color 0.2s; }
        .svc-btn-sidebar:hover { background-color: #2EA3F2 !important; color: white !important; }
        .svc-btn-bottom { transition: background-color 0.2s, color 0.2s, border-color 0.2s; }
        .svc-btn-bottom:hover { background-color: white !important; color: rgb(62, 100, 175) !important; border-color: white !important; }
      ` }} />

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
            Buyer&apos;s Home Inspection
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
            A thorough evaluation of every accessible system and component
            before you commit to your next home.
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
              What Is a Buyer&apos;s Home Inspection?
            </h2>

            <p
              style={{
                fontSize: 16,
                lineHeight: "27px",
                color: "#666",
                marginBottom: 16,
              }}
            >
              A buyer&apos;s home inspection is a comprehensive visual
              examination of a residential property performed before you
              finalize a purchase. In Palm Beach County, where homes face unique
              challenges from Florida&apos;s subtropical climate, salt air
              exposure, and intense hurricane seasons, this inspection is one of
              the most important steps you can take to protect your investment.
              Joel Donoghue, a licensed Florida home inspector (HI13212) and
              InterNACHI Certified Professional Inspector, evaluates every
              accessible system and structural component so you understand
              exactly what you are buying.
            </p>

            <p
              style={{
                fontSize: 16,
                lineHeight: "27px",
                color: "#666",
                marginBottom: 16,
              }}
            >
              Whether you are purchasing a waterfront condo in Boca Raton, a
              single-family home in West Palm Beach, or a townhouse in Jupiter,
              this inspection uncovers defects that are not visible during a
              casual walkthrough. Florida&apos;s warm, humid environment creates
              conditions for moisture intrusion, wood-destroying organisms, and
              accelerated wear on roofing and HVAC systems. Our inspection
              identifies these issues early so you can negotiate repairs, adjust
              your offer, or simply make an informed decision before closing.
            </p>

            <p
              style={{
                fontSize: 16,
                lineHeight: "27px",
                color: "#666",
                marginBottom: 16,
              }}
            >
              After the inspection, you receive a detailed, easy-to-read
              HomeGauge report delivered digitally. This report includes
              high-resolution photographs, descriptions of every deficiency
              found, and a summary of items that may need immediate attention
              versus routine maintenance. The report is designed to be shared
              with your real estate agent, attorney, or lender so all parties
              have a clear picture of the property&apos;s condition. In
              Florida&apos;s competitive real estate market, having a thorough
              inspection report gives you the leverage and confidence you need
              during negotiations.
            </p>

            <p
              style={{
                fontSize: 16,
                lineHeight: "27px",
                color: "#666",
                marginBottom: 30,
              }}
            >
              Integrity1 Home Inspections is fully insured with Errors &amp;
              Omissions and General Liability coverage, providing you with
              additional peace of mind. We follow the InterNACHI Standards of
              Practice and Code of Ethics on every inspection, ensuring nothing
              is overlooked. Serving homebuyers throughout Wellington, Delray
              Beach, Boynton Beach, and the greater Palm Beach County area, we
              are committed to helping you buy with confidence.
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
                paddingLeft: 0,
                margin: 0,
                listStyle: "none",
              }}
            >
              {inspectionItems.map((item) => (
                <li key={item} style={{ marginBottom: 6 }}>
                  <span style={{ color: "#2EA3F2", fontWeight: 700, marginRight: 8 }}>✓</span>
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
                boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
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
                Schedule Your Buyer&apos;s Inspection
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
                className="svc-btn-sidebar"
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
          padding: "60px 0",
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
            className="svc-btn-bottom"
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
