import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Search, Building2, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function FindBusiness() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="pt-16">
        <div className="bg-cameroon-green text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold mb-4">Find Registered Business</h1>
            <p className="text-xl">Search for registered businesses in Elak Municipality</p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-2xl mx-auto mb-12">
            <div className="flex gap-4">
              <Input 
                type="search" 
                placeholder="Search by business name or type..." 
                className="flex-1"
              />
              <Button>
                <Search className="mr-2 h-4 w-4" />
                Search
              </Button>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="p-6 border rounded-lg">
              <Building2 className="w-12 h-12 text-cameroon-green mb-4" />
              <h3 className="text-xl font-semibold mb-2">Super Tailoring Workshop</h3>
              <p className="text-gray-600 mb-4">Professional tailoring and training services</p>
              <p className="flex items-center text-gray-600">
                <MapPin className="h-4 w-4 mr-2" />
                Elak Center
              </p>
            </div>

            <div className="p-6 border rounded-lg">
              <Building2 className="w-12 h-12 text-cameroon-green mb-4" />
              <h3 className="text-xl font-semibold mb-2">Kings Tailoring Workshop</h3>
              <p className="text-gray-600 mb-4">Custom clothing and alterations</p>
              <p className="flex items-center text-gray-600">
                <MapPin className="h-4 w-4 mr-2" />
                Elak Market Area
              </p>
            </div>

            <div className="p-6 border rounded-lg">
              <Building2 className="w-12 h-12 text-cameroon-green mb-4" />
              <h3 className="text-xl font-semibold mb-2">God's Will Tailoring Workshop</h3>
              <p className="text-gray-600 mb-4">Traditional and modern clothing designs</p>
              <p className="flex items-center text-gray-600">
                <MapPin className="h-4 w-4 mr-2" />
                Elak Commercial District
              </p>
            </div>
          </div>

          <div className="mt-12 bg-gray-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-6">Business Categories</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="bg-white p-4 rounded shadow-sm">
                <h3 className="font-semibold mb-2">Agriculture & Livestock</h3>
                <ul className="list-disc list-inside text-gray-600">
                  <li>Crop farming</li>
                  <li>Animal husbandry</li>
                  <li>Agricultural processing</li>
                  <li>Fish farming</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded shadow-sm">
                <h3 className="font-semibold mb-2">Crafts & Small Industries</h3>
                <ul className="list-disc list-inside text-gray-600">
                  <li>Wood carving</li>
                  <li>Textile production</li>
                  <li>Honey production</li>
                  <li>Local crafts</li>
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