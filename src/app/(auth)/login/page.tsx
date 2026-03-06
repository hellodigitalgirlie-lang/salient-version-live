'use client'

import { useState } from 'react'
import Link from 'next/link'

// Custom Nail Icon
const NailIcon = (props: React.ComponentProps<'svg'>) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <text x="50%" y="50%" dy=".1em" dominantBaseline="central" textAnchor="middle" fontSize="20">
      💅
    </text>
  </svg>
);

export default function LoginPage() {
  const [error, setError] = useState(false)

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // Always trigger the error state for now
    setError(true)
  }

  return (
    <div className="flex min-h-[80vh] flex-col justify-center px-6 py-12 lg:px-8 relative overflow-hidden bg-gray-50">
      
      {/* Background Blob */}
      <div className="absolute w-[500px] h-[500px] rounded-full blur-[80px] opacity-40 bg-[oklch(89.2%_0.058_10.001)] top-0 left-1/2 -translate-x-1/2" />

      <div className="sm:mx-auto sm:w-full sm:max-w-sm relative z-10">
        <div className="mx-auto h-16 w-16 bg-white rounded-2xl shadow-sm ring-1 ring-gray-100 flex items-center justify-center">
          <NailIcon className="h-10 w-10" />
        </div>
        <h2 className="mt-8 text-center font-serif text-3xl font-bold tracking-tight text-gray-900">
          Client Portal
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Sign in to access your deliverables and roadmap.
        </p>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm relative z-10">
        <div className="bg-white px-8 py-10 shadow-xl shadow-gray-200/50 ring-1 ring-gray-100 rounded-3xl">
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="block w-full rounded-xl border-0 bg-gray-50 px-4 py-3 text-sm text-gray-900 ring-1 ring-inset ring-gray-200 focus:ring-2 focus:ring-inset focus:ring-pink-500 focus:outline-none transition-all"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
                <div className="text-sm">
                  <a href="#" className="font-semibold text-pink-500 hover:text-pink-600 transition-colors">
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  autoComplete="current-password"
                  className="block w-full rounded-xl border-0 bg-gray-50 px-4 py-3 text-sm text-gray-900 ring-1 ring-inset ring-gray-200 focus:ring-2 focus:ring-inset focus:ring-pink-500 focus:outline-none transition-all"
                />
              </div>
            </div>

            {/* Error Message Display */}
            {error && (
              <div className="rounded-xl bg-red-50 p-4 ring-1 ring-red-200">
                <div className="flex">
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-red-800">Login Failed</h3>
                    <div className="mt-1 text-sm text-red-700">
                      <p>Invalid credentials. New client portals are currently being provisioned.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-full bg-gray-900 px-6 py-4 text-sm font-semibold text-white shadow-lg shadow-gray-900/20 hover:bg-gray-800 transition-all hover:-translate-y-0.5"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>

        <p className="mt-10 text-center text-sm text-gray-600">
          Not a client yet?{' '}
          <Link href="/services" className="font-semibold leading-6 text-pink-500 hover:text-pink-600 transition-colors">
            View our packages &rarr;
          </Link>
        </p>
      </div>
    </div>
  )
}