import { Metadata } from "next";
import { AreaOfOperationSection } from "@/components/AreaOfOperationSection";

export const metadata: Metadata = {
  title:
    "Home Maintenance Inspection in Palm Beach County | Integrity1 Home Inspections",
  description:
    "Annual home maintenance inspection in Palm Beach County. Catch small problems before they become expensive repairs. Call (561) 565-8513 to schedule.",
};

const inspectionItems = [
  "Roof condition: missing or damaged shingles, tiles, or flat roof membrane",
  "Gutters, downspouts, and drainage system function",
  "Exterior caulking, paint, and weather sealing deterioration",
  "Window and door seals, hardware, and operational condition",
  "HVAC system performance, filter condition, and refrigerant line insulation",
  "Water heater age, condition, and safety valve operation",
  "Plumbing fixtures for leaks, corrosion, and water pressure issues",
  "Electrical panel condition, breaker operation, and GFCI/AFCI function",
  "Smoke and carbon monoxide detector operation and placement",
  "Attic insulation condition and ventilation adequacy",
  "Signs of moisture intrusion, mold, or wood-destroying organisms",
  "Appliance condition and operation",
  "Exterior grading and drainage away from foundation",
  "Irrigation system operation and coverage",
  "Screen enclosure, lanai, and patio structural condition",
];

const faqs = [
  {
    q: "How often should I schedule a home maintenance inspection?",
    a: "We recommend an annual home maintenance inspection for properties in Palm Beach County. Florida's intense heat, humidity, UV exposure, and hurricane seasons accelerate wear on building systems faster than most other climates. An annual inspection in West Palm Beach or Boca Raton catches deterioration early when repairs are affordable.",
  },
  {
    q: "What does a home maintenance inspection cover?",
    a: "The inspection covers all major systems and components including the roof, gutters, exterior caulking, windows, HVAC, water heater, plumbing, electrical, smoke detectors, attic insulation, moisture intrusion signs, appliances, grading, irrigation, and screen enclosures. You receive a prioritized report that serves as your maintenance roadmap.",
  },
  {
    q: "What are the benefits of a maintenance inspection versus waiting for problems?",
    a: "Catching a small roof leak or HVAC issue early can save thousands of dollars compared to emergency repairs. In Palm Beach County's climate, moisture intrusion left unchecked leads to mold and structural damage quickly. A maintenance inspection also helps you budget for upcoming replacements like an aging water heater or AC system.",
  },
  {
    q: "How does a maintenance inspection help preserve my home's value?",
    a: "Regular inspections document your home's condition over time and ensure all systems stay in good working order. When you decide to sell in Jupiter, Delray Beach, or Wellington, having a history of professional maintenance inspections demonstrates responsible ownership and can support a higher asking price during negotiations.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.a },
  })),
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Home Maintenance Inspection",
  provider: {
    "@type": "HomeInspector",
    name: "Integrity1 Home Inspections LLC",
  },
  areaServed: "Palm Beach County, FL",
  description:
    "Comprehensive home maintenance inspection for current homeowners to identify needed repairs and prevent costly future problems.",
};

export default function HomeMaintenanceInspectionPage() {
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
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
            Home Maintenance Inspection
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
            Protect the value of your home by catching small problems before
            they become expensive repairs.
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
              What Is a Home Maintenance Inspection?
            </h2>

            <p
              style={{
                fontSize: 16,
                lineHeight: "27px",
                color: "#666",
                marginBottom: 16,
              }}
            >
              A home maintenance inspection is a proactive service designed
              for current homeowners who want to stay ahead of repairs and
              preserve their property&apos;s value. Unlike a buyer&apos;s
              inspection that occurs during a real estate transaction, a
              maintenance inspection is something you schedule periodically
              to get a professional assessment of your home&apos;s current
              condition. In Palm Beach County, where Florida&apos;s climate
              puts extraordinary stress on building materials and systems,
              regular maintenance inspections can prevent small issues from
              becoming major, expensive problems.
            </p>

            <p
              style={{
                fontSize: 16,
                lineHeight: "27px",
                color: "#666",
                marginBottom: 16,
              }}
            >
              Florida homeowners in West Palm Beach, Boca Raton, and
              Wellington face a unique set of environmental challenges. The
              intense UV radiation degrades roof materials, exterior paint,
              and caulking faster than in most other states. High humidity
              creates conditions for mold growth, wood rot, and corrosion
              of metal components, particularly in coastal areas near
              Jupiter and Delray Beach. Hurricane season brings the risk of
              wind and water damage that may not be immediately apparent.
              An annual or biannual maintenance inspection catches these
              deterioration patterns early, when repairs are still affordable
              and manageable.
            </p>

            <p
              style={{
                fontSize: 16,
                lineHeight: "27px",
                color: "#666",
                marginBottom: 16,
              }}
            >
              Joel Donoghue inspects your home with the same thoroughness
              as a pre-purchase inspection, but the focus shifts to
              maintenance priorities and planning. Rather than simply
              identifying defects, the report helps you understand which
              items need immediate attention, which can be addressed during
              your next maintenance cycle, and which systems are approaching
              the end of their useful life so you can budget accordingly.
              For example, knowing that your HVAC system has three to four
              years of remaining life allows you to plan for replacement
              rather than facing an emergency failure during a Boynton Beach
              summer when repair companies are overwhelmed.
            </p>

            <p
              style={{
                fontSize: 16,
                lineHeight: "27px",
                color: "#666",
                marginBottom: 30,
              }}
            >
              The comprehensive HomeGauge report includes photographs,
              descriptions, and maintenance recommendations for every area
              of your home. Many homeowners in Palm Beach County use this
              report as a roadmap for their annual home maintenance budget,
              prioritizing the most impactful repairs first. As a licensed
              Florida home inspector (HI13212) and InterNACHI Certified
              Professional Inspector, Joel provides an unbiased, professional
              assessment you can trust. Integrity1 Home Inspections carries
              E&amp;O and General Liability insurance, and Joel follows the
              InterNACHI Standards of Practice on every inspection.
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
                Schedule Your Maintenance Inspection
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

      {/* FAQ Section */}
      <section style={{ backgroundColor: "#f9f9f9", padding: "54px 0" }}>
        <div style={{ maxWidth: 1080, margin: "0 auto", padding: "0 20px" }}>
          <h2 className="font-heading" style={{ fontSize: 28, fontWeight: 900, color: "rgb(38, 53, 86)", marginBottom: 24 }}>
            Frequently Asked Questions
          </h2>
          {faqs.map((faq, i) => (
            <details key={i} style={{ borderBottom: "1px solid #e0e0e0", padding: "16px 0" }}>
              <summary style={{ fontSize: 16, fontWeight: 600, color: "rgb(38, 53, 86)", cursor: "pointer", listStyle: "none" }}>
                {faq.q}
              </summary>
              <p style={{ fontSize: 16, lineHeight: "27px", color: "#666", marginTop: 12, paddingLeft: 0 }}>
                {faq.a}
              </p>
            </details>
          ))}
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
