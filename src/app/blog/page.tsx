import Link from "next/link";

interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  readTime: string;
}

const posts: BlogPost[] = [
  {
    slug: "the-subtle-strength-of-weak-ties",
    title: "The Subtle Strength of Weak Ties",
    date: "Sep 8",
    excerpt:
      "The concept of weak ties was first articulated by Harvard sociologist Mark Granovetter\u2014and it could change the way you think about networking forever.",
    tags: ["Networking", "LinkedIn Strategy"],
    readTime: "7 min read",
  },
  {
    slug: "how-to-use-linkedin-to-grow-your-personal-brand",
    title: "How to Use LinkedIn to Grow Your Personal Brand",
    date: "Aug 14",
    excerpt:
      "Your personal brand is your career currency, and LinkedIn is the perfect platform to invest it wisely. Here\u2019s how to make it work for you.",
    tags: ["Personal Branding", "Content Strategy"],
    readTime: "5 min read",
  },
  {
    slug: "what-is-personal-branding",
    title: "What Is Personal Branding?",
    date: "Jun 9",
    excerpt:
      "Personal branding is the intentional effort to shape the way you\u2019re perceived by others. Learn why it matters and how to own your narrative.",
    tags: ["Personal Branding", "Career Growth"],
    readTime: "3 min read",
  },
  {
    slug: "blog-post-title-one-6fzym",
    title: "5 Quick Fixes to Instantly Improve Your LinkedIn",
    date: "May 28",
    excerpt:
      "Five things you can do right now to improve your LinkedIn profile 10-fold\u2014from headline hacks to URL customization.",
    tags: ["LinkedIn Tips", "Quick Wins"],
    readTime: "3 min read",
  },
];

export default function BlogPage() {
  return (
    <main className="pt-24 pb-16">
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-gray-50">
        <div
          className="absolute -top-32 right-1/4 h-96 w-96 rounded-full opacity-25 blur-3xl"
          style={{ background: "oklch(89.2% 0.058 10.001)" }}
        />
        <div
          className="absolute -bottom-20 left-1/3 h-64 w-64 rounded-full opacity-15 blur-3xl"
          style={{ background: "oklch(89.2% 0.058 10.001)" }}
        />
        <div className="relative mx-auto max-w-4xl px-6 py-24 text-center sm:py-32">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-pink-500">
            The Blog
          </p>
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-6xl">
            Insights &amp;{" "}
            <span className="bg-gradient-to-r from-pink-500 to-rose-400 bg-clip-text text-transparent">
              Strategy
            </span>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-gray-600">
            Real-world LinkedIn advice, personal branding deep-dives, and career
            strategy from someone who&apos;s actually done it.
          </p>
        </div>
      </section>

      {/* ── Posts Grid ── */}
      <section className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <div className="grid gap-8 sm:grid-cols-2">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Colored top accent bar */}
              <div
                className="h-1.5 w-full"
                style={{
                  background:
                    "linear-gradient(90deg, oklch(89.2% 0.058 10.001), #ec4899)",
                }}
              />

              <div className="flex flex-1 flex-col p-7">
                {/* Date & read time */}
                <div className="flex items-center gap-3 text-xs text-gray-400">
                  <time>{post.date}</time>
                  <span className="h-1 w-1 rounded-full bg-gray-300" />
                  <span>{post.readTime}</span>
                </div>

                {/* Title */}
                <h2 className="mt-3 text-xl font-bold leading-snug text-gray-900 transition-colors group-hover:text-pink-500">
                  {post.title}
                </h2>

                {/* Excerpt */}
                <p className="mt-3 flex-1 text-sm leading-relaxed text-gray-600">
                  {post.excerpt}
                </p>

                {/* Tags */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-pink-50 px-3 py-1 text-xs font-medium text-pink-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Read more */}
                <div className="mt-5 flex items-center gap-1.5 text-sm font-semibold text-pink-500 transition-colors group-hover:text-pink-600">
                  Read Article
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
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Newsletter CTA ── */}
      <section className="bg-gray-900">
        <div className="mx-auto max-w-3xl px-6 py-16 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-pink-400">
            Never Miss a Post
          </p>
          <h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
            Get LinkedIn tips straight to your inbox.
          </h2>
          <p className="mt-3 text-sm text-gray-400">
            No spam. Just actionable strategy from 15+ years in the game.
          </p>
        </div>
      </section>
    </main>
  );
}