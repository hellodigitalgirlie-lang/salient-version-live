"use client";

import Link from "next/link";

export default function BlogPage() {
  return (
    <>
      <style jsx global>{`
        @keyframes fadeUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes pulse-soft { 0%, 100% { opacity: 0.4; } 50% { opacity: 0.7; } }
        .animate-fade-up { animation: fadeUp 0.8s ease-out forwards; }
        .gradient-blob { position: absolute; border-radius: 50%; filter: blur(80px); opacity: 0.35; }
      `}</style>

      {/* Hero */}
      <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-20 overflow-hidden">
        <div className="gradient-blob w-[400px] h-[400px] bg-blush-200 -top-20 -left-20" style={{ position: "absolute" }} />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold text-blush-600 tracking-wide uppercase animate-fade-up">Blog</p>
          <h1 className="mt-3 font-display text-5xl sm:text-7xl tracking-tight text-espresso animate-fade-up">
            Tips, strategies<br />&amp; inspo
          </h1>
          <p className="mt-6 text-lg text-espresso/60 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "0.2s", opacity: 0 }}>
            Personal branding tips, LinkedIn strategies, and career advice to help you stand out and get noticed.
          </p>
        </div>
      </section>

      {/* Placeholder Posts */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                tag: "LinkedIn Tips",
                title: "5 LinkedIn Headline Mistakes That Are Costing You Opportunities",
                excerpt: "Your headline is prime real estate. Here's how to stop wasting it and start attracting the right people.",
                date: "Coming soon",
                color: "bg-blush-100",
              },
              {
                tag: "Personal Branding",
                title: "How I Landed a Job Without Applying (And How You Can Too)",
                excerpt: "The story of how a single LinkedIn post changed my career trajectory — plus actionable tips you can use today.",
                date: "Coming soon",
                color: "bg-sage-100",
              },
              {
                tag: "Career Strategy",
                title: "The Beginner's Guide to Building a Personal Brand on LinkedIn",
                excerpt: "Not sure where to start? This step-by-step guide breaks down everything you need to know about personal branding.",
                date: "Coming soon",
                color: "bg-blush-100",
              },
            ].map((post, i) => (
              <article key={i} className="group rounded-2xl bg-white overflow-hidden shadow-sm ring-1 ring-espresso/5 hover:shadow-md transition-all hover:-translate-y-1">
                <div className={`h-48 ${post.color} flex items-center justify-center`}>
                  <span className="font-display text-6xl text-espresso/10 italic">tgd</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-semibold text-blush-600 uppercase tracking-wider">{post.tag}</span>
                    <span className="text-xs text-espresso/30">{post.date}</span>
                  </div>
                  <h3 className="text-base font-semibold text-espresso leading-snug group-hover:text-blush-700 transition-colors">{post.title}</h3>
                  <p className="mt-2 text-sm text-espresso/50 leading-relaxed">{post.excerpt}</p>
                </div>
              </article>
            ))}
          </div>

          {/* Coming Soon */}
          <div className="mt-20 text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-blush-100/60 px-4 py-1.5 text-sm font-medium text-blush-700 ring-1 ring-blush-200/50">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blush-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blush-500"></span>
              </span>
              Blog posts coming soon!
            </div>
            <p className="mt-4 text-espresso/50 max-w-md mx-auto">
              I&rsquo;m working on some great content. In the meantime, grab my free resources to start leveling up today.
            </p>
            <Link href="/freebies" className="mt-6 inline-flex rounded-full bg-espresso px-8 py-3.5 text-sm font-semibold text-cream shadow-lg shadow-espresso/25 hover:bg-espresso/90 transition-all">
              Browse free resources →
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-espresso">
        <div className="mx-auto max-w-xl px-6 text-center">
          <h2 className="font-display text-3xl text-cream">Get notified when new posts drop</h2>
          <p className="mt-3 text-sm text-cream/50">Be the first to know when I publish new tips and strategies.</p>
          <div className="mt-6 flex gap-3 max-w-md mx-auto">
            <input type="email" placeholder="Your email" className="flex-1 rounded-full bg-white/10 px-5 py-3 text-sm text-cream placeholder:text-cream/30 ring-1 ring-white/10 focus:ring-2 focus:ring-blush-400 focus:outline-none transition-all" />
            <button className="rounded-full bg-blush-500 px-6 py-3 text-sm font-semibold text-white hover:bg-blush-400 transition-colors shadow-lg shadow-blush-500/25">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </>
  );
}