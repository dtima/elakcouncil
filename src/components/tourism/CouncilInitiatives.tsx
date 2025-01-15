import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building, Road, Shield } from "lucide-react";

export const CouncilInitiatives = () => {
  const initiatives = [
    {
      title: "Lake Oku Tourist Resort",
      description: "A haven of tranquility offering cozy lodges, local cuisine, and guided tours.",
      image: "/lovable-uploads/d6e83013-cc22-4d0d-8f88-8386d1bd64d8.png",
      icon: <Building className="h-5 w-5 text-cameroon-green" />
    },
    {
      title: "Infrastructure Development",
      description: "Enhanced road networks and facilities for seamless tourist experiences.",
      image: "/lovable-uploads/08d8184d-8bc3-4b00-84e6-5ec37bd7c60a.png",
      icon: <Road className="h-5 w-5 text-cameroon-green" />
    },
    {
      title: "Conservation Efforts",
      description: "Protecting Mount Oku's biodiversity and cultural heritage for future generations.",
      image: "/lovable-uploads/9b7b674a-6559-4c75-8084-26adfc26c1e1.png",
      icon: <Shield className="h-5 w-5 text-cameroon-green" />
    }
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Council Initiatives</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {initiatives.map((initiative, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <img 
                src={initiative.image}
                alt={initiative.title}
                className="w-full h-48 object-cover"
              />
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  {initiative.icon}
                  {initiative.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{initiative.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};