import Link from "next/link";

export default function WeakTiesPost() {
  return (
    <main className="pt-24 pb-16">
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-gray-50">
        <div
          className="absolute -top-32 -right-32 h-96 w-96 rounded-full opacity-25 blur-3xl"
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
            <time>Sep 8</time>
            <span className="h-1 w-1 rounded-full bg-gray-300" />
            <span>7 min read</span>
          </div>
          <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            The Subtle Strength of{" "}
            <span className="bg-gradient-to-r from-pink-500 to-rose-400 bg-clip-text text-transparent">
              Weak Ties
            </span>
          </h1>
          <div className="mt-5 flex flex-wrap gap-2">
            {["Networking", "LinkedIn Strategy", "Career Growth"].map((tag) => (
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

      {/* ── Article Body ── */}
      <article className="mx-auto max-w-3xl px-6 py-16 sm:py-20">
        <div className="space-y-8 text-base leading-relaxed text-gray-600">
          <p>
            The concept of weak ties was first articulated by Harvard
            sociologist Mark Granovetter in his landmark 1973 paper{" "}
            <em>&quot;The Strength of Weak Ties.&quot;</em> Granovetter found
            that casual acquaintances\u2014those people you don&apos;t interact
            with often\u2014are often more powerful than close friends when it
            comes to new information and opportunities. In fact, they connect you
            to networks beyond your usual circle.
          </p>

          {/* Why Weak Ties Matter */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              Why Weak Ties Matter
            </h2>
            <div className="mt-6 space-y-5">
              <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <h3 className="font-bold text-gray-900">
                  Access to Novel Information
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  Strong ties tend to move in the same circles and share similar
                  information, while weak ties bring fresh insights and resources
                  you wouldn&apos;t otherwise encounter.
                </p>
              </div>
              <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <h3 className="font-bold text-gray-900">
                  Career &amp; Mobility Boosts
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  Studies consistently show that weak ties play a decisive role
                  in job searches. Granovetter&apos;s original findings revealed
                  that acquaintances have historically been more helpful for
                  employment connections than close friends.
                </p>
              </div>
              <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <h3 className="font-bold text-gray-900">
                  Digital Era Relevance
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  Analysis of vast LinkedIn data shows weak ties, particularly
                  in more digitally-intensive industries, are especially valuable
                  for surfacing new opportunities.
                </p>
              </div>
            </div>
          </div>

          {/* Beyond Jobs */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              Beyond Jobs\u2014Broader Benefits
            </h2>
            <div className="mt-6 grid gap-5 sm:grid-cols-3">
              {[
                {
                  icon: "\u{1F9E0}",
                  title: "Mental Health & Belonging",
                  text: "Casual interactions\u2014like chatting with a barista or joining a community group\u2014can enhance well-being, lower depression, and foster gratitude and belonging.",
                },
                {
                  icon: "\u{1F4A1}",
                  title: "Creativity & Innovation",
                  text: "In open-source development, developers engaging lightly across varied projects via weak ties were more likely to launch novel, creative projects.",
                },
                {
                  icon: "\u{1F4E1}",
                  title: "Information Diffusion",
                  text: "Although strong ties individually influence more, the sheer volume of weak ties drives most new information to spread across networks.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-gray-100 bg-gray-50 p-5"
                >
                  <span className="text-2xl">{item.icon}</span>
                  <h3 className="mt-2 text-sm font-bold text-gray-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-gray-600">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Why Effective */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              Why Weak Ties Are Effective
            </h2>
            <div className="mt-6 space-y-4">
              <p>
                <span className="font-semibold text-gray-900">
                  Bridging Diverse Circles:
                </span>{" "}
                Weak ties link disconnected groups\u2014acting as social
                bridges\u2014thus enabling access to different pools of
                information and opportunity.
              </p>
              <p>
                <span className="font-semibold text-gray-900">
                  Avoiding Echo Chambers:
                </span>{" "}
                Strong ties can foster insular networks; weak ties counter this,
                helping us see beyond our own echo chambers and filter bubbles.
              </p>
              <p>
                Granovetter himself acknowledged strong ties still
                matter\u2014for motivational support or emotional depth\u2014but
                weak ties uniquely broaden our horizons.
              </p>
            </div>
          </div>

          {/* Challenges */}
          <div
            className="rounded-2xl p-8"
            style={{
              background:
                "linear-gradient(135deg, oklch(89.2% 0.058 10.001 / 0.2), transparent)",
            }}
          >
            <h2 className="text-2xl font-bold text-gray-900">
              Challenges &amp; Nuance
            </h2>
            <div className="mt-4 space-y-4 text-sm">
              <p>
                <span className="font-semibold text-gray-900">
                  Too Few or Too Weak:
                </span>{" "}
                The relationship between tie strength and job opportunities
                might follow an inverted-U shape\u2014moderately weak ties are
                especially effective; too many or too weak ties can reduce
                returns.
              </p>
              <p>
                <span className="font-semibold text-gray-900">
                  Industry Differences:
                </span>{" "}
                Weak ties are particularly effective in digital or tech sectors,
                whereas traditional industries might benefit more from stronger,
                closer relationships.
              </p>
            </div>
          </div>

          {/* Tips */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              Tips for Cultivating Weak Ties
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {[
                {
                  num: "01",
                  title: "Be a \u201CRegular\u201D",
                  text: "Frequenting the same caf\u00e9 or joining local groups can create casual but meaningful connections.",
                },
                {
                  num: "02",
                  title: "Embrace Small Talk",
                  text: "Seemingly trivial conversations can be the seeds of unexpected opportunity.",
                },
                {
                  num: "03",
                  title: "Accept New Connections",
                  text: "On LinkedIn or Zoom, be open to broadening your network\u2014even if it feels shallow at first.",
                },
                {
                  num: "04",
                  title: "Diversify Digital Engagement",
                  text: "Don\u2019t just engage with your usual feed\u2014actively seek new voices to counter filter bubbles and algorithmic narrowing.",
                },
              ].map((tip) => (
                <div
                  key={tip.num}
                  className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"
                >
                  <span className="text-2xl font-extrabold text-pink-200">
                    {tip.num}
                  </span>
                  <h3 className="mt-1 text-sm font-bold text-gray-900">
                    {tip.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-gray-600">
                    {tip.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Closing */}
          <div className="rounded-2xl bg-gray-900 p-8 text-white">
            <p className="text-base leading-relaxed text-gray-300">
              Weak ties\u2014the acquaintances, the casual hellos, the
              background flickers on social media\u2014might seem insignificant.
              But they&apos;re often the unsung heroes of opportunity,
              creativity, belonging, and growth. In a world shaped by complex
              networks,{" "}
              <span className="font-semibold text-pink-400">
                even a small bridge can lead to entirely new worlds.
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
