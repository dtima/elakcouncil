import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export default function ArtsCulture() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="pt-16">
        <div className="relative h-[300px] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07"
            alt="Arts and Culture in Elak"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <h1 className="text-4xl font-bold text-white">Arts & Culture</h1>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">Rich Cultural Heritage of Elak</h2>
              <p className="text-lg text-gray-600">
                Discover the vibrant cultural heritage of Elak, where traditional arts and customs have been preserved for generations. Our community celebrates its rich Tikar heritage while embracing contemporary artistic expressions.
              </p>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">Cultural Events</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-4">
                    <div className="bg-cameroon-green text-white p-3 rounded-lg">
                      <span className="block text-center">Annual</span>
                      <span className="block text-2xl font-bold">Festival</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Elak Cultural Festival</h4>
                      <p className="text-gray-600">A celebration of traditional dance, music, and art from the Tikar people</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">Cultural Programs</h3>
              <div className="grid gap-4">
                <div className="p-6 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold mb-2">Traditional Dance Classes</h4>
                  <p className="text-gray-600">Learn authentic Tikar dances and cultural expressions</p>
                </div>
                <div className="p-6 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold mb-2">Craft Markets</h4>
                  <p className="text-gray-600">Experience local craftsmanship and artisanal products</p>
                </div>
                <div className="p-6 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold mb-2">Cultural Heritage Center</h4>
                  <p className="text-gray-600">Visit our center to learn about Elak's rich history and traditions</p>
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