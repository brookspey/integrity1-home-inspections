import { Metadata } from "next";
import { AreaOfOperationSection } from "@/components/AreaOfOperationSection";

export const metadata: Metadata = {
  title:
    "Wind Mitigation Inspection in Palm Beach County | Integrity1 Home Inspections",
  description:
    "Wind mitigation inspection in Palm Beach County. Save on homeowners insurance with documented hurricane-resistant features. Call (561) 565-8513.",
};

const inspectionItems = [
  "Roof covering type and FBC (Florida Building Code) compliance year",
  "Roof deck attachment method (staples, 6d nails, 8d nails, or structural screws)",
  "Roof-to-wall connection type (toe nails, clips, single wraps, or double wraps)",
  "Roof geometry (hip, gable, flat, or combination)",
  "Secondary water resistance (SWR) barrier presence",
  "Opening protection: hurricane shutters, impact-rated windows, and doors",
  "Garage door wind rating and reinforcement",
  "Entry door and sliding glass door impact ratings",
  "Documentation of permit history for roof and opening protection upgrades",
  "Photographic evidence of all wind-resistant features for insurance submission",
];

const faqs = [
  {
    q: "How much can I save on insurance with a wind mitigation inspection?",
    a: "Homeowners in Palm Beach County typically save between $500 and $2,000 per year on insurance premiums after a wind mitigation inspection documents qualifying features. Homes built after 2002 or those with impact windows, hurricane shutters, and hip roofs tend to receive the largest discounts from Florida insurers.",
  },
  {
    q: "What features are inspected during a wind mitigation inspection?",
    a: "The inspection evaluates your roof covering type and age, roof deck attachment method, roof-to-wall connections, roof shape, secondary water resistance barriers, and opening protection including impact windows, hurricane shutters, and reinforced garage doors. Joel documents each feature with photos using the official OIR-B1-1802 form.",
  },
  {
    q: "Is a wind mitigation inspection required in Florida?",
    a: "While not legally required, Florida law mandates that insurance companies offer premium discounts for verified wind-resistant features. Without the inspection, you may be paying significantly more than necessary for homeowners insurance in West Palm Beach, Boca Raton, Jupiter, and throughout Palm Beach County.",
  },
  {
    q: "How often do I need a wind mitigation inspection?",
    a: "A wind mitigation inspection report is valid for five years in Florida. You should schedule a new inspection if you make improvements like installing impact windows, replacing your roof, or adding hurricane shutters. These upgrades in Delray Beach or Wellington homes can qualify you for additional insurance credits.",
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
  name: "Wind Mitigation Inspection",
  provider: {
    "@type": "HomeInspector",
    name: "Integrity1 Home Inspections LLC",
  },
  areaServed: "Palm Beach County, FL",
  description:
    "Wind mitigation inspection documenting hurricane-resistant building features to qualify homeowners for insurance premium discounts in Florida.",
};

export default function WindMitigationPage() {
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
            Wind Mitigation Inspection
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
            Document your home&apos;s hurricane-resistant features and
            potentially save hundreds on insurance premiums.
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
              What Is a Wind Mitigation Inspection?
            </h2>

            <p
              style={{
                fontSize: 16,
                lineHeight: "27px",
                color: "#666",
                marginBottom: 16,
              }}
            >
              A wind mitigation inspection documents the construction features
              of your home that help it resist damage from hurricane-force
              winds. Florida law (Section 627.0629, Florida Statutes) requires
              insurance companies to offer premium discounts to homeowners
              whose properties have verified wind-resistant features. In Palm
              Beach County, where hurricane preparedness is a year-round
              concern, this inspection can result in savings of hundreds or
              even thousands of dollars per year on your homeowners insurance
              premium.
            </p>

            <p
              style={{
                fontSize: 16,
                lineHeight: "27px",
                color: "#666",
                marginBottom: 16,
              }}
            >
              The inspection focuses on specific construction details that
              have been proven to reduce wind damage. These include how your
              roof is attached to the walls, what type of roof covering you
              have, whether your openings are protected with impact-rated
              products, and the shape of your roof. Homes built after the
              2002 Florida Building Code update generally have stronger
              wind-resistant features, but even older homes in West Palm
              Beach, Boca Raton, and Jupiter may qualify for significant
              discounts if they have been retrofitted with hurricane shutters,
              impact windows, or an upgraded roof-to-wall connection.
            </p>

            <p
              style={{
                fontSize: 16,
                lineHeight: "27px",
                color: "#666",
                marginBottom: 16,
              }}
            >
              Joel Donoghue completes the official OIR-B1-1802 wind
              mitigation form recognized by all Florida insurance carriers.
              This form requires detailed photographic evidence of each
              wind-resistant feature, and Joel takes care to thoroughly
              document every qualifying element of your home. The report is
              submitted directly to your insurance company, and the resulting
              credits are applied to your premium at your next renewal. Many
              homeowners in Delray Beach, Wellington, and Boynton Beach are
              surprised to learn how much they can save once their home&apos;s
              features are properly documented.
            </p>

            <p
              style={{
                fontSize: 16,
                lineHeight: "27px",
                color: "#666",
                marginBottom: 30,
              }}
            >
              The wind mitigation inspection is one of the best investments a
              Florida homeowner can make. The one-time cost of the inspection
              is typically recouped within the first year of insurance
              savings, and the report is valid for five years. Whether you
              recently purchased a home, replaced your roof, or installed
              impact windows, scheduling a wind mitigation inspection ensures
              you are not overpaying for insurance. As a licensed Florida
              inspector (HI13212) with InterNACHI certification, Joel
              provides accurate, insurance-ready reports with fast turnaround.
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
                Schedule Your Wind Mitigation Inspection
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
