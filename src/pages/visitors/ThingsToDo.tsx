import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export default function ThingsToDo() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="pt-16">
        <div className="relative h-[400px] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1482938289607-e9573fc25ebb"
            alt="Things to Do in Elak"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <h1 className="text-4xl font-bold text-white">Things to Do in Elak</h1>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">Natural Attractions</h2>
              <div className="space-y-4">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">Mount Oku</h3>
                  <p className="text-gray-600 mb-4">
                    Second highest peak in West Africa, standing at 3011m above sea level,
                    offering breathtaking views and hiking opportunities.
                  </p>
                  <ul className="list-disc list-inside text-gray-600">
                    <li>Guided tours available</li>
                    <li>Hiking trails</li>
                    <li>Photography spots</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">Lake Oku</h3>
                  <p className="text-gray-600 mb-4">
                    The largest lake in Cameroon, offering unique biodiversity
                    and scenic beauty.
                  </p>
                  <ul className="list-disc list-inside text-gray-600">
                    <li>Nature walks</li>
                    <li>Bird watching</li>
                    <li>Photography</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-bold">Cultural Experiences</h2>
              <div className="space-y-4">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">Oku Palace</h3>
                  <p className="text-gray-600 mb-4">
                    Experience the rich cultural heritage at the traditional Fon's palace.
                  </p>
                  <ul className="list-disc list-inside text-gray-600">
                    <li>Cultural exhibitions</li>
                    <li>Traditional ceremonies</li>
                    <li>Historical tours</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">Cultural Center</h3>
                  <p className="text-gray-600 mb-4">
                    Discover local arts, crafts, and cultural performances.
                  </p>
                  <ul className="list-disc list-inside text-gray-600">
                    <li>Traditional dance shows</li>
                    <li>Art exhibitions</li>
                    <li>Craft demonstrations</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-bold">Natural Heritage</h2>
              <div className="space-y-4">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">Kilum Forest Reserve</h3>
                  <p className="text-gray-600 mb-4">
                    Explore the community forest with unique flora and fauna.
                  </p>
                  <ul className="list-disc list-inside text-gray-600">
                    <li>Guided nature walks</li>
                    <li>Bird watching</li>
                    <li>Botanical tours</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">Waterfalls</h3>
                  <p className="text-gray-600 mb-4">
                    Visit our numerous scenic waterfalls including Tolon, Kenshing, and Mbancham.
                  </p>
                  <ul className="list-disc list-inside text-gray-600">
                    <li>Hiking trails</li>
                    <li>Photography spots</li>
                    <li>Picnic areas</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}