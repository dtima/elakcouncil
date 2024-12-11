import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Building, MapPin, Info } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Zoning() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="pt-16">
        <div className="bg-cameroon-green text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold mb-4">Land Use & Zoning</h1>
            <p className="text-xl">Understanding zoning regulations in Elak Municipality</p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="p-6 border rounded-lg">
              <Building className="w-12 h-12 text-cameroon-green mb-4" />
              <h3 className="text-xl font-semibold mb-2">Commercial Zones</h3>
              <p className="text-gray-600 mb-4">Areas designated for business and commercial activities</p>
              <Button variant="outline" className="w-full">View Details</Button>
            </div>

            <div className="p-6 border rounded-lg">
              <MapPin className="w-12 h-12 text-cameroon-green mb-4" />
              <h3 className="text-xl font-semibold mb-2">Protected Areas</h3>
              <p className="text-gray-600 mb-4">Including Kilum Forest Reserve and sacred forests</p>
              <Button variant="outline" className="w-full">Learn More</Button>
            </div>

            <div className="p-6 border rounded-lg">
              <Info className="w-12 h-12 text-cameroon-green mb-4" />
              <h3 className="text-xl font-semibold mb-2">Regulations</h3>
              <p className="text-gray-600 mb-4">Guidelines for construction and land use</p>
              <Button variant="outline" className="w-full">View Guidelines</Button>
            </div>
          </div>

          <div className="mt-12 bg-gray-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-6">Land Use Categories</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4">Protected Areas</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>Kilum Forest Reserve - Community forest</li>
                  <li>Sacred forests in communities</li>
                  <li>Individual forest plantations</li>
                  <li>Environmental protection zones</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4">Agricultural Zones</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>Farming areas for crops</li>
                  <li>Grazing lands for livestock</li>
                  <li>Fish farming locations</li>
                  <li>Agricultural processing zones</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-gray-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-6">Environmental Guidelines</h2>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded shadow-sm">
                <h3 className="font-semibold">Conservation Requirements</h3>
                <ul className="mt-2 space-y-2 text-gray-600">
                  <li>Protection of forest resources</li>
                  <li>Waste management guidelines</li>
                  <li>Building permit requirements</li>
                  <li>Environmental impact assessments</li>
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