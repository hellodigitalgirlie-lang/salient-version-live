"use client";

import { useState } from "react";

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "Who is this for?",
    answer:
      "Whether you\u2019re a student just entering the workforce, a mid-career professional looking to pivot, or a senior executive strengthening your personal brand\u2014this is for you. My services are designed to meet you wherever you are in your career journey and help you stand out on LinkedIn.",
  },
  {
    question: "How long does the optimization process take?",
    answer:
      "Most LinkedIn profile optimizations are completed within 5\u20137 business days from the date I receive all of your materials. Timelines may vary depending on the package and scope, but I\u2019ll always keep you updated along the way.",
  },
  {
    question: "Do I need to be active on LinkedIn already?",
    answer:
      "Not at all! Whether your profile is brand-new or hasn\u2019t been touched in years, I can work with it. We\u2019ll either start from scratch or refresh what\u2019s already there\u2014no prior LinkedIn activity required.",
  },
  {
    question: "What makes you different from other LinkedIn consultants?",
    answer:
      "I bring over 15 years of real-world digital marketing experience to the table\u2014this isn\u2019t theory, it\u2019s practice. I\u2019ve used LinkedIn myself to land job offers without applying, secure certifications from Harvard, win industry awards, and build a powerful professional network. I teach what I\u2019ve actually done.",
  },
  {
    question: "Can I just pick your brain for an hour?",
    answer:
      "Absolutely! That\u2019s exactly what the $250 Power Hour is for. It\u2019s a focused, one-on-one strategy session where we tackle your biggest LinkedIn questions\u2014whether that\u2019s profile optimization, content strategy, networking, or personal branding. You\u2019ll walk away with clear, actionable next steps.",
  },
];

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`h-5 w-5 shrink-0 text-pink-500 transition-transform duration-300 ${
        open ? "rotate-180" : ""
      }`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}

export default function FaqPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <main className="pt-24 pb-16">
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-gray-50">
        <div
          className="absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full opacity-25 blur-3xl"
          style={{ background: "oklch(89.2% 0.058 10.001)" }}
        />
        <div className="relative mx-auto max-w-3xl px-6 py-24 text-center sm:py-32">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-pink-500">
            Got Questions?
          </p>
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-pink-500 to-rose-400 bg-clip-text text-transparent">
              Questions
            </span>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-gray-600">
            Everything you need to know before we start transforming your
            LinkedIn presence.
          </p>
        </div>
      </section>

      {/* ── Accordion ── */}
      <section className="mx-auto max-w-3xl px-6 py-20 sm:py-28">
        <div className="space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                  isOpen
                    ? "border-pink-200 bg-white shadow-lg shadow-pink-500/5"
                    : "border-gray-200 bg-white hover:border-pink-200"
                }`}
              >
                <button
                  onClick={() => toggle(i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-semibold text-gray-900 sm:text-lg">
                    {faq.question}
                  </span>
                  <ChevronIcon open={isOpen} />
                </button>
                <div
                  className={`grid transition-all duration-300 ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 pb-6 text-sm leading-relaxed text-gray-600 sm:text-base">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── CTA ── */}
        <div className="mt-16 text-center">
          <div className="relative inline-block rounded-3xl bg-gray-900 px-10 py-10 text-center sm:px-16">
            <div
              className="absolute -top-8 -right-8 h-40 w-40 rounded-full opacity-30 blur-2xl"
              style={{ background: "oklch(89.2% 0.058 10.001)" }}
            />
            <p className="relative text-sm font-semibold uppercase tracking-[0.15em] text-pink-400">
              Still have questions?
            </p>
            <h3 className="relative mt-2 text-2xl font-bold text-white">
              Let&apos;s Chat
            </h3>
            <p className="relative mx-auto mt-2 max-w-sm text-sm text-gray-400">
              Book a Power Hour or send me a message. I&apos;m here to help you
              level up.
            </p>
            <a
              href="#"
              className="relative mt-6 inline-flex items-center gap-2 rounded-full px-8 py-3 text-sm font-semibold text-gray-900 shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl"
              style={{ background: "oklch(89.2% 0.058 10.001)" }}
            >
              Get In Touch
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
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
    </main>
  );
}