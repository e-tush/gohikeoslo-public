// src/components/ReviewsSection.tsx
import React from 'react';

export default function ReviewsSection() {
  const reviews = [
    {
      title: 'Family vacation',
      reviewer: 'A Tripadvisor Reviewer, Jun 2025',
      text: `We are a family of 5 (kids aged 7, 10 and 12) and this tour was absolutely wonderful. The walk was not too hard for the kids, and they were so excited to meet the husky and give him treats. The lake was beautiful and we had plenty of time to relax. Our guide was patient, kind and knew a lot about the forest. The cinnamon buns at the end were a nice touch. Highly recommend for families who want to see real Norwegian nature.`,
    },
    {
      title: 'Beginner friendly, scenic, beautiful nature',
      reviewer: 'A Tripadvisor Reviewer, Jun 2025',
      text: `Went hiking with my husband. The hike was not far away from metro, yet so close to scenic nature! Went on little paths, took pictures with the guide and the husky - Roma. The guide Hanne was super friendly! Recommended if you don't have too much time in Oslo, but still would like to have a taste of Norwegian outdoor culture!`,
    },
    {
      title: 'Peaceful forest walk with a sweet dog',
      reviewer: 'A Tripadvisor Reviewer, Jun 2025',
      text: `I was travelling solo and booked this hike last minute. Wasn’t sure what to expect but it was perfect. The forest was calm and beautiful.  We walked from Bogerud metro to the lake and then to this very nice cabin. The guide shared lots of interesting facts about nature in Norway. Would do it again if I come back!`,
    },
  ];

  return (
    <section className="goski-section px-6 py-16 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">What People Say</h2>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-3">
        {reviews.map((review, index) => (
          <article
            key={index}
            className="bg-white p-6 rounded-xl shadow-md border border-gray-100 transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-1"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{review.title}</h3>
            <p className="text-sm text-gray-600 italic mb-4">{review.reviewer}</p>
            <p className="text-gray-700 text-sm leading-relaxed">{review.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
