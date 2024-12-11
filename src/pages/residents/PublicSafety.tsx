import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Shield, Phone, Bell, Users } from "lucide-react";

export default function PublicSafety() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="pt-16">
        <div className="bg-cameroon-green text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold mb-4">Public Safety</h1>
            <p className="text-xl">Keeping Elak Municipality Safe and Secure</p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="p-6 border rounded-lg">
              <Shield className="w-12 h-12 text-cameroon-green mb-4" />
              <h3 className="text-xl font-semibold mb-2">Emergency Services</h3>
              <p className="text-gray-600">24/7 emergency response services for the community</p>
            </div>
            <div className="p-6 border rounded-lg">
              <Phone className="w-12 h-12 text-cameroon-green mb-4" />
              <h3 className="text-xl font-semibold mb-2">Contact Numbers</h3>
              <p className="text-gray-600">Important contact numbers for emergencies</p>
            </div>
            <div className="p-6 border rounded-lg">
              <Bell className="w-12 h-12 text-cameroon-green mb-4" />
              <h3 className="text-xl font-semibold mb-2">Alert System</h3>
              <p className="text-gray-600">Community alert system for emergencies</p>
            </div>
            <div className="p-6 border rounded-lg">
              <Users className="w-12 h-12 text-cameroon-green mb-4" />
              <h3 className="text-xl font-semibold mb-2">Community Watch</h3>
              <p className="text-gray-600">Neighborhood watch programs and initiatives</p>
            </div>
          </div>

          <div className="mt-12">
            <h2 className="text-3xl font-bold mb-6">Safety Resources</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Emergency Contacts</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>Police: (+237) 675957333</li>
                  <li>Fire Service: (+237) 675730808</li>
                  <li>Medical Emergency: Contact Elak District Hospital</li>
                  <li>Council Emergency Line: (+237) 675957333</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Safety Tips</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>Keep emergency numbers readily available</li>
                  <li>Report suspicious activities</li>
                  <li>Participate in community watch programs</li>
                  <li>Follow council safety guidelines</li>
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