"use client";

import Image from "next/image";
import { FormEvent } from "react";

export default function ContactUsContent() {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

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
      {/* Heading */}
      <h1
        style={{
          fontFamily: "var(--font-libre-franklin)",
          fontSize: 62,
          lineHeight: "62px",
          fontWeight: 900,
          color: "white",
          textAlign: "center",
          textTransform: "uppercase",
          marginBottom: 20,
        }}
      >
        Contact Us
      </h1>

      {/* Subtext */}
      <p
        style={{
          fontSize: 16,
          lineHeight: "27px",
          color: "white",
          textAlign: "center",
          maxWidth: 800,
          margin: "0 auto",
          padding: "0 20px",
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
          textAlign: "center",
          maxWidth: 800,
          margin: "10px auto 0",
          padding: "0 20px",
        }}
      >
        Integrity1 Home Inspections is insured with Errors &amp;
        Omissions/General Liability for your protection.
      </p>

      {/* Two-column area */}
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "40px 20px 0",
          display: "flex",
          flexWrap: "wrap",
          gap: 40,
        }}
      >
        {/* Left column - contact links */}
        <div
          style={{
            flex: "1 1 300px",
            display: "flex",
            flexDirection: "column",
            gap: 16,
            justifyContent: "center",
          }}
        >
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
            external
          />
        </div>

        {/* Right column - contact form */}
        <div
          style={{
            flex: "1 1 400px",
            backgroundColor: "white",
            padding: 30,
          }}
        >
          <form
            onSubmit={handleSubmit}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 12,
            }}
          >
            <div>
              <label
                htmlFor="contact-name"
                style={{
                  display: "block",
                  fontSize: 13,
                  fontWeight: 700,
                  color: "rgb(38, 53, 86)",
                  marginBottom: 4,
                }}
              >
                Name
              </label>
              <input
                id="contact-name"
                type="text"
                placeholder="Name (Required)"
                required
                style={{
                  width: "100%",
                  padding: 10,
                  border: "none",
                  borderRadius: 5,
                  backgroundColor: "rgb(237, 237, 237)",
                  fontSize: 15,
                  color: "rgb(78, 78, 78)",
                  boxSizing: "border-box",
                }}
              />
            </div>
            <div>
              <label
                htmlFor="contact-email"
                style={{
                  display: "block",
                  fontSize: 13,
                  fontWeight: 700,
                  color: "rgb(38, 53, 86)",
                  marginBottom: 4,
                }}
              >
                Email
              </label>
              <input
                id="contact-email"
                type="email"
                placeholder="E-mail (Required)"
                required
                style={{
                  width: "100%",
                  padding: 10,
                  border: "none",
                  borderRadius: 5,
                  backgroundColor: "rgb(237, 237, 237)",
                  fontSize: 15,
                  color: "rgb(78, 78, 78)",
                  boxSizing: "border-box",
                }}
              />
            </div>
            <div>
              <label
                htmlFor="contact-phone"
                style={{
                  display: "block",
                  fontSize: 13,
                  fontWeight: 700,
                  color: "rgb(38, 53, 86)",
                  marginBottom: 4,
                }}
              >
                Phone
              </label>
              <input
                id="contact-phone"
                type="tel"
                placeholder="Daytime Phone # (Required)"
                required
                style={{
                  width: "100%",
                  padding: 10,
                  border: "none",
                  borderRadius: 5,
                  backgroundColor: "rgb(237, 237, 237)",
                  fontSize: 15,
                  color: "rgb(78, 78, 78)",
                  boxSizing: "border-box",
                }}
              />
            </div>
            <div>
              <label
                htmlFor="contact-message"
                style={{
                  display: "block",
                  fontSize: 13,
                  fontWeight: 700,
                  color: "rgb(38, 53, 86)",
                  marginBottom: 4,
                }}
              >
                Message
              </label>
              <textarea
                id="contact-message"
                placeholder="How can we help?"
                rows={4}
                style={{
                  width: "100%",
                  padding: 10,
                  border: "none",
                  borderRadius: 5,
                  backgroundColor: "rgb(237, 237, 237)",
                  fontSize: 15,
                  color: "rgb(78, 78, 78)",
                  boxSizing: "border-box",
                  resize: "vertical",
                }}
              />
            </div>
            <div style={{ textAlign: "center", marginTop: 16 }}>
              <button
                type="submit"
                className="contact-submit-btn"
                style={{
                  backgroundColor: "rgb(215, 211, 166)",
                  color: "rgb(38, 53, 86)",
                  padding: "10px 20px",
                  fontSize: 15,
                  fontWeight: 700,
                  letterSpacing: 2,
                  textTransform: "uppercase",
                  border: "none",
                  borderRadius: 5,
                  cursor: "pointer",
                  transition: "all 0.5s",
                }}
              >
                Send Request
              </button>
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
  external = false,
}: {
  href: string;
  icon: string;
  text: string;
  large?: boolean;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      {...(external
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 12,
        color: "white",
        textDecoration: "none",
        fontSize: large ? 24 : 16,
      }}
    >
      <Image src={icon} alt="" width={50} height={50} />
      <span>{text}</span>
    </a>
  );
}
