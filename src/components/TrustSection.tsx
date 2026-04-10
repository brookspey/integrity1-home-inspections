export function TrustSection() {
  return (
    <section className="bg-white" style={{ padding: "54px 0" }}>
      <style>{`
        .trust-heading {
          font-size: 72px;
          line-height: 72px;
        }
        .trust-paragraph {
          max-width: 700px;
        }
        @media (max-width: 767px) {
          .trust-heading {
            font-size: 32px;
            line-height: 38px;
          }
          .trust-paragraph {
            max-width: 100%;
          }
        }
      `}</style>
      <div className="mx-auto" style={{ maxWidth: 1280, padding: "0 20px" }}>
        <h2
          className="trust-heading text-center font-heading font-black text-dark-text"
          style={{ paddingBottom: 10 }}
        >
          Home Inspections You Can Trust
        </h2>
        <p
          className="trust-paragraph mx-auto text-center text-body-text"
          style={{
            fontSize: 16,
            lineHeight: "27px",
          }}
        >
          Integrity1 Home Inspections is a small company that puts the needs of
          our clients first. We handle all of our clients with absolute care, as
          if they were our only client. We believe in an honest and thorough
          approach when inspecting all homes. The client&apos;s safety and
          satisfaction as our top priority throughout the entire inspection
          process.
        </p>
      </div>
    </section>
  );
}
