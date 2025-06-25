// src/app/terms/page.tsx
export default function TermsPage() {
    return (
      <main className="goski-section px-6 py-16 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Terms and Conditions</h1>
  
        <section className="space-y-4 text-gray-700 text-base leading-relaxed">
          <p>
            By booking a guided hike with GoHike Oslo, you agree to the following terms and conditions. Please read them carefully before making a reservation.
          </p>
  
          <h2 className="text-xl font-semibold text-gray-800 mt-8">1. Booking and Payment</h2>
          <p>
            All bookings must be made in advance via our website or booking partner. Payment is required at the time of booking to secure your spot. You will receive a confirmation email with meeting details after payment is complete.
          </p>
  
          <h2 className="text-xl font-semibold text-gray-800 mt-8">2. Cancellations and Refunds</h2>
          <p>
            You may cancel your hike up to 24 hours in advance for a full refund. Cancellations made less than 24 hours before the hike will not be refunded. To cancel, please contact us by email or WhatsApp.
          </p>
  
          <h2 className="text-xl font-semibold text-gray-800 mt-8">3. Weather and Safety</h2>
          <p>
            Our hikes run in all weather conditions unless it poses a safety risk. In case of extreme weather (such as heavy storms or icy trails), we reserve the right to cancel or reschedule the tour. You will be offered a new date or a full refund.
          </p>
  
          <h2 className="text-xl font-semibold text-gray-800 mt-8">4. Responsibility</h2>
          <p>
            Participants are responsible for dressing appropriately for the weather and forest terrain. Our guides are trained to ensure your safety, but GoHike Oslo is not liable for injuries resulting from failure to follow guide instructions or poor physical condition.
          </p>
  
          <h2 className="text-xl font-semibold text-gray-800 mt-8">5. Personal Data</h2>
          <p>
            We collect and store your name and contact information for the purpose of booking and communication. Your data will never be shared with third parties except our payment and booking partners. You may request deletion of your data at any time.
          </p>
  
          <h2 className="text-xl font-semibold text-gray-800 mt-8">6. Contact</h2>
          <p>
            For questions or concerns, please contact us at:
            <br />
            <strong>Email:</strong>{' '}
            <a href="mailto:oslo.goski@gmail.com" className="text-red-600 hover:underline">
              oslo.goski@gmail.com
            </a>
            <br />
            <strong>Phone:</strong>{' '}
            <a href="tel:+4796749280" className="text-red-600 hover:underline">
              +47 967 49 280
            </a>
            <br />
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
        </section>
      </main>
    );
  }
  