"use client";

import Link from "next/link";

const CheckSvg = ({ className = "text-pink-500" }: { className?: string }) => (
  <svg className={`h-5 w-5 flex-none ${className}`} viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
  </svg>
);

export default function ServicesPage() {
  return (
    <>
      <style jsx global>{`
        @keyframes fadeUp { 
          from { opacity: 0; transform: translateY(30px); } 
          to { opacity: 1; transform: translateY(0); } 
        }
        @keyframes pulse-soft { 
          0%, 100% { opacity: 0.4; } 
          50% { opacity: 0.7; } 
        }
        .animate-fade-up { animation: fadeUp 0.8s ease-out forwards; }
      `}</style>

      {/* ===== HERO ===== */}
      <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-20 overflow-hidden bg-white">
        <div className="absolute w-[500px] h-[500px] rounded-full blur-[80px] opacity-40 bg-[oklch(89.2%_0.058_10.001)] -top-20 -right-20" style={{ animation: "pulse-soft 4s ease-in-out infinite" }} />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold text-pink-500 tracking-wide uppercase animate-fade-up">Services</p>
          <h1 className="mt-3 font-serif text-5xl sm:text-7xl tracking-tight text-gray-900 animate-fade-up">
            Invest in your<br />
            <span className="italic bg-gradient-to-r from-pink-500 to-rose-400 bg-clip-text text-transparent">personal brand</span>
          </h1>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "0.2s", opacity: 0 }}>
            Whether you&rsquo;re a student starting out, a mid-career professional looking to pivot, or an executive wanting to strengthen your authority&mdash;I have a package for you.
          </p>
        </div>
      </section>

      {/* ===== HIGH CONTRAST: WHO IT'S FOR ===== */}
      <section className="py-20 bg-gray-900 relative overflow-hidden">
        <div className="absolute w-[400px] h-[400px] rounded-full blur-[100px] bg-pink-500 opacity-20 top-0 left-1/4" />
        
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid sm:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { icon: "🎓", title: "For Students", desc: "Starting your career? Build a LinkedIn profile that gets you noticed by recruiters before you even graduate." },
              { icon: "🚀", title: "For Mid-Career", desc: "Ready to pivot or level up? Reposition your personal brand to attract the opportunities you actually want." },
              { icon: "👔", title: "For Executives", desc: "Strengthen your authority and thought leadership with a polished profile that reflects your true impact." },
            ].map((item, i) => (
              <div key={i} className="group rounded-2xl bg-white/5 p-8 border border-white/10 hover:bg-white/10 transition-all hover:-translate-y-1 cursor-default">
                <div className="text-4xl mb-5 group-hover:scale-110 group-hover:-rotate-3 transition-transform">{item.icon}</div>
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== NEW FEATURE: HOW IT WORKS ===== */}
      <section className="py-24 bg-gray-50 border-y border-gray-100">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl tracking-tight text-gray-900">How the process works</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { step: "01", title: "The Audit", desc: "We start by reviewing where you are currently and mapping out exactly where you want to be." },
              { step: "02", title: "The Strategy", desc: "I craft a targeted game plan, optimizing your keywords, headline, and professional narrative." },
              { step: "03", title: "The Glow Up", desc: "You receive a fully polished, ready-to-publish profile that commands attention." },
            ].map((item, i) => (
              <div key={i} className="relative p-6 text-center md:text-left">
                <div className="text-5xl font-serif font-bold text-[oklch(89.2%_0.058_10.001)] mb-4">{item.step}</div>
                <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PRICING / PACKAGES ===== */}
      <section className="py-24 sm:py-32 relative overflow-hidden bg-white">
        <div className="absolute w-[400px] h-[400px] rounded-full blur-[80px] opacity-30 bg-gray-200 top-0 right-0" />
        <div className="absolute w-[300px] h-[300px] rounded-full blur-[80px] opacity-40 bg-[oklch(89.2%_0.058_10.001)] bottom-0 left-1/4" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="isolate mx-auto grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            
            {/* Tier 1: Audit */}
            <div className="flex flex-col justify-between rounded-3xl bg-white p-8 ring-1 ring-gray-100 shadow-sm xl:p-10 hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">LinkedIn Profile Audit</h3>
                <p className="mt-4 text-sm text-gray-600">Get expert feedback on your existing profile with a clear roadmap for improvement.</p>
                <p className="mt-6 flex items-baseline gap-x-1">
                  <span className="text-5xl font-serif tracking-tight text-gray-900">$149</span>
                </p>
                <ul className="mt-8 space-y-3 text-sm text-gray-600">
                  <li className="flex gap-x-3"><CheckSvg />Full profile review with annotations</li>
                  <li className="flex gap-x-3"><CheckSvg />Keyword &amp; branding recommendations</li>
                  <li className="flex gap-x-3"><CheckSvg />30-minute feedback call</li>
                </ul>
              </div>
              <a href="https://buy.stripe.com/28E00ceeW1nK0GZc9YfnO02" className="mt-8 block rounded-full px-4 py-3 text-center text-sm font-semibold text-gray-900 ring-1 ring-gray-200 hover:ring-gray-300 hover:bg-gray-50 transition-all">
                Book now
              </a>
            </div>

            {/* Tier 2: Optimization (Highlighted) */}
            <div className="flex flex-col justify-between rounded-3xl bg-gray-900 p-8 shadow-2xl shadow-gray-900/20 ring-2 ring-[oklch(89.2%_0.058_10.001)] xl:p-10 relative hover:-translate-y-2 hover:shadow-3xl transition-all duration-300 transform scale-105 z-10">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="rounded-full bg-[oklch(89.2%_0.058_10.001)] px-4 py-1.5 text-xs font-bold text-gray-900 uppercase tracking-wider shadow-lg">Most popular</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Done-for-You Optimization</h3>
                <p className="mt-4 text-sm text-gray-300">100% done for you. I&rsquo;ll rewrite, optimize, and design your entire LinkedIn presence.</p>
                <p className="mt-6 flex items-baseline gap-x-1">
                  <span className="text-5xl font-serif tracking-tight text-white">$399</span>
                </p>
                <ul className="mt-8 space-y-3 text-sm text-gray-300">
                  <li className="flex gap-x-3"><CheckSvg className="text-pink-400" />Complete headline, about &amp; experience rewrite</li>
                  <li className="flex gap-x-3"><CheckSvg className="text-pink-400" />Keyword optimization for visibility</li>
                  <li className="flex gap-x-3"><CheckSvg className="text-pink-400" />Custom banner image</li>
                  <li className="flex gap-x-3"><CheckSvg className="text-pink-400" />Featured media curation</li>
                  <li className="flex gap-x-3"><CheckSvg className="text-pink-400" />60-min strategy session + 1 revision</li>
                </ul>
              </div>
              <a href="https://buy.stripe.com/7sY14gfj05E075ngqefnO01" className="mt-8 block rounded-full bg-[oklch(89.2%_0.058_10.001)] px-4 py-3 text-center text-sm font-semibold text-gray-900 shadow-lg hover:brightness-95 transition-all">
                Book now
              </a>
            </div>

            {/* Tier 3: Power Hour */}
            <div className="flex flex-col justify-between rounded-3xl bg-white p-8 ring-1 ring-gray-100 shadow-sm xl:p-10 hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">LinkedIn Power Hour</h3>
                <p className="mt-4 text-sm text-gray-600">A focused 1-on-1 session to answer questions, review live, and map your next moves.</p>
                <p className="mt-6 flex items-baseline gap-x-1">
                  <span className="text-5xl font-serif tracking-tight text-gray-900">$250</span>
                </p>
                <ul className="mt-8 space-y-3 text-sm text-gray-600">
                  <li className="flex gap-x-3"><CheckSvg />60-minute live session</li>
                  <li className="flex gap-x-3"><CheckSvg />Live profile review &amp; feedback</li>
                  <li className="flex gap-x-3"><CheckSvg />Personalized next-steps roadmap</li>
                </ul>
              </div>
              <a href="https://buy.stripe.com/9B6dR2b2K7M8exP2zofnO00" className="mt-8 block rounded-full px-4 py-3 text-center text-sm font-semibold text-gray-900 ring-1 ring-gray-200 hover:ring-gray-300 hover:bg-gray-50 transition-all">
                Book now
              </a>
            </div>
          </div>

          {/* Add-ons */}
          <div className="mt-16 mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Add-ons</p>
            <div className="flex flex-wrap justify-center gap-3">
              <span className="rounded-full bg-gray-50 px-5 py-2 text-sm text-gray-600 ring-1 ring-gray-200 hover:bg-white transition-colors cursor-default">Connection templates &mdash; $30</span>
              <span className="rounded-full bg-gray-50 px-5 py-2 text-sm text-gray-600 ring-1 ring-gray-200 hover:bg-white transition-colors cursor-default">Banner design &mdash; $50</span>
              <span className="rounded-full bg-gray-50 px-5 py-2 text-sm text-gray-600 ring-1 ring-gray-200 hover:bg-white transition-colors cursor-default">Custom graphics &mdash; $40</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIAL ===== */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-pink-500 to-rose-400 px-8 py-20 sm:px-16 sm:py-28 shadow-2xl shadow-pink-500/20">
            <div className="relative mx-auto max-w-2xl text-center">
              <div className="text-5xl mb-8">💬</div>
              <blockquote className="font-serif text-2xl sm:text-3xl italic text-white leading-snug">
                &ldquo;Jessica is an expert at corporate and personal branding and she has taught me so much about managing my own personal brand.&rdquo;
              </blockquote>
              <figcaption className="mt-8">
                <div className="text-base font-semibold text-white">Mindi Kimmell</div>
                <div className="mt-1 text-sm text-white/80">AAG Managing Director of Financial Services</div>
              </figcaption>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-24 text-center bg-gray-50 border-t border-gray-100">
        <div className="mx-auto max-w-2xl px-6">
          <h2 className="font-serif text-3xl sm:text-4xl tracking-tight text-gray-900">
            Not sure which package is right for you?
          </h2>
          <p className="mt-4 text-gray-600">Let&rsquo;s chat and figure it out together.</p>
          <Link href="/contact" className="mt-8 inline-flex rounded-full bg-gray-900 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-gray-900/20 hover:bg-gray-800 hover:-translate-y-0.5 transition-all">
            Get in touch
          </Link>
        </div>
      </section>
    </>
  );
}