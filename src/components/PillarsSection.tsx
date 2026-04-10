"use client";

import Image from "next/image";

export function PillarsSection() {
  return (
    <section
      className="relative"
      style={{
        backgroundColor: "#EDEDED",
        padding: "0 0 100px",
      }}
    >
      <div
        className="mx-auto"
        style={{ maxWidth: 1280, padding: "27px 20px 0" }}
      >
        {/* Header */}
        <h2
          className="text-center font-heading font-black"
          style={{
            color: "rgb(38, 53, 86)",
            fontSize: 72,
            lineHeight: "72px",
            paddingBottom: 10,
          }}
        >
          Pillars of Success
        </h2>
        <p
          className="mx-auto text-center"
          style={{
            color: "rgb(29, 41, 67)",
            maxWidth: 800,
            fontSize: 16,
            lineHeight: "27px",
            paddingBottom: 50,
          }}
        >
          Integrity1 Home Inspections uphold the ideals of trustworthiness and
          customer care during all of our inspections. Clients are encouraged to
          join us during the inspection and walkthrough. All information
          uncovered will be fully explained and talked over with our clients. Our
          reports are always returned within 24 hours of completing the
          inspection.
        </p>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 gap-0 md:grid-cols-3">
          {/* Card 1: Convenient Scheduling */}
          <div
            className="flex flex-col items-center"
            style={{
              backgroundColor: "white",
              borderRadius: 5,
              padding: 40,
              boxShadow: "1px 1px 2px rgba(0,0,0,0.5)",
            }}
          >
            <div
              className="mb-6 flex shrink-0 items-center justify-center"
              style={{ width: 100, height: 100 }}
            >
              <Image
                src="/images/calendar.png"
                alt="Calendar icon"
                width={100}
                height={100}
                className="h-auto w-full object-contain"
              />
            </div>
            <div className="text-center">
              <h2
                className="font-heading font-black"
                style={{
                  color: "rgb(62, 100, 175)",
                  fontSize: 23,
                  lineHeight: "23px",
                  paddingBottom: 12,
                }}
              >
                CONVENIENT SCHEDULING
              </h2>
              <p style={{ fontSize: 16, lineHeight: "27px", color: "#666" }}>
                Additionally, we will work with your schedule by offering both
                evening and weekend appointments. Your questions and concerns can
                be answered at any point before, during, or after the inspection.
                We also offer online payments for your ease and convenience.
              </p>
              <a
                href="https://www.homegauge.com/appointment/schedule.htmls?companyId=47338"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block transition-all duration-500"
                style={{
                  border: "2px solid #2EA3F2",
                  color: "#2EA3F2",
                  padding: "12px 24px",
                  borderRadius: 5,
                  fontSize: 16,
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: 2,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#2EA3F2";
                  e.currentTarget.style.color = "#FFFFFF";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                  e.currentTarget.style.color = "#2EA3F2";
                }}
              >
                BOOK INSPECTION
              </a>
            </div>
          </div>

          {/* Card 2: InterNACHI Buy Back Guarantee (navy card) */}
          <div
            className="flex flex-col items-center"
            style={{
              backgroundColor: "rgb(38, 53, 86)",
              borderRadius: 5,
              padding: 30,
            }}
          >
            <div
              className="mb-6 flex shrink-0 items-center justify-center"
              style={{ width: 200, height: 200 }}
            >
              <Image
                src="/images/buy-back-guarantee-1.png"
                alt="InterNACHI Buy Back Guarantee badge"
                width={200}
                height={200}
                className="h-auto w-full object-contain"
              />
            </div>
            <div className="text-center">
              <h2
                className="font-heading font-black"
                style={{
                  color: "white",
                  fontSize: 38,
                  lineHeight: "38px",
                  paddingBottom: 12,
                }}
              >
                InterNACHI Buy Back Guarantee
              </h2>
              <p style={{ fontSize: 16, lineHeight: "27px", color: "rgba(255,255,255,0.8)" }}>
                For further peace of mind Integrity1 Inspections, participates
                in the InterNACHI BuyBack Guarantee. If the inspector misses
                anything crucial to your home&rsquo;s value during the
                inspection, and your home is listed for sale by a licensed real
                estate agent, InterNACHI will buy back your home for the cost
                you paid.
              </p>
            </div>
          </div>

          {/* Card 3: CRL Create Request List */}
          <div
            className="flex flex-col items-center"
            style={{
              backgroundColor: "white",
              borderRadius: 5,
              padding: 40,
              boxShadow: "1px 1px 2px rgba(0,0,0,0.5)",
            }}
          >
            <div
              className="mb-6 flex shrink-0 items-center justify-center"
              style={{ width: 100, height: 100 }}
            >
              <Image
                src="/images/crllist.png"
                alt="CRL Create Request List feature screenshot"
                width={100}
                height={100}
                className="h-auto w-full object-contain"
              />
            </div>
            <div className="text-center">
              <h2
                className="font-heading font-black"
                style={{
                  color: "rgb(62, 100, 175)",
                  fontSize: 23,
                  lineHeight: "23px",
                  paddingBottom: 12,
                }}
              >
                (CRL) Create Request List Feature
              </h2>
              <p style={{ fontSize: 16, lineHeight: "27px", color: "#666" }}>
                The CRL feature is a great addition to our services as it offers
                clients a way to make negotiating much simpler. You can work on
                personal lists from any computer, smartphone, or tablet with an
                Internet connection. When the list is finished it can easily be
                incorporated in a standard repair addendum by you or your real
                estate agent.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Wave Divider */}
      <div
        className="absolute right-0 bottom-0 left-0"
        style={{ height: 40 }}
      >
        <svg
          width="100%"
          height="40px"
          viewBox="0 0 1280 140"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="#263556">
            <path
              d="M640 139L0 0v140h1280V0L640 139z"
              fillOpacity=".5"
            />
            <path d="M640 139L0 42v98h1280V42l-640 97z" />
          </g>
        </svg>
      </div>
    </section>
  );
}
