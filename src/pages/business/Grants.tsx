import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Coins, FileText, Building } from "lucide-react";

export default function Grants() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="pt-16">
        <div className="bg-cameroon-green text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold mb-4">Development Grants</h1>
            <p className="text-xl">Financial support and incentives for businesses in Elak</p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="p-6 border rounded-lg">
              <Coins className="w-12 h-12 text-cameroon-green mb-4" />
              <h3 className="text-xl font-semibold mb-2">PIAASI Loans</h3>
              <p className="text-gray-600">
                Since 2006, 26 entrepreneurs have benefited from PIAASI loans totaling 24 million FCFA for projects in agriculture, 
                livestock, bakery, and commerce.
              </p>
            </div>
            <div className="p-6 border rounded-lg">
              <FileText className="w-12 h-12 text-cameroon-green mb-4" />
              <h3 className="text-xl font-semibold mb-2">Application Process</h3>
              <p className="text-gray-600">
                Learn about the application requirements and process for obtaining development grants and loans in Elak municipality.
              </p>
            </div>
            <div className="p-6 border rounded-lg">
              <Building className="w-12 h-12 text-cameroon-green mb-4" />
              <h3 className="text-xl font-semibold mb-2">Eligible Sectors</h3>
              <p className="text-gray-600">
                Grants available for agriculture, livestock, small-scale industries, crafts, and tourism development projects.
              </p>
            </div>
          </div>

          <div className="mt-12 bg-gray-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-6">Available Programs</h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4">Agricultural Development Grants</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Support for maize, beans, and potato farming</li>
                  <li>Livestock development initiatives</li>
                  <li>Agricultural equipment subsidies</li>
                  <li>Training and capacity building</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4">Tourism Development Support</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Eco-tourism project funding</li>
                  <li>Cultural tourism initiatives</li>
                  <li>Tourism infrastructure development</li>
                  <li>Marketing and promotion support</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4">Small Business Support</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Craft sector development</li>
                  <li>Small-scale industry support</li>
                  <li>Market access facilitation</li>
                  <li>Business skills training</li>
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