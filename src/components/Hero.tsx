'use client'

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'FAQ', href: '#faqs' },
]

export function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-white">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5 text-2xl font-black tracking-tighter text-black border-4 border-black px-2 bg-[hsl(352,100%,84%)] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              DG
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-sm font-bold uppercase tracking-widest text-gray-900 hover:text-[hsl(352,100%,70%)] transition-colors">
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="#contact" className="text-sm font-bold uppercase tracking-widest text-gray-900 bg-[hsl(352,100%,84%)] border-2 border-black px-4 py-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all">
              Let’s chat <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav>
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="text-xl font-black tracking-tighter text-black border-2 border-black px-2 bg-[hsl(352,100%,84%)]">
                DG
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-[hsl(352,100%,95%)]"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>

      <div className="relative isolate overflow-hidden pt-14">
        <div className="mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-8 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
            <h1 className="max-w-2xl text-5xl font-black tracking-tight text-gray-900 sm:text-7xl lg:col-span-2 xl:col-auto uppercase italic">
              Bringing <span className="text-[hsl(352,100%,75%)] drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">Main Character</span> energy to your brand.
            </h1>
            <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
              <p className="text-lg font-medium text-gray-600 sm:text-xl/8">
                I help professionals craft standout LinkedIn profiles and resumes that attract the right opportunities—whether you’re job hunting, growing a business, or building a personal brand.
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <a
                  href="#services"
                  className="rounded-none border-4 border-black bg-[hsl(352,100%,84%)] px-6 py-3.5 text-lg font-black uppercase text-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[6px] hover:translate-y-[6px] transition-all"
                >
                  See What I Offer
                </a>
                <a href="#about" className="text-sm font-black uppercase tracking-widest text-gray-900">
                  My Story <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
            <img
              alt="Jessica - The Digital Girlie"
              src="https://images.unsplash.com/photo-1567532900872-f4e906cbf06a?auto=format&fit=crop&w=1280&q=80"
              className="mt-10 aspect-6/5 w-full max-w-lg rounded-none border-8 border-black object-cover shadow-[20px_20px_0px_0px_rgba(255,182,193,1)] sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36"
            />
          </div>
        </div>
      </div>
    </div>
  )
}