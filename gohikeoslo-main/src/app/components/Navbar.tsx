'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)

  const linkClass = (path: string) =>
    `block text-base font-medium tracking-wide transition px-4 py-2 text-right ${
      pathname === path
        ? 'text-red-700 underline underline-offset-8 decoration-2'
        : 'text-gray-700 hover:text-red-700'
    }`

  return (
    <nav className="w-full bg-white shadow-sm z-50 py-4 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center" aria-label="GoHike Oslo home">
          <Image
            src="/GoHikeLogo.webp"
            alt="GoHike Oslo logo"
            width={120}
            height={120}
            className="h-auto w-auto max-h-[100px]"
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex gap-8 items-center">
          <Link href="/" className={linkClass('/')}>Home</Link>
          <Link href="/vettakollen" className={linkClass('/vettakollen')}>Vettakollen Hike</Link>
          <Link href="/ostmarka" className={linkClass('/ostmarka')}>Østmarka Hike</Link>
          <Link href="/about" className={linkClass('/about')}>About</Link>
          <Link href="/contact" className={linkClass('/contact')}>Contact</Link>
        </div>

        {/* Mobile toggle */}
        <div className="md:hidden relative">
          <button
            className="text-gray-700 hover:text-red-700"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* Right-aligned dropdown below icon */}
          {mobileOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-lg border z-50">
              <Link href="/" className={linkClass('/')} onClick={() => setMobileOpen(false)}>
                Home
              </Link>
              <Link href="/vettakollen" className={linkClass('/vettakollen')} onClick={() => setMobileOpen(false)}>
                Vettakollen Hike
              </Link>
              <Link href="/ostmarka" className={linkClass('/ostmarka')} onClick={() => setMobileOpen(false)}>
                Østmarka Hike
              </Link>
              <Link href="/about" className={linkClass('/about')} onClick={() => setMobileOpen(false)}>
                About
              </Link>
              <Link href="/contact" className={linkClass('/contact')} onClick={() => setMobileOpen(false)}>
                Contact
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}
