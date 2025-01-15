import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { MapPin, Camera, Trees } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ThingsToDo() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="pt-16">
        <div className="bg-cameroon-green text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold mb-4">Things To Do in Elak</h1>
            <p className="text-xl">Explore our natural wonders and cultural heritage</p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src="/lovable-uploads/3f5d3a12-cf9c-4196-9835-7925385833d3.png" 
                alt="Mount Oku" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Mount Oku</h3>
                <p className="text-gray-600 mb-4">
                  Climb West Africa's second-highest peak at 3,011m above sea level.
                </p>
                <div className="flex items-center text-gray-500 mb-4">
                  <MapPin className="h-5 w-5 mr-2" />
                  <span>Elak-Oku</span>
                </div>
                <Button className="w-full">Learn More</Button>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src="/lovable-uploads/64b1b326-7802-4ba9-9744-3074d76568a1.png" 
                alt="Lake Oku" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Lake Oku</h3>
                <p className="text-gray-600 mb-4">
                  Visit Cameroon's largest crater lake and its unique ecosystem.
                </p>
                <div className="flex items-center text-gray-500 mb-4">
                  <MapPin className="h-5 w-5 mr-2" />
                  <span>Oku Highland</span>
                </div>
                <Button className="w-full">Plan Visit</Button>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src="/lovable-uploads/1adb85a4-c41a-4742-aa19-124ef198c550.png" 
                alt="Kilum Forest" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Kilum Forest Reserve</h3>
                <p className="text-gray-600 mb-4">
                  Explore unique flora and fauna in our protected forest reserve.
                </p>
                <div className="flex items-center text-gray-500 mb-4">
                  <Trees className="h-5 w-5 mr-2" />
                  <span>Kilum-Ijim Forest</span>
                </div>
                <Button className="w-full">Discover</Button>
              </div>
            </div>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Cultural Experiences</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Camera className="h-5 w-5 mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold">Oku Fon's Palace</h3>
                    <p className="text-gray-600">Experience traditional leadership and cultural artifacts</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Camera className="h-5 w-5 mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold">Cultural and Touristic Centre</h3>
                    <p className="text-gray-600">Learn about local customs and traditions</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Camera className="h-5 w-5 mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold">Lumutu Shrine</h3>
                    <p className="text-gray-600">Visit sacred cultural sites</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Natural Attractions</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <MapPin className="h-5 w-5 mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold">Waterfalls</h3>
                    <p className="text-gray-600">Visit Tolon, Kenshing, Enfwe, and other spectacular falls</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <MapPin className="h-5 w-5 mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold">Historic Caves</h3>
                    <p className="text-gray-600">Explore mbvekyeafon, mbvekngailai, and other ancient caves</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <MapPin className="h-5 w-5 mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold">Ijim Mountain</h3>
                    <p className="text-gray-600">Trek through pristine mountain landscapes</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}