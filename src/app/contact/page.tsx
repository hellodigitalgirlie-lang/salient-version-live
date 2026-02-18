"use client";

import { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <style jsx global>{`
        @keyframes fadeUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes pulse-soft { 0%, 100% { opacity: 0.4; } 50% { opacity: 0.7; } }
        .animate-fade-up { animation: fadeUp 0.8s ease-out forwards; }
        .gradient-blob { position: absolute; border-radius: 50%; filter: blur(80px); opacity: 0.35; }
        .text-gradient { background: linear-gradient(135deg, #d44f2e, #e86a47, #f08b6e); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
      `}</style>

      <section className="relative pt-32 pb-24 sm:pt-40 sm:pb-32 overflow-hidden min-h-screen">
        <div className="gradient-blob w-[500px] h-[500px] bg-blush-200 -top-40 -right-40" style={{ position: "absolute" }} />
        <div className="gradient-blob w-[400px] h-[400px] bg-sage-200 bottom-0 -left-20" style={{ position: "absolute" }} />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            {/* Left - Copy */}
            <div className="animate-fade-up">
              <p className="text-sm font-semibold text-blush-600 tracking-wide uppercase">Let&rsquo;s connect</p>
              <h1 className="mt-3 font-display text-5xl sm:text-6xl tracking-tight text-espresso">
                Let&rsquo;s chat ✨
              </h1>
              <p className="mt-6 text-lg text-espresso/60 leading-relaxed">
                Ready to level up your LinkedIn presence? Have a question about my services? Just want to say hi? I&rsquo;d love to hear from you.
              </p>

              <div className="mt-10 space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-blush-100 flex items-center justify-center text-lg flex-none">📧</div>
                  <div>
                    <h3 className="text-sm font-semibold text-espresso">Email me</h3>
                    <p className="text-sm text-espresso/50 mt-0.5">hello@thedigitalgirlie.com</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-sage-100 flex items-center justify-center text-lg flex-none">💼</div>
                  <div>
                    <h3 className="text-sm font-semibold text-espresso">Find me on LinkedIn</h3>
                    <a href="https://www.linkedin.com/in/thedigitalgirlie/" target="_blank" rel="noopener noreferrer" className="text-sm text-blush-600 hover:text-blush-700 transition-colors mt-0.5 inline-block">
                      linkedin.com/in/thedigitalgirlie
                    </a>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-blush-100 flex items-center justify-center text-lg flex-none">⏱️</div>
                  <div>
                    <h3 className="text-sm font-semibold text-espresso">Response time</h3>
                    <p className="text-sm text-espresso/50 mt-0.5">Usually within 24&ndash;48 hours</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Form */}
            <div className="animate-fade-up" style={{ animationDelay: "0.2s", opacity: 0 }}>
              {!submitted ? (
                <div className="rounded-3xl bg-white p-8 sm:p-10 shadow-sm ring-1 ring-espresso/5">
                  <h2 className="font-display text-2xl text-espresso mb-6">Send me a message</h2>
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      setSubmitted(true);
                    }}
                    className="space-y-5"
                  >
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-espresso/70 mb-1.5">Name</label>
                      <input id="name" type="text" required className="w-full rounded-xl border-0 bg-cream px-4 py-3 text-sm text-espresso ring-1 ring-espresso/10 focus:ring-2 focus:ring-blush-400 focus:outline-none transition-all placeholder:text-espresso/30" placeholder="Your name" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-espresso/70 mb-1.5">Email</label>
                      <input id="email" type="email" required className="w-full rounded-xl border-0 bg-cream px-4 py-3 text-sm text-espresso ring-1 ring-espresso/10 focus:ring-2 focus:ring-blush-400 focus:outline-none transition-all placeholder:text-espresso/30" placeholder="you@email.com" />
                    </div>
                    <div>
                      <label htmlFor="interest" className="block text-sm font-medium text-espresso/70 mb-1.5">I&rsquo;m interested in&hellip;</label>
                      <select id="interest" className="w-full rounded-xl border-0 bg-cream px-4 py-3 text-sm text-espresso ring-1 ring-espresso/10 focus:ring-2 focus:ring-blush-400 focus:outline-none transition-all">
                        <option>LinkedIn Profile Audit ($149)</option>
                        <option>Done-for-You Optimization ($399)</option>
                        <option>LinkedIn Power Hour ($250)</option>
                        <option>Not sure yet — just exploring!</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-espresso/70 mb-1.5">Message</label>
                      <textarea id="message" rows={4} className="w-full rounded-xl border-0 bg-cream px-4 py-3 text-sm text-espresso ring-1 ring-espresso/10 focus:ring-2 focus:ring-blush-400 focus:outline-none transition-all placeholder:text-espresso/30 resize-none" placeholder="Tell me a bit about what you're looking for…" />
                    </div>
                    <button type="submit" className="w-full rounded-full bg-espresso px-6 py-3.5 text-sm font-semibold text-cream shadow-lg shadow-espresso/25 hover:bg-espresso/90 transition-all">
                      Send message ✨
                    </button>
                  </form>
                </div>
              ) : (
                <div className="rounded-3xl bg-white p-8 sm:p-10 shadow-sm ring-1 ring-espresso/5 text-center">
                  <div className="text-5xl mb-4">💌</div>
                  <h2 className="font-display text-2xl text-espresso">Message sent!</h2>
                  <p className="mt-3 text-espresso/60">Thanks for reaching out! I&rsquo;ll get back to you within 24&ndash;48 hours.</p>
                  <button onClick={() => setSubmitted(false)} className="mt-6 text-sm font-semibold text-blush-600 hover:text-blush-700 transition-colors">
                    Send another message →
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}