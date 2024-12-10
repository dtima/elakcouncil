import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowRight, TreePine, Mountain, Building } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

export function Programs() {
  const { t } = useLanguage();

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Key Initiatives</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TreePine className="h-5 w-5 text-green-600" />
                Kilum Forest Conservation
              </CardTitle>
              <CardDescription>
                Protecting our rich forest reserve and its unique biodiversity through community-led initiatives.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="mt-4">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mountain className="h-5 w-5 text-green-600" />
                Mount Oku Tourism
              </CardTitle>
              <CardDescription>
                Developing sustainable tourism around Mount Oku, the second highest peak in West Africa.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="mt-4">
                Explore <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Building className="h-5 w-5 text-green-600" />
                Digital Transformation
              </CardTitle>
              <CardDescription>
                Modernizing council services through digital solutions for better service delivery.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="mt-4">
                View Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}