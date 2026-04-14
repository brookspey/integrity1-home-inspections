"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Inspection Services",
    href: "/services",
  },
] as const;

const REQUEST_INSPECTION_URL =
  "https://www.homegauge.com/appointment/schedule.htmls?companyId=47338";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header
      className="relative"
      style={{
        background:
          "linear-gradient(90deg, rgb(219, 215, 168), rgb(172, 164, 127))",
        zIndex: 50,
      }}
    >
      {/* Gold gradient shows as thin decorative strip via padding */}
      <div className="p-1.5">
        <nav className="bg-white">
          <div
            className="mx-auto flex items-center justify-between"
            style={{
              maxWidth: 1280,
              height: 72,
              padding: "0 20px",
            }}
          >
            {/* Logo */}
            <Link href="/">
              <Image
                src="/images/Logo.png"
                alt="Integrity 1 Home Inspections"
                width={70}
                height={70}
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <ul className="hidden items-center gap-6 md:flex" style={{ listStyle: "none", margin: 0, padding: 0 }}>
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="no-underline"
                    style={{
                      fontFamily: "'Open Sans', sans-serif",
                      fontSize: 16,
                      fontWeight: 400,
                      color: "rgb(38, 53, 86)",
                      letterSpacing: 2,
                      textTransform: "uppercase",
                      transition: "opacity 0.2s ease-in-out",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.opacity = "0.7";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.opacity = "1";
                    }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={REQUEST_INSPECTION_URL}
                  className="no-underline"
                  style={{
                    fontFamily: "'Open Sans', sans-serif",
                    fontSize: 16,
                    fontWeight: 400,
                    color: "rgb(38, 53, 86)",
                    letterSpacing: 2,
                    textTransform: "uppercase",
                    transition: "opacity 0.2s ease-in-out",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.opacity = "0.7";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.opacity = "1";
                  }}
                >
                  <span
                    className="inline-block text-white"
                    style={{
                      backgroundColor: "rgb(46, 163, 242)",
                      padding: "10px 20px",
                      borderRadius: 5,
                    }}
                  >
                    Request Inspection
                  </span>
                </a>
              </li>
            </ul>

            {/* Mobile Hamburger Button */}
            <button
              className="flex md:hidden"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: 8,
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: 5,
              }}
            >
              <span
                style={{
                  display: "block",
                  width: 24,
                  height: 2,
                  backgroundColor: "rgb(38, 53, 86)",
                  borderRadius: 1,
                  transition: "transform 0.3s ease, opacity 0.3s ease",
                  transform: mobileMenuOpen
                    ? "translateY(7px) rotate(45deg)"
                    : "none",
                }}
              />
              <span
                style={{
                  display: "block",
                  width: 24,
                  height: 2,
                  backgroundColor: "rgb(38, 53, 86)",
                  borderRadius: 1,
                  transition: "opacity 0.3s ease",
                  opacity: mobileMenuOpen ? 0 : 1,
                }}
              />
              <span
                style={{
                  display: "block",
                  width: 24,
                  height: 2,
                  backgroundColor: "rgb(38, 53, 86)",
                  borderRadius: 1,
                  transition: "transform 0.3s ease, opacity 0.3s ease",
                  transform: mobileMenuOpen
                    ? "translateY(-7px) rotate(-45deg)"
                    : "none",
                }}
              />
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          <div
            className="md:hidden"
            style={{
              overflow: "hidden",
              maxHeight: mobileMenuOpen ? 300 : 0,
              opacity: mobileMenuOpen ? 1 : 0,
              transition: "max-height 0.3s ease, opacity 0.25s ease",
            }}
          >
            <ul
              style={{
                listStyle: "none",
                margin: 0,
                padding: "8px 20px 16px",
                display: "flex",
                flexDirection: "column",
                gap: 0,
              }}
            >
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="no-underline"
                    onClick={() => setMobileMenuOpen(false)}
                    style={{
                      display: "block",
                      fontFamily: "'Open Sans', sans-serif",
                      fontSize: 15,
                      fontWeight: 400,
                      color: "rgb(38, 53, 86)",
                      letterSpacing: 2,
                      textTransform: "uppercase",
                      padding: "12px 0",
                      borderBottom: "1px solid rgba(38, 53, 86, 0.1)",
                    }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={REQUEST_INSPECTION_URL}
                  className="no-underline"
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    display: "block",
                    textAlign: "center",
                    fontFamily: "'Open Sans', sans-serif",
                    fontSize: 15,
                    fontWeight: 400,
                    color: "white",
                    letterSpacing: 2,
                    textTransform: "uppercase",
                    backgroundColor: "rgb(46, 163, 242)",
                    padding: "12px 20px",
                    borderRadius: 5,
                    marginTop: 12,
                  }}
                >
                  Request Inspection
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}
