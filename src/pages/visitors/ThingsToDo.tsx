import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Mountain, TreePine, Camera, Map } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ThingsToDo() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="pt-16">
        <div className="relative h-[400px] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1469474968028-56623f02e42e"
            alt="Mount Oku"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-4xl font-bold mb-4">Discover Elak</h1>
              <p className="text-xl">Experience the beauty of Cameroon's second-highest peak</p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="p-6 border rounded-lg">
              <Mountain className="w-12 h-12 text-cameroon-green mb-4" />
              <h3 className="text-xl font-semibold mb-2">Mount Oku</h3>
              <p className="text-gray-600 mb-4">Second highest peak in West Africa, 3011M above sea level</p>
              <Button variant="outline" className="w-full">Learn More</Button>
            </div>
            <div className="p-6 border rounded-lg">
              <TreePine className="w-12 h-12 text-cameroon-green mb-4" />
              <h3 className="text-xl font-semibold mb-2">Kilum Forest</h3>
              <p className="text-gray-600 mb-4">Unique mountain forest reserve with endemic species</p>
              <Button variant="outline" className="w-full">Explore</Button>
            </div>
            <div className="p-6 border rounded-lg">
              <Camera className="w-12 h-12 text-cameroon-green mb-4" />
              <h3 className="text-xl font-semibold mb-2">Cultural Sites</h3>
              <p className="text-gray-600 mb-4">Visit the Oku Fon's palace and cultural center</p>
              <Button variant="outline" className="w-full">Visit</Button>
            </div>
            <div className="p-6 border rounded-lg">
              <Map className="w-12 h-12 text-cameroon-green mb-4" />
              <h3 className="text-xl font-semibold mb-2">Natural Wonders</h3>
              <p className="text-gray-600 mb-4">Discover Lake Oku and stunning waterfalls</p>
              <Button variant="outline" className="w-full">Discover</Button>
            </div>
          </div>

          <div className="mt-12">
            <h2 className="text-3xl font-bold mb-6">Featured Attractions</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Natural Attractions</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>Lake Oku - Largest lake in Cameroon</li>
                  <li>Tolon waterfall</li>
                  <li>Kenshing waterfall</li>
                  <li>Enfwe waterfall</li>
                  <li>Mbancham waterfall</li>
                  <li>Ijim mountain</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Cultural Sites</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>Oku Fon's palace</li>
                  <li>Oku cultural and touristic centre</li>
                  <li>Lumutu shrine</li>
                  <li>Historical caves (mbvekyeafon, mbvekngailai, and more)</li>
                  <li>Oku honey cooperative society</li>
                  <li>Oku paper industry</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}