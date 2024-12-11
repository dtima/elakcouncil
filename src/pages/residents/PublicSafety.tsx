import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Shield, Phone, AlertTriangle, Stethoscope } from "lucide-react";

export default function PublicSafety() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="pt-16">
        <div className="bg-cameroon-green text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold mb-6">Public Safety in Elak</h1>
            <p className="text-xl">
              Ensuring the safety and security of all Elak residents through proactive measures and
              emergency preparedness.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="p-6 border rounded-lg">
              <Shield className="w-12 h-12 text-cameroon-green mb-4" />
              <h3 className="text-xl font-semibold mb-2">Local Law Enforcement</h3>
              <p className="text-gray-600">Dedicated police services protecting our 36 villages</p>
            </div>
            <div className="p-6 border rounded-lg">
              <Phone className="w-12 h-12 text-cameroon-green mb-4" />
              <h3 className="text-xl font-semibold mb-2">Emergency Contacts</h3>
              <p className="text-gray-600">24/7 emergency response services for Elak municipality</p>
            </div>
            <div className="p-6 border rounded-lg">
              <AlertTriangle className="w-12 h-12 text-cameroon-green mb-4" />
              <h3 className="text-xl font-semibold mb-2">Emergency Preparedness</h3>
              <p className="text-gray-600">Community guidelines for emergency situations</p>
            </div>
            <div className="p-6 border rounded-lg">
              <Stethoscope className="w-12 h-12 text-cameroon-green mb-4" />
              <h3 className="text-xl font-semibold mb-2">Medical Services</h3>
              <p className="text-gray-600">Access to Elak District Hospital and health centers</p>
            </div>
          </div>

          <div className="mt-12 bg-gray-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-6">Healthcare Facilities</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="p-4 bg-white rounded shadow-sm">
                <h3 className="font-semibold">Elak District Hospital</h3>
                <ul className="mt-2 space-y-2 text-gray-600">
                  <li>Full medical services</li>
                  <li>Maternity section</li>
                  <li>Laboratory facilities</li>
                  <li>Pharmacy</li>
                  <li>Mortuary services</li>
                </ul>
              </div>
              <div className="p-4 bg-white rounded shadow-sm">
                <h3 className="font-semibold">Baptist Health Centre - Jikijem</h3>
                <ul className="mt-2 space-y-2 text-gray-600">
                  <li>Primary healthcare services</li>
                  <li>Preventive care</li>
                  <li>Community health programs</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-gray-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-6">Emergency Contact Numbers</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="p-4 bg-white rounded shadow-sm">
                <h3 className="font-semibold">Elak District Hospital</h3>
                <p className="text-xl text-cameroon-green">+237 675957333</p>
              </div>
              <div className="p-4 bg-white rounded shadow-sm">
                <h3 className="font-semibold">Council Emergency Line</h3>
                <p className="text-xl text-cameroon-green">+237 675730808</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}