import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mountain, Camera, TreePine, MapPin, Info, Hotel, Calendar } from "lucide-react";

export default function Tourism() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        {/* Hero Section */}
        <div className="relative h-[500px] overflow-hidden">
          <img
            src="/lovable-uploads/bd8fa546-d2a9-4e5d-ac93-d2a5eeda77f5.png"
            alt="Mount Oku Landscape"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <div className="text-center text-white max-w-4xl mx-auto px-4">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">ELAK MUNICIPALITY: A TOURISTIC DESTINATION</h1>
              <p className="text-xl md:text-2xl">
                Exploring The Hidden Jewels of Oku
              </p>
            </div>
          </div>
        </div>

        {/* Introduction */}
        <section className="max-w-7xl mx-auto px-4 py-12">
          <p className="text-lg text-gray-700 mb-8">
            Located on Mount Oku in the Bamenda western highland area and in the beautiful region of North West Cameroon, 
            Elak municipality is a hidden gem that offers a unique blend of natural beauty, cultural heritage, and adventure.
          </p>
        </section>

        {/* Top Attractions */}
        <section className="bg-gray-50 py-12">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">Top Attractions</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Mount Oku */}
              <Card className="hover:shadow-lg transition-shadow">
                <img 
                  src="/lovable-uploads/bd8fa546-d2a9-4e5d-ac93-d2a5eeda77f5.png"
                  alt="Mount Oku"
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Mountain className="h-5 w-5 text-cameroon-green" />
                    Mount Oku
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    The second highest peak in Central and West Africa, standing at 3011 metres above sea level.
                  </p>
                  <Button className="w-full">Explore</Button>
                </CardContent>
              </Card>

              {/* Lake Oku */}
              <Card className="hover:shadow-lg transition-shadow">
                <img 
                  src="/lovable-uploads/c05968e5-a755-43a7-8606-f33c64979557.png"
                  alt="Lake Oku"
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-cameroon-green" />
                    Lake Oku
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    A mesmerizing crater lake situated at 2,200 meters above sea level, home to unique amphibian species.
                  </p>
                  <Button className="w-full">Visit</Button>
                </CardContent>
              </Card>

              {/* Oku Palace Museum */}
              <Card className="hover:shadow-lg transition-shadow">
                <img 
                  src="/lovable-uploads/070b0e2f-db6a-4329-b7ed-ae010c296073.png"
                  alt="Oku Palace Museum"
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Info className="h-5 w-5 text-cameroon-green" />
                    Oku Palace Museum
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Experience the rich cultural heritage through traditional artifacts and historical relics.
                  </p>
                  <Button className="w-full">Discover</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Cultural Experiences */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">Cultural Experiences</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="hover:shadow-lg transition-shadow">
                <img 
                  src="/lovable-uploads/d87fc913-0ef1-4f5e-9246-800c9e68011e.png"
                  alt="Cultural Festival"
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">Oku Cultural Festival</h3>
                  <p className="text-gray-600">
                    Experience the vibrant Ndong Festival every December, showcasing traditional dances, music, and customs.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <img 
                  src="/lovable-uploads/5eac6625-472c-46ff-a6ac-da20934ee5c6.png"
                  alt="Oku White Honey"
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">Oku White Honey</h3>
                  <p className="text-gray-600">
                    Discover our world-renowned natural white honey, a certified Geographical Indication product.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Accommodations */}
        <section className="bg-gray-50 py-12">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">Where to Stay</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Hotel className="h-5 w-5 text-cameroon-green" />
                    Lake Oku Tourist Resort
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Cozy lodges with stunning views of Lake Oku, featuring local cuisine and guided tours.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Hotel className="h-5 w-5 text-cameroon-green" />
                    King David Hotel
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Modern accommodations with traditional charm, offering both local and international dining options.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Home className="h-5 w-5 text-cameroon-green" />
                    Local Homestays
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Experience authentic Oku culture by staying with local families.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Travel Tips */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">Travel Tips</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {travelTips.map((tip, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      {tip.icon}
                      {tip.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{tip.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

const travelTips = [
  {
    title: "Pack for the Weather",
    description: "Bring warm clothing and sturdy shoes for the cool climate and hiking activities.",
    icon: <Sun className="h-5 w-5 text-cameroon-green" />,
  },
  {
    title: "Respect Local Culture",
    description: "Dress modestly and ask permission before taking photographs of locals and events.",
    icon: <Users className="h-5 w-5 text-cameroon-green" />,
  },
  {
    title: "Stay Hydrated",
    description: "Keep a water bottle handy due to the high altitude location.",
    icon: <Droplet className="h-5 w-5 text-cameroon-green" />,
  },
];