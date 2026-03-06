const navigation = {
  services: [
    { name: 'Profile Audits', href: '/services#audit' },
    { name: 'Full Optimization', href: '/services#optimization' },
    { name: 'LinkedIn Power Hour', href: '/services#power-hour' },
  ],
  resources: [
    { name: 'Freebies', href: '/freebies' },
    { name: 'Blog', href: '/blog' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Client Login', href: '/login' },
  ],
  company: [
    { name: 'About Jessica', href: '/about' },
    { name: 'Contact Me', href: '/contact' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
  ],
  social: [
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/company/the-digital-girlie',
      icon: (props: React.ComponentProps<'svg'>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
        </svg>
      ),
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/thedigitalgirlie/',
      icon: (props: React.ComponentProps<'svg'>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path fillRule="evenodd" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" clipRule="evenodd" />
        </svg>
      ),
    },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 pt-16 pb-8 sm:pt-24 lg:pt-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          
          {/* Brand & Social Column */}
          <div className="space-y-8">
            <span className="font-serif text-2xl italic text-gray-900">the digital girlie</span>
            <p className="text-sm/6 text-gray-600 max-w-xs">
              Main character energy for your personal brand. LinkedIn strategy, audits, and done-for-you optimization.
            </p>
            <div className="flex gap-x-6">
              {navigation.social.map((item) => (
                <a key={item.name} href={item.href} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-500 transition-colors">
                  <span className="sr-only">{item.name}</span>
                  <item.icon aria-hidden="true" className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm/6 font-semibold text-gray-900">Services</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.services.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-sm/6 text-gray-600 hover:text-pink-500 transition-colors">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm/6 font-semibold text-gray-900">Resources</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.resources.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-sm/6 text-gray-600 hover:text-pink-500 transition-colors">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm/6 font-semibold text-gray-900">Company</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-sm/6 text-gray-600 hover:text-pink-500 transition-colors">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Status & Copyright */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-gray-200 pt-8 sm:flex-row sm:mt-20 lg:mt-24">
          <p className="text-sm text-gray-500 font-medium text-center sm:text-left">
            📍 Based in Dallas, TX <span className="mx-2 hidden sm:inline">&bull;</span><span className="block sm:inline mt-1 sm:mt-0">🗓️ Currently booking for next month</span>
          </p>
          <div className="flex flex-col items-center sm:items-end gap-1">
            <p className="text-sm text-gray-400 text-center sm:text-right">&copy; {new Date().getFullYear()} The Digital Girlie. All rights reserved.</p>
            <p className="text-xs text-gray-400">
              Powered by <a href="https://marginmedia.co" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 font-medium transition-colors">MarginMedia</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}