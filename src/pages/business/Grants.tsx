import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Coins, Users, Building } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Grants() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="pt-16">
        <div className="bg-cameroon-green text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold mb-4">Development Grants</h1>
            <p className="text-xl">Financial support and opportunities for businesses in Elak Municipality</p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="p-6 border rounded-lg">
              <Coins className="w-12 h-12 text-cameroon-green mb-4" />
              <h3 className="text-xl font-semibold mb-2">PIAASI Program</h3>
              <p className="text-gray-600 mb-4">
                Since 2006, 26 entrepreneurs have benefited from PIAASI loans totaling 24 million FCFA
              </p>
              <Button variant="outline" className="w-full">Apply Now</Button>
            </div>

            <div className="p-6 border rounded-lg">
              <Users className="w-12 h-12 text-cameroon-green mb-4" />
              <h3 className="text-xl font-semibold mb-2">Employment Support</h3>
              <p className="text-gray-600 mb-4">
                Register with the National Employment Fund for job opportunities and training
              </p>
              <Button variant="outline" className="w-full">Learn More</Button>
            </div>

            <div className="p-6 border rounded-lg">
              <Building className="w-12 h-12 text-cameroon-green mb-4" />
              <h3 className="text-xl font-semibold mb-2">Business Development</h3>
              <p className="text-gray-600 mb-4">
                Support for agriculture, livestock, bakery, and commerce projects
              </p>
              <Button variant="outline" className="w-full">Get Started</Button>
            </div>
          </div>

          <div className="mt-12 bg-gray-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-6">Funded Sectors</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4">Agriculture & Livestock</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>Maize, beans, and potato farming</li>
                  <li>Animal husbandry projects</li>
                  <li>Fish farming initiatives</li>
                  <li>Agricultural processing</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4">Small Industries</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>Wood carving and crafts</li>
                  <li>Textile production</li>
                  <li>Honey production</li>
                  <li>Local craft development</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-gray-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-6">Application Process</h2>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded shadow-sm">
                <h3 className="font-semibold">Eligibility Requirements</h3>
                <ul className="mt-2 space-y-2 text-gray-600">
                  <li>Must be a resident of Elak Municipality</li>
                  <li>Valid business proposal or existing business</li>
                  <li>Complete application documentation</li>
                  <li>Meet sector-specific criteria</li>
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