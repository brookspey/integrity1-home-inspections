import { Metadata } from "next";
import { AreaOfOperationSection } from "@/components/AreaOfOperationSection";
import { Breadcrumb } from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "11-Month Builder's Warranty Inspection in Palm Beach County",
  description:
    "Builder's warranty inspection before your 12-month warranty expires. Catch defects in new construction in Palm Beach County. Call (561) 565-8513.",
  openGraph: {
    title: "11-Month Builder's Warranty Inspection in Palm Beach County",
    description:
      "Builder's warranty inspection before your 12-month warranty expires. Catch defects in new construction in Palm Beach County.",
    url: "https://integrity1-home-inspections.vercel.app/services/builders-warranty-inspection",
  },
};

const inspectionItems = [
  "Roof installation quality, flashing, and drainage",
  "Exterior stucco or siding for cracks, gaps, and improper finishing",
  "Window and door installation, seals, and weather stripping",
  "Foundation settling, cracks, or drainage issues",
  "Electrical panel installation, wiring connections, and code compliance",
  "Plumbing fixture installation, water pressure, and drainage function",
  "HVAC system performance, refrigerant line insulation, and duct sealing",
  "Drywall finishing, nail pops, and settling cracks",
  "Paint and caulking quality on interior and exterior",
  "Grading and landscaping drainage away from foundation",
  "Garage door installation and opener operation",
  "Appliance installation and operation",
  "Cabinets, countertops, and trim work quality",
  "Tile and flooring installation defects",
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "11-Month Builder's Warranty Inspection",
  provider: {
    "@type": "HomeInspector",
    name: "Integrity1 Home Inspections LLC",
  },
  areaServed: "Palm Beach County, FL",
  description:
    "Builder's warranty inspection performed before the 12-month new construction warranty expires, identifying defects covered under the builder's warranty.",
};

export default function BuildersWarrantyInspectionPage() {
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
            11-Month / Builder&apos;s Warranty Inspection
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
            Catch construction defects before your builder&apos;s warranty
            expires and avoid costly out-of-pocket repairs.
          </p>
        </div>
      </section>

      <Breadcrumb items={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "11-Month / Builder's Warranty Inspection" },
      ]} />

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
              What Is a Builder&apos;s Warranty Inspection?
            </h2>

            <p
              style={{
                fontSize: 16,
                lineHeight: "27px",
                color: "#666",
                marginBottom: 16,
              }}
            >
              When you purchase a newly constructed home in Palm Beach County,
              the builder typically provides a 12-month warranty covering
              workmanship and materials. An 11-month builder&apos;s warranty
              inspection is performed during that final month before the
              warranty expires, giving you the chance to identify construction
              defects that the builder is still obligated to repair at no cost
              to you. Without this inspection, you risk paying out of pocket
              for issues that should have been the builder&apos;s
              responsibility.
            </p>

            <p
              style={{
                fontSize: 16,
                lineHeight: "27px",
                color: "#666",
                marginBottom: 16,
              }}
            >
              New construction in Florida is booming, particularly in West
              Palm Beach, Wellington, and Jupiter where new developments
              continue to expand. While municipal building inspectors verify
              code compliance during construction, their inspections are
              limited in scope and focused on minimum safety standards. A
              builder&apos;s warranty inspection goes further, examining the
              quality of workmanship, material installation, and finishing
              details that code inspections simply do not cover. Common
              findings include improper stucco application, settling cracks
              in drywall, HVAC duct leaks, poor grading that directs water
              toward the foundation, and window seal failures.
            </p>

            <p
              style={{
                fontSize: 16,
                lineHeight: "27px",
                color: "#666",
                marginBottom: 16,
              }}
            >
              Joel Donoghue has seen firsthand how Florida&apos;s climate
              accelerates the appearance of construction defects. The
              combination of intense heat, driving rain, and high humidity
              can cause problems to surface within the first year that might
              take several years to appear in other climates. Stucco cracks
              that allow moisture intrusion, improperly sealed windows that
              leak during heavy rainstorms, and HVAC systems that struggle
              to maintain temperature in the Florida heat are all common
              findings during warranty inspections in Boca Raton, Delray
              Beach, and surrounding communities.
            </p>

            <p
              style={{
                fontSize: 16,
                lineHeight: "27px",
                color: "#666",
                marginBottom: 30,
              }}
            >
              The detailed HomeGauge report you receive documents every
              deficiency with photographs and clear descriptions, creating
              a professional punch list that you can present to your builder.
              This report carries weight because it comes from a licensed,
              independent Florida home inspector (HI13212) rather than from
              the homeowner alone. Builders take warranty claims more
              seriously when they are supported by a third-party inspection
              report. Integrity1 Home Inspections is insured with E&amp;O
              and General Liability, and Joel follows InterNACHI Standards
              of Practice to ensure every finding is accurate and documented.
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
                Schedule Your Warranty Inspection
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
