import { useState, useEffect } from 'react'
import Image from 'next/image'

interface CarouselProps {
  images: { src: string; alt: string }[]
  interval?: number
}

export default function ImageCarousel({ images, interval = 3000 }: CarouselProps) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length)
    }, interval)
    return () => clearInterval(timer)
  }, [images.length, interval])

  return (
    <div className="relative w-full h-80 overflow-hidden">
      {images.map((img, i) => (
        <Image
          key={i}
          src={img.src}
          alt={img.alt}
          fill
          className={`object-cover transition-opacity duration-700 no-hover-zoom ${i === index ? 'opacity-100' : 'opacity-0'}`}
        />
      ))}
    </div>
  )
}
