import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mountain, TreePine, Landmark, Camera } from "lucide-react";

export default function Tourism() {
  const naturalAttractions = [
    {
      title: "Mount Oku",
      description: "Second highest peak in West Africa, standing at 3011M above sea level",
      icon: <Mountain className="h-6 w-6" />,
    },
    {
      title: "Lake Oku",
      description: "Largest lake in Cameroon, home to unique species",
      icon: <TreePine className="h-6 w-6" />,
    },
    {
      title: "Kilum Forest Reserve",
      description: "Natural forest with endemic species found nowhere else on Earth",
      icon: <TreePine className="h-6 w-6" />,
    },
    {
      title: "Waterfalls",
      description: "Multiple scenic waterfalls including Tolon, Kenshing, Enfwe, and Mbancham",
      icon: <TreePine className="h-6 w-6" />,
    },
  ];

  const culturalSites = [
    {
      title: "Oku Fon's Palace",
      description: "Traditional seat of power and cultural heritage",
      icon: <Landmark className="h-6 w-6" />,
    },
    {
      title: "Cultural Center",
      description: "Experience local arts, crafts, and cultural exhibitions",
      icon: <Camera className="h-6 w-6" />,
    },
    {
      title: "Historical Caves",
      description: "Ancient caves including Mbvekyeafon, Mbvekngailai, and more",
      icon: <Landmark className="h-6 w-6" />,
    },
    {
      title: "Lumutu Shrine",
      description: "Sacred site of cultural significance",
      icon: <Landmark className="h-6 w-6" />,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="pt-16">
        <div className="relative h-[500px] overflow-hidden">
          <img
            src="/lovable-uploads/695e7c5c-21ab-43b6-81eb-390c5abdaf9d.png"
            alt="Mount Oku Landscape"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <div className="text-center text-white max-w-4xl mx-auto px-4">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Discover Elak's Natural Wonders</h1>
              <p className="text-xl md:text-2xl">
                Experience the breathtaking landscapes, rich culture, and unique biodiversity
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Natural Attractions</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {naturalAttractions.map((attraction, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      {attraction.icon}
                      {attraction.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{attraction.description}</p>
                    <Button variant="outline" className="w-full">Learn More</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-8">Cultural Heritage Sites</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {culturalSites.map((site, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      {site.icon}
                      {site.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{site.description}</p>
                    <Button variant="outline" className="w-full">Visit</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section className="mt-16 bg-gray-50 rounded-lg p-8">
            <h2 className="text-3xl font-bold mb-6">Plan Your Visit</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Best Time to Visit</h3>
                <p className="text-gray-600">
                  The best time to visit Elak is during the dry season (November to February) 
                  when the weather is most favorable for outdoor activities and mountain climbing.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Getting Here</h3>
                <p className="text-gray-600">
                  Elak is located about 25km from Kumbo town in the North West Region. 
                  Regular transport services are available from major cities.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}