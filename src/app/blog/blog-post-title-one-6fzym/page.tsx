import Link from "next/link";

const fixes = [
  {
    num: "1",
    title: "Fix Your Headline",
    body: "Your headline should highlight value, not just your job title.",
    bad: "\u201CMarketing Manager at ABC Corp\u201D",
    good: "\u201CHelping startups grow through digital marketing | SEO | Email | Content\u201D",
  },
  {
    num: "2",
    title: "Add a Clear, Professional Photo",
    body: "Use a high-res headshot with good lighting and a neutral background. Avoid group shots and selfies.",
    icon: "\uD83D\uDCF7",
  },
  {
    num: "3",
    title: "Write a Strong \u2018About\u2019 Section",
    body: "Hook them with what makes you unique! Use first-person tone to highlight value, results, and keywords. Think of it like your personal elevator pitch.",
    icon: "\u270D\uFE0F",
  },
  {
    num: "4",
    title: "Refresh Skills & Endorsements",
    body: "Keep your top 8\u201310 skills and remove any that are outdated. Ask 2\u20133 people to endorse you\u2014more endorsements boost credibility.",
    icon: "\u2B50\uFE0F",
  },
  {
    num: "5",
    title: "Customize Your Profile URL",
    body: "Make your profile easy to share and professional-looking.",
    url: "linkedin.com/in/yourname",
    tip: "Go to \u201CEdit public profile & URL\u201D \u2192 upper right of your profile",
    icon: "\uD83D\uDD17",
  },
];

export default function QuickFixesPost() {
  return (
    <main className="pt-24 pb-16">
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-gray-50">
        <div
          className="absolute -top-32 left-1/3 h-96 w-96 rounded-full opacity-25 blur-3xl"
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
            <time>May 28</time>
            <span className="h-1 w-1 rounded-full bg-gray-300" />
            <span>3 min read</span>
          </div>
          <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            5 Quick Fixes to{" "}
            <span className="bg-gradient-to-r from-pink-500 to-rose-400 bg-clip-text text-transparent">
              Instantly Improve
            </span>{" "}
            Your LinkedIn
          </h1>
          <p className="mt-5 text-lg text-gray-600">
            Five things you can do right now to improve your LinkedIn profile
            10-fold.
          </p>
        </div>
      </section>

      {/* ── Article ── */}
      <article className="mx-auto max-w-3xl px-6 py-16 sm:py-20">
        <div className="space-y-6">
          {fixes.map((fix) => (
            <div
              key={fix.num}
              className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all hover:border-pink-200 hover:shadow-md"
            >
              <div
                className="h-1 w-full"
                style={{
                  background:
                    "linear-gradient(90deg, oklch(89.2% 0.058 10.001), #ec4899)",
                }}
              />
              <div className="p-7">
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-pink-50 text-lg font-extrabold text-pink-500">
                    {fix.num}
                  </span>
                  <div className="flex-1">
                    <h2 className="text-lg font-bold text-gray-900">
                      {fix.title}
                    </h2>
                    <p className="mt-2 text-sm leading-relaxed text-gray-600">
                      {fix.body}
                    </p>

                    {/* Headline example (fix 1) */}
                    {fix.bad && fix.good && (
                      <div className="mt-4 space-y-2">
                        <div className="flex items-start gap-2 rounded-xl bg-red-50 px-4 py-3">
                          <span className="shrink-0 text-sm">&#10060;</span>
                          <p className="text-sm text-red-700">{fix.bad}</p>
                        </div>
                        <div className="flex items-start gap-2 rounded-xl bg-green-50 px-4 py-3">
                          <span className="shrink-0 text-sm">&#9989;</span>
                          <p className="text-sm text-green-700">{fix.good}</p>
                        </div>
                      </div>
                    )}

                    {/* URL example (fix 5) */}
                    {fix.url && (
                      <div className="mt-4 space-y-2">
                        <p className="rounded-xl bg-gray-50 px-4 py-3 font-mono text-sm text-gray-700">
                          {fix.url}
                        </p>
                        {fix.tip && (
                          <p className="text-xs text-gray-400">{fix.tip}</p>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 rounded-2xl bg-gray-900 p-8 text-center text-white">
          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-pink-400">
            Want the full treatment?
          </p>
          <p className="mt-3 text-lg font-bold">
            These quick fixes are just the beginning.
          </p>
          <p className="mx-auto mt-2 max-w-md text-sm text-gray-400">
            For a complete LinkedIn transformation, check out my optimization
            services and let&apos;s turn your profile into an opportunity
            magnet.
          </p>
          <a
            href="#"
            className="mt-6 inline-flex items-center gap-2 rounded-full px-8 py-3 text-sm font-semibold text-gray-900 shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl"
            style={{ background: "oklch(89.2% 0.058 10.001)" }}
          >
            View Services
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
