import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <div className="relative h-[500px] overflow-hidden">
      <img
        src="/lovable-uploads/bd8fa546-d2a9-4e5d-ac93-d2a5eeda77f5.png"
        alt="Mount Oku Landscape"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
        <div className="text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">ELAK MUNICIPALITY: A TOURISTIC DESTINATION</h1>
          <p className="text-xl md:text-2xl mb-6">Exploring The Hidden Jewels of Oku</p>
          <Button 
            variant="outline" 
            className="text-white border-white hover:bg-white hover:text-black"
            onClick={() => document.getElementById('attractions')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Discover More
          </Button>
        </div>
      </div>
    </div>
  );
};