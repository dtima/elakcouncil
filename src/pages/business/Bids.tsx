import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { FileText, Clock, CheckCircle } from "lucide-react";

export default function Bids() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="pt-16">
        <div className="bg-cameroon-green text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold mb-4">Tenders & Bids</h1>
            <p className="text-xl">Current opportunities for contractors and suppliers in Elak Council</p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="p-6 border rounded-lg">
              <FileText className="w-12 h-12 text-cameroon-green mb-4" />
              <h3 className="text-xl font-semibold mb-2">Current Tenders</h3>
              <p className="text-gray-600">View active tenders and procurement opportunities with Elak Council</p>
            </div>
            <div className="p-6 border rounded-lg">
              <Clock className="w-12 h-12 text-cameroon-green mb-4" />
              <h3 className="text-xl font-semibold mb-2">Submission Deadlines</h3>
              <p className="text-gray-600">Important dates and deadlines for current tenders</p>
            </div>
            <div className="p-6 border rounded-lg">
              <CheckCircle className="w-12 h-12 text-cameroon-green mb-4" />
              <h3 className="text-xl font-semibold mb-2">Requirements</h3>
              <p className="text-gray-600">Qualification criteria and documentation requirements</p>
            </div>
          </div>

          <div className="mt-12 bg-gray-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-6">Current Opportunities</h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4">Infrastructure Projects</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Road maintenance and construction</li>
                  <li>Water supply systems</li>
                  <li>Public building construction</li>
                  <li>Environmental projects</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4">Supply Contracts</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Office equipment and supplies</li>
                  <li>Construction materials</li>
                  <li>IT equipment and services</li>
                  <li>Agricultural equipment</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4">Service Contracts</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Professional services</li>
                  <li>Technical services</li>
                  <li>Environmental services</li>
                  <li>Training and development</li>
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