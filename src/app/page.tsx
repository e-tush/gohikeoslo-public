// src/app/page.tsx
'use client';
import Head from 'next/head';
import Image from 'next/image';
import TourCardsSection from '@/app/components/TourCardsSection';
import TourDetailsSection from '@/app/components/TourDetailsSection';
import ReviewsSection from '@/app/components/ReviewsSection';
import LogoScroller from '@/app/components/LogoScroller';

export default function Home() {
  return (
    <>
      <Head>
        <title>GoHike Oslo – Guided Forest Hikes</title>
        <meta
          name="description"
          content="Escape the city and explore Oslo’s beautiful forests on a guided hike. Discover lakes, viewpoints, and local nature experiences – all accessible by metro."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://gohikeoslo.web.app" />
      </Head>

      <main className="text-gray-800 font-work-sans">
        <section className="relative h-[80vh] flex items-center justify-center">
          <Image
            src="/oslo-forest-panorama.webp"
            alt="Oslo forest panorama"
            fill
            priority
            className="object-cover no-hover-zoom"
          />
          <div className="absolute inset-0 bg-black/40" aria-hidden="true" />
          <div className="relative z-10 text-center p-6 md:p-10 rounded-3xl max-w-2xl mx-auto shadow-lg">
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight font-adelle">
              Discover Oslo’s Nature on a Guided Forest Hike
            </h1>
            <p className="mt-4 text-white text-lg max-w-xl mx-auto">
              Escape the city hustle and embrace Oslo’s peaceful forests — with lakes, scenic viewpoints, and fresh air just a short metro ride from downtown.
            </p>
          </div>
        </section>
        <TourDetailsSection/>
        <TourCardsSection/>
        <ReviewsSection/>
        <LogoScroller/>
      </main>
    </>
  );

}
