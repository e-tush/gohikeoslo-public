'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-white text-gray-700 mt-16">
      <div className="max-w-6xl mx-auto px-4 py-10 flex flex-col-reverse md:flex-row items-center justify-between gap-6">
        <div className="text-sm text-center md:text-left space-y-3">
          <nav className="flex justify-center md:justify-start gap-6">
            <Link href="/about" className="hover:underline">About</Link>
            <Link href="/contact" className="hover:underline">Contact</Link>
            <Link href="/terms" className="hover:underline">Terms & Conditions</Link>
            <Link href="/privacy" className="hover:underline">Privacy Policy</Link>
          </nav>
          <p>
            Looking for ski adventures?{' '}
            <Link
              href="https://osloskikurs.no/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-600 hover:underline"
            >
              Visit GoSki
            </Link>
          </p>
          <p>{year} GoHike Oslo</p>
        </div>

        <Link href="/" className="hover:opacity-80 transition-opacity" aria-label="Back to homepage">
          <Image
            src="/GoHikeLogo.webp"
            alt="GoHike Oslo logo"
            width={100}
            height={100}
            className="mx-auto md:mx-0"
          />
        </Link>
      </div>

      {/* Optional: spacing */}
      <div className="h-12 md:h-16 bg-white" />
    </footer>
  )
}
