import { Metadata } from "next";
import { AreaOfOperationSection } from "@/components/AreaOfOperationSection";
import { Breadcrumb } from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Pre-Listing Seller's Inspection in Palm Beach County",
  description:
    "Pre-listing home inspection for sellers in West Palm Beach, Boca Raton & Palm Beach County. Know your home's true condition before listing.",
  openGraph: {
    title: "Pre-Listing Seller's Inspection in Palm Beach County",
    description:
      "Pre-listing home inspection for sellers in West Palm Beach, Boca Raton & Palm Beach County. Know your home's true condition before listing.",
    url: "https://integrity1-home-inspections.vercel.app/services/pre-listing-inspection",
  },
};

const inspectionItems = [
  "Roof condition, age, and remaining useful life",
  "Foundation and structural integrity",
  "Electrical system including panel, wiring, and safety devices",
  "Plumbing system including supply, waste lines, and water heater",
  "HVAC efficiency, age, and maintenance condition",
  "Exterior walls, stucco, paint, and weatherproofing",
  "Windows and doors including seals, locks, and hurricane protection",
  "Kitchen and bathroom fixtures, ventilation, and moisture issues",
  "Attic insulation, ventilation, and evidence of leaks",
  "Garage, driveway, and walkway conditions",
  "Smoke detectors, carbon monoxide detectors, and safety features",
  "Irrigation system and exterior grading",
];

const faqs = [
  {
    q: "Why should sellers get a pre-listing inspection?",
    a: "A pre-listing inspection gives you full knowledge of your home's condition before buyers discover issues on their own. In Palm Beach County's competitive market, this transparency builds trust with buyers and often results in faster sales at stronger prices. You can address problems on your own timeline rather than scrambling during negotiations.",
  },
  {
    q: "How far in advance of listing should I schedule the inspection?",
    a: "We recommend scheduling your pre-listing inspection 2 to 4 weeks before your planned listing date. This gives you enough time to address any findings and obtain repair estimates if needed. Many sellers in West Palm Beach and Boca Raton use this window to complete minor repairs that could otherwise become negotiation points.",
  },
  {
    q: "How is a pre-listing inspection different from a buyer's inspection?",
    a: "The inspection itself follows the same InterNACHI Standards of Practice and covers the same systems and components. The key difference is timing and purpose. As the seller, you receive the report first and can proactively fix issues, set a realistic asking price, or disclose known conditions to buyers in Delray Beach and surrounding areas.",
  },
  {
    q: "What are the benefits of a pre-listing inspection in Florida?",
    a: "Florida law requires sellers to disclose known material defects. A pre-listing inspection fulfills this obligation with professional documentation. It also reduces the chance of deal-killing surprises during the buyer's inspection, speeds up the closing process, and demonstrates honesty to buyers throughout Palm Beach County.",
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
  name: "Pre-Listing Seller's Inspection",
  provider: {
    "@type": "HomeInspector",
    name: "Integrity1 Home Inspections LLC",
  },
  areaServed: "Palm Beach County, FL",
  description:
    "Pre-listing inspection for home sellers to identify and address issues before putting their property on the market in Palm Beach County.",
};

export default function PreListingInspectionPage() {
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
            Pre-Listing / Seller&apos;s Inspection
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
            Know the true condition of your home before listing it on the
            market.
          </p>
        </div>
      </section>

      <Breadcrumb items={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "Pre-Listing / Seller's Inspection" },
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
              What Is a Pre-Listing Inspection?
            </h2>

            <p
              style={{
                fontSize: 16,
                lineHeight: "27px",
                color: "#666",
                marginBottom: 16,
              }}
            >
              A pre-listing inspection is a proactive step that savvy sellers
              in Palm Beach County take before putting their home on the
              market. Rather than waiting for a buyer&apos;s inspector to
              uncover issues that could derail your sale or reduce your
              asking price, you get a clear and honest picture of your
              property&apos;s condition upfront. This strategy has become
              increasingly popular in competitive Florida markets like West
              Palm Beach, Boca Raton, and Delray Beach, where buyers often
              expect homes to be move-in ready.
            </p>

            <p
              style={{
                fontSize: 16,
                lineHeight: "27px",
                color: "#666",
                marginBottom: 16,
              }}
            >
              Joel Donoghue performs the same thorough, InterNACHI-standard
              inspection that a buyer would receive. The difference is that
              you, the seller, have the opportunity to address deficiencies
              on your own terms and timeline before the listing goes live.
              In Florida, where harsh UV exposure, tropical storms, and high
              humidity take a toll on roofing, stucco, and HVAC systems,
              this advance knowledge can save you thousands of dollars in
              last-minute concessions. Many sellers in Wellington, Boynton
              Beach, and Jupiter have found that fixing known issues before
              listing results in faster sales and stronger offers.
            </p>

            <p
              style={{
                fontSize: 16,
                lineHeight: "27px",
                color: "#666",
                marginBottom: 16,
              }}
            >
              The inspection report you receive is a detailed HomeGauge
              document with photographs and clear descriptions of every
              finding. You can share this report with your listing agent to
              set a realistic asking price, or you can provide it to
              prospective buyers to demonstrate transparency and build trust.
              In Palm Beach County&apos;s real estate market, a pre-listing
              inspection report signals to buyers that you are a serious and
              honest seller, which often translates into smoother
              negotiations and fewer surprises at closing.
            </p>

            <p
              style={{
                fontSize: 16,
                lineHeight: "27px",
                color: "#666",
                marginBottom: 30,
              }}
            >
              Florida law requires sellers to disclose known material
              defects. A pre-listing inspection helps you fulfill this
              obligation with confidence, reducing the risk of post-sale
              disputes. Integrity1 Home Inspections carries E&amp;O and
              General Liability insurance, and Joel follows the InterNACHI
              Standards of Practice and Code of Ethics on every inspection,
              giving you the highest level of professionalism and accuracy.
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
                Schedule Your Pre-Listing Inspection
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
