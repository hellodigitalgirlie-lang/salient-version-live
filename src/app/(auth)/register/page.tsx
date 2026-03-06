import { type Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Client Registration - The Digital Girlie',
}

// Custom Sparkle Icon for that premium, exclusive feel
const SparkleIcon = (props: React.ComponentProps<'svg'>) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M12 2L14.832 9.168L22 12L14.832 14.832L12 22L9.168 14.832L2 12L9.168 9.168L12 2Z" fill="currentColor" />
  </svg>
);

export default function Register() {
  return (
    <div className="flex min-h-[80vh] flex-col justify-center px-6 py-12 lg:px-8 relative overflow-hidden bg-gray-50">
      
      {/* Background Blob */}
      <div className="absolute w-[500px] h-[500px] rounded-full blur-[80px] opacity-40 bg-[oklch(89.2%_0.058_10.001)] top-0 left-1/2 -translate-x-1/2" />

      <div className="sm:mx-auto sm:w-full sm:max-w-md relative z-10">
        <div className="mx-auto h-16 w-16 bg-white rounded-2xl shadow-sm ring-1 ring-gray-100 flex items-center justify-center text-pink-500">
          <SparkleIcon className="h-8 w-8" />
        </div>
        
        <h2 className="mt-8 text-center font-serif text-3xl font-bold tracking-tight text-gray-900">
          Client Registration
        </h2>
        
        <div className="mt-8 bg-white px-8 py-10 shadow-xl shadow-gray-200/50 ring-1 ring-gray-100 rounded-3xl text-center">
          <p className="text-base leading-relaxed text-gray-600 mb-8">
            Access to the client portal is currently by invitation only for active consulting clients. 
          </p>
          
          <div className="space-y-4">
            <Link
              href="/services"
              className="flex w-full justify-center rounded-full bg-gray-900 px-6 py-4 text-sm font-semibold text-white shadow-lg shadow-gray-900/20 hover:bg-gray-800 transition-all hover:-translate-y-0.5"
            >
              View consulting packages
            </Link>
            
            <Link
              href="/contact"
              className="flex w-full justify-center rounded-full bg-gray-50 px-6 py-4 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-200 hover:bg-gray-100 transition-all hover:-translate-y-0.5"
            >
              Contact Jessica
            </Link>
          </div>
        </div>

        <p className="mt-10 text-center text-sm text-gray-600">
          Already have an account?{' '}
          <Link href="/login" className="font-semibold leading-6 text-pink-500 hover:text-pink-600 transition-colors">
            Sign in &rarr;
          </Link>
        </p>
      </div>
    </div>
  )
}