"use client";

import Image from "next/image";
import Link from "next/link";

export function AreaOfOperationSection() {
  return (
    <section
      style={{
        backgroundImage: "url(/images/bluebanner3.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "50% 0%",
        backgroundColor: "rgb(38, 53, 86)",
        padding: "54px 0",
      }}
    >
      <div
        className="mx-auto flex flex-col lg:flex-row"
        style={{ maxWidth: 1280, padding: "0 20px" }}
      >
        {/* Left Column: Contact Info */}
        <div
          className="lg:w-3/5"
          style={{
            background:
              "linear-gradient(187deg, rgb(62, 100, 175), rgb(38, 53, 86))",
            backgroundSize: "cover",
            padding: 40,
          }}
        >
          <h2
            className="font-heading"
            style={{
              fontSize: 38,
              lineHeight: "38px",
              fontWeight: 900,
              color: "white",
              marginBottom: 20,
            }}
          >
            Area of Operation
          </h2>

          <p
            style={{
              fontSize: 16,
              lineHeight: "27px",
              color: "white",
              marginBottom: 16,
            }}
          >
            Integrity1 Home Inspections operates in Palm Beach County and
            surrounding areas, including the Treasure Coast, Broward, Martin, and
            St. Lucie counties.
          </p>

          <p
            style={{
              fontSize: 16,
              lineHeight: "27px",
              color: "white",
              marginBottom: 16,
            }}
          >
            Integrity1 Home Inspections is insured with Errors &amp;
            Omissions/General Liability for your protection.
          </p>

          <p
            style={{
              fontSize: 16,
              lineHeight: "27px",
              color: "white",
              marginBottom: 30,
            }}
          >
            We serve{" "}
            <Link href="/areas/west-palm-beach" style={{ color: "#2EA3F2", textDecoration: "underline" }}>West Palm Beach</Link>,{" "}
            <Link href="/areas/boca-raton" style={{ color: "#2EA3F2", textDecoration: "underline" }}>Boca Raton</Link>,{" "}
            <Link href="/areas/jupiter" style={{ color: "#2EA3F2", textDecoration: "underline" }}>Jupiter</Link>,{" "}
            <Link href="/areas/delray-beach" style={{ color: "#2EA3F2", textDecoration: "underline" }}>Delray Beach</Link>,{" "}
            <Link href="/areas/boynton-beach" style={{ color: "#2EA3F2", textDecoration: "underline" }}>Boynton Beach</Link>,{" "}
            <Link href="/areas/wellington" style={{ color: "#2EA3F2", textDecoration: "underline" }}>Wellington</Link>,
            and the surrounding communities.
          </p>

          {/* Contact Links */}
          <div className="flex flex-col gap-4">
            <ContactLink
              href="tel:1-561-565-8513"
              icon="/images/conicon3.png"
              text="561.565.8513"
              large
            />
            <ContactLink
              href="sms:1-561-565-8513"
              icon="/images/conicon4.png"
              text="561.565.8513"
              large
            />
            <ContactLink
              href="mailto:integrity1homeinspections@gmail.com"
              icon="/images/conicon2.png"
              text="Email Us"
            />
            <ContactLink
              href="https://www.homegauge.com/appointment/schedule.htmls?companyId=47338"
              icon="/images/conicon1.png"
              text="Schedule Inspection"
            />
          </div>
        </div>

        {/* Right Column: Login Form */}
        <div
          className="lg:w-2/5"
          style={{
            backgroundColor: "white",
            padding: 40,
            textAlign: "center",
          }}
        >
          <div className="flex justify-center" style={{ marginBottom: 10 }}>
            <Image
              src="/images/Logo-150x150.png"
              alt="Integrity1 Home Inspections Logo"
              width={150}
              height={150}
            />
          </div>

          <h3
            className="font-sans"
            style={{
              fontSize: 20,
              lineHeight: "20px",
              fontWeight: 500,
              color: "rgb(62, 100, 175)",
              textAlign: "center",
              padding: "10px 0",
              marginBottom: 20,
            }}
          >
            LOGIN TO VIEW INSPECTION
          </h3>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col gap-4"
            style={{ textAlign: "left" }}
          >
            <div className="flex flex-col gap-1">
              <label
                style={{
                  fontSize: 16,
                  fontWeight: 700,
                  color: "#333",
                }}
              >
                User Name
              </label>
              <input
                type="text"
                style={{
                  width: "100%",
                  padding: 8,
                  border: "1px solid #ccc",
                  fontSize: 16,
                  boxSizing: "border-box",
                }}
              />
            </div>

            <div className="flex flex-col gap-1">
              <label
                style={{
                  fontSize: 16,
                  fontWeight: 700,
                  color: "#333",
                }}
              >
                Password
              </label>
              <input
                type="password"
                style={{
                  width: "100%",
                  padding: 8,
                  border: "1px solid #ccc",
                  fontSize: 16,
                  boxSizing: "border-box",
                }}
              />
            </div>

            <div style={{ textAlign: "center", marginTop: 8 }}>
              <button
                type="button"
                style={{
                  backgroundColor: "rgb(62, 100, 175)",
                  color: "white",
                  fontSize: 16,
                  fontWeight: 400,
                  letterSpacing: 2,
                  textTransform: "uppercase",
                  padding: "10px 20px",
                  borderRadius: 5,
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Sign In
              </button>
            </div>

            <div style={{ textAlign: "center", marginTop: 4 }}>
              <a
                href="https://www.homegauge.com/lostpassword.html"
                style={{ color: "#2EA3F2", fontSize: 14 }}
                target="_blank"
                rel="noopener noreferrer"
              >
                Lost Password?
              </a>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

function ContactLink({
  href,
  icon,
  text,
  large = false,
}: {
  href: string;
  icon: string;
  text: string;
  large?: boolean;
}) {
  const isExternal = href.startsWith("http");

  return (
    <a
      href={href}
      {...(isExternal
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
      className="flex items-center gap-3"
      style={{
        color: "white",
        fontSize: large ? 24 : 16,
        lineHeight: "27px",
        transition: "all 0.4s",
      }}
    >
      <Image
        src={icon}
        alt=""
        width={50}
        height={50}
        style={{ flexShrink: 0 }}
      />
      <span>{text}</span>
    </a>
  );
}
