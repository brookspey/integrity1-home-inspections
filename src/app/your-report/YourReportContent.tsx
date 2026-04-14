import Image from "next/image";

export default function YourReportContent() {
  return (
    <section
      style={{
        backgroundImage: "url(/images/bluebanner3.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "50% 0%",
        backgroundColor: "rgb(38, 53, 86)",
        padding: "54px 0 80px",
        minHeight: "60vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* Page heading */}
      <h1
        style={{
          fontFamily: "var(--font-heading)",
          fontSize: 62,
          lineHeight: "62px",
          fontWeight: 900,
          color: "white",
          textAlign: "center",
          textTransform: "uppercase",
          marginBottom: 10,
        }}
      >
        Your Report
      </h1>

      {/* Subtext */}
      <p
        style={{
          fontSize: 16,
          lineHeight: "27px",
          color: "rgba(255,255,255,0.8)",
          textAlign: "center",
          marginBottom: 40,
          padding: "0 20px",
        }}
      >
        View your completed inspection report on our secure HomeGauge portal.
      </p>

      {/* Card */}
      <div
        style={{
          backgroundColor: "white",
          padding: 40,
          textAlign: "center",
          maxWidth: 400,
          width: "100%",
        }}
      >
        <div style={{ marginBottom: 10 }}>
          <Image
            src="/images/Logo-150x150.png"
            alt="Logo"
            width={150}
            height={150}
            style={{ display: "inline-block" }}
          />
        </div>

        <h2
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: 20,
            lineHeight: "20px",
            fontWeight: 500,
            color: "rgb(62, 100, 175)",
            textAlign: "center",
            padding: "10px 0",
            marginBottom: 20,
          }}
        >
          VIEW YOUR INSPECTION
        </h2>

        <p
          style={{
            fontSize: 15,
            lineHeight: "24px",
            color: "#666",
            marginBottom: 24,
          }}
        >
          Click below to log in and access your detailed inspection report.
        </p>

        <a
          href="https://www.homegauge.com/report/default.aspx?companyId=47338"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            backgroundColor: "rgb(62, 100, 175)",
            color: "white",
            fontSize: 16,
            fontWeight: 700,
            letterSpacing: 2,
            textTransform: "uppercase",
            padding: "14px 32px",
            borderRadius: 5,
            textDecoration: "none",
          }}
        >
          View Your Report
        </a>

        <div style={{ marginTop: 16 }}>
          <a
            href="https://www.homegauge.com/lostpassword.html"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#2EA3F2",
              fontSize: 14,
              textDecoration: "none",
            }}
          >
            Lost Password?
          </a>
        </div>
      </div>
    </section>
  );
}
