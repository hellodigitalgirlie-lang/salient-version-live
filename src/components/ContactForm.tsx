export default function ContactForm() {
  return (
    <section id="contact" className="relative py-20 sm:py-28 overflow-hidden bg-gray-50">
      {/* Background Blobs */}
      <div className="absolute w-[500px] h-[500px] rounded-full blur-[80px] opacity-40 bg-[oklch(89.2%_0.058_10.001)] -top-40 -right-40" />
      <div className="absolute w-[400px] h-[400px] rounded-full blur-[80px] opacity-30 bg-gray-200 bottom-0 -left-20" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* Left Side - Copy & Info */}
          <div>
            <p className="text-sm font-semibold text-pink-500 tracking-wide uppercase">Let&apos;s connect</p>
            <h2 className="mt-3 font-serif text-4xl sm:text-5xl tracking-tight text-gray-900">
              Let&apos;s chat
            </h2>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              Ready to level up your LinkedIn presence? Have a question about my services? Just want to say hi? I&apos;d love to hear from you.
            </p>

            <div className="mt-10 space-y-8">
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-xl bg-[oklch(89.2%_0.058_10.001)]/40 flex items-center justify-center text-xl flex-none ring-1 ring-[oklch(89.2%_0.058_10.001)]">📧</div>
                <div>
                  <h3 className="text-base font-semibold text-gray-900">Email me</h3>
                  <p className="text-sm text-gray-600 mt-1">hellodigitalgirlie@gmail.com</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-xl bg-[oklch(89.2%_0.058_10.001)]/40 flex items-center justify-center text-xl flex-none ring-1 ring-[oklch(89.2%_0.058_10.001)]">💼</div>
                <div>
                  <h3 className="text-base font-semibold text-gray-900">Find me on LinkedIn</h3>
                  <a href="https://www.linkedin.com/in/thedigitalgirlie/" target="_blank" rel="noopener noreferrer" className="text-sm text-pink-500 hover:text-pink-600 transition-colors mt-1 inline-block font-medium">
                    linkedin.com/in/thedigitalgirlie
                  </a>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-xl bg-[oklch(89.2%_0.058_10.001)]/40 flex items-center justify-center text-xl flex-none ring-1 ring-[oklch(89.2%_0.058_10.001)]">⏱️</div>
                <div>
                  <h3 className="text-base font-semibold text-gray-900">Response time</h3>
                  <p className="text-sm text-gray-600 mt-1">Usually within 24&ndash;48 hours</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Formspree Form */}
          <div className="rounded-3xl bg-white p-8 sm:p-10 shadow-xl shadow-gray-200/50 ring-1 ring-gray-100 relative">
            <h3 className="font-serif text-2xl text-gray-900 mb-6">Send me a message</h3>
            
            <form 
              action="https://formspree.io/f/xaqpwzqy" 
              method="POST" 
              className="space-y-5"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-900 mb-1.5">First name</label>
                  <input id="firstName" name="firstName" type="text" required className="w-full rounded-xl border-0 bg-gray-50 px-4 py-3 text-sm text-gray-900 ring-1 ring-inset ring-gray-200 focus:ring-2 focus:ring-pink-500 focus:outline-none transition-all" placeholder="Jane" />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-900 mb-1.5">Last name</label>
                  <input id="lastName" name="lastName" type="text" required className="w-full rounded-xl border-0 bg-gray-50 px-4 py-3 text-sm text-gray-900 ring-1 ring-inset ring-gray-200 focus:ring-2 focus:ring-pink-500 focus:outline-none transition-all" placeholder="Doe" />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-1.5">Email address</label>
                <input id="email" name="email" type="email" required className="w-full rounded-xl border-0 bg-gray-50 px-4 py-3 text-sm text-gray-900 ring-1 ring-inset ring-gray-200 focus:ring-2 focus:ring-pink-500 focus:outline-none transition-all" placeholder="you@email.com" />
              </div>
              <div>
                <label htmlFor="inquiryType" className="block text-sm font-medium text-gray-900 mb-1.5">I&apos;m interested in&hellip;</label>
                <select id="inquiryType" name="inquiryType" className="w-full rounded-xl border-0 bg-gray-50 px-4 py-3 text-sm text-gray-900 ring-1 ring-inset ring-gray-200 focus:ring-2 focus:ring-pink-500 focus:outline-none transition-all">
                  <option>LinkedIn Profile Audit ($149)</option>
                  <option>Done-for-You Optimization ($399)</option>
                  <option>LinkedIn Power Hour ($250)</option>
                  <option>Not sure yet... just exploring!</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-900 mb-1.5">Message</label>
                <textarea id="message" name="message" rows={4} required className="w-full rounded-xl border-0 bg-gray-50 px-4 py-3 text-sm text-gray-900 ring-1 ring-inset ring-gray-200 focus:ring-2 focus:ring-pink-500 focus:outline-none transition-all resize-none" placeholder="Tell me a bit about what you're looking for..."></textarea>
              </div>
              <button type="submit" className="w-full rounded-full bg-gray-900 px-6 py-4 text-sm font-semibold text-white shadow-lg shadow-gray-900/20 hover:bg-gray-800 transition-all hover:-translate-y-0.5 mt-2">
                Send message
              </button>
            </form>
          </div>
          
        </div>
      </div>
    </section>
  );
}