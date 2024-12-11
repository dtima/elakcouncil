import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, FileText, Users, Info } from "lucide-react";

export default function EventsPermit() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="container mx-auto px-4 py-8 pt-16">
        <div className="bg-cameroon-green text-white py-16 -mx-4">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4">Event Permit Application</h1>
            <p className="text-xl">Apply for permits to host events in Elak Municipality</p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  Cultural Events
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Permits for traditional ceremonies and cultural celebrations at the Oku Fon's palace and cultural center</p>
                <Button>Apply Now</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  Community Gatherings
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Permits for community meetings and public assemblies in Elak's 36 villages</p>
                <Button variant="outline">Learn More</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  Commercial Events
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Permits for markets, trade fairs, and business exhibitions</p>
                <Button variant="outline">View Guidelines</Button>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 bg-gray-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-6">Application Requirements</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4">Required Documents</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Valid identification</li>
                  <li>Event proposal</li>
                  <li>Location details</li>
                  <li>Safety plan</li>
                  <li>Insurance documentation</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4">Processing Times</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Cultural events: 5-7 working days</li>
                  <li>Community gatherings: 3-5 working days</li>
                  <li>Commercial events: 10-14 working days</li>
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