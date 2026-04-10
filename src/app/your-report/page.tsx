"use client";

import Image from "next/image";
import { FormEvent } from "react";

export default function YourReportPage() {
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
        }}
      >
        Login below to view your completed inspection report.
      </p>

      {/* Login card */}
      <div
        style={{
          backgroundColor: "white",
          padding: 40,
          textAlign: "center",
          maxWidth: 400,
          width: "100%",
        }}
      >
        {/* Logo */}
        <div style={{ marginBottom: 10 }}>
          <Image
            src="/images/Logo-150x150.png"
            alt="Logo"
            width={150}
            height={150}
            style={{ display: "inline-block" }}
          />
        </div>

        {/* Card heading */}
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
          LOGIN TO VIEW INSPECTION
        </h2>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 16,
            textAlign: "left",
          }}
        >
          <div>
            <label
              style={{
                display: "block",
                fontSize: 16,
                fontWeight: 700,
                color: "#333",
                marginBottom: 4,
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

          <div>
            <label
              style={{
                display: "block",
                fontSize: 16,
                fontWeight: 700,
                color: "#333",
                marginBottom: 4,
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
              type="submit"
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
        </form>
      </div>
    </section>
  );
}
