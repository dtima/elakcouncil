import { Card, CardContent } from "@/components/ui/card";
import { Mountain, Bird, Music, Camera, Leaf } from "lucide-react";

export const TouristActivities = () => {
  const activities = [
    {
      title: "Hiking and Trekking",
      description: "Explore Mount Oku and surrounding trails",
      icon: <Mountain className="h-6 w-6 text-cameroon-green" />
    },
    {
      title: "Bird and Wildlife Watching",
      description: "Spot rare species like the Bannerman's turaco",
      icon: <Bird className="h-6 w-6 text-cameroon-green" />
    },
    {
      title: "Cultural Immersion",
      description: "Experience traditional dances and festivals",
      icon: <Music className="h-6 w-6 text-cameroon-green" />
    },
    {
      title: "Photography",
      description: "Capture stunning landscapes and cultural moments",
      icon: <Camera className="h-6 w-6 text-cameroon-green" />
    },
    {
      title: "Nature Exploration",
      description: "Discover unique flora and fauna",
      icon: <Leaf className="h-6 w-6 text-cameroon-green" />
    }
  ];

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Tourist Activities</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activities.map((activity, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  {activity.icon}
                  <h3 className="text-xl font-bold">{activity.title}</h3>
                </div>
                <p className="text-gray-600">{activity.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};