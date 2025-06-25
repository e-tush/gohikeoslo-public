/* eslint-disable react-hooks/exhaustive-deps */
// src/app/page.tsx
'use client';

import { useEffect, useRef, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Script from 'next/script';
import ImageCarousel from '@/app/components/ImageCarousel';
import HowToGetThereSection from '@/app/components/HowToGetThereSection';

export default function Ostmarka() {
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
        <title>GoHike Oslo – Guided Forest Hikes with Huskies</title>
        <meta
          name="description"
          content="Join a husky-guided hike in Oslo’s peaceful forests. Experience nature, cozy cabins, and lake swims on a 2-hour tour."
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
              "name": "GoHike Oslo – Guided Forest Hikes with Huskies",
              "description":
                "Join a husky-guided hike in Oslo’s peaceful forests. Experience nature, cozy cabins, and lake swims on a 2-hour tour.",
              "touristType": "Nature lovers",
              "location": {
                "@type": "Place",
                "name": "Oslo Forest",
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
            src="/smiling-two-girls-with-dog.webp"
            alt="Two happy hikers with a husky"
            fill
            priority
            className="object-cover no-hover-zoom"
          />
          <div className="absolute inset-0 bg-black/40" aria-hidden="true" />
          <div className="relative z-10 text-center p-6 md:p-10 rounded-3xl max-w-2xl mx-auto shadow-lg">
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight font-adelle">
              Experience Oslo Nature on a Guided Forest Hike with a Husky.
            </h1>
            <a
              ref={heroCTARef}
              href="#booking"
              className="mt-8 inline-block goski-button"
            >
              Book a Guided Hike
            </a>
          </div>
        </section>

        <section className="text-center py-12 px-4 sm:px-6 max-w-4xl mx-auto leading-relaxed">
          <p className="text-lg text-gray-700">
            Join a 2-hour guided hike through the peaceful Oslo forest. Cozy cabin breaks, cinnamon buns, refreshing lake swims, and wagging tails await.
          </p>
        </section>

        <section className="goski-section py-20 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            
            {/* Left: Tour description */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Escape the City – Forest Tour with a Husky
              </h2>
              <p className="text-base text-gray-700 mb-4 leading-relaxed">
                🐾 <strong>Walk with a Husky & Local Guide</strong><br />
                In just 20 minutes from downtown Oslo, explore forest trails like a local — guided by an experienced outdoor enthusiast and joined by a friendly husky who loves cuddles, treats, and attention.
              </p>
              <p className="text-base text-gray-700 mb-4 leading-relaxed">
                🌲 <strong>Discover Nature & Hidden Gems</strong><br />
                Follow quiet trails through peaceful woods, past mossy rocks and lakes, while hearing stories about Norwegian outdoor life and nature traditions.
              </p>
              <p className="text-base text-gray-700 mb-4 leading-relaxed">
                📸 <strong>Scenic Views & Photo Moments</strong><br />
                Enjoy beautiful photo spots along the way — with forest paths, lake reflections, and natural surroundings perfect for capturing your Oslo adventure.
              </p>
              <p className="text-base text-gray-700 mb-4 leading-relaxed">
                🏞️ <strong>Lake Stop & Optional Swim</strong><br />
                At the calm forest lake, take a break to relax, dip your toes in the water, or even swim if you like — a refreshing pause in nature.
              </p>
              <p className="text-base text-gray-700 mb-6 leading-relaxed">
                🥐 <strong>Norwegian Cabin Treat</strong><br />
                The tour ends with a cozy stop at a forest cabin, where you’ll enjoy a warm drink and a traditional cinnamon bun (<i>kanelbolle</i>).
              </p>

            </div>

            {/* Right: Image carousel */}
            <div className="carousel-container">
              <ImageCarousel
                images={[
                  { src: '/two-men-on-sunny-trail.webp', alt: 'Two hikers enjoying a sunny forest trail' },
                  { src: '/forest-trail-with-rocks.webp', alt: 'Rocky nature trail in the forest' },
                  { src: '/walk-down-hill.webp', alt: 'Hiker walking downhill through trees' },
                  { src: '/two-course-participants-look-on-each-other.webp', alt: 'Happy course participants smiling' },
                  { src: '/bird-house-on-the-tree.webp', alt: 'Bird house hanging on a tree in Oslo forest' },
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
            <h2 className="text-3xl font-bold text-blue-950">Book Your Hike</h2>
            <p className="text-lg text-blue-950 mt-4">
              Reserve your spot for a memorable outdoor experience in Oslo peaceful forest.
            </p>
            <div className="relative items-center justify-center mt-8">
              <Script src="https://widgets.understory.io/widgets/understory-booking-widget.js" />
              <div
                className="understory-booking-widget mt-2"
                data-company-id="817e515c398c4017a118c0c4bfd6f9f6"
                data-experience-id="554979ccb36b6be840ee3e5d9f09dcc1"
                data-language="en-US"
              />
            </div>
          </div>
        </section>

        <HowToGetThereSection
          title="How to Get There"
          introLine1="The tour starts at Bogerud Metro Station, located in eastern Oslo on Metro Line 3."
          introLine2="From the city center (Oslo S or Jernbanetorget), take Metro Line 3 towards Mortensrud. The ride takes approximately 20 minutes. When you arrive, your guide will meet you directly on the metro platform."
          locationName="Bogerud T-Bane (Metro Station)"
          locationAddress="0692 Oslo"
          locationLink="https://www.google.com/maps?ll=59.876055,10.84207&z=16&t=m&hl=en&gl=NO&mapclient=embed&cid=601113869515506851"
          iframeSrc="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2039.7084176332544!2d10.84207!3d59.876055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46416f5c91b2ef19%3A0x85795e1260844a3!2sBogerud!5e0!3m2!1sen!2sno!4v1718391473284!5m2!1sen!2sno"
        />
        {showCTA && (
          <a
            href="#booking"
            className="cta-button fixed z-50 bg-red-600 text-white px-5 py-3 rounded-full shadow-lg transition-opacity duration-300 hover:bg-red-700"
            aria-label="Book a Guided Hike"
          >
            Book a Guided Hike
          </a>
        )}
      </main>
    </>
  );
}
