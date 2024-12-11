import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { TreePine, Mountain, Camera, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ParksRecreation() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="pt-16">
        <div className="relative h-[400px] overflow-hidden">
          <img
            src="/lovable-uploads/34e15787-432a-4055-b71f-2acb05e270ff.png"
            alt="Kilum Forest Reserve"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-4xl font-bold mb-4">Kilum Forest Reserve</h1>
              <p className="text-xl">Discover Elak's Natural Heritage</p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="p-6 border rounded-lg">
              <TreePine className="w-12 h-12 text-cameroon-green mb-4" />
              <h3 className="text-xl font-semibold mb-2">Forest Management</h3>
              <p className="text-gray-600 mb-4">Six Forest Management Institutions: Emfveh mii, Upper Shinga, Nchiiy, Mbai, Ijim, Kejem-mawes</p>
              <Button variant="outline" className="w-full">Learn More</Button>
            </div>

            <div className="p-6 border rounded-lg">
              <Mountain className="w-12 h-12 text-cameroon-green mb-4" />
              <h3 className="text-xl font-semibold mb-2">Natural Resources</h3>
              <p className="text-gray-600 mb-4">Rich biodiversity including Mahogany, Iroko, white and black afara, pygeum and various white wood species</p>
              <Button variant="outline" className="w-full">Explore</Button>
            </div>

            <div className="p-6 border rounded-lg">
              <Camera className="w-12 h-12 text-cameroon-green mb-4" />
              <h3 className="text-xl font-semibold mb-2">Activities</h3>
              <p className="text-gray-600 mb-4">Nature walks, bird watching, and educational tours available</p>
              <Button variant="outline" className="w-full">Book Activity</Button>
            </div>
          </div>

          <div className="mt-12">
            <h2 className="text-3xl font-bold mb-6">Conservation Areas</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Protected Species</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>Endemic tree species</li>
                  <li>Medicinal plants</li>
                  <li>Native wildlife</li>
                  <li>Rare bird species</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Community Initiatives</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>Forest protection programs</li>
                  <li>Sustainable harvesting practices</li>
                  <li>Environmental education</li>
                  <li>Community-based tourism</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-gray-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-6">Visit Information</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <h3 className="font-semibold mb-2">Location</h3>
                <p className="flex items-center gap-2 text-gray-600">
                  <MapPin className="h-4 w-4" />
                  Kilum-Ijim Mountain Forest, Elak
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Contact</h3>
                <p className="text-gray-600">For guided tours and information, please contact the Forest Management Committee</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}