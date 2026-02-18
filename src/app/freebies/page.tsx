"use client";

import Link from "next/link";

export default function FreebiesPage() {
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
        <div className="gradient-blob w-[400px] h-[400px] bg-sage-200 -top-20 -right-20" style={{ position: "absolute" }} />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold text-sage-600 tracking-wide uppercase animate-fade-up">Free Resources</p>
          <h1 className="mt-3 font-display text-5xl sm:text-7xl tracking-tight text-espresso animate-fade-up">
            Level up for free
          </h1>
          <p className="mt-6 text-lg text-espresso/60 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "0.2s", opacity: 0 }}>
            Whether you&rsquo;re job searching, building your brand, or attracting new opportunities, these free tools are designed to help you take action immediately and start seeing results.
          </p>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: "📋",
                title: "LinkedIn Profile Checklist",
                desc: "A step-by-step checklist to make sure your profile is fully optimized and ready to attract the right opportunities.",
                color: "bg-blush-100",
              },
              {
                icon: "✍️",
                title: "Headline Formula Guide",
                desc: "Proven headline formulas that grab attention and clearly communicate your value — with fill-in-the-blank templates.",
                color: "bg-sage-100",
              },
              {
                icon: "💬",
                title: "Connection Message Templates",
                desc: "Outreach templates that actually get accepted. Perfect for networking, job searching, or building partnerships.",
                color: "bg-blush-100",
              },
              {
                icon: "🔍",
                title: "Keyword Strategy Worksheet",
                desc: "Identify the right keywords for your industry so your profile shows up in the searches that matter.",
                color: "bg-sage-100",
              },
              {
                icon: "📸",
                title: "Profile Photo Tips",
                desc: "Simple, actionable tips for choosing a professional photo that builds trust and makes a great first impression.",
                color: "bg-blush-100",
              },
              {
                icon: "📈",
                title: "Content Starter Kit",
                desc: "30 days of LinkedIn post ideas and prompts to help you show up consistently and build your personal brand.",
                color: "bg-sage-100",
              },
            ].map((resource, i) => (
              <div key={i} className="group rounded-2xl bg-white p-8 shadow-sm ring-1 ring-espresso/5 hover:shadow-md transition-all hover:-translate-y-1">
                <div className={`w-14 h-14 rounded-2xl ${resource.color} flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform`}>
                  {resource.icon}
                </div>
                <h3 className="text-lg font-semibold text-espresso">{resource.title}</h3>
                <p className="mt-2 text-sm text-espresso/60 leading-relaxed">{resource.desc}</p>
                <button className="mt-5 text-sm font-semibold text-blush-600 hover:text-blush-700 transition-colors">
                  Download free →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-espresso">
        <div className="mx-auto max-w-xl px-6 text-center">
          <h2 className="font-display text-3xl text-cream">Want more free tips?</h2>
          <p className="mt-3 text-sm text-cream/50">Sign up for branding inspo, freebies, and LinkedIn strategies straight to your inbox.</p>
          <div className="mt-6 flex gap-3 max-w-md mx-auto">
            <input type="email" placeholder="Your email" className="flex-1 rounded-full bg-white/10 px-5 py-3 text-sm text-cream placeholder:text-cream/30 ring-1 ring-white/10 focus:ring-2 focus:ring-blush-400 focus:outline-none transition-all" />
            <button className="rounded-full bg-blush-500 px-6 py-3 text-sm font-semibold text-white hover:bg-blush-400 transition-colors shadow-lg shadow-blush-500/25">
              Subscribe
            </button>
          </div>
          <p className="mt-3 text-xs text-cream/30">We respect your privacy. Unsubscribe anytime.</p>
        </div>
      </section>

      {/* Upsell */}
      <section className="py-20 text-center">
        <div className="mx-auto max-w-2xl px-6">
          <h2 className="font-display text-3xl sm:text-4xl tracking-tight text-espresso">
            Want the full experience?
          </h2>
          <p className="mt-4 text-espresso/60">These freebies are a great start&mdash;but if you&rsquo;re ready for a complete transformation, check out my services.</p>
          <Link href="/services" className="mt-8 inline-flex rounded-full bg-espresso px-8 py-3.5 text-sm font-semibold text-cream shadow-lg shadow-espresso/25 hover:bg-espresso/90 transition-all">
            View services →
          </Link>
        </div>
      </section>
    </>
  );
}