import { Metadata } from "next";
import { AreaOfOperationSection } from "@/components/AreaOfOperationSection";

export const metadata: Metadata = {
  title:
    "4-Point Inspection in Palm Beach County | Integrity1 Home Inspections",
  description:
    "Professional 4-point inspection covering roof, electrical, plumbing & HVAC in Palm Beach County. Required for homeowners insurance. Call (561) 565-8513.",
};

const inspectionItems = [
  "Roof: type of covering, age, overall condition, and estimated remaining life",
  "Roof: evidence of leaks, damage, or improper repairs",
  "Electrical: panel type, capacity, and condition (identifying Federal Pacific, Zinsco, or other recalled panels)",
  "Electrical: wiring type — copper, aluminum, or knob-and-tube",
  "Electrical: proper grounding and bonding",
  "Plumbing: supply line material — copper, CPVC, PEX, galvanized, or polybutylene",
  "Plumbing: drain and waste line material and condition",
  "Plumbing: water heater age, type, and safety features",
  "HVAC: system type, age, and general condition",
  "HVAC: evidence of proper maintenance and operation",
  "HVAC: ductwork condition and air distribution",
  "Photographic documentation of all four systems",
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "4-Point Inspection",
  provider: {
    "@type": "HomeInspector",
    name: "Integrity1 Home Inspections LLC",
  },
  areaServed: "Palm Beach County, FL",
  description:
    "4-point inspection examining roof, electrical, plumbing, and HVAC systems, required by Florida insurance companies for homes over 15 years old.",
};

export default function FourPointInspectionPage() {
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
            4-Point Inspection
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
            Focused evaluation of four critical systems required by Florida
            insurance companies.
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
              What Is a 4-Point Inspection?
            </h2>

            <p
              style={{
                fontSize: 16,
                lineHeight: "27px",
                color: "#666",
                marginBottom: 16,
              }}
            >
              A 4-point inspection is a focused assessment of the four major
              systems that Florida insurance companies consider the highest
              risk: the roof, electrical, plumbing, and HVAC. Unlike a full
              home inspection, the 4-point is specifically designed to help
              insurance underwriters determine whether a property is insurable
              and at what premium level. In Palm Beach County, most insurance
              carriers require this inspection for homes that are 15 years
              old or older, and some require it for newer homes when issuing
              or renewing a homeowners policy.
            </p>

            <p
              style={{
                fontSize: 16,
                lineHeight: "27px",
                color: "#666",
                marginBottom: 16,
              }}
            >
              Florida&apos;s insurance market is among the most complex in
              the country. After years of hurricane damage and rising claims,
              insurers have tightened their underwriting standards
              significantly. If your home in West Palm Beach or Boca Raton
              has an older roof, outdated electrical panel, polybutylene
              plumbing, or an aging HVAC system, your insurance company needs
              documentation of these components before they will issue or
              renew your policy. A failed 4-point inspection does not
              necessarily mean you cannot get insurance, but it does identify
              areas that may need to be updated or replaced to qualify for
              coverage.
            </p>

            <p
              style={{
                fontSize: 16,
                lineHeight: "27px",
                color: "#666",
                marginBottom: 16,
              }}
            >
              Joel Donoghue completes the 4-point inspection using the
              standard forms accepted by Florida insurance carriers. The
              report includes photographs of each system, documentation of
              their age and condition, identification of the materials used,
              and a professional assessment of their current state. If the
              inspection reveals a recalled electrical panel such as Federal
              Pacific or Zinsco, or polybutylene plumbing that is known to
              fail, Joel will clearly note these findings so you understand
              what your insurer will likely require before binding coverage.
            </p>

            <p
              style={{
                fontSize: 16,
                lineHeight: "27px",
                color: "#666",
                marginBottom: 30,
              }}
            >
              Many homeowners in Jupiter, Delray Beach, and Boynton Beach
              schedule their 4-point inspection alongside a wind mitigation
              inspection to save time and potentially reduce their insurance
              costs. As a licensed Florida home inspector (HI13212) with
              InterNACHI certification, Joel provides accurate, insurance-ready
              reports that streamline the underwriting process. Our turnaround
              is fast because we understand that insurance deadlines do not
              wait, and we carry E&amp;O and General Liability insurance for
              your protection.
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
                Schedule Your 4-Point Inspection
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
