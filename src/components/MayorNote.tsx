import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "./ui/button";

export function MayorNote() {
  const { t } = useLanguage();

  return (
    <section className="py-8 md:py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12">Message from the Mayor</h2>
        
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="relative order-2 md:order-1">
            <img
              src="/lovable-uploads/39889b06-e650-415a-90d6-880f1e0886e2.png"
              alt="Mayor of Elak Council"
              className="w-full rounded-lg shadow-xl"
            />
          </div>
          
          <div className="space-y-4 md:space-y-6 order-1 md:order-2">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">Welcome to Elak Council</h3>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              As the Mayor of Elak Council, I am committed to serving our community and preserving our rich cultural heritage. 
              From Mount Oku to Lake Oku, our region's natural wonders are matched only by the warmth and resilience of our people. 
              Together, we're building a sustainable future while honoring our traditions.
            </p>
            <Button className="mt-4 md:mt-6 bg-green-600 hover:bg-green-700 text-sm md:text-base">
              Learn More About Our Vision
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}