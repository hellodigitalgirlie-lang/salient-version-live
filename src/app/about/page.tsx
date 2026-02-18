"use client";

import Link from "next/link";

export default function AboutPage() {
  return (
    <>
      <style jsx global>{`
        @keyframes fadeUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes float { 0%, 100% { transform: translateY(0px) rotate(0deg); } 50% { transform: translateY(-20px) rotate(2deg); } }
        @keyframes pulse-soft { 0%, 100% { opacity: 0.4; } 50% { opacity: 0.7; } }
        .animate-fade-up { animation: fadeUp 0.8s ease-out forwards; }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .gradient-blob { position: absolute; border-radius: 50%; filter: blur(80px); opacity: 0.35; }
        .glass-card { background: rgba(255,255,255,0.7); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); border: 1px solid rgba(255,255,255,0.5); }
        .text-gradient { background: linear-gradient(135deg, #d44f2e, #e86a47, #f08b6e); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
      `}</style>

      {/* Hero */}
      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden">
        <div className="gradient-blob w-[500px] h-[500px] bg-blush-200 -top-40 -right-40" style={{ position: "absolute" }} />
        <div className="gradient-blob w-[400px] h-[400px] bg-sage-200 top-20 -left-20" style={{ position: "absolute", animationDelay: "2s" }} />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Image */}
            <div className="relative animate-fade-up">
              <div className="aspect-[4/5] overflow-hidden rounded-3xl bg-sage-100 shadow-2xl shadow-sage-900/10">
                <img
                  src="https://images.squarespace-cdn.com/content/v1/684066d26fdac4230f2721d4/3db988a5-651d-45e8-a19f-aea471d2886e/DWA24.jpg"
                  alt="Jessica - The Digital Girlie"
                  className="size-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 sm:bottom-8 sm:-right-8 glass-card rounded-2xl p-5 shadow-lg animate-float">
                <div className="text-3xl mb-1">🏆</div>
                <div className="text-sm font-semibold text-espresso">Marketer of the Year</div>
                <div className="text-xs text-espresso/50">2025 EIMA Awards</div>
              </div>
            </div>

            {/* Text */}
            <div className="animate-fade-up" style={{ animationDelay: "0.2s" }}>
              <p className="text-sm font-semibold text-blush-600 tracking-wide uppercase">Nice to meet you</p>
              <h1 className="mt-3 font-display text-5xl sm:text-6xl tracking-tight text-espresso">
                Hi, I&rsquo;m Jessica 👋
              </h1>
              <div className="mt-6 space-y-5 text-base text-espresso/70 leading-relaxed">
                <p>
                  I help professionals craft their personal brands and turn their LinkedIn profiles into opportunity magnets.
                </p>
                <p>
                  With over <strong className="text-espresso font-semibold">15 years of experience</strong> in digital marketing&mdash;and a proven track record of generating real-world results through LinkedIn&mdash;I combine strategy, storytelling, and personal branding to help job seekers, entrepreneurs, and professionals stand out and get noticed.
                </p>
                <p>
                  Corporate girlie by day, I lead digital strategy at Envoy Air, an American Airlines Group company&mdash;developing integrated marketing campaigns, managing digital presence and PR, and crafting content that fuels talent acquisition and brand visibility.
                </p>
                <p>
                  My foundation in marketing gives me a unique advantage as a LinkedIn consultant: I understand not only how to write a strong profile, but also how to position you strategically for visibility, impact, and opportunity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why LinkedIn */}
      <section className="py-24 sm:py-32 bg-espresso text-cream relative overflow-hidden">
        <div className="gradient-blob w-[500px] h-[500px] bg-blush-800 top-0 left-1/3 opacity-20" style={{ position: "absolute" }} />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <p className="text-sm font-semibold text-blush-400 tracking-wide uppercase">Why LinkedIn?</p>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl tracking-tight text-cream">
              Because I&rsquo;ve used it to open doors
            </h2>
          </div>

          <div className="mx-auto mt-16 max-w-3xl">
            <div className="space-y-6">
              {[
                { icon: "✅", text: "Land job offers without applying" },
                { icon: "✅", text: "Gain free access to major industry conferences" },
                { icon: "✅", text: "Win professional awards and recognition" },
                { icon: "✅", text: "Secure free continuing education and certifications (hi, Harvard! What, like it's hard?)" },
                { icon: "✅", text: "Build a network of high-impact connections across industries" },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-start rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
                  <span className="text-2xl flex-none">{item.icon}</span>
                  <p className="text-lg text-cream/80 font-medium">{item.text}</p>
                </div>
              ))}
            </div>
            <p className="mt-10 text-center text-cream/50 font-display text-xl italic">
              I don&rsquo;t just teach LinkedIn strategy&mdash;I&rsquo;ve personally used it to open doors, build influence, and grow my career.
            </p>
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center mb-16">
            <p className="text-sm font-semibold text-blush-600 tracking-wide uppercase">Awards &amp; Recognition</p>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl tracking-tight text-espresso">
              Not just talk&mdash;results
            </h2>
          </div>

          <div className="mx-auto max-w-3xl grid sm:grid-cols-2 gap-6">
            {[
              { icon: "🏆", title: "Social Media Manager of the Year Finalist", sub: "2025 Digital Women Awards" },
              { icon: "🏆", title: "EIMA Marketer of the Year", sub: "2025 DFW Integrated Marketing Association" },
              { icon: "🏆", title: "Digital Woman to Watch", sub: "2024 Digital Women Awards" },
              { icon: "🏆", title: "Social Media Manager of the Year Runner Up", sub: "2024 Digital Women Awards" },
              { icon: "⭐", title: "Dallas Meetup Featured Networker", sub: "Fall 2024" },
              { icon: "⭐", title: "Named Social Media Marketing Expert", sub: "Featured in Huffpost" },
            ].map((award, i) => (
              <div key={i} className="rounded-2xl bg-cream p-6 ring-1 ring-espresso/5">
                <div className="text-2xl mb-3">{award.icon}</div>
                <h3 className="font-semibold text-espresso">{award.title}</h3>
                <p className="text-sm text-espresso/50 mt-1">{award.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <div className="gradient-blob w-[500px] h-[500px] bg-blush-200 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" style={{ position: "absolute" }} />
        <div className="relative mx-auto max-w-3xl px-6 lg:px-8 text-center">
          <h2 className="font-display text-4xl sm:text-6xl tracking-tight text-espresso leading-tight">
            Ready to own your personal brand?
          </h2>
          <p className="mt-6 text-lg text-espresso/60">
            Let&rsquo;s make your profile <em className="font-display text-xl">impossible</em> to ignore. ⬇️
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="rounded-full bg-espresso px-8 py-3.5 text-sm font-semibold text-cream shadow-lg shadow-espresso/25 hover:bg-espresso/90 hover:shadow-xl hover:-translate-y-0.5 transition-all">
              Let&rsquo;s chat ✨
            </Link>
            <Link href="/services" className="rounded-full px-8 py-3.5 text-sm font-semibold text-espresso ring-1 ring-espresso/15 hover:ring-espresso/30 hover:bg-white/50 transition-all">
              View services →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}