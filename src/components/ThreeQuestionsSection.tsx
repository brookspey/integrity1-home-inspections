"use client";

import Link from "next/link";

const questions = [
  {
    title: "SAFETY",
    description: "Is this home/property safe to be in?",
  },
  {
    title: "INVESTMENT",
    description: "Is it worth my investment?",
  },
  {
    title: "LONGEVITY",
    description: "Will this home/property last as long as it should?",
  },
] as const;

export function ThreeQuestionsSection() {
  return (
    <section
      className="relative overflow-hidden bg-white"
      style={{ padding: "54px 0 120px" }}
    >
      <div
        className="mx-auto"
        style={{ maxWidth: 1280, padding: "0 20px" }}
      >
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column: Content */}
          <div className="lg:basis-[60%] shrink-0">
            <h2
              className="font-heading font-black text-dark-text"
              style={{
                fontSize: 52,
                lineHeight: "52px",
                paddingBottom: 16,
              }}
            >
              The Three BIG Questions
            </h2>

            <p
              className="text-body-text"
              style={{
                fontSize: 16,
                lineHeight: "27px",
                paddingBottom: 24,
              }}
            >
              During the important time of selecting your future home/property,
              it is a Home Inspector&apos;s job to help you answer three majorly
              important questions.
            </p>

            <div className="flex flex-col gap-6" style={{ paddingBottom: 24 }}>
              {questions.map((q) => (
                <div
                  key={q.title}
                  className="relative"
                  style={{
                    paddingLeft: 65,
                    minHeight: 50,
                  }}
                >
                  <div
                    className="absolute left-0 top-0"
                    style={{
                      width: 50,
                      height: 50,
                      backgroundImage: "url(/images/questionmark2.png)",
                      backgroundSize: "contain",
                      backgroundRepeat: "no-repeat",
                    }}
                  />
                  <h3
                    className="font-heading font-black text-dark-text"
                    style={{
                      fontSize: 22,
                      lineHeight: "22px",
                      paddingBottom: 8,
                    }}
                  >
                    {q.title}
                  </h3>
                  <p
                    className="text-body-text"
                    style={{ fontSize: 16, lineHeight: "27px" }}
                  >
                    {q.description}
                  </p>
                </div>
              ))}
            </div>

            <p
              className="text-body-text"
              style={{
                fontSize: 16,
                lineHeight: "27px",
                paddingBottom: 28,
              }}
            >
              At Integrity1 Home Inspections, we use our knowledge and
              understanding to inspect every structure, component, and appliances
              of the property to ensure that is it safe, durable, and worth your
              investment.
            </p>

            <Link
              href="/west-palm-beach-home-inspections-services/"
              className="inline-block uppercase font-semibold"
              style={{
                border: "2px solid #2EA3F2",
                color: "#2EA3F2",
                padding: "12px 24px",
                borderRadius: 5,
                fontSize: 16,
                letterSpacing: 2,
                transition: "all 0.5s ease",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.backgroundColor = "#2EA3F2";
                el.style.color = "#fff";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.backgroundColor = "transparent";
                el.style.color = "#2EA3F2";
              }}
            >
              VIEW OUR SERVICES
            </Link>
          </div>

          {/* Right Column: Joel's Photo */}
          <div
            className="lg:basis-[40%] shrink-0"
            style={{
              backgroundImage: "url(/images/Joel-Img-1.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "50% 0%",
              minHeight: 500,
              borderRadius: 0,
            }}
          />
        </div>
      </div>

      {/* Wave Divider */}
      <div
        className="absolute right-0 bottom-0 left-0"
        style={{ lineHeight: 0, height: 80 }}
      >
        <svg
          width="100%"
          height="80px"
          viewBox="0 0 1280 140"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="#ededed">
            <path d="M0 0v140h1280L0 0z" fillOpacity=".5" />
            <path d="M0 42v98h1280L0 42z" />
          </g>
        </svg>
      </div>
    </section>
  );
}
