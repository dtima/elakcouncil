import { Card, CardContent } from "@/components/ui/card";

export const CulturalExperiences = () => {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Cultural Experiences</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="hover:shadow-lg transition-shadow">
            <img 
              src="/lovable-uploads/d87fc913-0ef1-4f5e-9246-800c9e68011e.png"
              alt="Ndong Cultural Festival"
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">Ndong Cultural Festival</h3>
              <p className="text-gray-600">
                Experience the vibrant cultural festival every December, showcasing traditional dances, music, and customs.
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
  );
};