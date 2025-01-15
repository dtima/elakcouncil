import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/tourism/HeroSection";
import { TopAttractions } from "@/components/tourism/TopAttractions";
import { CulturalExperiences } from "@/components/tourism/CulturalExperiences";
import { Sun, MapPin, Mountain, Camera } from "lucide-react";

export default function Tourism() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <HeroSection />
        <div className="max-w-7xl mx-auto px-4 py-12">
          <p className="text-lg text-gray-700 mb-8">
            Located on Mount Oku in the Bamenda western highland area and in the beautiful region of North West Cameroon, 
            Elak municipality is a hidden gem that offers a unique blend of natural beauty, cultural heritage, and adventure.
          </p>
        </div>
        <TopAttractions />
        <CulturalExperiences />
      </main>
    </div>
  );
}