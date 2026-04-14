import type { Metadata } from "next";
import Link from "next/link";
import { AreaOfOperationSection } from "@/components/AreaOfOperationSection";
import { Breadcrumb } from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Home Inspector in Jupiter, FL",
  description:
    "Professional home inspection services in Jupiter, FL. 4-point, wind mitigation, buyer's & pre-listing inspections. InterNACHI certified.",
  openGraph: {
    title: "Home Inspector in Jupiter, FL",
    description:
      "Professional home inspection services in Jupiter, FL. 4-point, wind mitigation, buyer's & pre-listing inspections. InterNACHI certified.",
    url: "https://integrity1-home-inspections.vercel.app/areas/jupiter",
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

export default function JupiterPage() {
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
              name: "Jupiter, FL",
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
            Home Inspections in Jupiter, Florida
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
            Trusted, certified home inspector serving Jupiter and surrounding
            neighborhoods
          </p>
        </div>
      </section>

      <Breadcrumb items={[
        { label: "Home", href: "/" },
        { label: "Service Areas", href: "/areas" },
        { label: "Jupiter" },
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
            Your Local Home Inspector in Jupiter
          </h2>

          <div style={{ fontSize: 16, lineHeight: "27px", color: "#666" }}>
            <p style={{ marginBottom: 20 }}>
              Jupiter sits at the northern tip of Palm Beach County where the
              Loxahatchee River meets the Atlantic Ocean, creating one of
              Florida&apos;s most desirable coastal communities. The town is
              known for its waterfront lifestyle, with properties ranging from
              riverfront estates along Jupiter Inlet Colony to sprawling
              ranch-style homes in Jupiter Farms, a semi-rural community where
              lots of one to five acres are common. Whether you are looking at
              an oceanside condominium in Jupiter Beach, a canal-front home
              in Pennock Point, or a newer build in Abacoa, every property in
              Jupiter deserves a thorough inspection to uncover issues that
              coastal and subtropical conditions can accelerate.
            </p>

            <p style={{ marginBottom: 20 }}>
              Salt air, high humidity, and hurricane exposure make Jupiter
              properties particularly susceptible to corrosion on metal
              components, moisture intrusion around windows and roof
              penetrations, and accelerated wear on exterior finishes.
              Waterfront homes along the Intracoastal in neighborhoods like
              Admirals Cove and Frenchman&apos;s Harbor often have seawall
              conditions, dock electrical systems, and below-grade moisture
              issues that require careful evaluation. Even inland properties in
              the Indiantown Road corridor and around Jonathan Dickinson State
              Park face challenges from Florida&apos;s intense storm seasons,
              making wind mitigation and 4-point inspections especially
              important for Jupiter homeowners seeking proper insurance
              coverage. Integrity1 Home Inspections understands these local
              factors and inspects accordingly.
            </p>

            <p style={{ marginBottom: 40 }}>
              Jupiter&apos;s real estate market draws families attracted to
              top-rated schools in the Jupiter school zone, retirees seeking
              golf-course communities like Jupiter Country Club, and
              professionals commuting to both Palm Beach and the Treasure Coast.
              The town has seen significant new construction in recent years,
              with developments along Indiantown Road and in Abacoa&apos;s
              walkable downtown area. For new builds, our 11-month builder&apos;s
              warranty inspection helps Jupiter homeowners document any
              construction deficiencies before the warranty expires. For resales,
              our comprehensive buyer&apos;s inspection gives you the
              information you need to negotiate from a position of strength in
              Jupiter&apos;s competitive market.
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
            Inspection Services Available in Jupiter
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
            Why Choose Integrity1 in Jupiter?
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
            Schedule Your Jupiter Home Inspection Today
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
