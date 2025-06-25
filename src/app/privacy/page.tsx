// src/app/privacy/page.tsx
export default function PrivacyPolicyPage() {
    return (
      <main className="goski-section px-6 py-16 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Privacy Policy</h1>
  
        <section className="space-y-6 text-gray-700 text-base leading-relaxed">
          <p>
            This privacy policy applies to all users of GoHike Oslo website and services. GoHike Oslo is operated by Sports Connects AS, a Norwegian-registered company. We are committed to protecting your personal data in accordance with GDPR (General Data Protection Regulation).
          </p>
  
          <h2 className="text-xl font-semibold text-gray-800">1. Who We Are</h2>
          <p>
            Sports Connects AS (org. nr. 932 192 861) is the legal entity behind GoHike Oslo. Our services include guided hiking experiences, bookings, customer support, and digital communication.
          </p>
  
          <h2 className="text-xl font-semibold text-gray-800">2. What Data We Collect</h2>
          <p>We may collect the following types of personal data:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Name and contact information (email, phone number)</li>
            <li>Booking and payment details</li>
            <li>Messages you send via contact forms or email</li>
            <li>Website traffic and usage (through analytics tools)</li>
          </ul>
  
          <h2 className="text-xl font-semibold text-gray-800">3. How We Use Your Data</h2>
          <p>We use your data to:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Process bookings and send confirmations</li>
            <li>Provide customer support and respond to inquiries</li>
            <li>Improve our website and services</li>
            <li>Send updates or relevant information if you have opted in</li>
          </ul>
  
          <h2 className="text-xl font-semibold text-gray-800">4. Data Storage and Security</h2>
          <p>
            Your personal data is stored securely through trusted platforms and is only accessible to authorized personnel. We use encryption and secure systems to prevent unauthorized access, loss, or misuse of your data.
          </p>
  
          <h2 className="text-xl font-semibold text-gray-800">5. Sharing of Data</h2>
          <p>
            We do not sell or share your personal data with third parties, except when required to process your booking (e.g. payment or booking providers), or if required by law.
          </p>
  
          <h2 className="text-xl font-semibold text-gray-800">6. Your Rights</h2>
          <p>You have the right to:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Access the personal data we have about you</li>
            <li>Correct incorrect or outdated information</li>
            <li>Request deletion of your data</li>
            <li>Withdraw consent at any time</li>
          </ul>
  
          <h2 className="text-xl font-semibold text-gray-800">7. Cookies and Analytics</h2>
          <p>
            Our website may use cookies and analytics tools (such as Google Analytics) to understand visitor behavior and improve functionality. You can manage cookie settings in your browser.
          </p>
  
          <h2 className="text-xl font-semibold text-gray-800">8. Contact Information</h2>
          <p>
            If you have questions about this privacy policy or want to exercise your rights, please contact us at:
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
          </p>
  
          <p className="text-sm text-gray-500">Last updated: June 2025</p>
        </section>
      </main>
    );
  }
  