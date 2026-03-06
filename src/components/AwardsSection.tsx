export default function AwardsSection() {
  const awards = [
    { emoji: "🏆", title: "EIMA Marketer of the Year", sub: "2025 DFW Integrated Marketing Association" },
    { emoji: "🏆", title: "Social Media Manager of the Year Finalist", sub: "2025 Digital Women Awards" },
    { emoji: "🏆", title: "Digital Woman to Watch", sub: "2024 Digital Women Awards" },
    { emoji: "⭐", title: "Named Social Media Expert", sub: "Featured in Huffpost" },
  ];

  return (
    <section className="py-24 sm:py-32 bg-white border-t border-gray-100 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center mb-16">
          <p className="text-sm font-semibold text-pink-500 tracking-wide uppercase">Awards &amp; Recognition</p>
          <h2 className="mt-3 font-serif text-4xl sm:text-5xl tracking-tight text-gray-900">
            Not just talk. Results.
          </h2>
        </div>

        <div className="mx-auto max-w-3xl">
          <div className="grid sm:grid-cols-2 gap-6">
            {awards.map((award) => (
              <div key={award.title} className="rounded-2xl bg-gray-50 p-6 ring-1 ring-gray-100 hover:shadow-md transition-shadow">
                <div className="text-2xl mb-3">{award.emoji}</div>
                <h3 className="font-semibold text-gray-900">{award.title}</h3>
                <p className="text-sm text-gray-500 mt-1">{award.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}