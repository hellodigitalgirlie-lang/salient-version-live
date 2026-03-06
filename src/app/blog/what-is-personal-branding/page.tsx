import Link from "next/link";

const benefits = [
  "Build trust and credibility",
  "Highlight your strengths and expertise",
  "Open doors to career and business opportunities",
  "Make a memorable impression",
  "Stand out in a crowded job market",
];

export default function WhatIsPersonalBrandingPost() {
  return (
    <main className="pt-24 pb-16">
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-gray-50">
        <div
          className="absolute -top-32 right-0 h-96 w-96 rounded-full opacity-25 blur-3xl"
          style={{ background: "oklch(89.2% 0.058 10.001)" }}
        />
        <div className="relative mx-auto max-w-3xl px-6 py-20 sm:py-28">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-pink-500 transition-colors hover:text-pink-600"
          >
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
                d="M7 16l-4-4m0 0l4-4m-4 4h18"
              />
            </svg>
            Back to Blog
          </Link>
          <div className="mt-6 flex items-center gap-3 text-xs text-gray-400">
            <time>Jun 9</time>
            <span className="h-1 w-1 rounded-full bg-gray-300" />
            <span>3 min read</span>
          </div>
          <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            What Is{" "}
            <span className="bg-gradient-to-r from-pink-500 to-rose-400 bg-clip-text text-transparent">
              Personal Branding?
            </span>
          </h1>
          <div className="mt-5 flex flex-wrap gap-2">
            {["Personal Branding", "Career Growth"].map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-pink-50 px-3 py-1 text-xs font-medium text-pink-600"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Article ── */}
      <article className="mx-auto max-w-3xl px-6 py-16 sm:py-20">
        <div className="space-y-8 text-base leading-relaxed text-gray-600">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              What Is Personal Branding and Why Is It Important?
            </h2>
            <p className="mt-4">
              In today&apos;s competitive world, standing out is more than a
              goal\u2014it&apos;s a necessity. That&apos;s where personal
              branding comes in.
            </p>
            <p className="mt-4">
              Personal branding is the intentional effort to shape the way
              you&apos;re perceived by others. It&apos;s how you present your
              skills, values, personality, and experience\u2014both online and in
              person. Just like a company brand, your personal brand tells people
              who you are, what you stand for, and what they can expect from
              working with you.
            </p>
          </div>

          {/* Benefits */}
          <div
            className="rounded-2xl p-8"
            style={{
              background:
                "linear-gradient(135deg, oklch(89.2% 0.058 10.001 / 0.2), transparent)",
            }}
          >
            <h2 className="text-xl font-bold text-gray-900">
              Why Does It Matter?
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Your personal brand helps you:
            </p>
            <div className="mt-5 space-y-3">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-pink-500/20 text-xs text-pink-500">
                    \u2713
                  </span>
                  <p className="text-sm font-medium text-gray-800">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <p>
            Whether you&apos;re a student, a professional, or an entrepreneur,
            personal branding gives you control over your narrative. It allows
            you to authentically communicate your value\u2014and that can make
            all the difference.
          </p>

          {/* TL;DR */}
          <div className="rounded-2xl bg-gray-900 p-8 text-white">
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-pink-400">
              TL;DR
            </p>
            <p className="mt-3 text-lg font-semibold leading-relaxed text-gray-200">
              Your personal brand is your reputation.{" "}
              <span className="text-pink-400">
                Own it, shape it, and let it work for you.
              </span>
            </p>
          </div>
        </div>

        {/* ── Back to Blog ── */}
        <div className="mt-14 border-t border-gray-200 pt-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-gray-900 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
            style={{ background: "oklch(89.2% 0.058 10.001)" }}
          >
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
                d="M7 16l-4-4m0 0l4-4m-4 4h18"
              />
            </svg>
            All Articles
          </Link>
        </div>
      </article>
    </main>
  );
}
