import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { MapPin, Car, Bus, Info } from "lucide-react";

export default function Directions() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="pt-16">
        <div className="bg-cameroon-green text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold mb-6">Directions to Elak Council Hall</h1>
            <p className="text-xl">Located in Bui Division, North West Region, approximately 25km from Kumbo town</p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h2 className="text-2xl font-bold mb-4">Location Details</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-6 h-6 text-cameroon-green mt-1" />
                    <div>
                      <p className="font-semibold">Address</p>
                      <p className="text-gray-600">
                        P.O. Box 03 Elak Oku<br />
                        North West Region<br />
                        Bui Division
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Info className="w-6 h-6 text-cameroon-green mt-1" />
                    <div>
                      <p className="font-semibold">Geographical Location</p>
                      <p className="text-gray-600">
                        Bounded by:<br />
                        North: Noni council<br />
                        East: Jakiri council<br />
                        West: Belo council<br />
                        South: Babessi Council
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h2 className="text-2xl font-bold mb-4">Transportation Options</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Car className="w-6 h-6 text-cameroon-green mt-1" />
                    <div>
                      <p className="font-semibold">By Car</p>
                      <p className="text-gray-600">
                        25km drive from Kumbo town<br />
                        Regular taxi services available
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Bus className="w-6 h-6 text-cameroon-green mt-1" />
                    <div>
                      <p className="font-semibold">Public Transport</p>
                      <p className="text-gray-600">
                        Regular bus services from Kumbo<br />
                        Motor bike services within Elak
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h2 className="text-2xl font-bold mb-4">Operating Hours</h2>
                <p className="text-gray-600">
                  Monday - Friday: 8:15 AM - 5:00 PM<br />
                  Closed on weekends and public holidays
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
                <div className="space-y-2">
                  <p className="text-gray-600">Phone: (+237) 675957333</p>
                  <p className="text-gray-600">Alternative: (+237) 675730808</p>
                  <p className="text-gray-600">Email: contact@elakcouncil.cm</p>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h2 className="text-2xl font-bold mb-4">Additional Information</h2>
                <p className="text-gray-600">
                  Elak Council serves an area of approximately 750 km² with an estimated population
                  of 182,879 inhabitants. The council area comprises 36 villages, making it a central
                  administrative hub for the region.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}