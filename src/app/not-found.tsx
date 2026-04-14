import Link from "next/link";

export default function NotFound() {
  return (
    <>
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
            Page Not Found
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
            Sorry, the page you&apos;re looking for doesn&apos;t exist.
          </p>
        </div>
      </section>

      {/* Links */}
      <section style={{ backgroundColor: "white", padding: "60px 0", textAlign: "center" }}>
        <div className="mx-auto" style={{ maxWidth: 600, padding: "0 20px" }}>
          <p
            style={{
              fontSize: 18,
              lineHeight: "30px",
              color: "#666",
              marginBottom: 32,
            }}
          >
            The page may have been moved or removed. Here are some helpful links:
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 16,
              alignItems: "center",
            }}
          >
            <Link
              href="/"
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
                minWidth: 220,
                textAlign: "center",
              }}
            >
              Home
            </Link>
            <Link
              href="/services"
              style={{
                display: "inline-block",
                backgroundColor: "rgb(38, 53, 86)",
                color: "white",
                padding: "14px 32px",
                borderRadius: 5,
                fontSize: 16,
                fontWeight: 700,
                letterSpacing: 2,
                textTransform: "uppercase",
                textDecoration: "none",
                minWidth: 220,
                textAlign: "center",
              }}
            >
              Services
            </Link>
            <Link
              href="/contact-us"
              style={{
                display: "inline-block",
                backgroundColor: "rgb(62, 100, 175)",
                color: "white",
                padding: "14px 32px",
                borderRadius: 5,
                fontSize: 16,
                fontWeight: 700,
                letterSpacing: 2,
                textTransform: "uppercase",
                textDecoration: "none",
                minWidth: 220,
                textAlign: "center",
              }}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
