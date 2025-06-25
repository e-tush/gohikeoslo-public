'use client'

import Image from 'next/image'
import Link from 'next/link'

interface Props {
  title: string
  description: string
  location: string
  address: string
  price: string
  metroInfo: string
  link: string
  image: string
  mapsLink: string
}

export default function HikeCard({
  title,
  description,
  location,
  address,
  price,
  metroInfo,
  link,
  image,
  mapsLink,
}: Props) {
  return (
    <div className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden">
      <Link href={link} className="block relative h-60 w-full">
        <Image src={image} alt={title} fill className="object-cover" />
      </Link>
      <div className="p-6">
        <h3 className="text-2xl font-semibold text-gray-800">{title}</h3>
        <p className="text-sm text-gray-500 mt-1">{metroInfo}</p>
        <p className="text-base text-gray-600 mt-3">{description}</p>
        <h4 className="text-gray-800 font-semibold mt-6 text-base">Price</h4>
        <p className="mt-2 space-y-2 text-sm text-gray-700">{price}</p>

        <h4 className="text-gray-800 font-semibold mt-6 text-base">Meeting Point:</h4>
        <div className="mt-2 space-y-2 text-sm text-gray-700">
        <p>{location}</p>
          <p>Address: {address}</p>
          <a
            href={mapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            Open in Maps
          </a>
        </div>
        <div className="flex justify-center mb-4 mt-6">
            <Link href={link}>
                <button className="goski-button">Read More</button>
            </Link>
        </div>
      </div>
    </div>
  )
}
