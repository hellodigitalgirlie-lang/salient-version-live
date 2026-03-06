"use client";

import { useState } from "react";
import Link from "next/link"; // <-- Added Next.js Link import

const freebies = [
  {
    icon: "📄",
    title: "LinkedIn Profile Checklist",
    description:
      "A step-by-step checklist to audit and optimize every section of your LinkedIn profile for maximum visibility.",
  },
  {
    icon: "✍️",
    title: "Headline Formula Guide",
    description:
      "Proven headline templates that grab attention and clearly communicate your value proposition.",
  },
  {
    icon: "📋",
    title: "Resume Refresh Template",
    description:
      "A clean, modern resume template designed to complement your LinkedIn profile and keep your branding consistent.",
  },
  {
    icon: "💬",
    title: "Connection Request Scripts",
    description:
      "Copy-and-paste message templates for reaching out to recruiters, hiring managers, and industry contacts.",
  },
];

const tips = [
  {
    number: "01",
    title: "Optimize Your Headline",
    description:
      "Your headline is prime real estate. Go beyond your job title—include keywords, your value prop, and a hint of personality.",
  },
  {
    number: "02",
    title: "Use a Professional Photo",
    description:
      "Profiles with professional headshots get up to 14x more views. Invest in a quality, on-brand photo.",
  },
  {
    number: "03",
    title: "Write a Story-Driven About Section",
    description:
      "Ditch the boring bio. Tell your story, highlight your wins, and end with a clear call to action.",
  },
  {
    number: "04",
    title: "Engage Before You Post",
    description:
      "Spend 10–15 minutes commenting on others’ posts before publishing your own. The algorithm rewards engagement.",
  },
  {
    number: "05",
    title: "Post Consistently",
    description:
      "Aim for 2–3 posts per week. Mix personal stories, industry insights, and actionable tips to keep your audience engaged.",
  },
  {
    number: "06",
    title: "Leverage the Featured Section",
    description:
      "Showcase your best work, articles, media mentions, or lead magnets right at the top of your profile.",
  },
];

export default function FreebiesPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubscribe = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <div className="pb-16">
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-gray-900 text-white">
        <div
          className="absolute top-0 right-0 h-[500px] w-[500px] rounded-full opacity-15 blur-3xl"
          style={{ background: "oklch(89.2% 0.058 10.001)" }}
        />
        <div
          className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full opacity-10 blur-3xl"
          style={{ background: "oklch(89.2% 0.058 10.001)" }}
        />

        <div className="relative mx-auto max-w-4xl px-6 py-24 text-center sm:py-32">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-pink-400">
            Free Resources
          </p>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl">
            Level Up{" "}
            <span className="bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">
              For Free
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-400">
            LinkedIn is the most powerful free tool in your professional toolkit.
            Whether you&apos;re job searching, building your personal brand, or
            trying to attract new opportunities, these free tools are designed to
            help you level up your LinkedIn profile with ease and confidence.
          </p>
          <div className="mx-auto mt-6 flex max-w-md flex-wrap items-center justify-center gap-3 text-sm font-medium text-pink-400">
            <span className="rounded-full border border-pink-500/30 bg-pink-500/10 px-4 py-1.5">
              ✅ Quick wins
            </span>
            <span className="rounded-full border border-pink-500/30 bg-pink-500/10 px-4 py-1.5">
              ✅ No fluff
            </span>
            <span className="rounded-full border border-pink-500/30 bg-pink-500/10 px-4 py-1.5">
              ✅ Value-packed
            </span>
          </div>
        </div>
      </section>

      {/* ── Free Resources Grid ── */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-pink-500">
              Your Toolkit
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Free Downloads &amp; Resources
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-gray-600">
              Each resource is practical, proven, and created from real-world
              experience so you can take action immediately and start seeing
              results.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {freebies.map((item, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <div
                  className="absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100"
                  style={{
                    background:
                      "linear-gradient(135deg, oklch(89.2% 0.058 10.001 / 0.12), transparent)",
                  }}
                />
                <div className="relative">
                  <span className="text-4xl">{item.icon}</span>
                  <h3 className="mt-4 text-lg font-bold text-gray-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">
                    {item.description}
                  </p>
                  {/* Routed this to /contact instead of downloading a file */}
                  <Link
                    href="/contact"
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-pink-500 transition-colors hover:text-pink-600"
                  >
                    Request free copy
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 transition-transform group-hover:translate-x-1"
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
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Best Practices ── */}
      <section className="mx-auto max-w-5xl px-6 py-20 sm:py-28">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-pink-500">
            Level Up Your Game
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Best Practices for Using LinkedIn
          </h2>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {tips.map((tip) => (
            <div key={tip.number} className="group">
              <span className="text-3xl font-extrabold text-pink-200 transition-colors group-hover:text-pink-400">
                {tip.number}
              </span>
              <h3 className="mt-2 text-base font-bold text-gray-900">
                {tip.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                {tip.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Newsletter Signup ── */}
      <section className="relative overflow-hidden bg-gray-900 text-white">
        <div
          className="absolute -top-20 left-1/4 h-80 w-80 rounded-full opacity-15 blur-3xl"
          style={{ background: "oklch(89.2% 0.058 10.001)" }}
        />
        <div
          className="absolute -bottom-10 right-1/4 h-64 w-64 rounded-full opacity-10 blur-3xl"
          style={{ background: "oklch(89.2% 0.058 10.001)" }}
        />

        <div className="relative mx-auto max-w-2xl px-6 py-20 text-center sm:py-28">
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Stay in the Loop
          </h2>
          <p className="mt-4 text-gray-400">
            New freebies added regularly. Subscribe to get free LinkedIn tips,
            resources, and exclusive content delivered straight to your inbox.
          </p>

          {submitted ? (
            <div className="mx-auto mt-10 max-w-md rounded-2xl border border-pink-500/30 bg-pink-500/10 p-6">
              <span className="text-3xl">🎉</span>
              <p className="mt-2 font-semibold text-pink-400">
                You&apos;re in!
              </p>
              <p className="mt-1 text-sm text-gray-400">
                Check your inbox for a welcome surprise.
              </p>
            </div>
          ) : (
            <div className="mx-auto mt-10 flex max-w-md flex-col gap-3 sm:flex-row">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 rounded-full border border-gray-700 bg-gray-800 px-5 py-3.5 text-sm text-white placeholder-gray-500 outline-none transition-colors focus:border-pink-500 focus:ring-1 focus:ring-pink-500"
              />
              <button
                onClick={handleSubscribe}
                className="shrink-0 rounded-full px-7 py-3.5 text-sm font-semibold text-gray-900 shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl"
                style={{ background: "oklch(89.2% 0.058 10.001)" }}
                type="button"
              >
                Subscribe
              </button>
            </div>
          )}

          <p className="mt-6 text-xs text-gray-500">
            Or{" "}
            <a href="https://www.linkedin.com/in/thedigitalgirlie/" className="text-pink-400 underline hover:text-pink-300">
              follow me on LinkedIn
            </a>{" "}
            to stay in the loop.
          </p>
        </div>
      </section>
    </div>
  );
}