"use client";

import { useState } from "react";
import Image from "next/image";
import jessicaImg from "@/images/jessica.jpg";

const CheckSvg = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 20 20" fill="currentColor">
    <path
      fillRule="evenodd"
      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
      clipRule="evenodd"
    />
  </svg>
);

export default function Page() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="font-body bg-white text-gray-900 antialiased overflow-x-hidden">
      {/* ===== HEADER ===== */}


      <main className="isolate">
        {/* ===== HERO ===== */}
        <section className="relative pt-28 pb-20 sm:pt-36 sm:pb-32 overflow-hidden">
          {/* Background blobs using the specific oklch pink and soft greys */}
          <div className="absolute w-[500px] h-[500px] rounded-full blur-[80px] opacity-60 bg-[oklch(89.2%_0.058_10.001)] -top-40 -right-40" style={{ animation: "pulse-soft 4s ease-in-out infinite" }} />
          <div className="absolute w-[400px] h-[400px] rounded-full blur-[80px] opacity-40 bg-gray-200 top-20 -left-20" style={{ animation: "pulse-soft 4s ease-in-out infinite 2s" }} />
          <div className="absolute w-[300px] h-[300px] rounded-full blur-[80px] opacity-50 bg-[oklch(89.2%_0.058_10.001)] bottom-0 right-1/4" style={{ animation: "pulse-soft 4s ease-in-out infinite 4s" }} />

          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 rounded-full bg-[oklch(89.2%_0.058_10.001)]/40 px-4 py-1.5 text-sm font-medium text-gray-900 ring-1 ring-[oklch(89.2%_0.058_10.001)] mb-8" style={{ animation: "fadeUp 0.8s ease-out forwards" }}>
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-pink-500" />
                </span>
                LinkedIn &amp; Personal Branding Consultant
              </div>

              <h1
                className="font-serif text-5xl sm:text-7xl lg:text-8xl tracking-tight text-gray-900 leading-[0.95]"
                style={{ animation: "fadeUp 0.8s ease-out forwards" }}
              >
                Main character<br />
                <span className="italic bg-gradient-to-r from-pink-500 via-rose-400 to-pink-300 bg-clip-text text-transparent">energy</span> for your<br />
                personal brand
              </h1>

              <p
                className="mt-8 text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed opacity-0"
                style={{ animation: "fadeUp 0.8s ease-out 0.2s forwards" }}
              >
                {"I help professionals craft standout LinkedIn profiles and resumes that attract the right opportunities. Whether you're job hunting, growing a business, or building a personal brand. Let's get you noticed. 👀"}
              </p>

              <div
                className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0"
                style={{ animation: "fadeUp 0.8s ease-out 0.3s forwards" }}
              >
                <a href="#pricing" className="inline-flex items-center gap-3 rounded-full bg-gray-900 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-gray-900/20 hover:bg-gray-800 hover:shadow-xl hover:-translate-y-0.5 transition-all">
                  <span className="relative flex h-3 w-3">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-pink-400 opacity-75"></span>
                    <span className="relative inline-flex h-3 w-3 rounded-full bg-pink-500"></span>
                  </span>
                  View packages →
                </a>
                <a href="#about" className="group rounded-full px-8 py-3.5 text-sm font-semibold text-gray-900 ring-1 ring-gray-200 hover:ring-gray-300 hover:bg-gray-50 transition-all">
                  Learn more <span className="inline-block group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ===== SCROLLING MARQUEE ===== */}
        <section className="relative py-6 bg-gray-900 overflow-hidden">
          <div className="flex whitespace-nowrap" style={{ animation: "marquee 30s linear infinite" }}>
            {["LinkedIn Strategy", "Profile Optimization", "Personal Branding", "Resume Audits", "Content Strategy", "Keyword Optimization", "Custom Banners"].flatMap((text, i) => [
              <span key={`t-${i}`} className="mx-8 text-white/90 font-serif text-xl italic">{text}</span>,
              <span key={`d-${i}`} className="mx-4 text-pink-400">✦</span>,
            ]).concat(
              ["LinkedIn Strategy", "Profile Optimization", "Personal Branding", "Resume Audits", "Content Strategy", "Keyword Optimization", "Custom Banners"].flatMap((text, i) => [
                <span key={`t2-${i}`} className="mx-8 text-white/90 font-serif text-xl italic">{text}</span>,
                <span key={`d2-${i}`} className="mx-4 text-pink-400">✦</span>,
              ])
            )}
          </div>
        </section>

        {/* ===== ABOUT ===== */}
        <section id="about" className="relative py-24 sm:py-32 overflow-hidden bg-gray-50">
          <div className="absolute w-[350px] h-[350px] rounded-full blur-[80px] opacity-40 bg-[oklch(89.2%_0.058_10.001)] -right-20 top-20" />

          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              {/* Image side */}
              <div className="relative">
                <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-gray-200 shadow-2xl shadow-gray-900/10">
                  <Image
                    src={jessicaImg}
                    alt="Jessica - The Digital Girlie"
                    fill
                    className="object-cover object-center grayscale-[20%]" 
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                {/* Floating badge */}
                <div
                  className="absolute -bottom-6 -right-6 sm:bottom-8 sm:-right-8 bg-white/80 backdrop-blur-xl border border-white rounded-2xl p-5 shadow-xl shadow-gray-200/50"
                  style={{ animation: "float 6s ease-in-out infinite" }}
                >
                  <div className="text-3xl mb-1">🏆</div>
                  <div className="text-sm font-semibold text-gray-900">Marketer of the Year</div>
                  <div className="text-xs text-gray-500">2025 EIMA Awards</div>
                </div>
              </div>

              {/* Text side */}
              <div>
                <p className="text-sm font-semibold text-pink-500 tracking-wide uppercase">Nice to meet you</p>
                <h2 className="mt-3 font-serif text-4xl sm:text-5xl tracking-tight text-gray-900">
                  {"Hi, I'm Jessica 👋"}
                </h2>
                <div className="mt-6 space-y-5 text-base text-gray-600 leading-relaxed">
                  <p>
                    {"I'm a LinkedIn consultant and personal branding strategist with over "}
                    <strong className="text-gray-900 font-semibold">15 years of experience</strong>
                    {" in digital marketing. I combine strategy, storytelling, and personal branding to help job seekers, entrepreneurs, and professionals stand out and get noticed."}
                  </p>
                  <p>
                    {"Corporate girlie by day, I lead digital strategy at Envoy Air, an American Airlines Group company developing integrated marketing campaigns, managing digital presence and PR, and crafting content that fuels talent acquisition and brand visibility."}
                  </p>
                  <p>
                    {"I don't just teach LinkedIn strategy I've personally used it to land job offers without applying, gain access to major conferences, win professional awards, and secure certifications from places like Harvard. "}
                    <em className="font-serif text-lg text-gray-900">{"(What, like it's hard? 💅)"}</em>
                  </p>
                </div>
                <a href="#pricing" className="inline-flex items-center gap-2 mt-8 text-sm font-semibold text-pink-600 hover:text-pink-500 transition-colors group">
                  See how I can help
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ===== RESULTS / WHY LINKEDIN ===== */}
        <section id="results" className="py-24 sm:py-32 bg-gray-900 text-white relative overflow-hidden">
          <div className="absolute w-[500px] h-[500px] rounded-full blur-[100px] bg-pink-500 opacity-20 top-0 left-1/3" />

          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <p className="text-sm font-semibold text-pink-400 tracking-wide uppercase">Why LinkedIn?</p>
              <h2 className="mt-3 font-serif text-4xl sm:text-5xl tracking-tight text-white">
                {"Because I've used it to open doors you didn't know existed"}
              </h2>
            </div>

            <div className="mx-auto mt-16 max-w-5xl">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { icon: "💼", title: "Land offers without applying", desc: "Let opportunities come to you. A strategic profile makes recruiters and clients slide into your DMs." },
                  { icon: "🎟️", title: "Access major conferences", desc: "Gain free access to industry events and build a network of high-impact connections across industries." },
                  { icon: "🏆", title: "Win awards & recognition", desc: "Position yourself as an authority and be recognized as a leader in your industry." },
                  { icon: "📈", title: "Increase profile views", desc: "Strategic keywords and hashtags drive traffic to your profile from the right people in your industry." },
                  { icon: "🧲", title: "Generate qualified leads", desc: "Convert profile visitors into prospects and capture more business with a compelling personal brand." },
                  { icon: "🎓", title: "Unlock free education", desc: "Secure continuing education, certifications, and professional development all from your LinkedIn presence." },
                ].map((item) => (
                  <div key={item.title} className="group rounded-2xl bg-white/5 p-8 ring-1 ring-white/10 hover:bg-white/10 transition-all">
                    <div className="text-4xl mb-4 group-hover:scale-110 group-hover:-rotate-3 transition-transform">{item.icon}</div>
                    <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                    <p className="mt-2 text-sm text-gray-400">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ===== SERVICES / WHAT I OFFER ===== */}
        <section id="services" className="py-24 sm:py-32 relative overflow-hidden">
          <div className="absolute w-[400px] h-[400px] rounded-full blur-[80px] opacity-30 bg-gray-200 bottom-0 left-0" />

          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <p className="text-sm font-semibold text-pink-500 tracking-wide uppercase">What I offer</p>
              <h2 className="mt-3 font-serif text-4xl sm:text-5xl tracking-tight text-gray-900">
                Everything you need to own your personal brand
              </h2>
              <p className="mt-6 text-lg text-gray-600 max-w-xl mx-auto">
                {"From audits to full rewrites, I'll help you transform your LinkedIn profile into a tool that works for you."}
              </p>
            </div>

            <div className="mx-auto mt-16 max-w-4xl">
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { emoji: "💅", title: "LinkedIn & Resume Audits", desc: "Detailed review of your entire profile with annotated feedback and actionable recommendations.", bg: "bg-[oklch(89.2%_0.058_10.001)]/50" },
                  { emoji: "✍️", title: "Full Profile Rewrites", desc: "Complete professional rewrite of your headline, about section, experience, and skills all optimized.", bg: "bg-gray-100" },
                  { emoji: "🔍", title: "Keyword Optimization", desc: "Strategic keyword placement to boost your search visibility and attract the right connections.", bg: "bg-[oklch(89.2%_0.058_10.001)]/50" },
                  { emoji: "📋", title: "Content & Networking Strategy", desc: "Custom strategy for content creation, networking, lead generation, and building your influence.", bg: "bg-gray-100" },
                  { emoji: "🎨", title: "Custom Profile Banners", desc: "Professional, on-brand banner designs that make a strong first impression at a glance.", bg: "bg-[oklch(89.2%_0.058_10.001)]/50" },
                  { emoji: "💬", title: "Connection Templates", desc: "Personalized outreach templates so your connection requests actually get accepted.", bg: "bg-gray-100" },
                ].map((item) => (
                  <div key={item.title} className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-100 hover:shadow-md transition-shadow">
                    <div className={`w-12 h-12 rounded-xl ${item.bg} flex items-center justify-center text-2xl mb-5`}>{item.emoji}</div>
                    <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                    <p className="mt-2 text-sm text-gray-600">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ===== TESTIMONIAL ===== */}
        <section className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-pink-500 to-rose-400 px-8 py-20 sm:px-16 sm:py-28 shadow-2xl shadow-pink-500/20">
              <div className="relative mx-auto max-w-2xl text-center">
                <div className="text-5xl mb-8">💬</div>
                <blockquote className="font-serif text-2xl sm:text-3xl italic text-white leading-snug">
                  {'"Jessica is an expert at corporate and personal branding and she has taught me so much about managing my own personal brand."'}
                </blockquote>
                <figcaption className="mt-8">
                  <div className="text-base font-semibold text-white">Mindi Kimmell</div>
                  <div className="mt-1 text-sm text-white/80">AAG Managing Director of Financial Services</div>
                </figcaption>
              </div>
            </div>
          </div>
        </section>

        {/* ===== PRICING ===== */}
        <section id="pricing" className="py-24 sm:py-32 relative overflow-hidden bg-gray-50">
          <div className="absolute w-[400px] h-[400px] rounded-full blur-[80px] opacity-40 bg-[oklch(89.2%_0.058_10.001)] top-0 right-0" />
          <div className="absolute w-[300px] h-[300px] rounded-full blur-[80px] opacity-30 bg-gray-200 bottom-0 left-1/4" />

          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-semibold text-pink-500 tracking-wide uppercase">Pricing</p>
              <h2 className="mt-3 font-serif text-4xl sm:text-5xl tracking-tight text-gray-900">
                Invest in your personal brand
              </h2>
              <p className="mt-6 text-lg text-gray-600">
                Choose the package that fits where you are in your career journey.
              </p>
            </div>

            <div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              {/* Tier 1: Audit */}
              <div className="flex flex-col justify-between rounded-3xl bg-white p-8 ring-1 ring-gray-100 shadow-sm xl:p-10 hover:-translate-y-1 hover:shadow-xl transition-all">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">LinkedIn Profile Audit</h3>
                  <p className="mt-4 text-sm text-gray-600">Get expert feedback on your existing profile with a clear roadmap for improvement.</p>
                  <p className="mt-6 flex items-baseline gap-x-1">
                    <span className="text-5xl font-serif tracking-tight text-gray-900">$149</span>
                  </p>
                  <ul className="mt-8 space-y-3 text-sm text-gray-600">
                    <li className="flex gap-x-3"><CheckSvg className="h-5 w-5 flex-none text-pink-500" />Full profile review with annotations</li>
                    <li className="flex gap-x-3"><CheckSvg className="h-5 w-5 flex-none text-pink-500" />Keyword &amp; branding recommendations</li>
                    <li className="flex gap-x-3"><CheckSvg className="h-5 w-5 flex-none text-pink-500" />30-minute feedback call</li>
                  </ul>
                </div>
                <a href="https://buy.stripe.com/28E00ceeW1nK0GZc9YfnO02" className="mt-8 block rounded-full px-4 py-3 text-center text-sm font-semibold text-gray-900 ring-1 ring-gray-200 hover:ring-gray-300 hover:bg-gray-50 transition-all">
                  Book now
                </a>
              </div>

              {/* Tier 2: Full Optimization (Popular) - Now dark grey to pop */}
              <div className="flex flex-col justify-between rounded-3xl bg-gray-900 p-8 shadow-2xl shadow-gray-900/20 ring-1 ring-gray-900 xl:p-10 relative hover:-translate-y-1 hover:shadow-xl transition-all">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="rounded-full bg-[oklch(89.2%_0.058_10.001)] px-4 py-1.5 text-xs font-bold text-gray-900 uppercase tracking-wider shadow-lg">Most popular</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Done-for-You Optimization</h3>
                  <p className="mt-4 text-sm text-gray-300">{"100% done for you. I'll rewrite, optimize, and design your entire LinkedIn presence."}</p>
                  <p className="mt-6 flex items-baseline gap-x-1">
                    <span className="text-5xl font-serif tracking-tight text-white">$399</span>
                  </p>
                  <ul className="mt-8 space-y-3 text-sm text-gray-300">
                    <li className="flex gap-x-3"><CheckSvg className="h-5 w-5 flex-none text-pink-400" />Complete headline, about &amp; experience rewrite</li>
                    <li className="flex gap-x-3"><CheckSvg className="h-5 w-5 flex-none text-pink-400" />Keyword optimization for visibility</li>
                    <li className="flex gap-x-3"><CheckSvg className="h-5 w-5 flex-none text-pink-400" />Custom banner image</li>
                    <li className="flex gap-x-3"><CheckSvg className="h-5 w-5 flex-none text-pink-400" />Featured media curation</li>
                    <li className="flex gap-x-3"><CheckSvg className="h-5 w-5 flex-none text-pink-400" />60-min strategy session + 1 revision</li>
                  </ul>
                </div>
                <a href="https://buy.stripe.com/7sY14gfj05E075ngqefnO01" className="mt-8 block rounded-full bg-[oklch(89.2%_0.058_10.001)] px-4 py-3 text-center text-sm font-semibold text-gray-900 shadow-lg hover:brightness-95 transition-all">
                  Book now 💅
                </a>
              </div>

              {/* Tier 3: Power Hour */}
              <div className="flex flex-col justify-between rounded-3xl bg-white p-8 ring-1 ring-gray-100 shadow-sm xl:p-10 hover:-translate-y-1 hover:shadow-xl transition-all">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">LinkedIn Power Hour</h3>
                  <p className="mt-4 text-sm text-gray-600">A focused 1-on-1 session to answer questions, review live, and map your next moves.</p>
                  <p className="mt-6 flex items-baseline gap-x-1">
                    <span className="text-5xl font-serif tracking-tight text-gray-900">$250</span>
                  </p>
                  <ul className="mt-8 space-y-3 text-sm text-gray-600">
                    <li className="flex gap-x-3"><CheckSvg className="h-5 w-5 flex-none text-pink-500" />60-minute live session</li>
                    <li className="flex gap-x-3"><CheckSvg className="h-5 w-5 flex-none text-pink-500" />Live profile review &amp; feedback</li>
                    <li className="flex gap-x-3"><CheckSvg className="h-5 w-5 flex-none text-pink-500" />Personalized next-steps roadmap</li>
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
                <span className="rounded-full bg-white px-5 py-2 text-sm text-gray-600 ring-1 ring-gray-200">Connection templates — $30</span>
                <span className="rounded-full bg-white px-5 py-2 text-sm text-gray-600 ring-1 ring-gray-200">Banner design — $50</span>
                <span className="rounded-full bg-white px-5 py-2 text-sm text-gray-600 ring-1 ring-gray-200">Custom graphics — $40</span>
              </div>
            </div>
          </div>
        </section>

        {/* ===== AWARDS ===== */}
        <section className="py-24 sm:py-32 bg-white relative overflow-hidden">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center mb-16">
              <p className="text-sm font-semibold text-pink-500 tracking-wide uppercase">Awards &amp; Recognition</p>
              <h2 className="mt-3 font-serif text-4xl sm:text-5xl tracking-tight text-gray-900">
                Not just talk. Results.
              </h2>
            </div>

            <div className="mx-auto max-w-3xl">
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { emoji: "🏆", title: "EIMA Marketer of the Year", sub: "2025 DFW Integrated Marketing Association" },
                  { emoji: "🏆", title: "Social Media Manager of the Year Finalist", sub: "2025 Digital Women Awards" },
                  { emoji: "🏆", title: "Digital Woman to Watch", sub: "2024 Digital Women Awards" },
                  { emoji: "⭐", title: "Named Social Media Expert", sub: "Featured in Huffpost" },
                ].map((award) => (
                  <div key={award.title} className="rounded-2xl bg-gray-50 p-6 ring-1 ring-gray-100">
                    <div className="text-2xl mb-3">{award.emoji}</div>
                    <h3 className="font-semibold text-gray-900">{award.title}</h3>
                    <p className="text-sm text-gray-500 mt-1">{award.sub}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ===== FREEBIES ===== */}
        <section id="freebies" className="py-24 sm:py-32 relative overflow-hidden">
          <div className="absolute w-[350px] h-[350px] rounded-full blur-[80px] opacity-40 bg-[oklch(89.2%_0.058_10.001)] top-10 right-10" />

          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold text-pink-500 tracking-wide uppercase">Free Resources</p>
              <h2 className="mt-3 font-serif text-4xl sm:text-5xl tracking-tight text-gray-900">
                Level up for free
              </h2>
              <p className="mt-6 text-lg text-gray-600 max-w-xl mx-auto">
                {"Whether you're job searching, building your brand, or attracting new opportunities, these free tools are designed to help you take action immediately and start seeing results."}
              </p>
              <a href="https://www.thedigitalgirlie.com/freebies" className="mt-8 inline-flex items-center gap-2 rounded-full bg-gray-900 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-gray-900/20 hover:bg-gray-800 transition-all">
                Browse free resources →
              </a>
            </div>
          </div>
        </section>

        {/* ===== FAQ ===== */}
        <section id="faq" className="py-24 sm:py-32 bg-gray-50 border-t border-gray-100">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center mb-16">
              <h2 className="font-serif text-4xl sm:text-5xl tracking-tight text-gray-900">
                Frequently asked questions
              </h2>
            </div>

            <div className="mx-auto max-w-3xl divide-y divide-gray-200">
              {[
                { q: "Who is this for?", a: "Whether you're a student starting out, a mid-career professional looking to pivot, or an executive wanting to strengthen your brand, I work with professionals at every stage." },
                { q: "How long does the full optimization take?", a: "Typically 5–7 business days from our initial strategy session. You'll receive your complete profile package with one round of revisions included." },
                { q: "Do I need to be active on LinkedIn already?", a: "Not at all! Whether you have a blank profile or one that just needs a refresh, I'll meet you where you are and build from there." },
                { q: "What makes you different from other LinkedIn coaches?", a: "I don't just teach LinkedIn strategy. I live it. With 15+ years in digital marketing and a track record of using LinkedIn to land jobs, win awards, and gain access to conferences, my advice comes from real experience, not theory." },
                { q: "Can I just book a call to pick your brain?", a: "Absolutely! The LinkedIn Power Hour ($250) is designed exactly for that a focused session where we can tackle whatever you need, from strategy to live profile edits." },
              ].map((faq) => (
                <div key={faq.q} className="py-8">
                  <h3 className="text-base font-semibold text-gray-900">{faq.q}</h3>
                  <p className="mt-3 text-sm text-gray-600 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

 {/* ===== CONTACT FORM ===== */}
        <section id="contact" className="relative py-24 sm:py-32 overflow-hidden bg-white border-t border-gray-100">
          <div className="absolute w-[500px] h-[500px] rounded-full blur-[80px] opacity-40 bg-[oklch(89.2%_0.058_10.001)] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

          <div className="relative mx-auto max-w-3xl px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-serif text-4xl sm:text-5xl tracking-tight text-gray-900">
                Let's build your brand
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Fill out the form below and I'll get back to you within 24-48 hours.
              </p>
            </div>

            <form 
              action="https://formspree.io/f/xaqpwzqy" 
              method="POST" 
              className="bg-white/80 backdrop-blur-xl border border-gray-100 shadow-xl shadow-gray-200/50 rounded-3xl p-8 sm:p-12"
            >
              <div className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-900">First name</label>
                    <input type="text" name="firstName" id="firstName" required className="mt-2 block w-full rounded-xl border-0 py-3 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 focus:ring-2 focus:ring-inset focus:ring-pink-500 bg-gray-50" />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-900">Last name</label>
                    <input type="text" name="lastName" id="lastName" required className="mt-2 block w-full rounded-xl border-0 py-3 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 focus:ring-2 focus:ring-inset focus:ring-pink-500 bg-gray-50" />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-900">Email address</label>
                  <input type="email" name="email" id="email" required className="mt-2 block w-full rounded-xl border-0 py-3 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 focus:ring-2 focus:ring-inset focus:ring-pink-500 bg-gray-50" />
                </div>

                <div>
                  <label htmlFor="inquiryType" className="block text-sm font-medium text-gray-900">What are you looking for?</label>
                  <select name="inquiryType" id="inquiryType" className="mt-2 block w-full rounded-xl border-0 py-3 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 focus:ring-2 focus:ring-inset focus:ring-pink-500 bg-gray-50">
                    <option>LinkedIn Profile Audit</option>
                    <option>Done-for-You Optimization</option>
                    <option>LinkedIn Power Hour</option>
                    <option>Just saying hi!</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-900">Message</label>
                  <textarea name="message" id="message" rows={4} required className="mt-2 block w-full rounded-xl border-0 py-3 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 focus:ring-2 focus:ring-inset focus:ring-pink-500 bg-gray-50"></textarea>
                </div>

                <button type="submit" className="w-full rounded-full bg-gray-900 px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-gray-900/20 hover:bg-gray-800 transition-all hover:-translate-y-0.5 mt-4">
                  Send message
                </button>
              </div>
            </form>
          </div>
        </section>

        {/* ===== NEWSLETTER ===== */}
        <section className="py-16 bg-gray-900">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-xl text-center">
              <h3 className="font-serif text-2xl text-white">Stay in the loop</h3>
              <p className="mt-2 text-sm text-gray-400">Sign up for tips, freebies, and branding inspo straight to your inbox.</p>
              <div className="mt-6 flex gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 rounded-full bg-white/10 px-5 py-3 text-sm text-white placeholder:text-gray-400 ring-1 ring-white/10 focus:ring-2 focus:ring-pink-500 focus:outline-none transition-all"
                />
                <button className="rounded-full bg-[oklch(89.2%_0.058_10.001)] px-6 py-3 text-sm font-semibold text-gray-900 hover:brightness-95 transition-colors shadow-lg">
                  Subscribe
                </button>
              </div>
              <p className="mt-3 text-xs text-gray-500">We respect your privacy. Unsubscribe anytime.</p>
            </div>
          </div>
        </section>
      </main>

      {/* ===== FOOTER ===== */}

      {/* Global keyframe styles */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(2deg); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes pulse-soft {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.7; }
        }
      `}</style>
    </div>
  );
}