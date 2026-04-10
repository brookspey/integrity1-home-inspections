import Image from "next/image";
import { AreaOfOperationSection } from "@/components/AreaOfOperationSection";

export const metadata = {
  title: "About | Integrity1 Home Inspections",
};

export default function AboutPage() {
  return (
    <>
      {/* ── Section 1: About The Inspector ── */}
      <section style={{ backgroundColor: "white", padding: "54px 0" }}>
        {/* Row 1: Blue bar heading */}
        <div style={{ maxWidth: 1080, margin: "0 auto", padding: "0 20px" }}>
          <h2
            className="font-heading"
            style={{
              backgroundColor: "rgb(62, 100, 175)",
              color: "white",
              fontSize: 36,
              lineHeight: "36px",
              fontWeight: 900,
              padding: "20px 20px 20px 38px",
              marginBottom: 40,
            }}
          >
            About The Inspector
          </h2>
        </div>

        {/* Row 2: Image + Bio (two columns) */}
        <div
          className="mx-auto flex flex-col lg:flex-row gap-10"
          style={{ maxWidth: 1080, padding: "0 20px" }}
        >
          {/* Left Column: Inspector Image */}
          <div className="lg:w-1/2 flex justify-center lg:justify-start">
            <Image
              src="/images/Home-Inspector-Blank-Image.png"
              alt="Certified Home Inspector Joel Donoghue"
              width={480}
              height={480}
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>

          {/* Right Column: Name, credentials, bio */}
          <div className="lg:w-1/2">
            <h1
              className="font-heading"
              style={{
                fontSize: 52,
                lineHeight: "52px",
                fontWeight: 900,
                color: "rgb(38, 53, 86)",
                marginBottom: 8,
              }}
            >
              Joel Donoghue
            </h1>

            <h2
              className="font-heading"
              style={{
                fontSize: 20,
                lineHeight: "20px",
                fontWeight: 900,
                color: "rgb(62, 100, 175)",
                marginBottom: 4,
              }}
            >
              Florida Home Inspectors license HI13212
            </h2>

            <h2
              className="font-heading"
              style={{
                fontSize: 20,
                lineHeight: "20px",
                fontWeight: 900,
                color: "rgb(62, 100, 175)",
                marginBottom: 20,
              }}
            >
              InterNACHI Certified Professional Inspector
            </h2>

            <p
              style={{
                fontSize: 16,
                lineHeight: "27px",
                color: "#666",
                marginBottom: 16,
              }}
            >
              Joel Donoghue is the owner and Inspector at Integrity1 Home
              Inspections. Both the State of Florida and InterNACHI certify him
              for home inspections. Joel has a long background in working with
              the public and customer service giving him a caring and
              understanding approach to Home Inspections.
            </p>

            <p
              style={{
                fontSize: 16,
                lineHeight: "27px",
                color: "#666",
                marginBottom: 0,
              }}
            >
              His career shift into home inspections began as a way to help
              people. Joel&apos;s family members had an inspection performed by a
              Home Inspector that didn&apos;t have the client&apos;s best
              interest at heart and as a result, performed a subpar inspection on
              their first home. The home ended up costing them a huge amount of
              money and stress over time due to repairs and other complications.
              Joel didn&apos;t want to see this happen to anyone else. He took it
              upon himself to become a certified and licensed Home Inspector, and
              started a company that put integrity first. So, you can rest
              assured knowing that Joel will be kind, honest, and knowledgeable
              in his work and afford you the highest level of customer
              satisfaction
            </p>
          </div>
        </div>
      </section>

      {/* ── Section 2: A Compassionate Approach (parallax banner) ── */}
      <section
        style={{
          backgroundImage: "url(/images/joelbanner2.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center top",
          backgroundAttachment: "scroll",
          padding: "500px 0 80px",
        }}
      >
        {/* Wave divider at top */}
        <div style={{ maxWidth: 1080, margin: "0 auto", padding: "0 20px" }}>
          <h2
            className="font-heading"
            style={{
              fontSize: 52,
              lineHeight: "52px",
              fontWeight: 900,
              color: "white",
              marginBottom: 20,
            }}
          >
            A Compassionate Approach
          </h2>

          <p
            style={{
              fontSize: 16,
              lineHeight: "27px",
              color: "white",
              marginBottom: 30,
              maxWidth: 700,
            }}
          >
            Purchasing a home is immensely scary and intimidating. For the
            average homebuyer, it is the biggest purchase of their lives. Joel
            endeavors the home is safe for his clients, of good long-standing
            quality, and they are making a wise investment. He strives to
            eliminate as many risks as possible, give his clients the peace of
            mind, and assurance they need to make the best decision possible.
          </p>

          <a
            href="https://www.homegauge.com/appointment/schedule.htmls?companyId=47338"
            className="btn-cta btn-cta-blue"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book Inspection
          </a>
        </div>
      </section>

      {/* ── Section 3: Always Improving + Homelife ── */}
      <section
        style={{
          backgroundColor: "rgb(38, 53, 86)",
          padding: "54px 0 0",
        }}
      >
        <div
          className="mx-auto flex flex-col lg:flex-row gap-10"
          style={{ maxWidth: 1080, padding: "0 20px" }}
        >
          {/* Left Column: Always Improving */}
          <div className="lg:w-1/2">
            <h2
              className="font-heading"
              style={{
                fontSize: 28,
                lineHeight: "28px",
                fontWeight: 900,
                color: "white",
                marginBottom: 16,
              }}
            >
              Always Improving
            </h2>

            <p
              style={{
                fontSize: 16,
                lineHeight: "27px",
                color: "white",
                marginBottom: 0,
              }}
            >
              Joel has promised his clients to always find ways to further his
              knowledge and experience in the home inspection industry. He will
              pursue the latest technologies to ensure that he can always address
              his customers&apos; needs, meet, and surpass the industry
              standards. Striving to be the best in his field he welcomes
              feedback from his clients for better services or process
              improvement. No measure is too big or small to work towards being
              the best in his field.
            </p>
          </div>

          {/* Right Column: Homelife */}
          <div className="lg:w-1/2">
            <h2
              className="font-heading"
              style={{
                fontSize: 28,
                lineHeight: "28px",
                fontWeight: 900,
                color: "white",
                marginBottom: 16,
              }}
            >
              Homelife, Hobbies, and Passions
            </h2>

            <p
              style={{
                fontSize: 16,
                lineHeight: "27px",
                color: "white",
                marginBottom: 0,
              }}
            >
              Joel is a self-proclaimed animal lover. He has two dachshunds who
              rule the home. Joel is also a nature lover and frequently goes
              camping with his beautiful wife. They enjoy hiking and mountain
              bike riding together. He also enjoys fishing and spending time at
              the beach. Joel is a college football fanatic and roots for Notre
              Dame.
            </p>
          </div>
        </div>
      </section>

      {/* ── Section 4: Area of Operation (shared component) ── */}
      <AreaOfOperationSection />
    </>
  );
}
