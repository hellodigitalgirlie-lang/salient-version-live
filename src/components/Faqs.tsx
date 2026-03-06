const faqs = [
  [
    {
      question: 'Who is this for?',
      answer: "Whether you're a student starting out, a mid-career professional looking to pivot, or an executive wanting to strengthen your brand, I work with professionals at every stage.",
    },
    {
      question: 'What makes you different from other LinkedIn coaches?',
      answer: "I don't just teach LinkedIn strategy. I live it. With 15+ years in digital marketing and a track record of using LinkedIn to land jobs, win awards, and gain access to conferences, my advice comes from real experience, not theory.",
    },
  ],
  [
    {
      question: 'How long does the full optimization take?',
      answer: "Typically 5–7 business days from our initial strategy session. You'll receive your complete profile package with one round of revisions included.",
    },
    {
      question: 'Can I just book a call to pick your brain?',
      answer: "Absolutely! The LinkedIn Power Hour ($250) is designed exactly for that—a focused session where we can tackle whatever you need, from strategy to live profile edits.",
    },
  ],
  [
    {
      question: 'Do I need to be active on LinkedIn already?',
      answer: "Not at all! Whether you have a blank profile or one that just needs a refresh, I'll meet you where you are and build from there.",
    },
  ],
]

export default function FaqSection() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative overflow-hidden bg-white py-20 sm:py-32"
    >
      {/* Background Blob */}
      <div className="absolute w-[500px] h-[500px] rounded-full blur-[80px] opacity-30 bg-[oklch(89.2%_0.058_10.001)] -top-40 right-20" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faq-title"
            className="font-serif text-3xl tracking-tight text-gray-900 sm:text-4xl"
          >
            Frequently asked questions
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            If you can’t find what you’re looking for, feel free to drop me a message through the contact form below.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-8">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="font-semibold text-lg/7 text-gray-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-gray-600">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}