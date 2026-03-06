import Link from "next/link";

const sections = [
  {
    num: "01",
    title: "Start with a Standout Profile",
    body: "Think of your profile as your personal storefront. A professional headshot, compelling headline, and summary that tells your story\u2014not just your job title\u2014are essential. Your \u201CAbout\u201D section should highlight your expertise, values, and the unique perspective you bring, written in a voice that feels authentic. (Do NOT flex AI for this.)",
  },
  {
    num: "02",
    title: "Showcase Your Expertise",
    body: "Your activity shapes your reputation. Share insights, write original posts, and engage in meaningful conversations. Comment thoughtfully on others\u2019 content and offer genuine value, not just self-promotion. Consistency is key.",
  },
  {
    num: "03",
    title: "Use Content to Tell Your Story",
    body: "Mix content types to keep your audience engaged: short posts for quick takeaways or reflections, articles for in-depth industry analysis or thought leadership, and multimedia such as videos, slides, or infographics for visual appeal. Each piece should reflect your brand\u2019s voice and align with the professional image you want to build.",
  },
  {
    num: "04",
    title: "Build a Strategic Network",
    body: "It\u2019s not just about adding connections, it\u2019s about cultivating the right ones. Follow leaders in your industry, connect with peers, and engage with potential mentors, collaborators, or clients. Send personalized connection requests explaining why you\u2019d like to connect\u2014DO NOT rely on the auto-generated message from LinkedIn.",
  },
  {
    num: "05",
    title: "Leverage Recommendations & Endorsements",
    body: "Ask colleagues, clients, and managers to write LinkedIn recommendations that highlight your skills and contributions. These serve as public testimonials that strengthen your credibility and give your profile social proof.",
  },
  {
    num: "06",
    title: "Stay Visible and Relevant",
    body: "The LinkedIn algorithm rewards consistent, authentic engagement. Respond to comments on your posts, congratulate others on their successes, and participate in relevant group discussions. The more active you are, the more opportunities your name has to appear in the right feeds.",
  },
];

const tags = [
  "Personal Branding",
  "Resume Writing",
  "LinkedIn Tips",
  "Career Growth",
  "Thought Leadership",
  "Networking",
  "Brand Strategy",
  "Social Selling",
  "Content Strategy",
  "Career Success",
];

export default function PersonalBrandPost() {
  return (
    <main className="pt-24 pb-16">
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-gray-50">
        <div
          className="absolute -top-32 -left-32 h-96 w-96 rounded-full opacity-25 blur-3xl"
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
            <time>Aug 14</time>
            <span className="h-1 w-1 rounded-full bg-gray-300" />
            <span>5 min read</span>
          </div>
          <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            How to Use LinkedIn to Grow Your{" "}
            <span className="bg-gradient-to-r from-pink-500 to-rose-400 bg-clip-text text-transparent">
              Personal Brand
            </span>
          </h1>
        </div>
      </section>

      {/* ── Article ── */}
      <article className="mx-auto max-w-3xl px-6 py-16 sm:py-20">
        <div className="space-y-8 text-base leading-relaxed text-gray-600">
          <p>
            In today&apos;s professional world, your personal brand is your
            career currency, and LinkedIn is the perfect platform to invest it
            wisely. Whether you&apos;re job hunting, pivoting careers, growing a
            business, or becoming a recognized voice in your field, LinkedIn
            offers unmatched visibility, credibility, and networking potential.
          </p>

          {/* Steps */}
          <div className="space-y-6">
            {sections.map((section) => (
              <div
                key={section.num}
                className="group rounded-2xl border border-gray-200 bg-white p-7 shadow-sm transition-all hover:border-pink-200 hover:shadow-md"
              >
                <div className="flex items-start gap-4">
                  <span className="shrink-0 text-3xl font-extrabold text-pink-200 transition-colors group-hover:text-pink-400">
                    {section.num}
                  </span>
                  <div>
                    <h2 className="text-lg font-bold text-gray-900">
                      {section.title}
                    </h2>
                    <p className="mt-3 text-sm leading-relaxed text-gray-600">
                      {section.body}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Line */}
          <div className="rounded-2xl bg-gray-900 p-8 text-white">
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-pink-400">
              Bottom Line
            </p>
            <p className="mt-3 leading-relaxed text-gray-300">
              Your personal brand is built over time through the stories you
              tell, the value you provide, and the relationships you nurture.
              LinkedIn isn&apos;t just a resume\u2014it&apos;s your professional
              stage.{" "}
              <span className="font-semibold text-white">
                Show up, contribute, and let your brand shine.
              </span>
            </p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 pt-4">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-500"
              >
                {tag}
              </span>
            ))}
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
