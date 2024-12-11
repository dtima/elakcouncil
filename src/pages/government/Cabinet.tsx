import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Users, Building2, Phone, Mail } from "lucide-react";

export default function Cabinet() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="pt-16">
        <div className="bg-cameroon-green text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold mb-4">The Mayor's Cabinet</h1>
            <p className="text-xl">Meet the team working to serve Elak Municipality</p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="p-6 border rounded-lg">
              <Users className="w-12 h-12 text-cameroon-green mb-4" />
              <h3 className="text-xl font-semibold mb-2">Executive Office</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Mayor</li>
                <li>First Deputy Mayor</li>
                <li>Second Deputy Mayor</li>
                <li>Secretary General</li>
              </ul>
            </div>

            <div className="p-6 border rounded-lg">
              <Building2 className="w-12 h-12 text-cameroon-green mb-4" />
              <h3 className="text-xl font-semibold mb-2">Municipal Services</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Administrative Services</li>
                <li>Technical Services</li>
                <li>Financial Services</li>
                <li>Social Affairs</li>
              </ul>
            </div>

            <div className="p-6 border rounded-lg">
              <Mail className="w-12 h-12 text-cameroon-green mb-4" />
              <h3 className="text-xl font-semibold mb-2">Contact Information</h3>
              <div className="space-y-2 text-gray-600">
                <p className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  (+237) 675957333
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  contact@elakcouncil.cm
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-gray-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-6">Council Departments</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="font-semibold mb-4">Administrative Services</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>General Administration</li>
                  <li>Human Resources</li>
                  <li>Documentation and Archives</li>
                  <li>Civil Status Registry</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Technical Services</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Urban Planning</li>
                  <li>Infrastructure Development</li>
                  <li>Environmental Protection</li>
                  <li>Public Works</li>
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