import HikeCard from './HikeCard'

export default function TourCardsSection() {
  return (
    <section className="goski-section py-16">
      <h2 className="text-3xl font-bold text-center mb-12">Choose Your Hike</h2>
      <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2">
        <HikeCard
          title="Hike to Oslo’s Best Forest Viewpoint"
          metroInfo="From Sognsvann (Oslo Metro Line 5)"
          description="Scenic hike to one of Oslo’s best viewpoints. Peaceful trails, fresh air, and panoramic forest views."
          price="1200 NOK"
          link="/vettakollen"
          image="/vetakollen-view-point.webp"
          location="Sognsvann Metro Station"
          address="0855 Oslo"
          mapsLink="https://www.google.com/maps/place/Sognsvann/@59.9671289,10.731311,17z"
        />

        <HikeCard
          title="Guided Forest Hike with a Husky"
          metroInfo="From Bogerud (Oslo Metro Line 3)"
          description="Discover quiet lakes, mossy trails, and hidden gems on this forest walk through Oslo’s wild east side."
          price="1400 NOK"
          link="/ostmarka"
          image="/smiling-two-girls-with-dog.webp"
          location="Bogerud Metro Station"
          address="0692 Oslo"
          mapsLink="https://www.google.com/maps/place/Bogerud/@59.876138,10.844431,16z"
        />
      </div>
    </section>
  )
}
