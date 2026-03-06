"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import jessicaImg from "@/images/jessica.jpg";

const awards = [
  { icon: "🏆", title: "Social Media Manager of the Year Finalist" },
  { icon: "🏆", title: "EIMA Marketer of the Year" },
  { icon: "🏆", title: "Digital Woman to Watch" },
  { icon: "🏆", title: "Social Media Manager of the Year Runner Up" },
  { icon: "⭐", title: "Dallas Meetup Featured Networker" },
  { icon: "⭐", title: "Named Social Media Marketing Expert by Huffpost" },
];

const linkedinWins = [
  "Land job offers without applying",
  "Gain free access to major industry conferences",
  "Win professional awards and recognition",
  "Secure free continuing education and certifications",
  "Build a network of high-impact connections across industries",
];

export default function AboutPage() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <div className="pb-16">
      {/* ── Hero Section ── */}
      <section className="relative overflow-hidden bg-gray-50">
        <div
          className="absolute -top-32 -right-32 h-96 w-96 rounded-full opacity-30 blur-3xl"
          style={{ background: "oklch(89.2% 0.058 10.001)" }}
        />
        <div
          className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full opacity-20 blur-3xl"
          style={{ background: "oklch(89.2% 0.058 10.001)" }}
        />

        <div className="relative mx-auto max-w-5xl px-6 py-24 text-center sm:py-32">
          <p
            className={`mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-pink-500 transition-all duration-700 ${
              visible
                ? "translate-y-0 opacity-100"
                : "translate-y-4 opacity-0"
            }`}
          >
            Meet Your LinkedIn Strategist
          </p>
          <h1
            className={`text-4xl font-extrabold tracking-tight text-gray-900 transition-all delay-100 duration-700 sm:text-6xl ${
              visible
                ? "translate-y-0 opacity-100"
                : "translate-y-4 opacity-0"
            }`}
          >
            Hi, I&apos;m Jessica
            <span className="block bg-gradient-to-r from-pink-500 to-rose-400 bg-clip-text text-transparent">
              &amp; I am the digital girlie.
            </span>
          </h1>
          <p
            className={`mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-600 transition-all delay-200 duration-700 ${
              visible
                ? "translate-y-0 opacity-100"
                : "translate-y-4 opacity-0"
            }`}
          >
            I help professionals craft their personal brands and turn their
            LinkedIn profiles into opportunity magnets.
          </p>
        </div>
      </section>

      {/* ── Story Split Section ── */}
      <section className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Actual Image */}
          <div className="relative">
            <div
              className="absolute -inset-4 rounded-3xl opacity-40 blur-2xl"
              style={{ background: "oklch(89.2% 0.058 10.001)" }}
            />
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-xl">
              <Image
                src={jessicaImg}
                alt="Jessica - The Digital Girlie"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </div>

          {/* Story content */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              15+ Years of Digital Marketing.
              <br />
              <span className="text-pink-500">Zero Fluff.</span>
            </h2>
            <p className="leading-relaxed text-gray-600">
              With over 15 years of experience in digital marketing and a proven
              track record of generating real-world results through LinkedIn I
              combine strategy, storytelling, and personal branding to help job
              seekers, entrepreneurs, and professionals stand out and get
              noticed.
            </p>
            <p className="leading-relaxed text-gray-600">
              Corporate girlie by day, I lead digital strategy at{" "}
              <span className="font-semibold text-gray-900">Envoy Air</span>, an
              American Airlines Group company developing integrated marketing
              campaigns, managing digital presence and PR, and crafting content
              that fuels talent acquisition and brand visibility.
            </p>
            <p className="leading-relaxed text-gray-600">
              My foundation in marketing gives me a unique advantage as a
              LinkedIn consultant: I understand not only how to write a strong
              profile, but also how to position you strategically for visibility,
              impact, and opportunity.
            </p>
            <p className="leading-relaxed text-gray-600">
              Whether you&apos;re job hunting, pivoting careers, growing your
              business, or building your personal brand, I&apos;ll help you
              transform your profile into a tool that works for you.
            </p>
            <a
              href="/contact"
              className="mt-4 inline-flex items-center gap-2 rounded-full px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-pink-500/25 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-pink-500/30"
              style={{ background: "oklch(89.2% 0.058 10.001)" }}
            >
              <span className="text-gray-900">Let&apos;s Chat</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-gray-900"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* ── Why LinkedIn Section ── */}
      <section className="bg-gray-900 text-white">
        <div className="mx-auto max-w-5xl px-6 py-20 sm:py-28">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-pink-400">
              Why LinkedIn?
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              I Don&apos;t Just Teach It.{" "}
              <span className="text-pink-400">I Live It.</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-gray-400">
              I&apos;ve personally used LinkedIn to open doors, build influence,
              and grow my career. Here&apos;s what it&apos;s done for me:
            </p>
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {linkedinWins.map((win, i) => (
              <div
                key={i}
                className="group flex items-start gap-3 rounded-2xl border border-gray-800 bg-gray-800/50 p-5 transition-all hover:border-pink-500/40 hover:bg-gray-800"
              >
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-pink-500/20 text-xs text-pink-400">
                  ✓
                </span>
                <p className="text-sm leading-relaxed text-gray-300">
                  {win}
                  {i === 3 && (
                    <span className="ml-1 text-pink-400">
                      (hi, Harvard! What, like it&apos;s hard?)
                    </span>
                  )}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Awards Grid ── */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-5xl px-6 py-20 sm:py-28">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-pink-500">
              Receipts
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Awards &amp; Recognition
            </h2>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {awards.map((award, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <div
                  className="absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100"
                  style={{
                    background:
                      "linear-gradient(135deg, oklch(89.2% 0.058 10.001 / 0.15), transparent)",
                  }}
                />
                <div className="relative">
                  <span className="text-3xl">{award.icon}</span>
                  <p className="mt-3 text-sm font-semibold leading-snug text-gray-900">
                    {award.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}