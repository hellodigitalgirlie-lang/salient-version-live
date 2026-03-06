export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <span className="font-serif text-xl italic text-gray-900">the digital girlie</span>
            <p className="mt-3 text-sm text-gray-500 max-w-xs">
              Main character energy for your personal brand. LinkedIn strategy &amp; optimization.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-900">Resources</h4>
            <ul className="mt-4 space-y-3">
              <li><a href="/contact" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">Contact me</a></li>
              <li><a href="/freebies" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">Freebies</a></li>
              <li><a href="/faq" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-900">Services</h4>
            <ul className="mt-4 space-y-3">
              <li><a href="/services" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">For students</a></li>
              <li><a href="/services" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">For mid-career</a></li>
              <li><a href="/services" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">For executives</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-900">Info</h4>
            <ul className="mt-4 space-y-3">
              <li><a href="/about" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">About</a></li>
              <li><a href="/services" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">Pricing</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-200 text-center">
          <p className="text-xs text-gray-400">© 2026 The Digital Girlie. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}