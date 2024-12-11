import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Building2, FileText, Users } from "lucide-react";

export default function StartBusiness() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="pt-16">
        <div className="bg-cameroon-green text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold mb-4">Start Your Business</h1>
            <p className="text-xl">Guide to establishing your business in Elak Municipality</p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="p-6 border rounded-lg">
              <Building2 className="w-12 h-12 text-cameroon-green mb-4" />
              <h3 className="text-xl font-semibold mb-2">Business Registration</h3>
              <p className="text-gray-600">Step-by-step guide to registering your business in Elak</p>
            </div>
            <div className="p-6 border rounded-lg">
              <FileText className="w-12 h-12 text-cameroon-green mb-4" />
              <h3 className="text-xl font-semibold mb-2">Required Documents</h3>
              <p className="text-gray-600">Documentation needed for business registration</p>
            </div>
            <div className="p-6 border rounded-lg">
              <Users className="w-12 h-12 text-cameroon-green mb-4" />
              <h3 className="text-xl font-semibold mb-2">Support Services</h3>
              <p className="text-gray-600">Available resources and support for new businesses</p>
            </div>
          </div>

          <div className="mt-12 bg-gray-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-6">Business Opportunities</h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4">Agriculture & Livestock</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Crop farming (maize, beans, potatoes)</li>
                  <li>Animal husbandry</li>
                  <li>Agricultural processing</li>
                  <li>Fish farming</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4">Tourism & Hospitality</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Eco-tourism services</li>
                  <li>Tour guide services</li>
                  <li>Accommodation services</li>
                  <li>Cultural tourism</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4">Craft & Small Industries</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Wood carving</li>
                  <li>Textile production</li>
                  <li>Honey production</li>
                  <li>Local crafts</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-gray-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-6">Training Centers</h2>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded shadow-sm">
                <h3 className="font-semibold">Available Training Centers</h3>
                <ul className="mt-2 space-y-2 text-gray-600">
                  <li>Super tailoring workshop Elak</li>
                  <li>Kings tailoring workshop</li>
                  <li>God's will tailoring workshop</li>
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