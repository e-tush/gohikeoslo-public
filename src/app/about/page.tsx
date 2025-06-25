// src/app/about/page.tsx
export default function AboutPage() {
  return (
    <main className="goski-section px-6 py-16 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">About GoHike Oslo</h1>

      <p className="mb-4 text-gray-700 leading-relaxed">
        At GoHike Oslo, we’re passionate about sharing the peaceful beauty of Oslo’s forests with visitors from around the world. Our guided hikes take you off the beaten path and into the heart of Nordmarka and Østmarka – just a short metro ride from the city center.
      </p>

      <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
        <li>Private forest treks with stunning views and quiet nature</li>
        <li>Lake breaks for relaxing and soaking in the scenery</li>
        <li>Our friendly Siberian husky as your trail companion</li>
        <li>Stops at forest cabins with cinnamon buns and warm drinks</li>
        <li>Stories, nature insights, and tips from our local guides</li>
      </ul>

      <p className="text-gray-700 leading-relaxed">
        We focus on small groups (up to 10 people), giving you a personal and immersive outdoor experience. Whether you’re a first-time visitor or a seasoned local, our goal is to help you connect with Norwegian nature in a meaningful way – with fresh air, friendly vibes, and unforgettable views.
      </p>
    </main>
  );
}
