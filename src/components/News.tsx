import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowRight, Newspaper } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

export function News() {
  const { t } = useLanguage();

  const newsItems = [
    {
      id: 1,
      title: "DTIMA Launch in Elak Council",
      description: "Elak Council joins other participating councils to start its digital transformation journey, marking a new era of modernized services.",
      date: "2024-03-14",
      image: "/lovable-uploads/8abd09c4-579f-414b-86ea-c30ba8354f63.png"
    },
    {
      id: 2,
      title: "Mount Oku Conservation Initiative",
      description: "New measures implemented to protect Mount Oku, the second highest peak in West Africa, ensuring sustainable tourism and environmental preservation.",
      date: "2024-03-10",
      image: "/lovable-uploads/8aba75f5-225e-4240-ad3a-5a416bb7aae6.png"
    },
    {
      id: 3,
      title: "Lake Oku Preservation Project",
      description: "Community-led initiative launches to preserve Lake Oku's unique ecosystem and promote sustainable tourism practices.",
      date: "2024-03-08",
      image: "/lovable-uploads/92a627da-f60c-42a8-98a6-8fcef13ea3c7.png"
    }
  ];

  return (
    <section className="py-8 md:py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6 md:mb-8">
          <h2 className="text-2xl md:text-3xl font-bold">Latest News</h2>
          <Button variant="outline" className="gap-2 text-sm md:text-base">
            Visit the Newsroom <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {newsItems.map((item) => (
            <Card key={item.id} className="hover:shadow-lg transition-shadow">
              <CardHeader className="p-0">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-40 md:h-48 object-cover rounded-t-lg"
                />
              </CardHeader>
              <CardContent className="p-4 md:p-6">
                <CardTitle className="text-lg md:text-xl mb-2">{item.title}</CardTitle>
                <CardDescription className="text-sm md:text-base">{item.description}</CardDescription>
                <p className="text-xs md:text-sm text-gray-500 mt-3 md:mt-4">
                  {new Date(item.date).toLocaleDateString()}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}