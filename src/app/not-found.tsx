import Link from 'next/link'

export const metadata = {
  title: 'Oops! - The Digital Girlie',
}

// Custom SVG: A polished nail with a crack
const BrokenNailIcon = () => (
  <svg 
    viewBox="0 0 100 100" 
    className="h-24 w-auto mx-auto" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* The Finger/Base shape - using the brand soft pink oklch value */}
    <rect x="25" y="10" width="50" height="85" rx="25" fill="oklch(89.2%_0.058_10.001)" />
    
    {/* The Polish/Nail area - using pink-400 */}
    <path 
      d="M25 35C25 21.1929 36.1929 10 50 10C63.8071 10 75 21.1929 75 35V80H25V35Z" 
      fill="#F472B6" 
    />
    
    {/* The Jagged Break Line - using contrasting gray-900 */}
    <path 
      d="M15 50L45 40L35 60L65 50L55 70L95 60" 
      stroke="#111827" 
      strokeWidth="4" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
);

export default function NotFound() {
  return (
    <div className="bg-white min-h-[70vh] flex items-center justify-center pt-32 pb-20">
      <main className="mx-auto max-w-xl px-6 py-16 text-center">
        
        {/* Visual elements */}
        <div className="relative mb-10">
          {/* Background blurred blob */}
          <div className="absolute inset-0 scale-150 blur-3xl opacity-40 bg-[oklch(89.2%_0.058_10.001)]" />
          
          {/* The Broken Nail Icon sititng relative */}
          <div className="relative">
            <BrokenNailIcon />
          </div>
        </div>

        {/* Copy */}
        <h1 className="font-serif text-5xl tracking-tight text-gray-900 sm:text-6xl">
          Oops! Looks like we broke a nail...
        </h1>
        
        <p className="mt-6 text-lg leading-relaxed text-gray-600">
          Even the best optimizations can have hiccups. The page you&apos;re looking for seems to have chipped off or moved to a new folder.
        </p>
        
        {/* Call to Action */}
        <div className="mt-12 flex items-center justify-center gap-x-6">
          <Link
            href="/"
            className="rounded-full bg-[oklch(89.2%_0.058_10.001)] px-8 py-3.5 text-sm font-semibold text-gray-900 shadow-sm hover:brightness-95 transition-all hover:-translate-y-0.5"
          >
            Back to homepage ✨
          </Link>
          <Link href="/contact" className="text-sm font-semibold text-gray-900 hover:text-pink-500 transition-colors">
            Contact me <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </main>
    </div>
  )
}