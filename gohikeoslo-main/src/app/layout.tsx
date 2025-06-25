import '@/styles/globals.css'
import { Banner, Navbar, Footer } from '@/app/components'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'GoHike Oslo',
  description: 'Join guided hikes through Oslo’s nature',
  keywords: ['Oslo', 'hiking', 'nature', 'guided tours', 'viewpoint Oslo', 'Vettakollen', 'Nordmarka', 'Østmarka', 'forest hikes', 'Sognsvann', 'hiking tours'],
  authors: [{ name: 'GoHike Oslo' }],
  creator: 'GoHike Oslo',
  openGraph: {
    title: 'GoHike Oslo',
    description: 'Join guided hikes through Oslo’s nature',
    url: 'https://gohikeoslo.web.app',
    siteName: 'GoHike Oslo',
    images: [
      {
        url: 'https://gohikeoslo.web.app/two-course-participants-look-on-each-other.webp',
        alt: 'GoHike Oslo - Guided Forest Hikes',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GoHike Oslo',
    description: 'Join guided hikes through Oslo’s nature',
    images: ['https://gohikeoslo.web.app/two-course-participants-look-on-each-other.webp'],
  },
  themeColor: '#ffffff',
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans">
        <Banner>Free cancellation up to 24h before your hike.</Banner>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
