import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export default function ParksRecreation() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="pt-16">
        <div className="relative h-[400px] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1501854140801-50d01698950b"
            alt="Parks and Recreation in Elak"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <h1 className="text-4xl font-bold text-white">Parks & Recreation</h1>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold mb-6">Natural Attractions</h2>
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">Mount Oku</h3>
                  <p className="text-gray-600 mb-4">
                    The second highest peak in West Africa, standing at 3,011 meters above sea level.
                    Experience breathtaking views and unique biodiversity.
                  </p>
                  <ul className="list-disc list-inside text-gray-600">
                    <li>Guided hiking tours available</li>
                    <li>Rich biodiversity and rare species</li>
                    <li>Photography opportunities</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">Kilum Forest Reserve</h3>
                  <p className="text-gray-600 mb-4">
                    A pristine community forest with unique flora and fauna, including species
                    found nowhere else on Earth.
                  </p>
                  <ul className="list-disc list-inside text-gray-600">
                    <li>Nature trails</li>
                    <li>Bird watching</li>
                    <li>Conservation activities</li>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Recreational Activities</h2>
              <div className="grid gap-6">
                <div className="border p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">Waterfalls</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>Tolon waterfall</li>
                    <li>Kenshing waterfall</li>
                    <li>Enfwe waterfall</li>
                    <li>Other scenic falls</li>
                  </ul>
                </div>
                <div className="border p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">Lake Oku</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>Largest crater lake in Cameroon</li>
                    <li>Sacred site</li>
                    <li>Unique ecosystem</li>
                    <li>Guided tours available</li>
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