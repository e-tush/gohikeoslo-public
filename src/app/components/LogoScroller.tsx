'use client';

import Image from 'next/image';

const logos = [
  { src: '/logos/tripadvisor.png', alt: 'Tripadvisor', width: 240, height: 100 },
  { src: '/logos/airbnb.png', alt: 'Airbnb', width: 200, height: 100 },
  { src: '/logos/viator.png', alt: 'Viator', width: 200, height: 100 },
  { src: '/logos/getyourguide.png', alt: 'GetYourGuide', width: 260, height: 100 },
  { src: '/logos/kayak.png', alt: 'Kayak', width: 200, height: 80 },
  { src: '/logos/booking.png', alt: 'Booking.com', width: 240, height: 80 },
];

export default function LogoScroller() {
  return (
    <section className="py-16 bg-white">
      <h2 className="text-center text-3xl font-bold text-gray-800 mb-8">Find Us On</h2>
      <div className="overflow-hidden relative">
        <div className="flex gap-40 animate-scroll min-w-max">

          {[...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="h-20 w-auto flex-shrink-0 flex items-center justify-center"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                className="object-contain h-full w-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
