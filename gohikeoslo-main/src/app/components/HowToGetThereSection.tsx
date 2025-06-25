// src/components/HowToGetThereSection.tsx

'use client';

import Link from 'next/link';

type Props = {
  title?: string;
  introLine1: string;
  introLine2: string;
  locationName: string;
  locationAddress: string;
  locationLink: string;
  iframeSrc: string;
};

export default function HowToGetThereSection({
  title = 'How to Get There',
  introLine1,
  introLine2,
  locationName,
  locationAddress,
  locationLink,
  iframeSrc,
}: Props) {
  return (
    <section className="goski-section px-4 sm:px-6 md:px-20 lg:px-40 mt-24">
      <h2 className="text-3xl font-bold text-blue-950 text-center mb-8">{title}</h2>
      <div className="bg-white rounded-xl shadow p-6">
        <p className="text-base text-gray-700 leading-relaxed mb-4">
          {introLine1}
        </p>
        <p className="text-base text-gray-700 leading-relaxed mb-4">
          {introLine2}
        </p>
        <p className="text-base text-gray-700 leading-relaxed mb-4">
          The station is located at:
          <br />
          <Link
            href={locationLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            <strong>{locationName}, {locationAddress}</strong>
          </Link>
        </p>
        <div className="w-full h-72 mt-6">
          <iframe
            title={`${locationName} Map`}
            src={iframeSrc}
            width="100%"
            height="100%"
            allowFullScreen
            loading="lazy"
            className="w-full h-full border-0 rounded-xl"
          />
        </div>
      </div>
    </section>
  );
}
