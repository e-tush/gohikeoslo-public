// src/app/contact/page.tsx
import Image from 'next/image';

export default function ContactPage() {
  return (
    <main className="goski-section px-6 py-16 max-w-5xl mx-auto">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Contact Us</h1>
          <p className="text-gray-700 mb-4">
            Have questions or want to book a custom hike? We’d love to hear from you!
          </p>

          <div className="space-y-4 text-gray-800 text-base">
            <p>
              <strong>Email:</strong>{' '}
              <a href="mailto:oslo.goski@gmail.com" className="text-red-600 hover:underline">
                oslo.goski@gmail.com
              </a>
            </p>
            <p>
              <strong>Phone:</strong>{' '}
              <a href="tel:+4796749280" className="hover:underline text-red-600">
              +47-967-49-280
              </a>
            </p>
            <p>
              <strong>WhatsApp:</strong>{' '}
              <a
                href="https://wa.me/4796749280"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-600 hover:underline"
              >
                Chat with us
              </a>
            </p>
          </div>
        </div>

        <div className="w-full">
          <Image
            src="/contact_us_gohike.webp"
            alt="Contact GoHike Oslo"
            width={800}
            height={600}
            className="rounded-xl shadow-md object-cover w-full h-auto"
          />
        </div>
      </div>
    </main>
  );
}
