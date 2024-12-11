import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { MapPin } from "lucide-react";

export default function GettingAround() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="pt-16">
        <div className="bg-cameroon-green text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold mb-4">Getting Around Elak</h1>
            <p className="text-xl">Your guide to transportation in Elak Municipality</p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-4">Location & Access</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Elak Council is located in Bui Division of the North West Region, 
                  approximately 25km from Kumbo town. The municipality is bounded by:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>North: Noni council</li>
                  <li>East: Jakiri council</li>
                  <li>West: Belo council</li>
                  <li>South: Babessi Council</li>
                </ul>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-4">Transportation Options</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold">Municipal Park</h3>
                    <p className="text-gray-600">
                      Located in Elak center, the municipal park serves as the main 
                      transportation hub.
                    </p>
                  </div>
                </div>
                <h3 className="font-semibold mt-4">Available Transport Modes:</h3>
                <ul className="list-disc list-inside space-y-2 ml-4 text-gray-600">
                  <li>Cars and vehicles</li>
                  <li>Motor bikes</li>
                  <li>Bicycles</li>
                  <li>Horses</li>
                  <li>Camels</li>
                  <li>Wheel barrows (for goods)</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Travel Tips</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Book transportation in advance during peak seasons</li>
                <li>Carry cash for transportation fares</li>
                <li>Consider weather conditions when planning trips</li>
                <li>Ask locals for directions and recommendations</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Important Information</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Municipal area: 750 km²</li>
                <li>Population density: 253 inhabitants per km²</li>
                <li>Main transport hub: Elak Municipal Park</li>
                <li>Connected to major neighboring councils</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Safety Guidelines</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Use registered transportation services</li>
                <li>Keep valuables secure while traveling</li>
                <li>Travel in groups when possible</li>
                <li>Maintain emergency contact numbers</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}