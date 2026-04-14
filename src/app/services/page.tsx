import { AreaOfOperationSection } from "@/components/AreaOfOperationSection";

export const metadata = {
  title:
    "Home Inspection Services | 4-Point, Wind Mitigation & More | Palm Beach County",
  description:
    "Comprehensive home inspection services in Palm Beach County: buyer's inspections, 4-point, wind mitigation, commercial, pool, pre-listing & builder's warranty. Military & first-time buyer discounts.",
};

const inspectItems = [
  "Roof",
  "Electrical",
  "Plumbing",
  "HVAC",
  "Attic",
  "Garage",
  "Crawlspace",
  "Foundation",
  "Kitchen",
  "Bedroom/living/bath",
  "Irrigation",
];

const services = [
  [
    {
      title: "Buyer\u2019s Inspections",
      description:
        "Having a complete report about the true condition of your prospective home is a great asset in the decision-making process of buying a home. With a Buyer\u2019s Inspection, we will perform a comprehensive visual inspection of the property and report the findings of anything in disrepair, and possible issues that could be unsafe or problematic in the future.",
    },
    {
      title: "Pre-listing / Sellers Inspection",
      description:
        "Much like a Buyers Inspection, we will complete a thorough walkthrough and investigative inspection of the home\u2019s components and structures in search of any issues. This way you can fully know the true condition of the home before listing it for sale.",
    },
  ],
  [
    {
      title: "11-Month / Builders Warranty Inspection",
      description:
        "Most contractors provide a 12-month warranty after construction is complete. This inspection service will uncover any possible issues before the warranty expires. Make sure you don\u2019t end up paying out of pocket for something your warranty would\u2019ve covered!",
    },
    {
      title: "Home Maintenance Inspection",
      description:
        "This service is recommended for current homeowners that wish to maintain the condition and value of their home. We will provide you with a comprehensive report providing you with all the information you need about your home\u2019s condition, needed repairs, or potential problems in the future to get in front of any possible problems before they turn into expensive repairs.",
    },
  ],
  [
    {
      title: "Commercial Buildings / Property Inspection",
      description:
        "This inspection is suited for heavy and light commercial buildings and properties. The inspection provides commercial operators with a thorough report on the condition of their potential or current properties and facilities. This is a very sound investment to make during your commercial endeavors.",
    },
    {
      title: "4-Point Inspection",
      description:
        "A 4-Point Inspection examines roof, electrical, plumbing, and HVAC. It will determine liability and potential problems for insurance purposes.",
    },
  ],
  [
    {
      title: "Wind Mitigation",
      description:
        "The inspector will look for faults or defects in the features and that helps to reduce the amount of damage caused by wind during a hurricane or other strong storm.",
    },
    {
      title: "Visual Pool Inspection",
      description:
        "Pool Inspections are performed to make certain your pool is meeting state regulations and industry standards. A certified inspector will provide a detailed report about the safety of your pool.",
    },
  ],
];

const whatWeInspect = [
  "Homes",
  "Apartments",
  "Condominiums/Townhomes",
  "Light Commercial Buildings (e.g. strip mall, storefronts)",
  "Heavy Commercial Buildings (e.g. warehouses, industrial)",
];

export default function ServicesPage() {
  return (
    <>
      {/* ── Section 1: Hero — "Inspection Services" heading + house image + standards text ── */}
      <section
        className="relative overflow-hidden"
        style={{ backgroundColor: "white", padding: "54px 0 120px" }}
      >
        <div
          className="mx-auto"
          style={{ maxWidth: 1080, padding: "0 20px" }}
        >
          {/* Blue bar heading */}
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
            Inspection Services
          </h2>

          {/* Two columns: house image left, text right */}
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left: House Image */}
            <div
              className="lg:w-1/2"
              style={{
                backgroundImage: "url(/images/houseimg.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                minHeight: 400,
                borderRadius: 0,
              }}
            />

            {/* Right: Standards text + What We Inspect list */}
            <div className="lg:w-1/2">
              <h1
                className="font-heading"
                style={{
                  fontSize: 52,
                  lineHeight: "52px",
                  fontWeight: 900,
                  color: "rgb(38, 53, 86)",
                  marginBottom: 10,
                }}
              >
                Inspections with the Highest Standards
              </h1>

              <p
                style={{
                  fontSize: 16,
                  lineHeight: "27px",
                  color: "#666",
                  marginBottom: 20,
                }}
              >
                Integrity1 Home Inspections adheres to the InterNACHI Standards
                of Practice and Code of Ethics for all home inspections. These
                practices will guarantee that all structures, and components are
                thoroughly inspected to the high industry standards of
                InterNACHI.
              </p>

              <h2
                className="font-heading"
                style={{
                  fontSize: 26,
                  lineHeight: "26px",
                  fontWeight: 900,
                  color: "rgb(38, 53, 86)",
                  marginBottom: 12,
                }}
              >
                What We Inspect
              </h2>

              <ul
                style={{
                  fontSize: 16,
                  lineHeight: "27px",
                  color: "#666",
                  paddingLeft: 20,
                  margin: 0,
                }}
              >
                {inspectItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
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
            <g fill="rgb(38, 53, 86)">
              <path d="M0 0v140h1280L0 0z" fillOpacity=".5" />
              <path d="M0 42v98h1280L0 42z" />
            </g>
          </svg>
        </div>
      </section>

      {/* ── Section 2: Services Grid (navy bg) ── */}
      <section
        style={{
          backgroundColor: "rgb(38, 53, 86)",
          padding: "27px 0",
        }}
      >
        <div
          className="mx-auto"
          style={{ maxWidth: 1080, padding: "0 20px" }}
        >
          {/* Service rows — 2 per row */}
          {services.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className="flex flex-col lg:flex-row gap-8"
              style={{ padding: "27px 0" }}
            >
              {row.map((service) => (
                <div key={service.title} className="lg:w-1/2">
                  <h2
                    className="font-heading"
                    style={{
                      fontSize: 26,
                      lineHeight: "26px",
                      fontWeight: 900,
                      color: "white",
                      marginBottom: 10,
                    }}
                  >
                    {service.title}
                  </h2>
                  <p
                    style={{
                      fontSize: 16,
                      lineHeight: "27px",
                      color: "rgb(237, 236, 236)",
                    }}
                  >
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          ))}

          {/* Last row: Discounts + What We Inspect */}
          <div
            className="flex flex-col lg:flex-row gap-8"
            style={{ padding: "27px 0" }}
          >
            {/* Discounts */}
            <div className="lg:w-1/2">
              <h2
                className="font-heading"
                style={{
                  fontSize: 26,
                  lineHeight: "26px",
                  fontWeight: 900,
                  color: "white",
                  marginBottom: 10,
                }}
              >
                Discounts
              </h2>
              <p
                style={{
                  fontSize: 16,
                  lineHeight: "27px",
                  color: "rgb(237, 236, 236)",
                  marginBottom: 20,
                }}
              >
                We Provide discounts to military and veterans, first
                responders, teachers, and first-time homebuyers!
              </p>
              <a
                href="https://www.homegauge.com/appointment/schedule.htmls?companyId=47338"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-block",
                  border: "2px solid #2EA3F2",
                  color: "#2EA3F2",
                  padding: "12px 24px",
                  borderRadius: 5,
                  fontSize: 16,
                  fontWeight: 700,
                  letterSpacing: 2,
                  textTransform: "uppercase",
                  textDecoration: "none",
                }}
              >
                BOOK INSPECTION
              </a>
            </div>

            {/* What We Inspect */}
            <div className="lg:w-1/2">
              <h2
                className="font-heading"
                style={{
                  fontSize: 26,
                  lineHeight: "26px",
                  fontWeight: 900,
                  color: "white",
                  marginBottom: 10,
                }}
              >
                What We Inspect
              </h2>
              <ul
                style={{
                  fontSize: 16,
                  lineHeight: "27px",
                  color: "rgb(237, 236, 236)",
                  paddingLeft: 20,
                  margin: 0,
                }}
              >
                {whatWeInspect.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 3: Area of Operation (shared component) ── */}
      <AreaOfOperationSection />
    </>
  );
}
