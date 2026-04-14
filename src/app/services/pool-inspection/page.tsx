import { Metadata } from "next";
import { AreaOfOperationSection } from "@/components/AreaOfOperationSection";

export const metadata: Metadata = {
  title:
    "Visual Pool Inspection in Palm Beach County | Integrity1 Home Inspections",
  description:
    "Visual pool inspection in West Palm Beach, Boca Raton & Palm Beach County. Ensure your pool meets Florida safety standards. Call (561) 565-8513.",
};

const inspectionItems = [
  "Pool shell condition: cracks, staining, delamination, and surface wear",
  "Pool deck condition: trip hazards, cracks, and drainage slope",
  "Coping and tile condition around the pool perimeter",
  "Skimmer and return jet operation and condition",
  "Pool pump and motor operation, age, and visible condition",
  "Pool filter type (cartridge, sand, or DE) and condition",
  "Pool heater or heat pump operation (if equipped)",
  "Safety barrier compliance: fence height, gate latches, and self-closing mechanisms",
  "Pool screen enclosure structure and screen condition",
  "Electrical bonding and grounding of pool equipment",
  "Water level, clarity, and visible algae or staining",
  "Pool lighting condition and GFCI protection",
  "Automatic pool cleaner operation (if present)",
  "Visible plumbing connections and evidence of leaks",
];

const faqs = [
  {
    q: "What does a pool inspection check?",
    a: "Our visual pool inspection covers the pool shell, deck, coping, tile, skimmers, return jets, pump, filter, heater, safety barriers, screen enclosure, electrical bonding, lighting, and visible plumbing connections. We document the condition and estimated age of all major equipment for homebuyers and current owners throughout Palm Beach County.",
  },
  {
    q: "What are Florida's pool safety requirements?",
    a: "Florida's Residential Swimming Pool Safety Act requires specific barrier heights of at least 4 feet, self-closing and self-latching gates, and door alarms or approved safety covers for pools accessible from the home. During inspections in West Palm Beach, Boca Raton, and Jupiter, we verify compliance with these state-mandated safety standards.",
  },
  {
    q: "How long does a pool inspection take?",
    a: "A visual pool inspection typically takes 30 to 45 minutes when performed alongside a home inspection, or about 1 hour as a standalone service. The timeline depends on the pool's size, equipment complexity, and whether there is a spa or additional water features at your Palm Beach County property.",
  },
  {
    q: "What are common pool issues found during inspections in South Florida?",
    a: "Common findings in Palm Beach County include deteriorated pool surfaces needing resurfacing, corroded equipment from salt air exposure near Delray Beach and Boynton Beach, failed safety barrier latches, cracked pool decks, aging pumps and filters, and improper electrical bonding around the pool area.",
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
  name: "Visual Pool Inspection",
  provider: {
    "@type": "HomeInspector",
    name: "Integrity1 Home Inspections LLC",
  },
  areaServed: "Palm Beach County, FL",
  description:
    "Visual pool inspection assessing pool safety, equipment condition, and compliance with Florida regulations in Palm Beach County.",
};

export default function PoolInspectionPage() {
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
            Visual Pool Inspection
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
            Ensure your pool meets Florida safety regulations and is in
            proper working condition.
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
              What Is a Visual Pool Inspection?
            </h2>

            <p
              style={{
                fontSize: 16,
                lineHeight: "27px",
                color: "#666",
                marginBottom: 16,
              }}
            >
              A visual pool inspection is a thorough assessment of your
              swimming pool&apos;s visible condition, equipment, and safety
              features. In Palm Beach County, where pools are a standard
              feature on a significant portion of residential properties,
              understanding the condition of a pool is critical during a real
              estate transaction or for ongoing homeowner maintenance. This
              inspection evaluates everything from the pool shell and deck
              condition to the mechanical equipment and, most importantly,
              the safety barriers that Florida law requires to prevent
              drowning accidents.
            </p>

            <p
              style={{
                fontSize: 16,
                lineHeight: "27px",
                color: "#666",
                marginBottom: 16,
              }}
            >
              Florida has some of the strictest pool safety requirements in
              the country, governed by the Florida Residential Swimming Pool
              Safety Act (Section 515.25, Florida Statutes). This law
              mandates specific barrier heights, self-closing and
              self-latching gates, and door alarms or safety covers for
              pools that are accessible from the home. During a pool
              inspection in West Palm Beach, Boca Raton, or Jupiter, Joel
              Donoghue evaluates whether the pool&apos;s safety features
              comply with these requirements and identifies any deficiencies
              that need to be addressed. Pool safety is not just a legal
              obligation in Florida; it is a critical responsibility for
              every pool owner.
            </p>

            <p
              style={{
                fontSize: 16,
                lineHeight: "27px",
                color: "#666",
                marginBottom: 16,
              }}
            >
              Beyond safety compliance, the inspection assesses the
              condition and functionality of pool equipment. Florida&apos;s
              intense sun and year-round pool use put heavy demands on pumps,
              filters, heaters, and surface finishes. Salt air in coastal
              areas of Delray Beach and Boynton Beach accelerates corrosion
              on metal equipment and fittings. Pool resurfacing,
              equipment replacement, and structural repairs can cost
              thousands of dollars, so identifying these issues before
              purchasing a home or before they become emergencies is a smart
              financial decision.
            </p>

            <p
              style={{
                fontSize: 16,
                lineHeight: "27px",
                color: "#666",
                marginBottom: 30,
              }}
            >
              The inspection report you receive documents every finding with
              photographs and clear descriptions, including the estimated
              age and condition of major equipment. Joel also checks
              electrical bonding and grounding around the pool area, which
              is essential for preventing electric shock. As a licensed
              Florida home inspector (HI13212) and InterNACHI Certified
              Professional Inspector, Joel provides a professional,
              unbiased assessment. Integrity1 Home Inspections carries
              E&amp;O and General Liability insurance, and serves pool owners
              and homebuyers throughout Wellington and the greater Palm
              Beach County area.
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
                Schedule Your Pool Inspection
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
