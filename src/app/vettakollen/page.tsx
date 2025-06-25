/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import { useEffect, useRef, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Script from 'next/script';
import ImageCarousel from '@/app/components/ImageCarousel';
import HowToGetThereSection from '@/app/components/HowToGetThereSection';

export default function Vettakollen() {
  const heroCTARef = useRef<HTMLAnchorElement | null>(null);
  const bookingRef = useRef<HTMLDivElement | null>(null);
  const heroVisible = useRef(false);
  const bookingVisible = useRef(false);
  const [showCTA, setShowCTA] = useState(true);

  useEffect(() => {
    const updateCTA = () => {
      setShowCTA(!heroVisible.current && !bookingVisible.current);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === heroCTARef.current) {
            heroVisible.current = entry.isIntersecting;
          } else if (entry.target === bookingRef.current) {
            bookingVisible.current = entry.isIntersecting;
          }
        });
        requestAnimationFrame(updateCTA);
      },
      { threshold: 0.4 }
    );

    if (heroCTARef.current) observer.observe(heroCTARef.current);
    if (bookingRef.current) observer.observe(bookingRef.current);

    return () => {
      if (heroCTARef.current) observer.unobserve(heroCTARef.current);
      if (bookingRef.current) observer.unobserve(bookingRef.current);
    };
  }, []);

  return (
    <>
      <Head>
        <html lang="en" />
        <title>Vettakollen Forest Hike – GoHike Oslo</title>
        <meta
          name="description"
          content="Join a guided hike from Sognsvann to Vettakollen and discover Oslo’s most scenic forest viewpoint. 2-hour nature escape with a local guide."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://gohikeoslo.web.app" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "TouristTrip",
              "name": "Vettakollen Forest Hike – GoHike Oslo",
              "description":
                "Explore Oslo’s peaceful forest trails on a 2-hour guided hike from Sognsvann to Vettakollen. A scenic viewpoint, fresh air, and a memorable outdoor escape.",
              "touristType": "Hiking and nature lovers",
              "location": {
                "@type": "Place",
                "name": "Vettakollen Viewpoint",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Oslo",
                  "addressCountry": "Norway"
                }
              }
            }),
          }}
        />
      </Head>

      <main className="text-gray-800 font-work-sans">
        <section className="relative h-[75vh] flex items-center justify-center">
          <Image
            src="/vetakollen-view-point.webp"
            alt="Scenic view from Vettakollen in Oslo"
            fill
            priority
            className="object-cover no-hover-zoom"
          />
          <div className="absolute inset-0 bg-black/40" aria-hidden="true" />
          <div className="relative z-10 text-center p-6 md:p-10 rounded-3xl max-w-2xl mx-auto shadow-lg">
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight font-adelle">
              Hike to Oslo’s Best Forest Viewpoint
            </h1>
            <a
              ref={heroCTARef}
              href="#booking"
              className="mt-8 inline-block goski-button"
            >
              Book This Hike
            </a>
          </div>
        </section>

        <section className="text-center py-12 px-4 sm:px-6 max-w-4xl mx-auto leading-relaxed">
          <p className="text-lg text-gray-700">
            Escape the noise of the city and discover one of Oslo’s hidden gems. This 2-hour hike from Sognsvann to Vettakollen leads you through quiet forest trails to a stunning panoramic viewpoint. Perfect for nature lovers and weekend explorers.
          </p>
        </section>

        <section className="goski-section py-20 px-6 bg-gray-50">
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

    {/* Left: Text content */}
    <div>
      <h2 className="text-3xl font-bold text-gray-800 mb-4">
        Scenic Forest Hike to Oslo’s Best Viewpoint
      </h2>

      <p className="text-base text-gray-700 mb-4 leading-relaxed">
        🌿 <strong>Explore Oslo’s Nature Gem</strong><br />
        Join a scenic hike from Sognsvann lake to Vettakollen. Escape the city and experience Oslo like a local, surrounded by peaceful forests and fresh air.
      </p>
      <p className="text-base text-gray-700 mb-4 leading-relaxed">
        🥾 <strong>Walk Through the Forest</strong><br />
        We follow quiet forest trails, hearing birdsong and breathing in the scent of pine trees as we hike toward the viewpoint.
      </p>
      <p className="text-base text-gray-700 mb-4 leading-relaxed">
        📸 <strong>Panoramic Viewpoint</strong><br />
        At the Vettakollen summit, enjoy breathtaking views over Oslo, the Oslofjord, the Holmenkollen ski jump, and even distant islands and Sweden on clear days.
      </p>
      <p className="text-base text-gray-700 mb-4 leading-relaxed">
        🌄 <strong>Perfect Photo Spots</strong><br />
        Take stunning photos, relax at the top, and soak in the serene scenery before we begin our return.
      </p>
      <p className="text-base text-gray-700 mb-6 leading-relaxed">
        🚇 <strong>Easy Return</strong><br />
        After the hike, we return to Sognsvann station — just 17 minutes by metro to downtown Oslo.
      </p>

    </div>

    {/* Desktop: Carousel on the right */}
    <div className="carousel-container hidden md:block">
      <ImageCarousel
        images={[
          { src: '/walk-down-hill.webp', alt: 'Hiker walking in forest' },
          { src: '/forest-trail-with-rocks.webp', alt: 'Rocky forest trail from Sognsvann' },
          { src: '/two-men-on-sunny-trail.webp', alt: 'Sunny forest path' },
          { src: '/bird-house-on-the-tree.webp', alt: 'Birdhouse in Oslo forest' },
          { src: '/two-course-participants-look-on-each-other.webp', alt: 'Hikers enjoying the trail' },
        ]}
      />
    </div>

  </div>
</section>



        <section
          id="booking"
          ref={bookingRef}
          className="goski-section mb-24 px-4 sm:px-6 md:px-20 lg:px-40"
        >
          <div className="text-center">
            <h2 className="text-3xl font-bold text-blue-950">Book Your Vettakollen Hike</h2>
            <p className="text-lg text-blue-950 mt-4">
              Ready to explore Oslo’s most scenic forest trail? Reserve your hike below.
            </p>
            <div className="relative items-center justify-center mt-8">
              <Script src="https://widgets.understory.io/widgets/understory-booking-widget.js" />
              <div
                className="understory-booking-widget mt-2"
                data-company-id="817e515c398c4017a118c0c4bfd6f9f6"
                data-experience-id="f1033ddec1fe7c895b3319a11a993bc9"
                data-language="en-US"
              />
            </div>
          </div>
        </section>

        <HowToGetThereSection
          introLine1="The hike begins at Sognsvann Metro Station, which is located at the end of Metro Line 5."
          introLine2="From the city center (Jernbanetorget or Nationaltheatret), take Metro Line 5 towards Sognsvann. The ride takes about 17 minutes. Your guide will meet you at the metro platform."
          locationName="Sognsvann T-Bane (Metro Station)"
          locationAddress="0855 Oslo"
          locationLink="https://www.google.com/maps/place/Sognsvann/@59.9671289,10.731311,17z"
          iframeSrc="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2039.9736825895183!2d10.731311!3d59.9671289!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4641720439a6aa7d%3A0x7309e717d544f7a4!2sSognsvann!5e0!3m2!1sen!2sno!4v1718389976543!5m2!1sen!2sno"
        />

        {showCTA && (
          <a
            href="#booking"
            className="cta-button fixed z-50 bg-red-600 text-white px-5 py-3 rounded-full shadow-lg transition-opacity duration-300 hover:bg-red-700"
            aria-label="Book a Guided Hike"
          >
            Book This Hike
          </a>
        )}
      </main>
    </>
  );
}
