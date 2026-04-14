import type { Metadata } from "next";
import Link from "next/link";
import { AreaOfOperationSection } from "@/components/AreaOfOperationSection";
import { Breadcrumb } from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Home Inspector in Delray Beach, FL",
  description:
    "Professional home inspection services in Delray Beach, FL. 4-point, wind mitigation, buyer's & pre-listing inspections. InterNACHI certified.",
  openGraph: {
    title: "Home Inspector in Delray Beach, FL",
    description:
      "Professional home inspection services in Delray Beach, FL. 4-point, wind mitigation, buyer's & pre-listing inspections. InterNACHI certified.",
    url: "https://integrity1-home-inspections.vercel.app/areas/delray-beach",
  },
};

const services = [
  {
    title: "Buyer's Inspection",
    slug: "/services/buyers-inspection",
    description:
      "A comprehensive visual inspection of your prospective home, reporting anything in disrepair or potentially problematic for the future.",
  },
  {
    title: "Pre-Listing / Seller's Inspection",
    slug: "/services/pre-listing-inspection",
    description:
      "Know the true condition of your home before listing it for sale. Avoid surprises during the buyer's inspection process.",
  },
  {
    title: "4-Point Inspection",
    slug: "/services/4-point-inspection",
    description:
      "Examines roof, electrical, plumbing, and HVAC systems to determine liability and potential problems for insurance purposes.",
  },
  {
    title: "Wind Mitigation",
    slug: "/services/wind-mitigation",
    description:
      "Evaluates features that reduce wind damage during hurricanes and storms, which can qualify you for insurance discounts.",
  },
  {
    title: "11-Month Builder's Warranty",
    slug: "/services/builders-warranty-inspection",
    description:
      "Uncover any issues in your new construction before the builder's 12-month warranty expires.",
  },
  {
    title: "Commercial Property Inspection",
    slug: "/services/commercial-inspection",
    description:
      "Thorough inspection of light and heavy commercial buildings, providing operators with detailed condition reports.",
  },
  {
    title: "Pool Inspection",
    slug: "/services/pool-inspection",
    description:
      "Ensures your pool meets Florida state regulations and industry safety standards with a detailed report.",
  },
  {
    title: "Home Maintenance Inspection",
    slug: "/services/home-maintenance-inspection",
    description:
      "For current homeowners who want to maintain their home's condition and value by catching problems early.",
  },
];

const faqs = [
  {
    q: "What areas in Delray Beach do you serve?",
    a: "We serve all of Delray Beach including the downtown Atlantic Avenue corridor, Lake Ida, Tropic Isle, Delray Beach Shores, Barwick Estates, and the western communities along Lyons Road. From oceanfront condos to single-family homes in established neighborhoods, we inspect properties throughout Delray Beach.",
  },
  {
    q: "How much does a home inspection cost in Delray Beach?",
    a: "Home inspection pricing in Delray Beach ranges from $350 to $550 depending on property size, age, and inspection type. Coastal properties and older homes near downtown may have additional considerations. Call (561) 565-8513 for an exact quote tailored to your Delray Beach property.",
  },
  {
    q: "Do you offer pre-listing inspections in Delray Beach?",
    a: "Yes, we offer pre-listing inspections for Delray Beach sellers who want to understand their home's condition before going to market. This proactive approach is especially popular in Delray Beach's competitive real estate market, helping sellers avoid surprises and negotiate from a position of strength.",
  },
  {
    q: "How do I schedule an inspection in Delray Beach?",
    a: "Schedule your Delray Beach home inspection by calling or texting (561) 565-8513, or book online through our HomeGauge scheduling portal. We provide flexible scheduling and fast turnaround on reports to meet your closing deadlines in the Delray Beach real estate market.",
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

export default function DelrayBeachPage() {
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
              name: "Delray Beach, FL",
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "5.0",
              reviewCount: "35",
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
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
            Home Inspections in Delray Beach, Florida
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
            Trusted, certified home inspector serving Delray Beach and
            surrounding neighborhoods
          </p>
        </div>
      </section>

      <Breadcrumb items={[
        { label: "Home", href: "/" },
        { label: "Service Areas", href: "/areas" },
        { label: "Delray Beach" },
      ]} />

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
            Your Local Home Inspector in Delray Beach
          </h2>

          <div style={{ fontSize: 16, lineHeight: "27px", color: "#666" }}>
            <p style={{ marginBottom: 20 }}>
              Delray Beach has earned its reputation as the &quot;Village by the
              Sea,&quot; blending small-town charm with a thriving Atlantic
              Avenue corridor that has become one of South Florida&apos;s
              premier dining and entertainment districts. The city&apos;s
              residential neighborhoods reflect this duality — you will find
              everything from 1940s-era Florida vernacular cottages in the
              historic Marina District to modern townhomes in Midtown Delray
              and luxury oceanfront condominiums along the A1A beachfront.
              Each property type comes with distinct inspection considerations,
              and Integrity1 Home Inspections has the experience to handle
              them all throughout Delray Beach.
            </p>

            <p style={{ marginBottom: 20 }}>
              One of the defining characteristics of Delray Beach real estate is
              the ongoing revitalization that has transformed the downtown core
              and surrounding neighborhoods. In areas like Pineapple Grove and
              the historic Lake Ida neighborhood, older homes are frequently
              renovated or expanded, which can introduce issues like unpermitted
              additions, mismatched roofing systems, or electrical upgrades that
              do not meet current Florida building code. West of I-95, planned
              communities such as Delray Lakes Estates, Rainberry Bay, and
              Huntington Lakes offer CBS construction from the 1980s and 1990s
              where aging flat roofs, original polybutylene plumbing, and
              first-generation impact window retrofits are common findings during
              our inspections. Identifying these issues early helps Delray Beach
              buyers avoid costly surprises after closing.
            </p>

            <p style={{ marginBottom: 40 }}>
              Delray Beach attracts a wide mix of buyers — young professionals
              moving into the walkable downtown, families seeking homes in
              western communities near Morikami Park and Loxahatchee National
              Wildlife Refuge, and seasonal residents looking for low-maintenance
              condo living. Regardless of the property type, Florida&apos;s
              insurance requirements make 4-point and wind mitigation
              inspections essential for Delray Beach homeowners, and our reports
              are formatted to meet every major carrier&apos;s requirements.
              Integrity1 delivers clear, actionable inspection reports that
              help you navigate the Delray Beach real estate market with
              complete confidence in what you are purchasing.
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
            Inspection Services Available in Delray Beach
          </h2>

          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            style={{ marginBottom: 40 }}
          >
            {services.map((service) => (
              <div
                key={service.title}
                style={{
                  backgroundColor: "white",
                  padding: 24,
                  borderRadius: 8,
                  boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
                  borderLeft: "4px solid #2EA3F2",
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
            Why Choose Integrity1 in Delray Beach?
          </h2>

          <ul
            style={{
              fontSize: 16,
              lineHeight: "32px",
              color: "#666",
              paddingLeft: 0,
              marginBottom: 40,
              listStyle: "none",
            }}
          >
            <li><span style={{ color: "#2EA3F2", fontWeight: 700, marginRight: 8 }}>✓</span>InterNACHI Certified Professional Inspector</li>
            <li><span style={{ color: "#2EA3F2", fontWeight: 700, marginRight: 8 }}>✓</span>Florida Licensed — HI13212</li>
            <li><span style={{ color: "#2EA3F2", fontWeight: 700, marginRight: 8 }}>✓</span>Perfect 5.0-star Google rating (35 reviews)</li>
            <li><span style={{ color: "#2EA3F2", fontWeight: 700, marginRight: 8 }}>✓</span>E&amp;O and General Liability insured</li>
            <li>
              <span style={{ color: "#2EA3F2", fontWeight: 700, marginRight: 8 }}>✓</span>Military, veteran, teacher &amp; first-time buyer discounts
            </li>
            <li><span style={{ color: "#2EA3F2", fontWeight: 700, marginRight: 8 }}>✓</span>Detailed digital reports via HomeGauge</li>
          </ul>
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
            Schedule Your Delray Beach Home Inspection Today
          </h2>

          <p style={{ fontSize: 28, fontWeight: 900, color: "white", marginBottom: 8 }}>
            <a
              href="tel:1-561-565-8513"
              style={{ color: "#2EA3F2", textDecoration: "none", fontSize: 28, fontWeight: 900 }}
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
            className="area-btn-book"
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
