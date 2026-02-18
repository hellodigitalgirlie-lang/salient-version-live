"use client";

import Link from "next/link";

const CheckSvg = ({ className = "text-blush-500" }: { className?: string }) => (
  <svg className={`h-5 w-5 flex-none ${className}`} viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
  </svg>
);

export default function ServicesPage() {
  return (
    <>
      <style jsx global>{`
        @keyframes fadeUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes pulse-soft { 0%, 100% { opacity: 0.4; } 50% { opacity: 0.7; } }
        .animate-fade-up { animation: fadeUp 0.8s ease-out forwards; }
        .gradient-blob { position: absolute; border-radius: 50%; filter: blur(80px); opacity: 0.35; }
        .pricing-card { transition: all 0.3s ease; }
        .pricing-card:hover { transform: translateY(-4px); box-shadow: 0 25px 50px -12px rgba(0,0,0,0.1); }
      `}</style>

      {/* Hero */}
      <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-20 overflow-hidden">
        <div className="gradient-blob w-[400px] h-[400px] bg-blush-200 -top-20 -right-20" style={{ position: "absolute" }} />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold text-blush-600 tracking-wide uppercase animate-fade-up">Services</p>
          <h1 className="mt-3 font-display text-5xl sm:text-7xl tracking-tight text-espresso animate-fade-up">
            Invest in your<br />personal brand
          </h1>
          <p className="mt-6 text-lg text-espresso/60 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "0.2s", opacity: 0 }}>
            Whether you&rsquo;re a student starting out, a mid-career professional looking to pivot, or an executive wanting to strengthen your brand&mdash;I work with professionals at every stage.
          </p>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { icon: "🎓", title: "For Students", desc: "Starting your career? Build a LinkedIn profile that gets you noticed before you even graduate." },
              { icon: "🚀", title: "For Mid-Career", desc: "Ready to pivot or level up? Reposition your brand to attract the opportunities you actually want." },
              { icon: "👔", title: "For Executives", desc: "Strengthen your authority and thought leadership with a profile that reflects your impact." },
            ].map((item, i) => (
              <div key={i} className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-espresso/5 hover:shadow-md transition-shadow text-center">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-semibold text-espresso">{item.title}</h3>
                <p className="mt-2 text-sm text-espresso/60">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 sm:py-32 relative overflow-hidden">
        <div className="gradient-blob w-[400px] h-[400px] bg-sage-100 top-0 right-0" style={{ position: "absolute" }} />
        <div className="gradient-blob w-[300px] h-[300px] bg-blush-100 bottom-0 left-1/4" style={{ position: "absolute" }} />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="isolate mx-auto grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {/* Tier 1 */}
            <div className="pricing-card flex flex-col justify-between rounded-3xl bg-white p-8 ring-1 ring-espresso/5 shadow-sm xl:p-10">
              <div>
                <h3 className="text-lg font-semibold text-espresso">LinkedIn Profile Audit</h3>
                <p className="mt-4 text-sm text-espresso/60">Get expert feedback on your existing profile with a clear roadmap for improvement.</p>
                <p className="mt-6 flex items-baseline gap-x-1">
                  <span className="text-5xl font-display tracking-tight text-espresso">$149</span>
                </p>
                <ul className="mt-8 space-y-3 text-sm text-espresso/70">
                  <li className="flex gap-x-3"><CheckSvg />Full profile review with annotations</li>
                  <li className="flex gap-x-3"><CheckSvg />Keyword &amp; branding recommendations</li>
                  <li className="flex gap-x-3"><CheckSvg />30-minute feedback call</li>
                </ul>
              </div>
              <a href="https://buy.stripe.com/28E00ceeW1nK0GZc9YfnO02" className="mt-8 block rounded-full px-4 py-3 text-center text-sm font-semibold text-espresso ring-1 ring-espresso/15 hover:ring-espresso/30 hover:bg-espresso/5 transition-all">
                Book now
              </a>
            </div>

            {/* Tier 2 */}
            <div className="pricing-card flex flex-col justify-between rounded-3xl bg-espresso p-8 shadow-2xl shadow-espresso/30 ring-1 ring-espresso xl:p-10 relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="rounded-full bg-blush-500 px-4 py-1.5 text-xs font-bold text-white uppercase tracking-wider shadow-lg shadow-blush-500/30">Most popular</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-cream">Done-for-You Optimization</h3>
                <p className="mt-4 text-sm text-cream/50">100% done for you. I&rsquo;ll rewrite, optimize, and design your entire LinkedIn presence.</p>
                <p className="mt-6 flex items-baseline gap-x-1">
                  <span className="text-5xl font-display tracking-tight text-cream">$399</span>
                </p>
                <ul className="mt-8 space-y-3 text-sm text-cream/70">
                  <li className="flex gap-x-3"><CheckSvg className="text-blush-400" />Complete headline, about &amp; experience rewrite</li>
                  <li className="flex gap-x-3"><CheckSvg className="text-blush-400" />Keyword optimization for visibility</li>
                  <li className="flex gap-x-3"><CheckSvg className="text-blush-400" />Custom banner image</li>
                  <li className="flex gap-x-3"><CheckSvg className="text-blush-400" />Featured media curation</li>
                  <li className="flex gap-x-3"><CheckSvg className="text-blush-400" />60-min strategy session + 1 revision</li>
                </ul>
              </div>
              <a href="https://buy.stripe.com/7sY14gfj05E075ngqefnO01" className="mt-8 block rounded-full bg-blush-500 px-4 py-3 text-center text-sm font-semibold text-white shadow-lg shadow-blush-500/25 hover:bg-blush-400 transition-all">
                Book now ✨
              </a>
            </div>

            {/* Tier 3 */}
            <div className="pricing-card flex flex-col justify-between rounded-3xl bg-white p-8 ring-1 ring-espresso/5 shadow-sm xl:p-10">
              <div>
                <h3 className="text-lg font-semibold text-espresso">LinkedIn Power Hour</h3>
                <p className="mt-4 text-sm text-espresso/60">A focused 1-on-1 session to answer questions, review live, and map your next moves.</p>
                <p className="mt-6 flex items-baseline gap-x-1">
                  <span className="text-5xl font-display tracking-tight text-espresso">$250</span>
                </p>
                <ul className="mt-8 space-y-3 text-sm text-espresso/70">
                  <li className="flex gap-x-3"><CheckSvg />60-minute live session</li>
                  <li className="flex gap-x-3"><CheckSvg />Live profile review &amp; feedback</li>
                  <li className="flex gap-x-3"><CheckSvg />Personalized next-steps roadmap</li>
                </ul>
              </div>
              <a href="https://buy.stripe.com/9B6dR2b2K7M8exP2zofnO00" className="mt-8 block rounded-full px-4 py-3 text-center text-sm font-semibold text-espresso ring-1 ring-espresso/15 hover:ring-espresso/30 hover:bg-espresso/5 transition-all">
                Book now
              </a>
            </div>
          </div>

          {/* Add-ons */}
          <div className="mt-16 mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold text-espresso/40 uppercase tracking-wider mb-4">Add-ons</p>
            <div className="flex flex-wrap justify-center gap-3">
              <span className="rounded-full bg-white px-5 py-2 text-sm text-espresso/70 ring-1 ring-espresso/10">Connection templates &mdash; $30</span>
              <span className="rounded-full bg-white px-5 py-2 text-sm text-espresso/70 ring-1 ring-espresso/10">Banner design &mdash; $50</span>
              <span className="rounded-full bg-white px-5 py-2 text-sm text-espresso/70 ring-1 ring-espresso/10">Custom graphics &mdash; $40</span>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blush-600 to-blush-800 px-8 py-20 sm:px-16 sm:py-28 shadow-2xl shadow-blush-900/20">
            <div className="relative mx-auto max-w-2xl text-center">
              <div className="text-5xl mb-8">💬</div>
              <blockquote className="font-display text-2xl sm:text-3xl italic text-white leading-snug">
                &ldquo;Jessica is an expert at corporate and personal branding and she has taught me so much about managing my own personal brand.&rdquo;
              </blockquote>
              <figcaption className="mt-8">
                <div className="text-base font-semibold text-white">Mindi Kimmell</div>
                <div className="mt-1 text-sm text-white/60">AAG Managing Director of Financial Services</div>
              </figcaption>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center">
        <div className="mx-auto max-w-2xl px-6">
          <h2 className="font-display text-3xl sm:text-4xl tracking-tight text-espresso">
            Not sure which package is right for you?
          </h2>
          <p className="mt-4 text-espresso/60">Let&rsquo;s chat and figure it out together.</p>
          <Link href="/contact" className="mt-8 inline-flex rounded-full bg-espresso px-8 py-3.5 text-sm font-semibold text-cream shadow-lg shadow-espresso/25 hover:bg-espresso/90 transition-all">
            Get in touch ✨
          </Link>
        </div>
      </section>
    </>
  );
}