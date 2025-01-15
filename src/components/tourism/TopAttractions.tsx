import { MapPin, Mountain, Camera } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const TopAttractions = () => {
  const attractions = [
    {
      title: "Mount Oku",
      image: "/lovable-uploads/bd8fa546-d2a9-4e5d-ac93-d2a5eeda77f5.png",
      description: "The second highest peak in Central and West Africa, standing at 3011 metres above sea level.",
      icon: <Mountain className="h-5 w-5 text-cameroon-green" />
    },
    {
      title: "Lake Oku",
      image: "/lovable-uploads/c05968e5-a755-43a7-8606-f33c64979557.png",
      description: "A mesmerizing crater lake situated at 2,200 meters above sea level, home to unique amphibian species.",
      icon: <MapPin className="h-5 w-5 text-cameroon-green" />
    },
    {
      title: "Oku Palace Museum",
      image: "/lovable-uploads/070b0e2f-db6a-4329-b7ed-ae010c296073.png",
      description: "Experience the rich cultural heritage through traditional artifacts and historical relics.",
      icon: <Camera className="h-5 w-5 text-cameroon-green" />
    }
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Top Attractions</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {attractions.map((attraction, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <img 
                src={attraction.image}
                alt={attraction.title}
                className="w-full h-48 object-cover"
              />
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  {attraction.icon}
                  {attraction.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{attraction.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};