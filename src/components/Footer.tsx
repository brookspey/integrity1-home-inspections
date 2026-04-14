import Link from "next/link";

const services = [
  { name: "Buyer's Inspection", href: "/services/buyers-inspection" },
  { name: "Pre-Listing Inspection", href: "/services/pre-listing-inspection" },
  { name: "4-Point Inspection", href: "/services/4-point-inspection" },
  { name: "Wind Mitigation", href: "/services/wind-mitigation" },
  { name: "Builder's Warranty", href: "/services/builders-warranty-inspection" },
  { name: "Commercial Inspection", href: "/services/commercial-inspection" },
  { name: "Pool Inspection", href: "/services/pool-inspection" },
  { name: "Home Maintenance", href: "/services/home-maintenance-inspection" },
];

const areas = [
  { name: "West Palm Beach", href: "/areas/west-palm-beach" },
  { name: "Boca Raton", href: "/areas/boca-raton" },
  { name: "Jupiter", href: "/areas/jupiter" },
  { name: "Delray Beach", href: "/areas/delray-beach" },
  { name: "Boynton Beach", href: "/areas/boynton-beach" },
  { name: "Wellington", href: "/areas/wellington" },
  { name: "Palm Beach Gardens", href: "/areas/palm-beach-gardens" },
  { name: "Lake Worth", href: "/areas/lake-worth" },
];

export function Footer() {
  return (
    <footer>
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .footer-link { color: rgba(255,255,255,0.8); text-decoration: none; font-size: 14px; line-height: 28px; display: block; transition: opacity 0.2s; }
        .footer-link:hover { opacity: 0.7; }
        .footer-bottom-link { color: rgb(102,102,102); text-decoration: none; transition: color 0.3s; }
        .footer-bottom-link:hover { color: #2EA3F2; }
      `,
        }}
      />

      {/* Main footer */}
      <div style={{ backgroundColor: "rgb(38, 53, 86)", padding: "48px 0" }}>
        <div
          className="mx-auto grid grid-cols-1 md:grid-cols-3 gap-10"
          style={{ maxWidth: 1280, padding: "0 20px" }}
        >
          {/* Column 1: Company */}
          <div>
            <h3
              className="font-heading"
              style={{
                color: "white",
                fontSize: 20,
                fontWeight: 900,
                marginBottom: 12,
              }}
            >
              Integrity1 Home Inspections
            </h3>
            <p
              style={{
                color: "rgba(255,255,255,0.8)",
                fontSize: 14,
                lineHeight: "24px",
                marginBottom: 16,
              }}
            >
              Home inspections, 4-point, wind mitigation, pre-listing,
              commercial, pool, and builder&apos;s warranty inspections in Palm
              Beach County.
            </p>
            <a
              href="tel:1-561-565-8513"
              className="footer-link"
              style={{ fontSize: 18, fontWeight: 700, color: "#2EA3F2" }}
            >
              (561) 565-8513
            </a>
          </div>

          {/* Column 2: Services */}
          <div>
            <h3
              className="font-heading"
              style={{
                color: "white",
                fontSize: 20,
                fontWeight: 900,
                marginBottom: 12,
              }}
            >
              Our Services
            </h3>
            <nav>
              {services.map((s) => (
                <Link key={s.href} href={s.href} className="footer-link">
                  {s.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Column 3: Service Areas */}
          <div>
            <h3
              className="font-heading"
              style={{
                color: "white",
                fontSize: 20,
                fontWeight: 900,
                marginBottom: 12,
              }}
            >
              Areas We Serve
            </h3>
            <nav>
              {areas.map((a) => (
                <Link key={a.href} href={a.href} className="footer-link">
                  {a.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          backgroundColor: "rgb(34, 34, 34)",
          fontSize: 14,
          color: "rgb(102, 102, 102)",
          padding: "20px 0",
          textAlign: "center",
        }}
      >
        <div className="mx-auto" style={{ maxWidth: 1280, padding: "0 20px" }}>
          <p className="m-0">
            Copyright &copy; 2026{" "}
            <Link href="/" className="footer-bottom-link">
              Integrity1 Home Inspections
            </Link>
            {" | Designed By "}
            <a
              href="https://www.homegauge.com/"
              className="footer-bottom-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              HomeGauge
            </a>
            {" Web Services | "}
            <Link href="/privacy-policy" className="footer-bottom-link">
              PRIVACY POLICY
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
